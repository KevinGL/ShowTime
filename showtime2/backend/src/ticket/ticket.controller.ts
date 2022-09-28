import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { CreateTicketDto } from 'src/dto/create-ticket.dto';
import { UpdateTicketDto } from 'src/dto/update-ticket.dto';
import { TicketService } from '../ticket/ticket.service';

@Controller('/tickets')
export class TicketController
{
   constructor(private readonly ticketService: TicketService) { }

    @Get()
    async getTickets(@Res() response)
    {
        try
        {
            const ticketData = await this.ticketService.getAllTickets();
            return response.status(HttpStatus.OK).json({
                message: 'All tickets data found successfully', ticketData
            });
        }
        catch(err)
        {
            return response.status(err.status).json(err.response);
        }
    }

    @Get('/:id')
    async getOneTicket(@Res() response, @Param('id') ticketId: string)
    {
        try
        {
            const ticketData = await this.ticketService.getTicket(ticketId);
            return response.status(HttpStatus.OK).json({
                message: 'Ticket found successfully', ticketData
            });
        }
        catch(err)
        {
            return response.status(err.status).json(err.response);
        }
    }

    @Post("/buy")
    async buy(@Res() response, @Body() request)
    {
        //console.log(createUserDto);
        const result = await this.ticketService.buy(request);
        
        if(result == "UserNotExist")
        {
            return response.status(404).json({
                message: 'This user doesn\'t exist'
            });
        }

        else
        if(result == "ConcertNotExist")
        {
            return response.status(404).json({
                message: 'This concert doesn\'t exist'
            });
        }

        else
        if(result == "TicketNotExist")
        {
            return response.status(404).json({
                message: 'This ticket doesn\'t exist'
            });
        }

        else
        if(result == "UserNotConnected")
        {
            return response.status(403).json({
                message: 'User not connected'
            });
        }

        else
        if(result == "TicketNotAvailable")
        {
            return response.status(403).json({
                message: 'This ticket is not available'
            });
        }

        else
        {
            return response.status(HttpStatus.OK).json({
                message: 'Ticket bought', result
            });
        }
    }
}