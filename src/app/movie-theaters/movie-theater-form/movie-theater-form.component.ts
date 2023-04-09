import { movieTheatersDTO } from './../movie-theater.model';
import { coordinateMap } from './../../utilities/map/coordinate';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { movieTheatersCreationDTO } from '../movie-theater.model';

@Component({
  selector: 'app-movie-theater-form',
  templateUrl: './movie-theater-form.component.html',
  styleUrls: ['./movie-theater-form.component.css']
})
export class MovieTheaterFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder){}

  form: FormGroup;

  @Input()
  model: movieTheatersDTO;

  @Output()
  onSaveChanges = new EventEmitter<movieTheatersCreationDTO>();

  initialCoordiantes:coordinateMap[] = [];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', {
        validators: [Validators.required]
      }],
      longtude: ['', {
        validators: [Validators.required]
      }],
      latitude: ['', {
        validators: [Validators.required]
      }]
    });
    if(this.model !== undefined)
    {
       this.form.patchValue(this.model);
       this.initialCoordiantes.push({latitude:this.model.latitude , longtude:this.model.longtude});
    }
  }

  onSelectedLocation(coordinate : coordinateMap)
  {
     this.form.patchValue(coordinate);
  }

  saveChanges()
  {
    this.onSaveChanges.emit(this.form.value);
  }


}
