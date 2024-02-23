import { Character } from './../interfaces/character.interface';
import { Component, OnInit } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent {

  constructor( private dbzService: DbzService){
  }

  get characters(): Character[]{
    //con esto ... creas una copia para no modificar el objeto original
    return [...this.dbzService.characters];
  }

  onDeleteCharacter( id: string): void{
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character): void {
    this.dbzService.addCharacter(character);
  }


}
