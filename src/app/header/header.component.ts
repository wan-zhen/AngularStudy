import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'app';
  url = 'http://blog.miniasp.com/';
  counter = 0;
  constructor() { }

  ngOnInit() {
  }

  changeTitle($event: MouseEvent) {
    if ($event.altKey) {
      this.title = 'zhen';
    }
    this.counter++;
    console.log($event);
  }
  getStyle() {
    return { 'font-size': this.counter + 'px' };
  }
}
