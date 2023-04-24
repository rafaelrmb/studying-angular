import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('myForm') myForm!: NgForm;
  answer: string = '';
  genders = ['male', 'female', 'other', 'prefer not to say'];

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // onSubmit(myForm: NgForm) {
  //   const { username, email, secret } = myForm.form.value;
  //   console.log(username, email, secret);
  //   console.log(myForm);
  // }

  onSubmit(myForm: NgForm) {
    console.log(myForm);
  }
}
