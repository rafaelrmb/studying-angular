import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  private subscription: Subscription;

  constructor() {}

  ngOnInit() {
    const customObservale = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        count++;
      }, 1000);
    });

    this.subscription = customObservale.subscribe((data: any) =>
      console.log(data)
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
