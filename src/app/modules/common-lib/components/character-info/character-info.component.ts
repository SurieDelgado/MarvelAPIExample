import { Component, Input, OnInit } from '@angular/core';
import { CharacterDto } from '../../models/characters/characters.dto';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.less']
})
export class CharacterInfoComponent implements OnInit {
  @Input() character!: CharacterDto;

  constructor() { }

  ngOnInit(): void {
  }

}
