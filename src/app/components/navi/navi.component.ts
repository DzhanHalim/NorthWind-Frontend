import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logged(){
     if(localStorage.getItem("token")!==null){
      return true
     }
     return false;
   
      
    
  }
  logOut(){
    localStorage.removeItem("token");
  }
}
