import { IsNotEmpty, IsNumber, IsString, IsDate } from "class-validator";

export class CreateTicketDto
{
    @IsString()
    @IsNotEmpty()
    readonly userId: string;

    @IsString()
    @IsNotEmpty()
    readonly concertId: string;

    @IsDate()
    @IsNotEmpty()
    readonly buyDate: Date;
}