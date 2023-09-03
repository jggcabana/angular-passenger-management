import { Component } from '@angular/core';
import { CardService } from '../services/card-service';
import { Card } from '../models/card';
import * as dayjs from 'dayjs';

const DEFAULT_FORMAT = 'DD MMM YYYY';

@Component({
  selector: 'app-card-table',
  templateUrl: './card-table.component.html',
  styleUrls: ['./card-table.component.css']
})

export class CardTableComponent {
  constructor(private _cardService : CardService) { }

  dataSource :Card[] = [];
  selectedCard : Card | null = null;

  columns : any[] = [
    {
      columnDef: 'id',
      header: 'Card Id',
      cell: (card : Card) => `${card.id}`
    },{
      columnDef: 'lastUsed',
      header: 'Last Used',
      cell: (card : Card) => card.lastUsed ? `${dayjs(card.lastUsed).format(DEFAULT_FORMAT)}` : 'N/A'
    },{
      columnDef: 'currentBalance',
      header: 'Current Balance',
      cell: (card : Card) => `${card.currentBalance}`
    },{
      columnDef: 'inTransit',
      header: 'In Transit',
      cell: (card : Card) => (card.inTransit ? 'Yes' : 'No')
    },{
      columnDef: 'cardType',
      header: 'Card Type',
      cell: (card : Card) => `${card.cardType.description}`
    },{
      columnDef: 'baseRate',
      header: 'Base Rate',
      cell: (card : Card) => `${card.cardType.baseRate}`
    }
  ];

  displayedColumns = this.columns.map(x => x.columnDef);

  getCards() {
    // this._cardService.fetchCards()
    //   .subscribe(data => {
    //     this.dataSource = data
    //   });
    this._cardService.fetchCards();
    this._cardService.cardTableSource.subscribe(data => this.dataSource = data);
  }

  ngOnInit() : void {
    this.getCards();
  }

  onRowClick(card: Card) : void {
    // this.selectedCard = card;
    this._cardService.changeCard(card);
  }
}
