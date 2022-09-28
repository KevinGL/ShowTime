import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"

@Schema()
export class Ticket
{
   @Prop()
   userId: string;

   @Prop()
   concertId: string;

   @Prop()
   buyDate: Date;
}

export const TicketSchema = SchemaFactory.createForClass(Ticket);