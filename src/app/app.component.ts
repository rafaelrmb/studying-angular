import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  genders = ['male', 'female', 'other', 'prefer not to say'];
  signupForm: FormGroup;

  ngOnInit() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, Validators.required),
        email: new FormControl(null, [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ]),
      }),
      gender: new FormControl('prefer not to say', Validators.required),
      hobbies: new FormArray([]),
    });
  }

  submitForm() {
    console.log(this.signupForm.value);
  }

  addHobby() {
    (<FormArray>this.signupForm.get('hobbies')).push(
      new FormControl(null, Validators.required)
    );
  }

  get controls() {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }
}
