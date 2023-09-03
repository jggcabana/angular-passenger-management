import { Component } from '@angular/core';
import { CardService } from './services/card-service';
import { Card } from './models/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _cardService : CardService) { }
  title = 'qless-web';
  card : Card | null = null;

  ngOnInit() : void {
    this._cardService.selectedCard.subscribe(card => this.card = card);
  }
}
