import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'angularproject';
  constructor(){

  }
  ngAfterViewInit(): void {;
  }
  ngOnInit():void{
  }
}
