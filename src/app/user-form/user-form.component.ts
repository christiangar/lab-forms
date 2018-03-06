import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './../shared/user.model';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  user: User = new User();
  
}
