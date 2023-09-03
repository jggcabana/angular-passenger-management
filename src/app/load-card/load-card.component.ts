import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CardService } from '../services/card-service';
import { Card } from '../models/card';

@Component({
  selector: 'app-load-card',
  templateUrl: './load-card.component.html',
  styleUrls: ['./load-card.component.css']
})
export class LoadCardComponent {
  constructor(private fb : FormBuilder, private _cardService : CardService) { }

  card : Card | null = null;
  hasLoaded:boolean = false;
  change: number = 0;
  cashDenominations :number[] = [100, 200, 500, 1000];
  loadCardForm = this.fb.group({
    loadAmount: [0, Validators.required],
    payment: [0, [Validators.required, Validators.min(1)]]
  });

  ngOnInit() : void {
    this._cardService.selectedCard.subscribe(card => this.card = card);
  }

  get loadAmount() : number {
    return this.loadCardForm.get('loadAmount')?.value || 0;
  }

  get payment() : number {
    return this.loadCardForm.get('payment')?.value || 0;
  }
  
  onLoadCard(): void{
    // if load success
    if(this.card){
      this.change = this.payment - this.loadAmount;
      let newBalance = this.card.currentBalance + this.loadAmount;
      this._cardService.loadCard(this.card.id, newBalance);
      this.hasLoaded = true;
    }
  }
}
