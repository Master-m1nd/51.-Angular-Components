import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  @Input() name!: string;
  @Input() status!: string;
  @Input() link!: string;
  @Output() onRemoveUser = new EventEmitter<void>();

  removeUser() {
    this.onRemoveUser.emit();
  }
}
