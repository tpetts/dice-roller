import { Component, OnInit } from '@angular/core';
import { RollHistoryService } from '../roll-history.service';

@Component({
  selector: 'app-roll-history',
  templateUrl: './roll-history.component.html',
  styleUrls: ['./roll-history.component.css']
})
export class RollHistoryComponent implements OnInit {

  constructor(
    public rHistorySvc: RollHistoryService
  ) { }

  ngOnInit(): void {
  }

}
