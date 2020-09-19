import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';


import { TodoService } from '../../services/todo.service';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  constructor(private todoService: TodoService) { }
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  ngOnInit(): void {
  }

  // Set Dynamic Classes
  setClasses(): any {
    const classes = {
      todo: true,
      'is-complete': this.todo.completed
    };
    return classes;
  }

  onToggle(todo: Todo): void {
    todo.completed = !todo.completed;
    this.todoService.toggleCompleted(todo).subscribe(todoObject =>
      console.log(todoObject));
  }

  onDelete(todo: Todo): void {
    this.deleteTodo.emit(todo);
  }

}
