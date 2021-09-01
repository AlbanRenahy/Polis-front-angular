import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  private map: any;
  private centroid: L.LatLngExpression = [48.864716, 2.349014]; //

  private initMap(): void {
    this.map = L.map('map', {
      center: this.centroid,
      zoom: 6
    });

    const tiles = L.tileLayer('https://api.maptiler.com/maps/voyager/256/{z}/{x}/{y}.png?key=OBdFBTs7Fuc3MfQjn3Fo', {
      maxZoom: 18,
      minZoom: 5,
      attribution: '&copy; <a href="https://www.maptiler.com/">MapTiler</a> &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    });

    tiles.addTo(this.map);
  
  }

  constructor() { }

  ngOnInit(): void {
        this.initMap();
  }

  ngAferViewInit(): void {

  }


}