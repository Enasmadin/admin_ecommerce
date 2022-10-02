import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProducetService {

  constructor( private http: HttpClient) { }
  getallproductes()
  {
     return this.http.get(environment.baseApi+'products');
  }
  getallcatogary()
  {
    return this.http.get(environment.baseApi+'products/categories');
  }
  getprodbycatogary( keyword:string)
  {
    return this.http.get(environment.baseApi+'products/category/'+ keyword);
  }
  getproducetbyid( id :any)
  {
     return this.http.get(environment.baseApi + 'products/'+id)
  }

}
