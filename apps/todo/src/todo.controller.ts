import { Controller } from '@nestjs/common';
import { TodoService } from './todo.service';
import { FindAllHeroConditions, FindOneHeroConditions, Todo, Todos, TodoServiceController, TodoServiceControllerMethods } from '@app/common/proto/todo'
import { Observable } from 'rxjs';

@Controller()
@TodoServiceControllerMethods()
export class TodoController implements TodoServiceController {
  constructor(private readonly todoService: TodoService) { }

  findAll(request: FindAllHeroConditions): Promise<Todos> | Observable<Todos> | Todos {
    return this.todoService.findAll();
  }

  findOne(request: FindOneHeroConditions): Promise<Todo> | Observable<Todo> | Todo {
    return this.todoService.findOne(request.id);
  }
}
