import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RollHistoryService {

  constructor() { }

  rollHistory: any[] = [];

  addRollHistory = (rHistory: any) => {
    this.rollHistory = [
      ...this.rollHistory
      , rHistory
    ];
  };
}
