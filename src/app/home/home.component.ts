import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  private subscription: Subscription;

  constructor() {}

  ngOnInit() {
    const customObservable = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);

        if (count > 3) {
          observer.error(new Error('Count is greater than 3!'));
        }

        count++;
      }, 1000);
    });

    this.subscription = customObservable
      .pipe(map((data: number) => data * 2))
      .subscribe(
        (data: any) => console.log(data),
        (error) => console.log(error),
        () => console.log('Completed!')
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
