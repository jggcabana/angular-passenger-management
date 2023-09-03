import { Component } from '@angular/core';
import { Card } from './../models/card';
import { CardService } from '../services/card-service';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.css']
})
export class CardInfoComponent {
  constructor(private _cardService : CardService) { }
  card: Card | null = null;

  ngOnInit() {
    this._cardService.selectedCard.subscribe(card => this.card = card);
  }
}
