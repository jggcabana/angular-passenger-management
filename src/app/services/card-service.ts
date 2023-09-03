import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

import { Card } from './../models/card';
import { CardType } from './../models/card-type';

// TODO: Move to .env file
const API_URL = 'https://localhost:6868/api'

@Injectable()
export class CardService {
    constructor(private http : HttpClient) { }

    private cardSubject = new BehaviorSubject<Card | null>(null);
    selectedCard = this.cardSubject.asObservable();

    private cardTableSubject = new BehaviorSubject<Card[]>([]);
    cardTableSource = this.cardTableSubject.asObservable();

    private handleError(error: HttpErrorResponse){
        if(error.error.hasOwnProperty('errors'))
            alert(JSON.stringify(error.error.errors));  
        else
            alert(error.error)
        return throwError(() => new Error(error.error));
    }

    fetchCards() : void {
        // TODO : refresh this once selected card changes
        this.http.get<Card[]>(`${API_URL}/cards`)
            .pipe(catchError(this.handleError))
            .subscribe(cards => this.refreshCardTable(cards));
    }

    loadCard(id: number, newBalance : number) : void {
        let body = {
            newBalance: newBalance
        };

        this.http.post<Card>(`${API_URL}/cards/${id}/load-card`, body)
            .pipe(catchError(this.handleError))
            .subscribe(card => this.changeCard(card));
    }

    exitStation(id:number) : void {
        this.http.post<Card>(`${API_URL}/cards/${id}/exit-station`, {})
            .pipe(catchError(this.handleError))
            .subscribe(card => {
                this.changeCard(card);
                this.fetchCards();
            });
    }

    enterStation(id:number) : void {
        this.http.post<Card>(`${API_URL}/cards/${id}/enter-station`, {})
            .pipe(catchError(this.handleError))
            .subscribe(card => {
                this.changeCard(card);
                this.fetchCards();
            });
    }

    createCard(cardTypeId:number, idNo:string): void {
        let body = {
            cardTypeId: cardTypeId,
            idNo: cardTypeId == 2 ? idNo : ''
        };

        this.http.post<Card>(`${API_URL}/cards`, body)
            .pipe(catchError(this.handleError))
            .subscribe(card => this.fetchCards());
    }

    changeCard(card : Card){
        this.cardSubject.next(card);
    }

    refreshCardTable(cards : Card[]){
        this.cardTableSubject.next(cards);
    }
}
