import { Input, Output, EventEmitter, Component, OnInit } from '@angular/core';

import { Book, PurchasedBook } from '../book';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { WindowComponent } from './window/window.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() data: Book;
  @Output() onItemAdded: EventEmitter<PurchasedBook>;

  constructor(public dialog: MatDialog) {
    this.onItemAdded = new EventEmitter();
  }

  ngOnInit() {
  }

  toggleInfo(): void {
    this.dialog.open(WindowComponent, { data: this.data });
  }

  addItem(p: any): void {
    this.onItemAdded.emit({book: this.data, quantity: p.quantity});
  }
}
