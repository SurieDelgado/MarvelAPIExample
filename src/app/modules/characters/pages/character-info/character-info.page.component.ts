import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharactersService } from '../../services/characters.service';
import { CharacterDto } from 'src/app/modules/common-lib/models/characters/characters.dto';

@Component({
  selector: 'app-character-info.page',
  templateUrl: './character-info.page.component.html',
  styleUrls: ['./character-info.page.component.less']
})
export class CharacterInfoPageComponent implements OnInit {

  loadingData: boolean = false;
  character?: CharacterDto;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private charactersService: CharactersService
  ) { }

  characterID: string = "";

  ngOnInit(): void {
    this.characterID = this.route.snapshot.paramMap.get('id')!;
    this.getCharacter();
  }

  getCharacter(): void{
    this.loadingData = true;
    this.charactersService.getCharacterByID(
      parseInt(this.characterID)
    ).then(data => {
      if(data != null){
        if(data.data.results.length > 0){
          this.character = data.data.results[0];
        }
      }
      this.loadingData = false;
    });
  }

  goToComics(): void{
    this.router.navigate(['comics/comics-list/character', this.characterID]);
  }
}
