import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateConcertDto {
    @IsString()
    @IsNotEmpty()
    readonly groupId: string;

    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @IsNotEmpty()
    readonly description: string;

    @IsNotEmpty()
    readonly startDate: Date;

    @IsNotEmpty()
    readonly endDate: Date;

    @IsString()
    @IsNotEmpty()
    readonly localisation: string;

    @IsNotEmpty()
    readonly price: number;
}