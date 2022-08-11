import { Component, Input, OnInit, Output } from '@angular/core';
import { Menu, MenuItems } from '../interfaces/menu';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories: MenuItems[] = []; 

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuService.getMenu().subscribe(responseData =>{
      this.categories = responseData.data;
    });
  }

}
