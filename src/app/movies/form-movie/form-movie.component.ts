import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { moviesDTO } from '../movies.model';

@Component({
  selector: 'app-form-movie',
  templateUrl: './form-movie.component.html',
  styleUrls: ['./form-movie.component.css']
})
export class FormMovieComponent implements OnInit {
  constructor(private formBuilder: FormBuilder){}
  
  @Input()
  model: moviesDTO;
  form:FormGroup;
  ngOnInit(): void {
    this.form = this.formBuilder.group({
       title: ['', {
        validators:  [Validators.required]
       }],
       summary:'',
       inTheaters: false,
       trailer: '',
       releaseDate: '',
       poster: ''
    }); 

    if(this.model !== undefined)
    {
       this.form.patchValue(this.model); 
    }
  }

  saveChanges(){}

  onImageSelected(file : File){
    this.form.get('poster').setValue(file);
  }

  changeMarkDown(content: string){ 
    this.form.get('summary').setValue(content);
  }

}
