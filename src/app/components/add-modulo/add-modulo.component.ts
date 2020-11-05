import { Component, OnInit } from '@angular/core';
import { FinanceService } from '../../services/finance.service';

@Component({
  selector: 'app-add-modulo',
  templateUrl: './add-modulo.component.html',
  styleUrls: ['./add-modulo.component.css']
})
export class AddModuloComponent implements OnInit {

  constructor(private finance: FinanceService) { }

  ngOnInit(): void {
  }
  addModule(name:string, budget:number){
    this.finance.postModule(name,budget).subscribe((data:any)=>{
      console.log(data);
      
    })
  }

}
