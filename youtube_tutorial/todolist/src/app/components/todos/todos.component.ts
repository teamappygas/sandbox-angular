import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[]; // An array of todos
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  deleteTodo(todo: Todo): void {
    // UI
    this.todos = this.todos.filter(t => t.id !== todo.id);
    // Server
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo: Todo): void {
    this.todoService.addTodo(todo).subscribe(todoInstance => {
      this.todos.push(todoInstance);
    });
  }

}
