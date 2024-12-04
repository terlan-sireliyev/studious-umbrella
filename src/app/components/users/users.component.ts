import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-users',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

  users: Users[] = [];
  addUsers: FormGroup = new FormGroup({});
  updateForm: FormGroup = new FormGroup({});
  isAtive: boolean = false;
  updateIndex: number = 0;

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.addUsers = new FormGroup({
      name: new FormControl("", [Validators.required]),
      username: new FormControl("", [Validators.required])
    })
  }
  createUpdateForm() {
    this.updateForm = new FormGroup({
      name: new FormControl("", [Validators.required]),
      username: new FormControl("", [Validators.required])
    })
  }

  add() {
    if (this.addUsers.valid) {
      this.users.push(this.addUsers.value)
      this.createForm()
    }
  }

  del(index: number) {
    this.users.splice(index, 1)
  }

  get(modul: Users,index:number) {
    this.createUpdateForm();
    this.updateForm.controls["name"].setValue(modul.name);
    this.updateForm.controls["username"].setValue(modul.username);
    this.updateIndex = index
    this.isAtive = true
  }
  update() {
    if (this.updateForm.valid) {
      this.users[this.updateIndex] = this.updateForm.value
      // For example: our index number 2 has  name:"Ali",username:"alic3326"
      // and we change the name and last name of this user

                       //new  name and username
      // this.users[2] = name:"ALice", username:"Alice123"
      this.isAtive = false
    }
  }

  cancel() {
    this.isAtive = false
  }

}

class Users {
  name: string = "";
  username: string = ""
}
