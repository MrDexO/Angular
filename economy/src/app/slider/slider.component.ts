import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  public album = ['comunismo','bunny', 'capitalismo'];
  public index = 0;

  public foto = this.album[0];

  constructor() { }

  ngOnInit(): void {
  }

  nextPic(): void {
    if(this.index == 2){
      this.index = 0;
    }
    else{
      this.index++;
    }
    this.foto = this.album[this.index];

  }
  prevPic(): void {
    if(this.index == 0){
      this.index = 1;
    }
    else{
      this.index--;
    }
    this.foto = this.album[this.index];
    
  }

}
