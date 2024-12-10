import { Character } from './../../interfaces/character.interace';
import { Component,Input } from "@angular/core";


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

 onDeleteCharacter( index: number) :void {
//TODO:Emitir el ID del personaje
 console.log(index)
 }
 }
