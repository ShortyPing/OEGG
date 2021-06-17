import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicPrivacyComponent } from './public-privacy.component';

describe('PublicPrivacyComponent', () => {
  let component: PublicPrivacyComponent;
  let fixture: ComponentFixture<PublicPrivacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicPrivacyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicPrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
