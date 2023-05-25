import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListPageComponent } from './pages/character-list/character-list.page.component';
import { CharacterInfoPageComponent } from './pages/character-info/character-info.page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'character-list',
    component: CharacterListPageComponent,
  },
  {
    path: 'character-info/:id',
    component: CharacterInfoPageComponent,
  },
  { path: '', redirectTo: 'character-list', pathMatch: 'full' },
  { path : '**', redirectTo: 'character-list'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports:[RouterModule]
})
export class CharacterRoutingModule { }
