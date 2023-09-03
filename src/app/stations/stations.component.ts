import { Component } from '@angular/core';
import { CardService } from '../services/card-service';
import { Card } from '../models/card';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent {
  constructor(private _cardService : CardService) { }
  card : Card | null = null;
  
  ngOnInit() : void {
    this._cardService.selectedCard.subscribe(card => this.card = card);
  }

  enterStation() : void {
    if(this.card)
      this._cardService.enterStation(this.card.id);
  }

  exitStation() : void {
    if(this.card)
      this._cardService.exitStation(this.card.id);
  }

  stationList = [
    {
      name: "Recto",
      baseFare: 15.00
    },{
      name: "Legarda",
      baseFare: 15.00
    },{
      name: "Pureza",
      baseFare: 15.00
    },{
      name: "V. Mapa",
      baseFare: 15.00
    },{
      name: "J. Ruiz",
      baseFare: 15.00
    },{
      name: "Gilmore",
      baseFare: 15.00
    },{
      name: "B. Go-Belmonte",
      baseFare: 15.00
    },{
      name: "Araneta",
      baseFare: 15.00
    },{
      name: "Anonas",
      baseFare: 15.00
    },{
      name: "Katipunan",
      baseFare: 15.00
    },{
      name: "Santolan",
      baseFare: 15.00
    },{
      name: "Marikina",
      baseFare: 15.00
    },{
      name: "Antipolo",
      baseFare: 15.00
    }];


}
