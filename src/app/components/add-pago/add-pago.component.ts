import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FinanceService } from 'src/app/services/finance.service';

@Component({
  selector: 'app-add-pago',
  templateUrl: './add-pago.component.html',
  styleUrls: ['./add-pago.component.css']
})
export class AddPagoComponent implements OnInit {
  contracts: any[];
  lastc: any;
  firstContract: any;

  constructor(private finance: FinanceService,
              private router: Router) {
      this.finance.getContracts().subscribe((data: any) => {
        this.contracts = data;
      });
     }

  ngOnInit(): void {
  }
  addPayment(contract: number, total: number, paymentdate: string, obs: string){
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.contracts.length; i++) {
      if (this.contracts[i].id_contract == contract) {
          this.firstContract = this.contracts[i];
          console.log(this.firstContract);

      }

    }
    let balance: number;
    let acumulate: number;

    this.finance.getLastPaymentbyId(contract).then(res => {

      if (res.length > 0) {
        this.lastc = res[0];
        balance = this.lastc.balance - total;
        acumulate = this.suma(this.lastc.total, total);
      }
      else{
        balance = this.firstContract.amount - total;
        acumulate = total;
      }
      console.log(balance);
      console.log(acumulate);



      this.finance.postPayment(contract, total, paymentdate, obs, balance, acumulate).subscribe((data: any) => {
      console.log(data);
      this.router.navigate(['main/contratos']);

  });




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
