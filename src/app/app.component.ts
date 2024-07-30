import { Component } from '@angular/core';
import { Placa } from './Lista';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  placas : Placa[] = [];
  nuevaPlaca: string;
  grabarPlaca()
  {
    if (this.nuevaPlaca)
    {
      let placa = new Placa();
      placa.placaNumero = this.nuevaPlaca;
      placa.fechaIngreso = new Date();
      placa.completado = true;
      this.placas.push(placa);
      this.nuevaPlaca = '';
    }
    else
    {
      alert("Debe ingresar una placa");
    }
  }
  eliminar(id : number)
    {
      this.placas=this.placas.filter((v, i)=>i!==id);
    }
}
