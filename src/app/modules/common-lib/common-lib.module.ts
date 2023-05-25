import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterInfoComponent } from './components/character-info/character-info.component';



@NgModule({
  declarations: [
    CharacterInfoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CharacterInfoComponent
  ]
})
export class CommonLibModule { }
