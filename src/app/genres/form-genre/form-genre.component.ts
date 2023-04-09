import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { upperCaseValidator } from 'src/app/Validators/upperCaseValidator';
import { genreCreationDTO } from '../genres,models';

@Component({
  selector: 'app-form-genre',
  templateUrl: './form-genre.component.html',
  styleUrls: ['./form-genre.component.css']
})
export class FormGenreComponent implements OnInit  {

  constructor(private router:Router, private formBuilder:FormBuilder){}

  form:FormGroup;

  @Input()
  model:genreCreationDTO; 

   
  
  @Output ()
  onSaveChanges: EventEmitter<genreCreationDTO> = new EventEmitter<genreCreationDTO>();
  
  ngOnInit(): void {
    
    
       this.form = this.formBuilder.group({
        name: ['', {
          validators:[Validators.required, Validators.minLength(3), upperCaseValidator() ]
        }    ]
    });
    
    if(this.model !== undefined)
    {
      this.form.patchValue(this.model);
    }

  }
  saveChanges()
  {
    //.. save the genre
    this.onSaveChanges.emit(this.form.value);
    //this.router.navigate(['/genres']);
  }
  
  getErrorMessageFieldName()
  {
    const field = this.form.get('name');
    if(field?.hasError('required'))
    {
      return 'The Name field is Required';
    }

    if(field?.hasError('minlength'))
    {
      return 'The Name field must be > 3';
    }

    if(field?.hasError('upperCaseValidator'))
    {
      return field.getError('upperCaseValidator').message;
    }
    return '';  
  }
 
  
 
}
