import { Component, OnInit } from '@angular/core';
import { FinanceService } from '../../services/finance.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {
  items: any[];
  ingreso: boolean[] = [];
  aux: number;
  subtitle: string;
  auxitems: any[] = [];
  datefilter: any[] = [];

  constructor(private finance: FinanceService) {
    this.subtitle = '';
    this.finance.getAll().subscribe((data: any) => {
      this.items = data;
      this.auxitems = this.items;
      console.log(this.auxitems);
      
      this.aux = this.items.length;
      
      for (let i = 0; i < this.aux; i++) {
        if (this.items[i].transaction_type == 'Egreso') {
          this.ingreso[i] = false;
        }
        else{
          this.ingreso[i] = true;
        }

      }
    });



  }
  takeDate(inicio: string, final: string){
    this.items = this.auxitems;
    const ini = new Date(inicio);
    const fin = new Date(final);
    this.subtitle = 'Del: ' + ini.getDate().toString() + '-' +
    ini.getMonth().toString() + '-' + ini.getFullYear().toString() +
    '    Al:' + fin.getDate().toString() + '-' + fin.getMonth().toString() + '-' + fin.getFullYear().toString();
    for (let i = 0; i < this.aux; i++) {
      const dt = new Date(this.items[i].date);
      if (dt > ini && dt < fin) {
        this.datefilter[i] = this.items[i];
      }

    }
    this.items = this.datefilter;
  }

  ngOnInit(): void {

    // tslint:disable-next-line: forin

  }

}
