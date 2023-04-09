import { multipleSelectorModel } from './multiple-selector.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiple-selector',
  templateUrl: './multiple-selector.component.html',
  styleUrls: ['./multiple-selector.component.css']
})
export class MultipleSelectorComponent implements OnInit {

  constructor(){}

  @Input()
  SelectedItems: multipleSelectorModel[] =[];

  @Input()
  NonSelectedItems: multipleSelectorModel[] =[];

  deselect(item: multipleSelectorModel, index:number)
  {
    this.NonSelectedItems.push(item);
    this.SelectedItems.splice(index, 1);
  }

  select(item: multipleSelectorModel, index:number)
  {
    this.SelectedItems.push(item);
    this.NonSelectedItems.splice(index, 1);
  }

  ngOnInit(): void {
   
  }

  selectAll()
  {
    this.SelectedItems.push(...this.NonSelectedItems);
    this.NonSelectedItems =[];
  }

  deSelectAll()
  {
    this.NonSelectedItems.push(...this.SelectedItems);
    this.SelectedItems =[];
  }

}
