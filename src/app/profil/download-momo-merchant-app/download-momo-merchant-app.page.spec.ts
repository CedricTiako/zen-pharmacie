import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DownloadMomoMerchantAppPage } from './download-momo-merchant-app.page';

describe('DownloadMomoMerchantAppPage', () => {
  let component: DownloadMomoMerchantAppPage;
  let fixture: ComponentFixture<DownloadMomoMerchantAppPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadMomoMerchantAppPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DownloadMomoMerchantAppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
