import { Component, OnInit } from '@angular/core';
import { FinanceService } from 'src/app/services/finance.service';

@Component({
  selector: 'app-materiales',
  templateUrl: './materiales.component.html',
  styleUrls: ['./materiales.component.css']
})
export class MaterialesComponent implements OnInit {

  items: any[];

  aux: number;
  subtitle: string;
  oneInfo: any[];
  total: any = {
    quantity: 0,
    total: 0,
  };

  constructor(private finance: FinanceService) {

    this.finance.getMaterialsResume().subscribe((data: any) => {
      this.items = data;

    });


  }
  ngOnInit(): void {
  }

  loadModal(material: number, purpose: number){
        this.finance.getMaterialInfo(material, purpose).then((data: any) => {
          this.oneInfo = data;
          this.aux = this.oneInfo.length;
          for (let i = 0; i < this.oneInfo.length; i++) {
              this.total.quantity=this.total.quantity+this.oneInfo[i].quantity;
              this.total.total=this.total.total+this.oneInfo[i].total;

          }

        });
  }

}
