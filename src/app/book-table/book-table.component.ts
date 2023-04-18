import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.css']
})
export class BookTableComponent {
  bookings: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.bookings = this.db.list('bookings').valueChanges();
  }
}
