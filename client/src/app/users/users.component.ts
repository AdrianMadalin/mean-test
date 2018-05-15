import {Component, OnInit} from '@angular/core';
import {RequestService} from "../service/request.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Array<object> = [];
  clear: Boolean = false;
  clearApi: Boolean = false;
  constructor(private _reqService: RequestService) {
  }

  ngOnInit() {
  }

  onGetUsers() {
    this._reqService.getUsers().subscribe((res) => {
      console.log(res);
      this.users = res['users'];
      this.clear = !this.clear;
    });
  }
}
