import { Component, inject, OnInit } from '@angular/core';
import { Icon,LatLng,Map,marker,tileLayer } from 'leaflet';
import { IdataTracking } from 'src/app/models/data-tracking';
import { DataTrackingService } from 'src/app/services/data-tracking.service';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  geo:any;
  map:any;

  constructor(private placeSvc:PlacesService, private _datatrackingservice:DataTrackingService){}

  ngOnInit() {
    setTimeout(()=>{
      this.geo = this.placeSvc.useLocation;
    },2000);

    this._datatrackingservice

  }
  ngAfterViewInit(){
    setTimeout(()=>{
      this.map = new Map('map').setView(this.geo, 13);

      tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);

    },2000);
  }

  ubicar(){ 

    let token: string | null = localStorage.getItem('authToken');
 
    let marks: IdataTracking[]=[];

    if (token === null || token === '') {
      console.log('El token no existe');
      token = ''; 
    } else {
      console.log('Token recuperado:', token);
    }




    this._datatrackingservice.getMarks(token).subscribe({
      next: (data: IdataTracking[]) => {
        if (data) {
          marks = data;
          marks.map((mark) =>{
            const latLng: L.LatLngExpression = [mark.latitude, mark.longitude];
            marker(latLng).addTo(this.map).bindPopup(`<b>${mark.name}</b`).openPopup();
            
          })
        } else {
          // this.hasErrors = true;
          // this.errorMessage = "Failded to load graph data";
        }
    },
    error:(err) => {
      // this.hasErrors = true;
      // this.errorMessage= "Error fetching graph: " + err.message;
    }
  });
    
  }
  
  recargar(){
    location.reload();

  }




}
