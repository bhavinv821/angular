import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.css']
})
export class BikeComponent implements OnInit {

  title = 'Bike list'
  constructor() { 
    console.log("Bike module");
    
  }

  ngOnInit() {
  }

}
