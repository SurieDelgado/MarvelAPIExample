import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComicService } from '../../services/comic.service';
import { ComicsDto } from 'src/app/modules/common-lib/models/comics/comics.dto';

@Component({
  selector: 'app-comics-list.page',
  templateUrl: './comics-list.page.component.html',
  styleUrls: ['./comics-list.page.component.less']
})
export class ComicsListPageComponent implements OnInit {

  characterID: string = "";
  pageSize: number = 10;
  currentRegister: number = 0;
  loadingData: boolean = false;
  endOfResults: boolean = false;
  comics: ComicsDto[] = [];

  constructor(
    private route: ActivatedRoute,
    private comicsService: ComicService
    ) { }

  ngOnInit(): void {
    this.characterID = this.route.snapshot.paramMap.get('id')!;
    this.getComics();
  }

  @HostListener('window:scroll', ['$event'])
  private _scrollListener(event: any){
    if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight) {
      if(!this.loadingData){
        this.currentRegister += this.pageSize;
        this.getComics();
      }
    }
  }
  
  getComics(): void{
    this.loadingData = true;
    this.comicsService.getComics(
      this.pageSize,
      this.currentRegister,
      parseInt(this.characterID),
    ).then(data => {
      this.comics = [...this.comics, ...data.data.results];
      if(data.data.results.length < this.pageSize){
        this.endOfResults = true;
      }
      this.loadingData = false;
    });
  }

}
