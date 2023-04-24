import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  genders = ['male', 'female', 'other', 'prefer not to say'];
  signupForm: FormGroup;
  blockedUsernames = ['chris', 'anna'];

  ngOnInit() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.invalidUsername.bind(this),
        ]),
        email: new FormControl(
          null,
          [
            Validators.required,
            Validators.email,
            Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
          ],
          this.blockedEmails
        ),
      }),
      gender: new FormControl('prefer not to say', Validators.required),
      hobbies: new FormArray([]),
    });
  }

  submitForm() {
    console.log(this.signupForm);
  }

  addHobby() {
    (<FormArray>this.signupForm.get('hobbies')).push(
      new FormControl(null, Validators.required)
    );
  }

  get controls() {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }

  invalidUsername(control: FormControl): { [s: string]: boolean } {
    if (this.blockedUsernames.indexOf(control.value) !== -1) {
      return { usernameIsBlocked: true };
    }
    return null;
  }

  blockedEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'a@email.com') {
          resolve({ emailIsBlocked: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });

    return promise;
  }
}
