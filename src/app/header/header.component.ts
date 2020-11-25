import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.js-scroll-trigger').on('click',
      function(): void
      {
        $('.navbar-collapse').toggle();
      }
    );
    $('.nav').on('click',
    function(): void
    {
      $('.navbar-collapse').toggle();
    }
  );
  }

}
