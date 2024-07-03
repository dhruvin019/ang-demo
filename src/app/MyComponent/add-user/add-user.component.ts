import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/app/User';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  firstName:string | undefined ;
  lastName:string | undefined ;
  address:string | undefined;
  phoneNumber:Number | undefined;
  @Output() userAdd: EventEmitter<User> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    const user = {
      sno: 1,
      firstName: this.firstName,
      lastName: this.lastName,
      address: this.address,
      phoneNumber : this.phoneNumber,
      active: true
    }
    this.userAdd.emit(user);

  }

}
