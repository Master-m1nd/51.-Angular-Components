import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user = {name: "", status: "", link: ""}

  addUser(newUser: any) {
    this.user.name = newUser.name
    this.user.status = newUser.status
    this.user.link = newUser.link
  }

  resetUser() {
    this.user.name = "";
    this.user.status = "";
    this.user.link = "";
  }
}
