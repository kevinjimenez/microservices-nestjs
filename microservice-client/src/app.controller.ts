import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    @Inject('HELLO_SERVICE') private client: ClientProxy
    ) {}

  @Get()
  getHello(): string {
    this.client.emit('message_printed', 'Hello world');
    return 'Hello World printed'
  }
}
