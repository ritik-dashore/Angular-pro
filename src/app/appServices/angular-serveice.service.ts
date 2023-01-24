import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AngularServeiceService {

  constructor(private http:HttpClient) { }
  ngService(){
    alert('this is ng service')
  }
  userDetails:any=[
    {name:'ram', email:'ritik@gmail.com', gender:'Male', pass:123},
    {name:'Mohan', email:'mohan@gmail.com', gender:'Male', pass:456}
  ]
  product():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
  // product():Observable<any>{
  //   return this.http.get('https://jsonplaceholder.typicode.com/users');
  // }
}
