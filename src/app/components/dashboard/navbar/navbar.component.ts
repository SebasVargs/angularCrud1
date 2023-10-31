import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { Menu } from '../../interfaces/menu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  /* 
    El codigo lo podemos tener muy ordenado porque, dentro del navbar
    podemos hacer la redireccion de los menus dentro de la carpeta
    ./intefaces/menu.ts porque tenemos las propiedades [nombre, redirect],
    entonces solo lo llamamos dentro del archivo navbar.component.ts y 
    luego dentro del navbar.component.html lo que hacemos es hacer un
    recorrido de estas propiedades con la ubicacion que tambien tienen
    el archivo ./assets/data/menu.json
  */

  menu: Menu[] = [];

  constructor(private  _menuServices: MenuService){}

  ngOnInit(): void{
    this.cargarMenu();
  }

  cargarMenu(){
    this._menuServices.getMenu().subscribe(data => {
      this.menu = data;
    })
  }
}
