import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CardService } from '../services/card-service';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent {
  constructor(private fb : FormBuilder, private _cardService : CardService) {  }

  selectedCard = { name: null, cardTypeId: 0 };

  createCardForm = this.fb.group({
    idNo: ['', Validators.pattern('(\\d{4}|\\d{2})-\\d{4}-\\d{4}')]
  });

  cardOptions = [{
    name: "Regular",
    cardTypeId: 1
  },{
    name: "Discounted",
    cardTypeId: 2
  },{
    name: "Discounted Special",
    cardTypeId: 3
  }];

  selectCard(card: any){
    this.selectedCard = card;
  }

  get idNo() :string {
    return this.createCardForm.get('idNo')?.value || '';
  }

  createCard(){
    this._cardService.createCard(this.selectedCard.cardTypeId, this.idNo);
  }

}
