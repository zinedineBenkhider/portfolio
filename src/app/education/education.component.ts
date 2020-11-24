import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']

})
export class EducationComponent implements OnInit {
  stageIsShown: boolean = false ;
  freelanceIsShown : boolean = false;
  alternanceIsShown:boolean = false;
  detailOnClick(id:String) {
    if(id=="alternance_detail"){
      this.alternanceIsShown = !this.alternanceIsShown;
    }
    else if(id=="freelance_detail"){
     this.freelanceIsShown = !this.freelanceIsShown;
    }
    else if(id=="stage_detail"){
      this.stageIsShown = !this.stageIsShown;
    }
   
  }
 
  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
