import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FinanceService } from 'src/app/services/finance.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {
  totalPrevio: number;
  alert: boolean;
  radio: string[];
  selection: string;
  constructor(private finance: FinanceService,
              private router: Router) {
    this.finance.getLast().subscribe((data: any) => {
      this.totalPrevio = data[0].total;
    });
    this.radio = this.finance.getTypes();
   }

  ngOnInit(): void {
  }
  choose(event: any){
    this.selection = event.target.value;
    console.log(this.selection);

  }
  addIngreso(detalle: string, observations: string, monto: number,fecha:string){
    const total = this.suma(monto, this.totalPrevio);
    console.log('deberia salir ' + (this.totalPrevio + monto));
    console.log(total);

    this.finance.postIngreso(detalle, observations, monto, total, this.selection,fecha).subscribe((data: any) => {
      console.log(data);

      if (data.message == 'Transaction Ok') {
        this.router.navigate(['main/resumen']);
      }
    });

}
 suma(x: number, y: number){
   let result = 0;
   let entero1, entero2, decimal1, decimal2;
   entero1 = x.toString().split('.')[0];
   entero2 = y.toString().split('.')[0];
   decimal1 = x.toString().split('.')[1];
   decimal2 = y.toString().split('.')[1];

   if (decimal1 == null) {
        decimal1 = '00';
   }
   if (decimal2 == null) {
    decimal2 = '00';
}

   result = parseFloat(entero1) + parseFloat(entero2) + (parseFloat(decimal1) / 10 + parseFloat(decimal2) / 10);


   return result ;


}

}
