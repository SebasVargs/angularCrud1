import { Injectable } from '@angular/core';
import { Usuario } from '../components/interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  listUsuarios: Usuario[] = [
    {usuario: 'sebax', nombre: 'Sebastian', apellido: 'Vargas', sexo: 'M'},
    {usuario: 'felip', nombre: 'Felipe', apellido: 'Vargas', sexo: 'M'},
    {usuario: 'angix', nombre: 'Angie', apellido: 'Cespedes', sexo: 'F'},
    {usuario: 'dorax', nombre: 'Dora', apellido: 'Cardenas', sexo: 'F'},
    {usuario: 'nestox', nombre: 'Nestor', apellido: 'Vargas', sexo: 'M'},
    {usuario: 'dorax', nombre: 'Dora', apellido: 'Cardenas', sexo: 'F'},
    {usuario: 'nestox', nombre: 'Nestor', apellido: 'Vargas', sexo: 'M'},
    {usuario: 'sebax', nombre: 'Sebastian', apellido: 'Vargas', sexo: 'M'},
    {usuario: 'felip', nombre: 'Felipe', apellido: 'Vargas', sexo: 'M'},
    {usuario: 'angix', nombre: 'Angie', apellido: 'Cespedes', sexo: 'F'},
    {usuario: 'dorax', nombre: 'Dora', apellido: 'Cardenas', sexo: 'F'},
    {usuario: 'nestox', nombre: 'Nestor', apellido: 'Vargas', sexo: 'M'},
  ];

  constructor() { }

  getUsuario(){
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index: number){
    this.listUsuarios.splice(index, 1)
  }

  agregarUsuario(usuario: Usuario){
    this.listUsuarios.unshift(usuario);
  }
}
