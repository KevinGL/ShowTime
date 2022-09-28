import { Injectable, NotFoundException, Param } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTicketDto } from 'src/dto/create-ticket.dto';
import { ITicket } from 'src/interface/ticket.interface';
import { IUser } from 'src/interface/user.interface';
import { IConcert } from 'src/interface/concert.interface';
import { Model } from "mongoose";
import { UpdateTicketDto } from 'src/dto/update-ticket.dto';

@Injectable()
export class TicketService
{
    constructor(@InjectModel('Ticket') private ticketModel:Model<ITicket>, @InjectModel('User') private userModel:Model<IUser>, @InjectModel('Concert') private concertModel:Model<IConcert>) { }

    async getAllTickets(): Promise<ITicket[]>
    {
        const ticketData = await this.ticketModel.find();

        if(!ticketData || ticketData.length == 0) {
            throw new NotFoundException('Tickets data not found!');
        }
        
        return ticketData;
    }

    async getTicket(ticketId: string): Promise<ITicket>
    {
        const ticketData = await this.ticketModel.findById(ticketId);

        //console.log(ticketData);

        if(!ticketData)
        {
            throw new NotFoundException('Ticket data not found!');
        }
        
        return ticketData;
    }

    async buy(request)
    {
        //console.log(createUserDto.email);
        const existingUser = await this.userModel.findById(request.user_id);
        if(!existingUser)
        {
            return "UserNotExist";
        }

        const existingTicket = await this.ticketModel.findById(request.ticket_id);

        if(!existingTicket)
        {
            return "TicketNotExist";
        }

        const existingConcert = await this.concertModel.findById(existingTicket.concertId);
        if(!existingConcert)
        {
            return "ConcertNotExist";
        }

        //console.log(existingUser);
        
        if(!request.user_connected)
        {
            return "UserNotConnected";
        }

        const updatedTicket = await this.ticketModel.findById(request.ticket_id);

        if(updatedTicket.userId != "0")
        {
            return "TicketNotAvailable";
        }

        updatedTicket.userId = request.user_id;

        updatedTicket.save();

        existingUser.favorites.push(existingConcert.id);

        existingUser.save();

        return updatedTicket;
    }
}