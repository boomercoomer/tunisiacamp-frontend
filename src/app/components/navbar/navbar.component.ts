import { Component, OnInit } from '@angular/core';
import { categories } from '../../models/consts';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  categories: String[] = categories;
  ngOnInit(): void {


  }

}
