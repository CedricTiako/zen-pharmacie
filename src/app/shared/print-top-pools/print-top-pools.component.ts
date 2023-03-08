import { Component, OnInit } from '@angular/core';
import {Poll} from '../../models/poll';
import {PollService} from '../../services/poll/poll.service';

@Component({
  selector: 'app-print-top-pools',
  templateUrl: './print-top-pools.component.html',
  styleUrls: ['./print-top-pools.component.scss'],
})
export class PrintTopPoolsComponent implements OnInit {

  polls: Poll[] = [];

  constructor(private pollService: PollService) { }

  ngOnInit() {
    this.pollService.getTopPolls().then(
      (data) => {
        this.polls = data;
      }
    );
  }

}
