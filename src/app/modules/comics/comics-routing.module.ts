import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CharacterInfoPageComponent } from '../characters/pages/character-info/character-info.page.component';
import { ComicsListPageComponent } from './pages/comics-list/comics-list.page.component';
const routes: Routes = [
  {
    path: 'comics-list/character/:id',
    component: ComicsListPageComponent,
  },
  { path: '', redirectTo: 'comics-list', pathMatch: 'full' },
  { path : '**', redirectTo: 'comics-list'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports:[RouterModule]
})
export class ComicsRoutingModule { }
