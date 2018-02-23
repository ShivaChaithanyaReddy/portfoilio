import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MessageModel} from './message.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  // myForm: FormGroup;
  constructor() { }

  ngOnInit() {
    // this.myForm = new FormGroup({
    //   name : new FormControl(null, Validators.required),
    //   email: new FormControl(null, Validators.required),
    //   subject : new FormControl(null, Validators.required),
    //   message: new FormControl(null, Validators.required)
    // });

  }
  //
  // onSubmit() {
  //   const message = new MessageModel(this.myForm.value.name, this.myForm.value.email, this.myForm.value.subject, this.myForm.value.message);
  //   console.log(message);
  //   this.myForm.reset();
  // }
}
