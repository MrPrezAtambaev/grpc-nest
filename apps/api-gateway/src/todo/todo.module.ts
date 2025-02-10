import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TODO_PACKAGE_NAME, TODO_SERVICE_NAME } from '@app/common/proto/todo';
import { join } from 'path';
import { TODO_SERVICE_CLIENT } from './todo.constants';
import { TodoController } from './todo.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: TODO_SERVICE_CLIENT,
        transport: Transport.GRPC,
        options: {
          package: TODO_PACKAGE_NAME,
          protoPath: join(process.cwd(), 'proto/todo.proto'),
        },
      },
    ]),
  ],
  providers: [TodoService],
  controllers: [TodoController]
})
export class TodoModule { }
