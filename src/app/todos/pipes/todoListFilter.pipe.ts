import { Pipe, PipeTransform } from '@angular/core';
import { ValidFilters } from 'src/app/filter/models/filter.model';
import { Todo } from 'src/app/todos/models/todo.model';

@Pipe({
  name: 'todoListFilter'
})

export class TodoListFilterPipe implements PipeTransform {

  transform(todoList: Todo[], currentFilter: ValidFilters): Todo[] {

    switch (currentFilter) {

      case 'Completed':
        return todoList.filter(todo => todo.completado);

      case 'Pending':
        return todoList.filter(todo => !todo.completado);

      default:
        return todoList;
        
    }

  }

}
