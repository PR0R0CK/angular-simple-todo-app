import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from "../../services/todo.service";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => { 
      this.todos = todos;
    });
  }

  deleteTodo(todo: Todo) { 

    //! deleting from UI - shows all todo task which id is different 
    // !then todo id which was deleted
    this.todos = this.todos.filter(t => t.id !== todo.id);
    // deleting from server
    this.todoService.deleteTodo(todo).subscribe();
    
  }

}
