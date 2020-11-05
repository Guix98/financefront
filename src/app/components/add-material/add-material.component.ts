import { Component, OnInit } from '@angular/core';
import { FinanceService } from 'src/app/services/finance.service';

@Component({
  selector: 'app-add-material',
  templateUrl: './add-material.component.html',
  styleUrls: ['./add-material.component.css']
})
export class AddMaterialComponent implements OnInit {

  constructor(private finance: FinanceService) {

   }

  ngOnInit(): void {
  }
  addMaterial(name: string, unit: string, refprice: number){
    this.finance.postMaterial(name, unit, refprice).subscribe((data: any) => {
      console.log(data);

    });
  }

}
