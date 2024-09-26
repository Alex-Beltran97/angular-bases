import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = "captain america";
  public age: number = 89;
  public nameIsEdited: boolean = false;
  public ageIsEdited: boolean = false;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  };

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero():void {
    const newName: string = prompt("Set a hero name:") ?? "";
    this.name = newName;
    this.nameIsEdited = true;
  }

  changeAge():void {
    const newAge: number = +prompt("Set hero age:")!;
    this.age = newAge;
    this.ageIsEdited = true;
  }

  resetForm():void {
    this.name = "Captain America";
    this.age = 89;
    this.nameIsEdited = false;
    this.ageIsEdited = false;
  }
}
