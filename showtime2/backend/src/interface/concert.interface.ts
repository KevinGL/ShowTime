import { Document } from 'mongoose';

export interface IConcert extends Document
{
    readonly groupId: string;
    readonly name: string;
    readonly description: string;
    readonly startDate: Date;
    readonly endDate: Date;
    readonly localisation: string;
    readonly price: number;
}