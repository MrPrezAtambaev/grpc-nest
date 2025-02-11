import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Observable } from 'rxjs';
import { Todo, Todos } from '@app/common/proto/todo';

@Controller('todo')
export class TodoController {
  constructor(
    private readonly todoService: TodoService,
  ) { }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Observable<Todo> {
    return this.todoService.findOne(id);
  }

  @Get()
  findAll(): Observable<Todos> {
    return this.todoService.findAll();
  }
}
