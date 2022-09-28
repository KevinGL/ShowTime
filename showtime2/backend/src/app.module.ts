import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schema/user.schema';
import { ConcertSchema } from './schema/concert.schema';
import { TicketSchema } from './schema/ticket.schema';
import { UserService } from './service/user.service';
import { UserController } from './user/user.controller';
import { ConcertService } from './concert/concert.service';
import { ConcertController } from './concert/concert.controller';
import { TicketService } from './ticket/ticket.service';
import { TicketController } from './ticket/ticket.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://jessica:pinta@cluster0.hekv9pe.mongodb.net/myshowtime?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{ name: "User", schema: UserSchema},
                               { name: "Concert", schema: ConcertSchema},
                               { name: "Ticket", schema: TicketSchema}]),
  ],
  controllers: [AppController, UserController, ConcertController, TicketController],
  providers: [AppService, UserService, ConcertService, TicketService],
})

export class AppModule {}
