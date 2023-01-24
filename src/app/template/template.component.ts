import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { AngularServeiceService } from '../appServices/angular-serveice.service';
import { customServices } from '../appServices/customServices';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  username:any ="";
  email:any ="";
  pass:any ="";
  gender:any="";
  genders:any =[
    {id:1, value:'Male'},
    {id:2, value:'Female'}
  ]
  constructor(private _services:customServices, private _ngServic:AngularServeiceService) { }
  login(myform:NgForm){
    console.log(myform.control.get('username')?.valid)
    this.username = myform.value.username;
    this.email = myform.value.email;
    this.pass = myform.value.pass;
    this.gender = myform.value.gender;
  }
  userDetails:any;
  ngOnInit(): void {
    this._ngServic.product().subscribe(data => {this.userDetails = data; console.log(this.userDetails)})
    this.userDetails = this._ngServic.userDetails
    console.log(this.userDetails)
  }
  
  call(){
    this._services.massges();
  }
  ngSrv(){
    this._ngServic.ngService();
  }
}
