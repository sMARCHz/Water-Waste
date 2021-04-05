import { Component, OnInit } from '@angular/core';
import { tap, map } from 'rxjs/operators';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'water-waste';
  constructor() {}

  ngOnInit(): void { 
  }
}
