import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AllDataService } from 'src/app/all-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data:any;
  submitted:boolean=false;
  registerForm!: FormGroup;
 
  constructor(private serviceObj:AllDataService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      userName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
      // address: this.formBuilder.group({
      //   street: [],
      //   zip: [],
      //   city: []
      // })
    });
  }
  submitFunction(data:any){
    this.submitted=true;
    console.log("send",data)
   
    this.serviceObj.sendData(data).subscribe(
      x=>{
        console.log("send",x)
      }
    )
    this.serviceObj.getData().subscribe(res=>{
      this.data=res;
      console.log("get",this.data);
    })
  }

}
