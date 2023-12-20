import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAppartementComponent } from './details-appartement.component';

describe('DetailsAppartementComponent', () => {
  let component: DetailsAppartementComponent;
  let fixture: ComponentFixture<DetailsAppartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsAppartementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsAppartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
