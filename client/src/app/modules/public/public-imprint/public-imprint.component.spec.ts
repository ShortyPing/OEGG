import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicImprintComponent } from './public-imprint.component';

describe('PublicImprintComponent', () => {
  let component: PublicImprintComponent;
  let fixture: ComponentFixture<PublicImprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicImprintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicImprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
