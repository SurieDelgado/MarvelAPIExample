import { Injectable } from '@angular/core';
import { DataService } from '../../common-lib/services/data.service';
import { ComicsResponseDto } from '../../common-lib/models/comics/comics-response.dto';

@Injectable({
  providedIn: 'root'
})
export class ComicService extends DataService {
  getComics(
    limit: number,
    offset: number,
    characterID: number
  ): Promise<ComicsResponseDto>{
    return this.get<ComicsResponseDto>(`characters/${characterID}/comics`, new Map<string, any>(Object.entries({
      limit: limit,
      offset: offset
    })));
  }
}
