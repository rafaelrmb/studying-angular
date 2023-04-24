import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isAssignmentOn: boolean = true;
  /* ---------------- THEORY CONTENT ----------------------------------*/
  // genders = ['male', 'female', 'other', 'prefer not to say'];
  // signupForm: FormGroup;
  // blockedUsernames = ['chris', 'anna'];

  // ngOnInit() {
  //   this.signupForm = new FormGroup({
  //     userData: new FormGroup({
  //       username: new FormControl(null, [
  //         Validators.required,
  //         this.invalidUsername.bind(this),
  //       ]),
  //       email: new FormControl(
  //         null,
  //         [
  //           Validators.required,
  //           Validators.email,
  //           Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
  //         ],
  //         this.blockedEmails
  //       ),
  //     }),
  //     gender: new FormControl('prefer not to say', Validators.required),
  //     hobbies: new FormArray([]),
  //   });
  // }

  // submitForm() {
  //   console.log(this.signupForm);
  // }

  // addHobby() {
  //   (<FormArray>this.signupForm.get('hobbies')).push(
  //     new FormControl(null, Validators.required)
  //   );
  // }

  // get controls() {
  //   return (this.signupForm.get('hobbies') as FormArray).controls;
  // }

  // invalidUsername(control: FormControl): { [s: string]: boolean } {
  //   if (this.blockedUsernames.indexOf(control.value) !== -1) {
  //     return { usernameIsBlocked: true };
  //   }
  //   return null;
  // }

  // blockedEmails(control: FormControl): Promise<any> | Observable<any> {
  //   const promise = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if (control.value === 'a@email.com') {
  //         resolve({ emailIsBlocked: true });
  //       } else {
  //         resolve(null);
  //       }
  //     }, 1500);
  //   });

  //   return promise;
  // }
  /* ---------------- THEORY ENDS ----------------------------------*/

  /* ---------------- ASSIGNMENT CONTENT ----------------------------------*/
  projectForm: FormGroup;
  statusList = ['Pending', 'Stable', 'Critical', 'Finished'];
  allowedManagers = ['Chris', 'Anna'];

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      aboutProject: new FormGroup({
        projectName: new FormControl(null, Validators.required),
        projectDescription: new FormControl(null, Validators.required),
        projectStartDate: new FormControl(null, [
          Validators.required,
          this.isDateInFuture,
        ]),
        projectEndDate: new FormControl(null, this.isDateInFuture),
        projectStatus: new FormControl(null, Validators.required),
      }),

      managerInfo: new FormGroup({
        managerName: new FormControl(null, [
          Validators.required,
          this.isManagerAllowed.bind(this),
        ]),
        managerEmail: new FormControl(
          null,
          [
            Validators.required,
            Validators.email,
            Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
          ],
          this.checkManagerEmail
        ),
      }),
    });
  }

  isManagerAllowed(control: FormControl): { [s: string]: boolean } {
    if (this.allowedManagers.indexOf(control.value) === -1) {
      return { allowedManager: false };
    }
    return null;
  }

  checkManagerEmail(control: FormControl): Observable<any> | Promise<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          control.value === 'chris@email.com' ||
          control.value === 'anna@email.com'
        ) {
          resolve(null);
        } else {
          resolve({ allowedEmail: false });
        }
      }, 1500);
    });
    return promise;
  }

  isDateInFuture(control: FormControl): { [s: string]: boolean } {
    if (new Date(control.value) < new Date()) {
      return { invalidDate: true };
    }
    return null;
  }

  submitForm() {
    console.log(this.projectForm);
  }
}
