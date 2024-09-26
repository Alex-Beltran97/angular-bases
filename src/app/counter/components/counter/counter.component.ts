import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: 'counter.component.html',
  styleUrl: 'counter.component.css'
})
export class CounterComponent {
  public counter: number = 0;

  _increaseBy(num: number) {
    this.counter += num;
  };

  _reset() {
    this.counter = 0;
  }
}
