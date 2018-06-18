import { Component, OnInit } from '@angular/core';
import { TodoService} from '../../services/todo.service';
import {Observable} from 'rxjs/Observable';
import { TodoItem } from '../../models/todo-item.model';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private todoItems : TodoItem[];
  private itemCollection : AngularFirestoreCollection<TodoItem>;
  private item : TodoItem;
  private isOpened : boolean;

  constructor(private todoService : TodoService) {
    this.isOpened = false;
   }

  ngOnInit() {
    this.itemCollection = this.todoService.getItems();
    this.itemCollection.valueChanges().subscribe(r => this.todoItems = r);
  }

  addItem() {

  }

  toggleSidebar() {
    this.isOpened = !this.isOpened;
  }

  // const id = this.afs.createId();
  //   const item: Item = { id, name };
  //   this.itemsCollection.doc(id).set(item);

}
