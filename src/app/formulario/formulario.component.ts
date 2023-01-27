import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  //gastos:Gasto[]=[];
  constructor() {
    //this.gastoService.obtenerDatos().subscribe(data =>
      //{
      //console.log(data);
      //});
   }
  ngOnInit():void {}
  ruc:string='99999999001';
  valor:number=0.0;;
  gasto:string='Ninguno';
  
  }
  let imprimir =[
    '99999999001',
    'Ninguno'
  ]
let json = JSON.stringify(imprimir, null, 4);
console.log(json);


