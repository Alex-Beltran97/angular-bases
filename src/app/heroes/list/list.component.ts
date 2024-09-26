import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = [
    "Robin",
    "Batman",
    "Green Lantern",
    "Doomsday",
    "Batwoman"
  ];
  public deletedHero: string = "";

  removeLastHero(): void {
    if (this.heroNames.length === 0) return;
    const deletedHero = this.heroNames.pop();
    this.deletedHero =  deletedHero!;
  }
}
