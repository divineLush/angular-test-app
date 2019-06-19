import { Input, Output, EventEmitter, Component, OnInit } from '@angular/core';

import { Book, PurchasedBook } from '../book';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() data: Book;
  @Output() onItemAdded: EventEmitter<PurchasedBook>;
  more: boolean;

  constructor() {
    this.more = false;
    this.onItemAdded = new EventEmitter();
  }

  ngOnInit() {
  }

  toggleInfo(): void {
    this.more = !this.more;
  }

  addItem(p: any): void {
    this.onItemAdded.emit({book: this.data, quantity: p.quantity});
  }
}
