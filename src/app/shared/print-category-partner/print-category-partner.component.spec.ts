import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrintCategoryPartnerComponent } from './print-category-partner.component';

describe('PrintCategoryPartnerComponent', () => {
  let component: PrintCategoryPartnerComponent;
  let fixture: ComponentFixture<PrintCategoryPartnerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintCategoryPartnerComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrintCategoryPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
