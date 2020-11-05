import { Component, OnInit } from '@angular/core';
import { FinanceService } from 'src/app/services/finance.service';

@Component({
  selector: 'app-add-proposito',
  templateUrl: './add-proposito.component.html',
  styleUrls: ['./add-proposito.component.css']
})
export class AddPropositoComponent implements OnInit {
  //el arreglo es de modulos pero da pajita cambiar el nombre
  materiales: any[];

  constructor(private finance: FinanceService) {
    this.finance.getModules().subscribe((data:any)=>{
      this.materiales=data;
      console.log(this.materiales);
      
    });

   }

  ngOnInit(): void {
  }
  addPurpose( moduleid:number, name:string){
    this.finance.postPurpose(name,moduleid).subscribe((data:any)=>{
      console.log(data);
      
    })
  }

}
