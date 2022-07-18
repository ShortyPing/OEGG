import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewsCreateComponent } from './admin-news-create.component';

describe('AdminNewsCreateComponent', () => {
  let component: AdminNewsCreateComponent;
  let fixture: ComponentFixture<AdminNewsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNewsCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminNewsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
