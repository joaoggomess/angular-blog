import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover: string = 'https://veja.abril.com.br/wp-content/uploads/2020/09/1-GettyImages-517387700.jpg.jpg';
  contentTitle: string = 'Alberto UmeStalo estira suas línguas para camêra';
  contentDescription: string = 'Mesmo depois de alegar que tudo é relativo ele continua sem relativizar nada. Leva tudo a sério mesmo, o tempo todo. Não deve ter se lido.';

  constructor( ) { }

  ngOnInit(): void {
  }

}
