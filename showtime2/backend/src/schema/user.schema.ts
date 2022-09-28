import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"

@Schema()
export class User {
   @Prop()
   firstname: string;

   @Prop()
   name: string;

   @Prop()
   email: string;

   @Prop()
   password: string;

   @Prop()
   address: string;

   @Prop()
   favorites: string[];

   @Prop()
   admin: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);