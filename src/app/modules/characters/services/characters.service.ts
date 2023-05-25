import { Injectable } from '@angular/core';
import { DataService } from '../../common-lib/services/data.service';
import { CharacterListDto } from '../../common-lib/models/characters/characters.dto';
import { CharactersResponseDto } from '../../common-lib/models/characters/characters-response.dto';

@Injectable({
  providedIn: 'root'
})
export class CharactersService extends DataService {
  getCharacters(
    limit: number,
    offset: number,
    comics?: string,
    series?: string,
    initial?: string,
    name?: string,
    sortby?: string,
    sort?: string,
  ): Promise<CharactersResponseDto>{
    return this.get<CharactersResponseDto>(`characters`, new Map<string, any>(Object.entries({
      limit: limit,
      offset: offset,
      comics: comics,
      series: series,
      nameStartsWith: initial,
      name: name,
      orderBy: (sort!=null && sortby != null)? sort == "dsc"? "-"+sortby: sortby: null
    })));
  }

  getCharacterByID(
    characterID: number
  ): Promise<CharactersResponseDto>{
    return this.get<CharactersResponseDto>(`characters/${characterID}`);
  }
}