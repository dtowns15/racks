import { Injectable } from '@angular/core';
import {TodoItem} from '../models/todo-item.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { tap, catchError, map} from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import {Observable} from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';
import {of} from 'rxjs/observable/of';
import { RequestOptions} from '@angular/http';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable()
export class TodoService {
  private _todoList : TodoItem[];

  constructor(private http : HttpClient, private fireDb : AngularFirestore) {  }

   getItems() : AngularFirestoreCollection<TodoItem> {
     return this.fireDb.collection('racks').doc('reading').collection<TodoItem>('items');
   }

   getData() : Observable<any[]> {
     return this.fireDb.collection('/racks/reading').valueChanges()
   }

   createId() : any {
     return this.fireDb.createId();
   }

   // createToDoFromJson(r) : TodoItem {
   //   let item = new TodoItem(r["name"], r["description"], r["dueDate"],
   //   r["priority"], r["id"]);
   //   console.log(item);
   //   return item;
   // }

   createJsonFromItem(todo : TodoItem) : object {
     return {
       "name" : todo.name,
       "dueDate" : todo.dueDate,
       "priority" : todo.priority,
       "description" : todo.description,
       "id" :  todo.id
     }

   }

   // createNewItem(todo : TodoItem) : Observable<boolean> {
   //   let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
   //   return this.http.post('http://localhost:3000/to-do', this.createJsonFromItem(todo)).pipe(
   //        tap(r => this.createToDoFromJson(r["data"])), map(r => of(true)),
   //        catchError(r => this.handleError(r))
   //      );
   //  }

    // handleError(e : ErrorObservable) : ErrorObservable {
    //   console.log("An Error Happened")
    //   return e;
    // }


}
