import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicGoalsComponent } from './public-goals.component';

describe('PublicGoalsComponent', () => {
  let component: PublicGoalsComponent;
  let fixture: ComponentFixture<PublicGoalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicGoalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
