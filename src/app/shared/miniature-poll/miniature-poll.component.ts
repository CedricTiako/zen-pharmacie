import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import {Poll} from '../../models/poll';
import {AuthentificationService} from '../../services/authentification/authentification.service';
import {PollService} from '../../services/poll/poll.service';
import {UserService} from '../../services/user/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-miniature-poll',
  templateUrl: './miniature-poll.component.html',
  styleUrls: ['./miniature-poll.component.scss'],
})
export class MiniaturePollComponent implements OnInit {

  @Input() data: Poll;
  oldReponse = -2;
  reponse = -1;
  currentUser: User = null;
  currentGuest = '';

  constructor(private authService: AuthentificationService,
    private pollService: PollService,
     private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.authService.isAuthenticated().then(
      (result) => {
        if(result) {
          this.userService.getCurrentUtilisateur().then(
            (data1) => {
              this.currentUser = data1;
              if(this.data.choice1.includes(data1.id)) {
                this.oldReponse = 0;
              } else if(this.data.choice2.includes(data1.id)) {
                this.oldReponse = 1;
              } else if(this.data.choice3.includes(data1.id)) {
                this.oldReponse = 2;
              } else if(this.data.choice4.includes(data1.id)) {
                this.oldReponse = 3;
              } else if(this.data.choice2.includes(data1.id)) {
                this.oldReponse = 4;
              } else {
                this.oldReponse = -1;
              }
              this.reponse = this.oldReponse;
            }
          );
        } else {
          this.currentGuest = this.authService.getAnonymeId();
          if(this.data.choice1.includes(this.authService.getAnonymeId())) {
            this.oldReponse = 0;
          } else if(this.data.choice2.includes(this.authService.getAnonymeId())) {
            this.oldReponse = 1;
          } else if(this.data.choice3.includes(this.authService.getAnonymeId())) {
            this.oldReponse = 2;
          } else if(this.data.choice4.includes(this.authService.getAnonymeId())) {
            this.oldReponse = 3;
          } else if(this.data.choice2.includes(this.authService.getAnonymeId())) {
            this.oldReponse = 4;
          } else {
            this.oldReponse = -1;
          }
          this.reponse = this.oldReponse;
        }
      }
    );
  }

  getValueTraduct(texte: string) {
    let result; let result2;
    //const result1 = texte.split((this.translate.currentLang ? this.translate.currentLang : 'en') + '>');
    //if(result1.length > 1) { result2 = result1[1].split('</'); }
    //if(result1.length > 1 && result2.length > 0) { result = result2[0]; }
    return result ? result : texte;
  }

  updateResponse(i: number) {
    this.reponse = i;
  }

  saveResponse() {
    const tmpIdSave = this.currentUser ? this.currentUser.id : this.authService.getAnonymeId();
    this.cleanAllChoice();
    switch (this.reponse) {
      case 0:
        this.data.choice1.push(tmpIdSave);
        break;
      case 1:
        this.data.choice2.push(tmpIdSave);
        break;
      case 2:
        this.data.choice3.push(tmpIdSave);
        break;
      case 3:
        this.data.choice4.push(tmpIdSave);
        break;
      case 4:
        this.data.choice5.push(tmpIdSave);
        break;
    }
    this.pollService.updatePoll(this.data).then(
      () => {
        this.oldReponse = this.reponse;
        this.router.navigate(['poll/' + this.data.id]);
      }
    );
  }

  cleanAllChoice() {
    this.data.choice1.slice(this.data.choice1.indexOf(this.currentUser ? this.currentUser.id : this.currentGuest), 1);
    this.data.choice2.slice(this.data.choice2.indexOf(this.currentUser ? this.currentUser.id : this.currentGuest), 1);
    this.data.choice3.slice(this.data.choice3.indexOf(this.currentUser ? this.currentUser.id : this.currentGuest), 1);
    this.data.choice4.slice(this.data.choice4.indexOf(this.currentUser ? this.currentUser.id : this.currentGuest), 1);
    this.data.choice5.slice(this.data.choice5.indexOf(this.currentUser ? this.currentUser.id : this.currentGuest), 1);
  }

}
