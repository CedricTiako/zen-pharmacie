import { Component, OnInit } from '@angular/core';
import {AlertService} from "../../services/alert/alert.service";
import {AuthentificationService} from "../../services/authentification/authentification.service";
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'app-select-language',
  templateUrl: './select-language.page.html',
  styleUrls: ['./select-language.page.scss'],
})
export class SelectLanguagePage implements OnInit {

  isLoading = false;
  currentLanguage = '';
  currentLanguageSelect = '';

  constructor(private alertService: AlertService, private authService: AuthentificationService, private userService: UserService) { }

  ngOnInit() {
    this.currentLanguageSelect = this.currentLanguage;
  }

  saveLanguage() {
    this.isLoading = true;
  }

}
