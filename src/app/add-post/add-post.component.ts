import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit{

  constructor() { }

  ngOnInit() {
    this.statusInputValue = '';
  }

  @Output() onUser = new EventEmitter<any>();

  nameInputValue = '';
  statusInputValue = '';
  linkInputValue = '';

  onName(event: any) {
    this.nameInputValue = event.target.value;
  }
  onStatus(event: any) {
    let inputValue = event.target.value;
    if (inputValue.length > 50) {
      this.statusInputValue = inputValue.slice(0, 50);
    }
  }
  onLink(event: any) {
    this.linkInputValue = event.target.value;
  }
  

  addNewUser(nameValue: string, statusValue: string, linkValue: string,) {
    const value = {
      name: nameValue,
      status: statusValue,
      link: linkValue
    }
    this.onUser.emit(value),
    this.nameInputValue = '',
    this.statusInputValue = '',
    this.linkInputValue = '';
  }
}
