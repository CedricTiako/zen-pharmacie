import { Component, OnInit } from '@angular/core';
import {GroupMicroService} from '../models/groupMicroService';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 800 ,
    slidesPerView: 0,
    spaceBetween: 10,
    slidesOffsetBefore:10,
    slidesOffsetAfter:10
  };
  categorieSelect = '';
  groupeMS: GroupMicroService[] = [];

  constructor() { }

  ngOnInit() {
  }

}
