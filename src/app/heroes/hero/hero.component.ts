import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  // los geters son funciones que se usan como propiedades
  get capitalizedName(): string {
    return this.name.toUpperCase();
  }
  // Angular no detecta dentro de su ciclo de deteccion de cambios codigo nativo de javascript
  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'Spiderman';
  }
  changeAge(): void {
    this.age = 25;
  }
  restablecerValore():void{
    this.name = 'ironman';
    this.age = 45;
  }
}
