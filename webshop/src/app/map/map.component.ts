import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit {
  private map: any;
  private marker1: any;
  private marker2: any;

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 59.42735887913104, 24.723068370087564 ],
      zoom: 10
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    this.marker1 = L.marker([59.43698685275972, 24.755050133814546]);
    this.marker1.bindPopup("Kristiine keskus <br> Avatud 9-18")
    this.marker1.addTo(this.map);

    this.marker2 = L.marker([59.422042781354754, 24.793899185431226]);
    this.marker2.bindPopup("Ülemiste keskus <br> Avatud 9-17")
    this.marker2.addTo(this.map);

    tiles.addTo(this.map);
  }

  constructor() { }


  ngOnInit(): void {
  }

  ngAfterViewInit(): void { 
    this.initMap();
  }

  onZoom(shop: string) {
    if (shop === 'all') {
      this.marker1.closePopup();
      this.marker2.closePopup();
      this.map.setView(L.latLng([59.42735887913104, 24.723068370087564]),10);
    } else if (shop === 'kristiine') {
      this.marker1.openPopup();
      this.map.setView(L.latLng([59.43698685275972, 24.755050133814546]),12);
    } else if (shop === 'ylemiste') {
      this.marker2.openPopup();
      this.map.setView(L.latLng([59.422042781354754, 24.793899185431226]),12);
    }
  }

}
