import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCartaComponent } from './ver-carta.component';

describe('VerCartaComponent', () => {
  let component: VerCartaComponent;
  let fixture: ComponentFixture<VerCartaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerCartaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerCartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
