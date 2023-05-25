import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterInfoPageComponent } from './pages/character-info/character-info.page.component';
import { CharacterListPageComponent } from './pages/character-list/character-list.page.component';
import { CharacterRoutingModule } from './character-routing.module';
import { CommonLibModule } from '../common-lib/common-lib.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CharacterListPageComponent,
    CharacterInfoPageComponent
  ],
  imports: [
    CharacterRoutingModule,
    CommonLibModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class CharactersModule { }
