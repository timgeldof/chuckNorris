import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm = new FormGroup({
    firstName: new FormControl('Jan'),
    lastName: new FormControl('Janssens'),
    email: new FormControl('jan@janssens.be', [Validators.required, Validators.email]),
    message: new FormControl('This is a message to all my mateys', [Validators.required, Validators.minLength(15)]),
  });

  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    console.log(this.contactForm.value);
    this.contactForm.reset(); 
  }

}
