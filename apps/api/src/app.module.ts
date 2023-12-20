import { Module } from '@nestjs/common';
import { AppController } from './infrastructure/controller/app.controller';
// import { CreateParkSlot } from './domain/services/CreateParkSlot.service';
import { JwtModule } from '@nestjs/jwt';


import { MongooseModule } from '@nestjs/mongoose';
import { ParkModule } from './infrastructure/repository/park.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/coucou'),
    ParkModule,
    JwtModule.register({
      secret: '!park59zen800coucou*', // Change this to a secure secret key
      signOptions: { expiresIn: '1h' }, // Set the expiration time for the token
    })
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
