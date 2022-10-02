import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartservicesService {

  constructor( private http:HttpClient) { }

  getallcart( param?:any)
  {
    let params = new HttpParams();
    params.append("startDate",param?.start).append("endDate",param?.end)
    return this.http.get(environment.baseApi + 'carts',{params});
  }
  deletecart(id:number)
  {
     return this.http.delete(environment.baseApi+'carts/' + id)
  }
}
