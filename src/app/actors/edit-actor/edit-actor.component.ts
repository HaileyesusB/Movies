import { actorCreateDto, actorDto } from './../actor.model';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrls: ['./edit-actor.component.css']
})
export class EditActorComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute ){}

@Input()
  model: actorDto = {name: 'Haile Belew', dateOfBirth: new Date(), 
  picture: 'https://www.pngmart.com/files/21/Actor-PNG-Isolated-Photo.png', 
  biography: 'default value',};
  

  ngOnInit(): void {
  /* 
     this.activatedRoute.params.subscribe(params => {
      alert(params['id']);
    });
  */
 
  }

  saveChanges(actorCreateDto: actorCreateDto)
  {
    console.log(actorCreateDto);
  }

 
}
