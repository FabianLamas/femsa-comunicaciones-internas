import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  animar(foto) {
    let div1: any = document.getElementById("img1");
    let div2: any = document.getElementById("img2");
    let div3: any = document.getElementById("img3");
    let div4: any = document.getElementById("img4");

    switch (foto) {
      case 1:
        div2.style.display = 'none';
        div3.style.display = 'none';
        div4.style.display = 'none';
        div1.className = 'col-12 miAnimacion';
        break;
      case 2:
        div2.className = 'col-12 miAnimacion2';
        div1.style.display = 'none';
        div3.style.display = 'none';
        div4.style.display = 'none';
        
        break;
      case 3:
        div2.style.display = 'none';
        div1.style.display = 'none';
        div4.style.display = 'none';
        div3.className = 'col-12 miAnimacion';
        break;
      case 4:
        div2.style.display = 'none';
        div3.style.display = 'none';
        div1.style.display = 'none';
        div4.className = 'col-12 miAnimacion';
        break;
      default:
        console.log('no deberia entrar aca');
        break;
    }
  }
}
