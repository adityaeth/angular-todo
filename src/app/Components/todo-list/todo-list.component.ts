import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
  inputTodo: string = "";
  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'milk',
        completed: true
      },
      {
        content: 'bread',
        completed: false
      }
    ]

  }

  toggleDone(id) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;
      return v;
    })
  }

  deleteTodo(id) {
    this.todos.splice(id,1);
  }
  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false
    });
    this.inputTodo = '';
  }
} 