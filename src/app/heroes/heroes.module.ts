import { NgModule } from "@angular/core";
import { ListComponent } from "./list/list.component";
import { HeroComponent } from "./hero/hero.component";
import { CommonModule } from "@angular/common";



// Se tiene que impor el common module para poder usar el ngFor y el ngIf
@NgModule({
  declarations: [
    ListComponent,
    HeroComponent
  ],
  exports: [
    ListComponent,
    HeroComponent
  ],
  imports: [
    CommonModule
  ]
})

export class HeroesModule {

}
