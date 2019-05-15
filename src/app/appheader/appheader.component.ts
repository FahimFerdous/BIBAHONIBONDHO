import { Component, OnInit } from '@angular/core';


declare var $:any;

@Component({
  selector: 'app-appheader',
  templateUrl: './appheader.component.html',
  styleUrls: ['./appheader.component.css']
})
export class AppheaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  var yourNavigation = $(".header-container");
  
  var stickyDiv = "sticky";
  var yourHeader = $('.header-top').height();

$(window).scroll(function() {
if( $(this).scrollTop() > yourHeader ) {
  yourNavigation.addClass(stickyDiv);
 
} else {
  yourNavigation.removeClass(stickyDiv);
  
}

});
  }

}
