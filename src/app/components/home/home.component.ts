import { Component, OnInit } from '@angular/core';
import { AllDataService } from 'src/app/all-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faviconColor: String="aliceblue";
  likeiconColor: String="aliceblue";
  dislikeiconColor: String="aliceblue";
  addiconColor: String="aliceblue";
  addToList:boolean=false;
  cardData:any=[];
  constructor(private serviceObj:AllDataService) { }
  

  ngOnInit(): void {
    this.serviceObj.getCards().subscribe(res=>{
      this.cardData=res;
      console.log("get123",this.cardData);
    })
  }
  fav(){
    if(this.faviconColor=="aliceblue")
    this.faviconColor="#E50914";

    else
    this.faviconColor="aliceblue";
  }
  dislike(){
   // this.dislikeiconColor="#E50914";

    if(this.dislikeiconColor=="aliceblue")
    this.dislikeiconColor="#E50914";

    else
    this.dislikeiconColor="aliceblue";
  }
  like(){
   // this.likeiconColor="#E50914";

    if(this.likeiconColor=="aliceblue")
    this.likeiconColor="#E50914";

    else
    this.likeiconColor="aliceblue";
  }
  add(){
    if(!this.addToList){
      this.addToList=true;
      this.addiconColor="#E50914";
    }
      
    else
      this.addToList=false;
   

  }
 
}
