import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FinanceService } from '../../services/finance.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userList: any[];
  aux: number;
  alert: boolean;

  constructor(private finance: FinanceService,
              private router: Router) {
                this.alert = false;
                this.finance.getUsers().subscribe((data: any) => {
                  this.userList = data;
                  this.aux = this.userList.length;

                });
               }

  ngOnInit(): void {
  }
  login(username: string, password: string){

    this.finance.auth(password).then(res =>{
      let currUsr = {
        'username': username,
        'password': res
      };
      console.log(currUsr);
      
      for (let i = 0; i < this.aux; i++) {
        if (this.userList[i].username == currUsr.username && this.userList[i].password == currUsr.password) {
          this.alert = false;
          
          
  
  
         this.router.navigate(['main']);
        }
        else{
          this.alert = true;
  
        }
  
      }
    });
    
  }

}
