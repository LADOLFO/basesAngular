import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Ironman', 'Spiderman', 'Hulk', 'She-Hulk', 'Thor'];
  public eliminado?: string = '';

  eliminarHeroe(): void {
    this.eliminado = this.heroNames.pop();
  }

}
