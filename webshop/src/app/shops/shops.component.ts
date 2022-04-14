import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
declare let Email: any;

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})
export class ShopsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "p.juliuspluss@gmail.com",
      Password : "6444C8BBDA6A74FBB6F8D3042D8320D40748",
      To : 'p.juliuspluss@gmail.com',
      From : "p.juliuspluss@gmail.com",
      Subject : "TELEE",
      Body : `You have a message from: ${form.value.name} </br>
      His/her email: ${form.value.email} </br>
      His/her phone number: ${form.value.number} </br>
      His/her message: ${form.value.message} </br>`
  }).then(
    (message: any) => alert(message)
  );
  }

}
