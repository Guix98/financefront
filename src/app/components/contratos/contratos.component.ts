import { Component, OnInit } from '@angular/core';
import { FinanceService } from 'src/app/services/finance.service';

@Component({
  selector: 'app-contratos',
  templateUrl: './contratos.component.html',
  styleUrls: ['./contratos.component.css']
})
export class ContratosComponent implements OnInit {
  items: any[];

  aux: number;
  subtitle: string;
  payments: any[];
  lastpay = {balance: 0};

  constructor(private finance: FinanceService) {
    this.subtitle = '';
    this.lastpay.balance = 0;
    this.finance.getContractsResume().subscribe((data: any) => {
      this.items = data;
      this.aux = this.items.length;

    });
  }

  ngOnInit(): void {
  }
  takeDate(inicio: string, final: string){
    const ini = new Date(inicio);
    const fin = new Date(final);
    this.subtitle = 'Del: ' + ini.getDate().toString() + '-' + ini.getMonth().toString() + '-' +
     ini.getFullYear().toString() + '    Al:' + fin.getDate().toString() + '-' +
      fin.getMonth().toString() + '-' + fin.getFullYear().toString();
  }
  loadModal(id: number){
    this.finance.getAllPaymentsById(id).then((data: any) => {
        this.payments = data;
        console.log(this.payments);
        this.aux = this.payments.length - 1;
        this.lastpay = this.payments[this.aux];
        console.log(this.lastpay);
        

    });
  }


}
