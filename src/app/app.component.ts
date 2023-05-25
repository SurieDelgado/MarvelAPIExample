import { Component } from '@angular/core';
import { ThemeService } from './modules/common-lib/services/theme.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'marvel-algartech';

  currentPage = "character"

  constructor(
    private theme: ThemeService,
    private router: Router
  ){}

  themeChange(){
    if (this.theme.current === 'light') {
      this.theme.current = 'dark';
    } else {
        this.theme.current = 'light';
    }
  }

  setCurrentPage(value: string, route: string){
    this.currentPage = value;
    this.router.navigate([route]);
  }

}
