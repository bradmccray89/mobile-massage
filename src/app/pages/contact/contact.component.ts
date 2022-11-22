import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { catchError, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  // apiLoaded: Observable<boolean>;
  @ViewChild(MapInfoWindow) infoWindow!: MapInfoWindow;
  mapOptions: google.maps.MapOptions = {
    zoom: 17,
    center: { lat: 35.983082809805914, lng: -78.53886499577843 },
  };
  markerOptions: google.maps.MarkerOptions = {
    position: this.mapOptions.center,
    title: 'Mobile Massage of Raleigh',
    label: 'Nutrifit',
  };

  constructor(http: HttpClient) {
    // this.apiLoaded = http
    //   .jsonp(
    //     'https://maps.googleapis.com/maps/api/js?key=AIzaSyDaV5h08oI-7LmRK09ExiMpnx24sKZ3m9M',
    //     'callback'
    //   )
    //   .pipe(
    //     map(() => true),
    //     catchError(() => of(false))
    //   );
  }

  ngOnInit(): void {}

  openInfoWindow(marker: MapMarker) {
    this.infoWindow.open(marker);
  }
}
