import { Component, OnInit } from '@angular/core';
import { FinanceService } from 'src/app/services/finance.service';

@Component({
  selector: 'app-add-compra',
  templateUrl: './add-compra.component.html',
  styleUrls: ['./add-compra.component.css']
})
export class AddCompraComponent implements OnInit {
 //el arreglo es de modulos pero da pajita cambiar el nombre
 materiales: any[];
 modules: any[];

 constructor(private finance: FinanceService) {
   this.finance.getMaterials().subscribe((data:any)=>{
     this.materiales=data;
      
   });
   this.finance.getPurposes().subscribe((data:any)=>{
    this.modules=data;
     
  });

  }
  ngOnInit(): void {
  }
  addPurchase(material :number, purpose :number, unitprice :number, quantity :number){

    var total = unitprice*quantity;
    console.log(total);



    this.finance.postPurchase(unitprice,quantity,total,purpose,material).subscribe((data: any) => {
      console.log(data);

    });

  }

}
