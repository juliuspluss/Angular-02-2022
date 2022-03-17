import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mouse',
  templateUrl: './mouse.component.html',
  styleUrls: ['./mouse.component.css']
})
export class MouseComponent implements OnInit {
  mice = [
    { name: "Miki", home: "Disneyland", image: "https://m.media-amazon.com/images/I/61UxfXTUyvL._AC_SL1500_.jpg"},
    { name: "Hiir", age: 5, owner: "Kalle" },
    { name: "Minni", age: 7, image: "https://m.media-amazon.com/images/I/41oJ8O-teEL._AC_.jpg" },
    { name: "Koduhiir", owner: "Sille", children: 1, },
    { name: "Õuehiir", age: 14, owner: "Malle" }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
