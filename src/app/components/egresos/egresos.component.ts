import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FinanceService } from '../../services/finance.service';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent implements OnInit {
  totalPrevio: number;
  alert: boolean;
  radio: string[];
  selection: string;

  constructor(private finance: FinanceService,
              private router: Router) {
                this.alert = false;
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
  addEgreso(detalle: string, observations: string, monto: number, fecha: string){

          const total = this.totalPrevio - monto;
          if (total < 0) {
            this.alert = true;
          }else{
            this.alert = false;
            console.log('previo: ' + this.totalPrevio + ' ahora: '+ total+'\nFecha: '+fecha);


            this.finance.postEgreso(detalle, observations, this.selection , monto, total,fecha).subscribe((data: any) => {
              if (data.message == 'Transaction Ok') {
                this.router.navigate(['main/resumen']);
              }
            });
          }


  }
  resta(x: number, y: number){
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
    console.log(decimal1 - decimal2);



    result = parseFloat(entero1) - parseFloat(entero2) + Math.abs(parseFloat(decimal1) / 10 - parseFloat(decimal2) / 10);


    return result ;


 }

}
