import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-test-animation',
  templateUrl: './test-animation.component.html',
  styleUrls: ['./test-animation.component.css']
})
export class TestAnimationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  animar() {
    let div1: any = document.getElementById("img1");
    let div2: any = document.getElementById("img2");
    let div3: any = document.getElementById("img3");
    let div4: any = document.getElementById("img4");

     div2.style.display = "none";
     div3.style.display = "none";
     div4.style.display = "none";
  

    div1.className = "col-12 miAnimacion";
    
  }
}
