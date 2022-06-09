import { Component, Host, HostListener } from '@angular/core';

@Component({
  selector: 'app-count-enter',
  templateUrl: './count-enter.component.html',
  styleUrls: ['./count-enter.component.css']
})
export class CountEnterComponent {
  counter: number = 0;

  constructor() { }

  @HostListener('window:keydown.enter', ['$event']) onEnterKeyPress() {
    this.counter++;
  }
}
