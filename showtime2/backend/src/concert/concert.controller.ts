import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { CreateConcertDto } from '../dto/create-concert.dto';
import { UpdateConcertDto } from '../dto/update-concert.dto';
import { ConcertService } from './concert.service';

@Controller('/concerts')
export class ConcertController
{
   constructor(private readonly concertService: ConcertService) { }
    @Post()
    async createConcert(@Res() response, @Body() request)
    {
        //console.log(request);
        const newConcert = await this.concertService.createConcert(request);
        /*return response.status(HttpStatus.CREATED).json({
        message: 'Concert has been created successfully',
        newConcert});*/
        
        if(newConcert == "UserNotAdmin")
        {
            return response.status(403).json({
                message: 'Not admin !'
            });
        }

        else
        if(newConcert == "UserNotConnected")
        {
            return response.status(403).json({
                message: 'Not connected !'
            });
        }

        else
        {
            return response.status(HttpStatus.OK).json({
                message: 'Concert added !', newConcert
            });
        }
    }

    @Put('/:id')
    async updateConcert(@Res() response,@Param('id') concertId: string,
    @Body() updateConcertDto: UpdateConcertDto)
    {
        try {
            const existingConcert = await this.concertService.updateConcert(concertId, updateConcertDto);
            return response.status(HttpStatus.OK).json({
            message: 'Concert has been successfully updated',
            existingConcert,});
        }
        catch(err)
        {
            return response.status(err.status).json(err.response);
        }
    }

    @Get()
    async getConcerts(@Res() response)
    {
        //console.log("OK");
        try
        {
            const concertData = await this.concertService.getAllConcerts();
            return response.status(HttpStatus.OK).json({
            message: 'All concerts data found successfully', concertData});
        }
        catch(err)
        {
            return response.status(err.status).json(err.response);
        }
    }

    @Get('/:id')
    async getConcert(@Res() response, @Param('id') concertId: string)
    {
        try
        {
            const existingConcert = await
            this.concertService.getConcert(concertId);
                return response.status(HttpStatus.OK).json({
                message: 'Concert found successfully',existingConcert,});
        }
        catch(err)
        {
            return response.status(err.status).json(err.response);
        }
    }

    @Delete('/:id')
    async deleteConcert(@Res() response, @Param('id') concertId: string)
    {
        try
        {
            const deletedConcert = await this.concertService.deleteConcert(concertId);
            
            return response.status(HttpStatus.OK).json({
            message: 'Concert deleted successfully',
            deletedConcert});
        }
        catch (err)
        {
            return response.status(err.status).json(err.response);
        }
    }
}