import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  teamTravelerIsShown : boolean=false;
  mauticMonitoringIsShown : boolean=false;
  portfolioIsShown : boolean=false;
  pokedexIsShown : boolean=false;
  venobox:any;
  constructor() { }
  detailOnClick(project:String){
    if(project=="teamTraveler"){
      this.teamTravelerIsShown = !this.teamTravelerIsShown;
      this.mauticMonitoringIsShown=false;
      this.portfolioIsShown =false;
      this.pokedexIsShown=false;
    }
    else if(project=="mauticMonitoring"){
      this.mauticMonitoringIsShown = !this.mauticMonitoringIsShown;
      this.teamTravelerIsShown=false;
      this.portfolioIsShown =false;
      this.pokedexIsShown=false;
    }
    else if(project=="portfolio"){
      this.portfolioIsShown = !this.portfolioIsShown;
      this.teamTravelerIsShown=false;
      this.mauticMonitoringIsShown =false;
      this.pokedexIsShown=false;
    }
    else if(project=="pokedex"){
      this.pokedexIsShown = !this.pokedexIsShown;
      this.teamTravelerIsShown=false;
      this.mauticMonitoringIsShown =false;
      this.portfolioIsShown=false;
    }
    

  }
  onMouse(idLink:String, idImage:String){
    $( '#' + idLink ).on("mouseenter", function() {
      $('#' + idImage).css( "opacity", "0.3" );
      $('#' + idLink).css( "opacity", "1" );
    }).on('mouseleave', function() {
      $('#' + idImage).css( "opacity", "1" );
      $('#' +idLink).css( "opacity", "0" );
    }
      
    );

    $( '#' + idImage ).on("mouseenter", function() {
      $('#' + idImage).css( "opacity", "0.3" );
      $('#' +idLink).css( "opacity", "1" );
    }).on('mouseleave', function() {
      $('#' + idImage).css( "opacity", "1" );
      $('#' +idLink).css( "opacity", "0" );
    }
    );
  }
  ngOnInit(): void {
   this.onMouse("portfolio-link","portfolio-img");
   this.onMouse("teamTraveler-link","teamTraveler-img");
   this.onMouse("mautic-link","mautic-img");
   this.onMouse("pokedex-link","pokedex-img");
   
   this.venobox=$('.venobox');
   this.venobox.venobox(); 
   
  }

}
