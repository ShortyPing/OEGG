import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicDirectorsComponent } from './public-directors.component';

describe('PublicDirectorsComponent', () => {
  let component: PublicDirectorsComponent;
  let fixture: ComponentFixture<PublicDirectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicDirectorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicDirectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
