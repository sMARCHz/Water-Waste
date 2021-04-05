import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl: String = 'https://water-flow-5afb5-default-rtdb.firebaseio.com';
  todaySum: Number = 0;
  yesterdaySum: Number = 0;

  constructor(private datePipe: DatePipe, private firebase: AngularFireDatabase) { }

  fetchTodayRate() {
    let today = new Date(2021, 3, 2);
    // let today = new Date();
    let formatedDate = this.datePipe.transform(today, 'yyyy-MM-dd');
    return this.firebase.object(`${formatedDate}/rate`).valueChanges();
  }

  fetchTodaySum() {
    let today = new Date();
    let formatedDate = this.datePipe.transform(today, 'yyyy-MM-dd');
    return this.firebase.object(`${formatedDate}/sum`).valueChanges();
  }

  fetchYesterdaySum() {
    let yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    let formatedDate = this.datePipe.transform(yesterday, 'yyyy-MM-dd');
    return this.firebase.object(`${formatedDate}/sum`).valueChanges();
  }
}
