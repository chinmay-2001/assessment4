import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map, Observable } from 'rxjs';
import { todo } from '../store/models/Todo';
import { get_todo } from '../graphql/queres'
import { create_Todo } from '../graphql/mutation';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  constructor(private apollo: Apollo) { }

  fetchTodo(): Observable<todo[]> {
    return this.apollo.query({ query: get_todo }).pipe(map((todo: any) => { console.log("inside fetch query"); console.log(todo); return todo.data.todos }))
  }

  createTodo(reqbody: todo): Observable<todo> {
    return this.apollo.mutate({
      mutation: create_Todo,
      refetchQueries: [{ query: get_todo }],
      variables: {
        input: reqbody
      }
    })
      .pipe(map((result: any) => result))
  }

}
