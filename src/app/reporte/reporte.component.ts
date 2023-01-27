import { Component, OnInit } from '@angular/core';
import { GastoService } from '../gasto.service';
import { UserService } from '../user.service';

type Gasto=any;
type User=any;


@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit{
  gastos:Gasto[]=[];
  users:User[]=[];
  ngOnInit(): void {
    
  }
  constructor(private gastoService:GastoService,private userService:UserService) {
    this.gastoService.obtenerDatos().subscribe(data =>
    {
    console.log(data);
    this.gastos=data;
    });
    this.userService.obtenerDatos().subscribe(data =>
      {
      console.log(data);
      this.users=data;
      });
  
}
}
