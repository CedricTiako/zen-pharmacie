import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Partner} from '../../models/partner';
import {Campagne} from '../../models/campagne';

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import {CampagneService} from '../../services/campagne/campagne.service';
import {PartnerService} from '../../services/pharmacy/partner.service';
import {ActivatedRoute} from '@angular/router';
import {ToolsService} from '../../services/tools/tools.service';
import {ApiService} from '../../services/api/api.service';
import {DomSanitizer} from '@angular/platform-browser';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthentificationService} from '../../services/authentification/authentification.service';
import {UserService} from '../../services/user/user.service';
import {PostProof} from '../../models/postProof';
import {PostProofService} from '../../services/post-proof/post-proof.service';
import {User} from '../../models/user';
import {error} from 'protractor';
import {AlertService} from '../../services/alert/alert.service';
import {ReclamationService} from '../../services/reclamation/reclamation.service';
import {Reclamation} from '../../models/reclamation';

@Component({
  selector: 'app-print-momo-flyer',
  templateUrl: './print-momo-flyer.page.html',
  styleUrls: ['./print-momo-flyer.page.scss'],
})
export class PrintMomoFlyerPage implements OnInit {

  currentTab = 1;
  slideOptsGroup = {
    initialSlide: 0,
    speed: 800 ,
    slidesPerView: 0,
    spaceBetween: 10,
    slidesOffsetBefore:10,
    slidesOffsetAfter:10
  };

  imgFile: string | undefined;
  uploadForm = this.formBuilder.group({
    file: ['', Validators.required],
    store: ['', Validators.required],
    campagne: ['', Validators.required],
    language: ['', Validators.required]
  });

  campagnes: Campagne[] = [];
  partner: Partner[] = [];
  postProof: PostProof[] = [];

  isLoadingUploadImage = false;
  currentUser: User;

  isAuthUser = 0;
  isLoadSendMessage = false;

  constructor(private reclamationService: ReclamationService,
     private alertService: AlertService,
     private postProofService: PostProofService,
     private authService: AuthentificationService,
     private userService: UserService,
     private partnerService: PartnerService,
     private formBuilder: FormBuilder,
     private sanitizer: DomSanitizer,
     private apiService: ApiService,
     private route: ActivatedRoute,
     private campagneService: CampagneService,
     private partenerService: PartnerService) { }

  ngOnInit() {
    this.authService.isAuthenticated().then(
      (lala) => {
        if (lala) {
          this.isAuthUser = 1;
          this.userService.getCurrentUtilisateur().then(
            (mmm) => {
              this.currentUser = mmm;
              this.partnerService.getPartner().then(
                (ouistiti) => {
                  const pointe = this;
                  ouistiti.forEach( (doc)=> {
                    if (doc.content.contacts.toString().indexOf(mmm.phone as string) !== -1) {
                      pointe.partner.push(doc as Partner);
                    }
                  });
                }
              );

              this.campagneService.getCampagnes().then(
                (data) => {
                  this.campagnes = data;
                }
              );

              this.postProofService.getPostProofWitchIdUser(mmm.id).then(
                (data) => {
                  this.postProof = data;
                }
              );
            }
          );
        } else { this.isAuthUser = -1; }
      }
    );
  }

  openLink(link) {
    location.href = link;
  }

  onImageChange(e: any) {
    const reader = new FileReader();

    if (e.target.files && e.target.files.length) {
      const [file] = e.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.imgFile = reader.result as string;
        this.uploadForm.patchValue({
          //imgSrc: reader.result
        });
      };
    }
  }

  getValueTraduct(texte: string, langue: string) {
    const wrapper = document.createElement('div');
    wrapper.innerHTML= texte;
    return wrapper.getElementsByTagName(langue).length > 0 ? wrapper.getElementsByTagName(langue)[0].innerHTML : texte;
  }

  uploadImage() {
    this.isLoadingUploadImage = true;
    const gid = new ToolsService();
    this.apiService.addImageForAdresseId( gid.generateId(23).toString() ,
     'images/', this.imgFile ? this.sanitizer.bypassSecurityTrustResourceUrl(this.imgFile).toString() : '').then(
      (docRef: string) => {
        this.postProofService.add(
          new PostProof(this.imgFile ? docRef : '',
           this.currentUser.id, this.uploadForm.value.campagne, this.uploadForm.value.store, this.uploadForm.value.language)).then(
          () => {
            this.imgFile = null;
            this.isLoadingUploadImage = false;
            this.uploadForm.reset();
            this.alertService.print('Send with success',true);
          }, () => {
            this.alertService.print('An error occurred during the operation, please try again',false);
          }
        );
      }, () => {
        this.isLoadingUploadImage = false;
        this.alertService.print('An error occurred while sending the image, please try again',false);
      });
  }

  sendMessage(form: any) {
    this.isLoadSendMessage = true;
    this.reclamationService.add(new Reclamation(form.value.preocupation, this.currentUser.id, form.value.precision)).then(
      () => {
        this.isLoadSendMessage = false;
        this.alertService.print('Send with success',true);
      }, () => {
        this.isLoadSendMessage = false;
        this.alertService.print('An error occurred while sending the image, please try again',false);
    });
  }

}
