import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"

@Schema()
export class UserAdmin
{
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
}

export const UserAdminSchema = SchemaFactory.createForClass(UserAdmin);