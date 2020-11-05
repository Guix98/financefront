import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map  } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {

  constructor(private http: HttpClient) { }
  private localurl = 'https://financeserver.herokuapp.com/api/v1/';
  getAll(): Observable<any> {
    const headers = new HttpHeaders();


    return this.http.get(this.localurl + 'transactions/', {headers});
  }
  getContracts(): Observable<any> {
    const headers = new HttpHeaders();


    return this.http.get(this.localurl + 'contracts/', {headers});
  }

  getContractsResume(): Observable<any> {
    const headers = new HttpHeaders();


    return this.http.get(this.localurl + 'contractsResumes/', {headers});
  }
  getMaterialsResume(): Observable<any> {
    const headers = new HttpHeaders();


    return this.http.get(this.localurl + 'materialResumes/', {headers});
  }
  getCompanies(): Observable<any> {
    const headers = new HttpHeaders();


    return this.http.get(this.localurl + 'companys/', {headers});
  }
  getModules(): Observable<any> {
    const headers = new HttpHeaders();


    return this.http.get(this.localurl + 'modules/', {headers});
  }
  getPurposes(): Observable<any> {
    const headers = new HttpHeaders();


    return this.http.get(this.localurl + 'purposes/', {headers});
  }
  getMaterials(): Observable<any> {
    const headers = new HttpHeaders();


    return this.http.get(this.localurl + 'materials/', {headers});
  }


  getUsers(): Observable<any> {
    const headers = new HttpHeaders();


    return this.http.get(this.localurl + 'users/', {headers});
  }
  getLast(): Observable<any> {
    const headers = new HttpHeaders();


    return this.http.get(this.localurl + 'transactions/last', {headers});
  }
  // tslint:disable-next-line: variable-name
  postEgreso(concept: string, observations: string, clasification: string, amount: number, total: number, date: string): Observable<any> {
    const date1 = new Date(date);

    const headers = new HttpHeaders();
    const body = {
      transaction_type : 'Egreso',
      concept : concept,
      observations : observations,
      clasification : clasification,
      date: date1,
      amount : amount,
      total : total
    };


    return this.http.post(this.localurl + 'transactions/add', body, {  headers });
  }
  postIngreso(concept: string, observations: string, amount: number, total: number,clasification: string, date: string): Observable<any> {
    const date1 = new Date(date);

    const headers = new HttpHeaders();
    const body = {
      transaction_type : 'Ingreso',
      concept : concept,
      observations : observations,
      clasification : clasification,
      date: date1,
      amount : amount,
      total : total
    
    };


    return this.http.post(this.localurl + 'transactions/add', body, {  headers });
  }
  postContract(company :number, detail :string, total :number, signdate :string, observations :string): Observable<any> {
    const date1 = new Date(signdate);

    const headers = new HttpHeaders();
    const body = {
    detail: detail, 
    amount: total, 
    observations: observations, 
    id_company: company, 
    contract_date: date1, 
    
    };


    return this.http.post(this.localurl + 'contracts/add', body, {  headers });
  }
  postPayment(contract: number, amount: number, paymentdate: string, obs: string, balance: number, acumulado:number): Observable<any> {
    const date1 = new Date(paymentdate);

    const headers = new HttpHeaders();
    const body = {
      "amount": amount,
      "balance": balance,
      "total": acumulado,
      "id_contract": contract,
      "payment_date": date1,
      "observations": obs
    
    };
    
    return this.http.post(this.localurl + 'payments/add', body, {  headers });
  }

  postModule(name:string, budget: number, ): Observable<any> {
    

    const headers = new HttpHeaders();
    const body = {
      name,
      budget
    
    };
    
    return this.http.post(this.localurl + 'modules/add', body, {  headers });
  }
  postPurpose(name:string, moduleid: number): Observable<any> {
    

    const headers = new HttpHeaders();
    const body = {
      name,
      id_module: moduleid
    
    };
    
    return this.http.post(this.localurl + 'purposes/add', body, {  headers });
  }
  postPurchase(unitprice:number, quantity:number, total:number, purposeid:number, materialid: number ): Observable<any> {
    

    const headers = new HttpHeaders();
    const body = {
      unit_price: unitprice,
      quantity,
      total,
      id_purpose: purposeid,
      id_material: materialid

    };
    
    return this.http.post(this.localurl + 'purchases/add', body, {  headers });
  }
  postMaterial(name:string, unit: string, refprice: number, ): Observable<any> {
    

    const headers = new HttpHeaders();
    const body = {
      name,
      unit,
      ref_price: refprice
    
    };
    
    return this.http.post(this.localurl + 'materials/add', body, {  headers });
  }



  async getLastPaymentbyId(id:number){
    const headers = new HttpHeaders();
    const idx = id.toString();
    return this.http.post(this.localurl + 'payments/last', {contractId: idx}, {  headers }).pipe(map((data:any)=>{
      return data;
    })).toPromise();
  }
  async getAllPaymentsById(id:number){
    const headers = new HttpHeaders();
    const idx = id.toString();
    return this.http.post(this.localurl + 'payments/contract', {contractId: idx}, {  headers }).pipe(map((data:any)=>{
      return data;
    })).toPromise();
  }
  async getMaterialInfo(material_id:number, purpose_id:number){
    const headers = new HttpHeaders();
    return this.http.post(this.localurl + 'purchases/find', {material_id,purpose_id}, {  headers }).pipe(map((data:any)=>{
      return data;
    })).toPromise();
  }

  async auth(pswd: string){
    pswd = pswd + 'qwertyuiop';
    const headers = new HttpHeaders();
    const hash = await this.http.get('http://api.hashify.net/hash/sha256/hex?value=' + pswd, {headers})
    .pipe(map((data: any) => {
      return data.Digest;

    })).toPromise();
    return hash;
  }
  getTypes(){
    const tipos = ['Tramites', 'Servicios', 'Materiales', 'Otros'];
    return tipos;
  }
  



  }




