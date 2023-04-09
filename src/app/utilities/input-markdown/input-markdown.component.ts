import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrls: ['./input-markdown.component.css']
})
export class InputMarkdownComponent implements OnInit {
  constructor(private formBuilder:FormBuilder) {}
 form:FormGroup;
 markDownCont: '';

 @Output()
 changeMarkDown =  new EventEmitter<any>();

 @Input()
 markdownContent = '';
 
  ngOnInit(): void {

    this.form = this.formBuilder.group({
      biography: '',
  });
  }
  changeMark(values: any){
    var test = this.changeMarkDown.emit(values.target.value);
    console.log(" Tests 123"+ test);
  }
}
