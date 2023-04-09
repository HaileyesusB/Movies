import { RatingComponent } from './../utilities/rating/rating.component';
import { Component, OnInit,OnChanges , ViewChild, OnDestroy, DoCheck, AfterViewInit, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-life-cycle-test',
  templateUrl: './life-cycle-test.component.html',
  styleUrls: ['./life-cycle-test.component.css']
})
export class LifeCycleTestComponent implements OnInit, OnChanges , OnDestroy, DoCheck, AfterViewInit {

  @Input()
  title:any ;

  
  @ViewChild(RatingComponent)
  rating :RatingComponent
    //It is not a Life Cycle component
    | undefined 

    timer: ReturnType<typeof setInterval> | undefined;
  //It is not a Life Cycle component
  constructor(){}
  ngOnInit(): void {
    console.log('On Init');
   this.timer= setInterval(() => console.log(new Date()), 1000);
    
  }
  ngOnChanges(changes: SimpleChanges): void{
    console.log('On Changes');
    console.log(changes);
    
  }
  ngOnDestroy(): void{
    console.log('On Destroy');
    clearInterval(this.timer);
   
  }
  ngDoCheck(): void{
    console.log('On Do Check');
    
  }
  ngAfterViewInit(): void{
    console.log('On After view Init');
    console.log(this.rating);
    
  }
}
