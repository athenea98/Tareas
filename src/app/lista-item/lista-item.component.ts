import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'lista-item',
  templateUrl: './lista-item.component.html',
  styleUrls: ['./lista-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo

  @Output() todoClicked: EventEmitter<void> = new EventEmitter()
  @Output() editClicked: EventEmitter<void> = new EventEmitter()
  @Output() deleteClicked: EventEmitter<void> = new EventEmitter()
  
  constructor() { }

  ngOnInit(): void {
  }

  onTodoClicked() {
    this.todoClicked.emit()
  }

  onEditClicked() {
    this.editClicked.emit()
  }

  onDeleteClicked() {
    this.deleteClicked.emit()
  }

}
