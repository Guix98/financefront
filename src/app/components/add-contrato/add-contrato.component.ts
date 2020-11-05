import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FinanceService } from 'src/app/services/finance.service';

@Component({
  selector: 'app-add-contrato',
  templateUrl: './add-contrato.component.html',
  styleUrls: ['./add-contrato.component.css']
})
export class AddContratoComponent implements OnInit {
  companies: any[];

  constructor(private finance: FinanceService,
              private router: Router) {
      this.finance.getCompanies().subscribe((data: any) => {
        this.companies = data;
      });
     }

  ngOnInit(): void {
  }
  addContract(company: number, detail: string, total: number, signdate: string, obs: string){
    this.finance.postContract(company, detail, total, signdate, obs)
    .subscribe((data: any) => {

    });
    // tslint:disable-next-line: no-unused-expression
    this.router.navigate['main/resumen'];


  }

}
