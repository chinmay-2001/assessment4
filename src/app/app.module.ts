import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { TodoListComponent } from './container/todo-list/todo-list.component';
import { fetchtodo } from './store/reducers/reducer';
import { TodoListComponentComponent } from './component/todo-list-component/todo-list-component.component';
import { FormsModule } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import { ApolloClientModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListComponentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ApolloClientModule,
    HttpClientModule,
    StoreModule.forRoot({ todos: fetchtodo })
  ],
  providers: [Apollo],
  bootstrap: [AppComponent]
})
export class AppModule { }
