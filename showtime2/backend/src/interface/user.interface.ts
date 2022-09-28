import { Document } from 'mongoose';

export interface IUser extends Document{

    readonly firstname: string;
    readonly name: string;
    readonly email: string;
    readonly password: string;
    readonly address: string;
    readonly favorites: string[];
    admin: boolean;
}