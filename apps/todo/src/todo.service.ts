import { Todo, Todos } from '@app/common/proto/todo';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
  protected todos: Todo[] = [{
    id: 1,
    name: 'Todo 1',
    type: 'todo',
  }, {
    id: 2,
    name: 'Todo 2',
    type: 'todo',
  }];

  findOne(id: number): Todo {
    const item = this.todos.find(todo => todo.id === id);
    if (!item) {
      throw new Error(`Todo with id ${id} not found`);
    }

    return item;
  }

  findAll(): Todos {
    return {
      todos: this.todos,
    };
  }
}
