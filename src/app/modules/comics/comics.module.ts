import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComicsListPageComponent } from './pages/comics-list/comics-list.page.component';
import { ComicsRoutingModule } from './comics-routing.module';
import { CommonLibModule } from '../common-lib/common-lib.module';

@NgModule({
  declarations: [ComicsListPageComponent],
  imports: [
    ComicsRoutingModule,
    CommonLibModule,
    CommonModule
  ]
})
export class ComicsModule { }
