import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  editForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  onEdit() {
    
  }

}
