import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RollHistoryService } from '../roll-history.service';

@Component({
  selector: 'app-die-roller',
  templateUrl: './die-roller.component.html',
  styleUrls: ['./die-roller.component.css']
})
export class DieRollerComponent implements OnInit {

  constructor(
    // this gives us access to the service we just edited! :)
    public rollHistorySvc: RollHistoryService
  ) { }

  ngOnInit(): void {
  }

  @Input("side-count")
  sideCount = "6";

  rollValue = 0;

  roll = () => {
    this.rollValue = Math.floor(Math.random() * Number(this.sideCount)) + 1;
    this.dieRolledEventEmitter.emit(this.rollValue);
    this.rollHistorySvc.addRollHistory({
      sideCount: this.sideCount
      , rollValue: this.rollValue
    });
  }

  //decorators are supposed to decorate something
  @Output("die-rolled")
  dieRolledEventEmitter = new EventEmitter<number>();


}
