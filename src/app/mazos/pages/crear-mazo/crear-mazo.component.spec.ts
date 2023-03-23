import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearMazoComponent } from './crear-mazo.component';

describe('CrearMazoComponent', () => {
  let component: CrearMazoComponent;
  let fixture: ComponentFixture<CrearMazoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearMazoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearMazoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
