import { FormControl } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable } from '@angular/material/table';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-actors-autocomplete',
  templateUrl: './actors-autocomplete.component.html',
  styleUrls: ['./actors-autocomplete.component.css']
})
export class ActorsAutocompleteComponent implements OnInit {

  constructor(){}

  actors = [
    {name: 'Tom Holland', picture: 'assets/Actors/Tom Holland.jpg'},
    {name: 'Tom Cruse', picture: 'assets/Actors/Tom Cruse.jpg'},
    {name: 'Tom Hanks',picture: 'assets/Actors/Tom Hanks.jpg'},
    {name: 'Samuel L Jackson', picture: 'assets/Actors/Samuel L Jackson.jpg'},
    {name: 'Denzel Washington', picture: 'assets/Actors/Denzel Washington.jpg'}
  ];
  controls: FormControl = new FormControl();
  selectedActors = [];

  originalActors = this.actors;

  columnsToDisplay = ['picture', 'name', 'character', 'actions'];

  @ViewChild(MatTable) table:MatTable<any>;
  ngOnInit(): void {

    this.controls.valueChanges.subscribe(value =>
      {
        this.actors = this.originalActors;
        this.actors = this.actors.filter(actor => actor.name.
          indexOf(value)!== -1);
      })
  }

  remove(actor)
  {
    const index = this.selectedActors.findIndex(a => a.name === actor.name);
    this.selectedActors.splice(index, 1);
    this.table.renderRows();
  }

  dropped(event: CdkDragDrop<any[]>)
  {
     const PreviousIndex = this.selectedActors.findIndex
     (actor => actor === event.item.data);

     moveItemInArray(this.selectedActors, PreviousIndex, event.currentIndex);

     this.table.renderRows();
  }

  

  optionSelected(event : MatAutocompleteSelectedEvent)
  {
   console.log(event.option.value);
   this.selectedActors.push(event.option.value);
   this.controls.patchValue('');
   if(this.table !== undefined)
   {
    this.table.renderRows();
   }
  }

}
