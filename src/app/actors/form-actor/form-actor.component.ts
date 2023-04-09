import { actorDto } from './../actor.model';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { actorCreateDto } from '../actor.model';


@Component({
  selector: 'app-form-actor',
  templateUrl: './form-actor.component.html',
  styleUrls: ['./form-actor.component.css']
})
export class FormActorComponent implements OnInit {

  constructor(private formBuilder:FormBuilder){}

  form: FormGroup;

  @Output()
  onSaveChanges = new EventEmitter<actorCreateDto>();

  @Input()
  model: actorDto;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
        name: ['', {
          validators: [Validators.required]
        }],
        dateOfBirth: '',
        biography: '',
        picture: ''
        
    });
    if(this.model !== undefined)
    {
      this.form.patchValue(this.model);
    }
  }

  changeMarkDown(content: any)
  {
     this.form.get('biography').setValue(content);
  }

  onImageSelected(image: any)
  {
   this.form.get('picture')?.setValue(image);
  }

  saveChanges()
  {
     this.onSaveChanges.emit(this.form.value);
  }

}
