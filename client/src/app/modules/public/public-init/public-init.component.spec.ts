import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicInitComponent } from './public-init.component';

describe('PublicInitComponent', () => {
  let component: PublicInitComponent;
  let fixture: ComponentFixture<PublicInitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicInitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
