import { Component, OnInit } from '@angular/core';
import { map, share, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-dashboard-clock',
  templateUrl: './dashboard-clock.component.html',
  styleUrls: ['./dashboard-clock.component.css'],
})
export class DashboardClockComponent implements OnInit{
  time = new Date();
  rxTime = new Date();
  intervalId:any;
  subscription: any;
  ngOnInit() {
    // Using Basic Interval
    this.intervalId = setInterval(() => {
      this.time = new Date();
    }, 1000);

    // Using RxJS Timer
    this.subscription = timer(0, 1000)
      .pipe(
        map(() => new Date()),
        share()
      )
      .subscribe(time => {
        this.rxTime = time;
      });
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  
  
  
  todayTime = new Date();

  hourHandTransform: string | undefined;
  minHandTransform: string | undefined;
  secondHandTransform: string | undefined;

  constructor() {

    setInterval(() => {
      const now = new Date();

      const seconds = now.getSeconds();
      const secondsDegrees = ((seconds / 60) * 360) + 90;
      this.secondHandTransform = `rotate(${secondsDegrees}deg)`;

      const mins = now.getMinutes();
      const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
      this.minHandTransform = `rotate(${minsDegrees}deg)`;

      const hour = now.getHours();
      const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
      this.hourHandTransform = `rotate(${hourDegrees}deg)`;
    }, 1000);
  }
}
