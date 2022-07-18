import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicNewsReadComponent } from './public-news-read.component';

describe('PublicNewsReadComponent', () => {
  let component: PublicNewsReadComponent;
  let fixture: ComponentFixture<PublicNewsReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicNewsReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicNewsReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
