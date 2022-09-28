import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"

@Schema()
export class Concert
{
   @Prop()
   groupId: string;
   
   @Prop()
   name: string;

   @Prop()
   description: string;

   @Prop()
   startDate: Date;

   @Prop()
   endDate: Date;

   @Prop()
   localisation: string;

   @Prop()
   price: number;
}

export const ConcertSchema = SchemaFactory.createForClass(Concert);