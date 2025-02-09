import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Micro, MicroById } from 'proto/build/micro.interface';

@Controller()
export class Micr1Service {
  @GrpcMethod('MicroService', 'FindOne')
  findOne(data: MicroById): Micro {
    const items = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
    ];
    return items.find(({ id }) => id === data.id) as Micro;
  }
}
