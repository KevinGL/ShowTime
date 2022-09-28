import { Document } from 'mongoose';

export interface ITicket extends Document
{
    userId: string;
    readonly concertId: string;
    readonly buyDate: Date;
}