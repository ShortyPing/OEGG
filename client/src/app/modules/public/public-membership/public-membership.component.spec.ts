import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicMembershipComponent } from './public-membership.component';

describe('PublicMembershipComponent', () => {
  let component: PublicMembershipComponent;
  let fixture: ComponentFixture<PublicMembershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicMembershipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicMembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
