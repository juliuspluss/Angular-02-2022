import { Component, OnInit } from '@angular/core';
import { Packet } from '../packet/packet.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  packets: Packet[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
