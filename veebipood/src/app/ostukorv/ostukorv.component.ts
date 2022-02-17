import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ostukorv',
  templateUrl: './ostukorv.component.html',
  styleUrls: ['./ostukorv.component.css']
})
export class OstukorvComponent implements OnInit {

  constructor() { 
    console.log("OstukorvComponent constructor käivitub");
  }

  ngOnInit(): void { console.log("OstukorvComponent ngOnInIt käivitub");
  }
  

}
