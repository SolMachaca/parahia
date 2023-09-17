import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { MonedaService } from 'src/app/services/moneda.service';

@Component({
  selector: 'app-pageb',
  templateUrl: './pageb.component.html',
  styleUrls: ['./pageb.component.css']
})
export class PagebComponent implements OnInit {

  modena!:any;
  cant!:string;
  fromType!:string;
  toType!:string;

  finalResult!:string;

  constructor(private monedaService:MonedaService) {
    console.log(this.cant);
    console.log(this.fromType);
    console.log(this.toType);
  }

  ngOnInit(): void {
  }

  convertirMoneda(){
    this.monedaService.convertMoney(this.cant,this.fromType,this.toType).subscribe((resultado:any)=>{
      this.modena = resultado;
      this.finalResult = resultado.result;
      console.log(resultado);
    })
  }

}
