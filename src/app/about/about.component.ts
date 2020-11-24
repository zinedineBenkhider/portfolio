import { Component, OnInit } from '@angular/core';
import * as awesom from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  mapMarker: any ;
  building:any;
  mobile:any;
  email:any;
  birthday:any;
  badge:any;
  home:any;
  constructor() {
    
   }

  ngOnInit(): void {
    this.mapMarker=awesom.faMapMarker;
    this.building=awesom.faCity;
    this.email=awesom.faMailBulk;
    this.mobile=awesom.faMobile;
    this.birthday=awesom.faBirthdayCake;
    this.badge=awesom.faGraduationCap;
    this.home=awesom.faLaptopHouse;
  }

}
