import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people = [
    {name: "malle", age: 1962, countrycode: 'EE'},
    {name: "gustav", age: 1932, countrycode: 'SE'},
    {name: "robert", age: 1992, countrycode: 'GB'},
    {name: "anna", age: 1987, countrycode: 'RU'},
    {name: "matti", age: 1978, countrycode: 'FI'},
    {name: "dirk", age: 1998, countrycode: 'DE'},
    {name: "toomas", age: 1950, countrycode: 'EE'},
    {name: "thomas", age: 1966, countrycode: 'GB'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
