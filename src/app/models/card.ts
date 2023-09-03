import { CardType } from './card-type';

export interface Card {
    cardTypeId: number
    createdDate: string
    expiresByDate: any
    lastUsed: string
    currentBalance: number
    inTransit: boolean
    tripCount: number
    tripCountToday: number
    cardType: CardType
    id: number
    dateCreated: string
    dateModified: any
  }
  