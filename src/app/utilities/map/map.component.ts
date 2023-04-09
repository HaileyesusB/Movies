import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import * as L from 'leaflet';
import { latLng, LeafletMouseEvent, marker, Marker, tileLayer } from 'leaflet';
import { coordinateMap } from './coordinate';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  
  ngOnInit() : void { 
    L.Icon.Default.imagePath = "assets/leaflet/";
    this.layers = this.initializeCoordinates.map(value =>
      marker([value.latitude , value.longtude]));
  }

  @Input()
  initializeCoordinates: coordinateMap[] = [];

  @Output()
  onSelectedLocation = new EventEmitter<coordinateMap>();

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
      { maxZoom: 18, attribution: 'Angular Movies' })
    ],
    zoom: 9,
    center: latLng(8.971897294083014 ,-320.53710937500006)
  };
  layers: Marker<any>[] = [];

  handelMapClick(event: LeafletMouseEvent){
    const latitude = event.latlng.lat;
    const longtude = event.latlng.lng;
    console.log(latitude, longtude);
    this.layers=[];
    this.layers.push(marker([latitude, longtude]));
    this.onSelectedLocation.emit({latitude, longtude});
  }

}
