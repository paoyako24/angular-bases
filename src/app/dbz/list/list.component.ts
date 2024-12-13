import { OutletContext } from '@angular/router';
import { Character } from './../../interfaces/character.interace';
import { Component, Input, EventEmitter,Output } from '@angular/core';


@Component({
  selector:'dbz-list',
  templateUrl:'./list.component.html',
  styleUrls:['./list.component.css']
 })
 export class ListComponent {

 @Input()
 public  characterList: Character[] = [{
  name:'Trunks',
  power:10
 }];

 //onDelete = Index value : number
@Output()
    public onDlete :EventEmitter<string> = new EventEmitter ();

 onDeleteCharacter( id: number) :void {

  this.onDlete.emit( id);
 }
 }
