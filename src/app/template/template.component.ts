import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

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
  constructor() { }
  login(myform:NgForm){
    console.log(myform.control.get('username')?.valid)
    this.username = myform.value.username;
    this.email = myform.value.email;
    this.pass = myform.value.pass;
    this.gender = myform.value.gender;
  }
  
  ngOnInit(): void {
  }

}
