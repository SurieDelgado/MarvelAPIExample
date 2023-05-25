import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'characters',
    loadChildren: () => import('./modules/characters/characters.module').then(m => m.CharactersModule)
  },
  {
    path: 'comics',
    loadChildren: () => import('./modules/comics/comics.module').then(m => m.ComicsModule)
  },
  { path: '', redirectTo: 'characters', pathMatch: 'full' },
  { path : '**', redirectTo: 'characters'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
