import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { CharacterDto, CharacterListDto } from 'src/app/modules/common-lib/models/characters/characters.dto';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character-list.page',
  templateUrl: './character-list.page.component.html',
  styleUrls: ['./character-list.page.component.less']
})
export class CharacterListPageComponent implements OnInit {
  
  loadingData: boolean = false;
  pageSize: number = 10;
  currentRegister: number = 0;
  characters: CharacterDto[] = [];
  endOfResults: boolean = false;
  showFilters: boolean = false;
  filtersForm!: FormGroup;
  
  constructor(
    private charactersService: CharactersService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.filtersForm = this.formBuilder.group({
      sort: [null],
      sortBy: [null],
      name: [null, [Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]],
      initial: [null, [Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]],
      comic: [null, [Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]],
      serie: [null, [Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]],
    });
    this.getCharacters();
  }

  @HostListener('window:scroll', ['$event'])
  private _scrollListener(event: any){
    if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight) {
      if(!this.loadingData){
        this.currentRegister += this.pageSize;
        this.getCharacters();
      }
    }
  }

  getCharacters(): void{
    this.loadingData = true;
    this.charactersService.getCharacters(
      this.pageSize,
      this.currentRegister,
      this.filtersForm.value.comic != ''? this.filtersForm.value.comic: null,
      this.filtersForm.value.serie != ''? this.filtersForm.value.serie: null,
      this.filtersForm.value.initial != ''? this.filtersForm.value.initial: null,
      this.filtersForm.value.name != ''? this.filtersForm.value.name: null,
      this.filtersForm.value.sortBy,
      this.filtersForm.value.sort
    ).then(data => {
      this.characters = [...this.characters, ...data.data.results];
      if(data.data.results.length < this.pageSize){
        this.endOfResults = true;
      }
      this.loadingData = false;
    });
  }

  onFilterSubmit(): void{
    if(!this.filtersForm.valid)
      return;
    this.characters = [];
    this.pageSize = 10;
    this.currentRegister = 0;
    this.endOfResults = false;
    this.getCharacters();
  }

  onFilterClean(): void{
    this.pageSize = 10;
    this.currentRegister = 0;
    this.filtersForm.reset();
    this.characters = [];
    this.endOfResults = false;
    this.getCharacters();
  }

  goToCharacter(id: number): void{
    const url = this.router.serializeUrl(
      this.router.createUrlTree([`/characters/character-info/${id}`])
    );
  
    window.open(url, '_blank');
  }

  showHideFilter = () => this.showFilters = !this.showFilters;

}
