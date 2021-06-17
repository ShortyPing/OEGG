import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicLinksComponent } from './public-links.component';

describe('PublicLinksComponent', () => {
  let component: PublicLinksComponent;
  let fixture: ComponentFixture<PublicLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
