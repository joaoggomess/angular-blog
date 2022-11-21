import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-title.component.html',
  styleUrls: ['./small-title.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input()
  photoCover: string = 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EAFF214E90B9173721F3961D1E9F52D8EAD4B948226DEC45688879F2050F6359/scale?width=1200&aspectRatio=1.78&format=jpeg';
  @Input()
  cardTitle: string = 'A noticia é quentinha da hora';

  constructor() { }
  
  ngOnInit(): void {
  }

}
