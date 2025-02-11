import { Todo, TODO_SERVICE_NAME, Todos, TodoServiceClient } from '@app/common/proto/todo';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { TODO_SERVICE_CLIENT } from './todo.constants';
import { Observable } from 'rxjs';

@Injectable()
export class TodoService implements OnModuleInit {
  private todoServiceClient: TodoServiceClient;
  constructor(
    @Inject(TODO_SERVICE_CLIENT) private client: ClientGrpc,
  ) { }

  onModuleInit() {
    this.todoServiceClient = this.client.getService<TodoServiceClient>(TODO_SERVICE_NAME);
  }

  findOne(id: number): Observable<Todo> {
    return this.todoServiceClient.findOne({ id });
  }

  findAll(): Observable<Todos> {
    return this.todoServiceClient.findAll({});
  }
}
