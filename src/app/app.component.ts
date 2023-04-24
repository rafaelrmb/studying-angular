import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('myForm') myForm!: NgForm;
  isAssignmentOn = true;

  answer: string = '';

  genders = ['male', 'female', 'other', 'prefer not to say'];

  formData = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: '',
  };

  // onSubmit(myForm: NgForm) {
  //   const { username, email, secret } = myForm.form.value;
  //   console.log(username, email, secret);
  //   console.log(myForm);
  // }

  onSubmit(myForm: NgForm) {
    const { userData, secQuestion, gender } = myForm.form.value;
    this.formData = {
      username: userData.username,
      email: userData.email,
      secretQuestion: secQuestion.secret,
      answer: secQuestion.questionAnswer,
      gender: gender,
    };
  }

  suggestName() {
    const suggestedName = 'Superuser';
    this.myForm.form.patchValue({
      userData: {
        username: suggestedName,
      },
    });
  }

  fillForm() {
    this.myForm.setValue({
      userData: {
        username: 'Some user',
        email: 'test@test.com',
      },
      secQuestion: {
        secret: 'pet',
        questionAnswer: 'Rex',
      },
      gender: 'prefer not to say',
    });
  }

  resetForm() {
    this.myForm.reset();
  }
}
