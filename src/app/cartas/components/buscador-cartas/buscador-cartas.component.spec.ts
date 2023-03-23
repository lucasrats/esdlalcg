import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorCartasComponent } from './buscador-cartas.component';

describe('BuscadorCartasComponent', () => {
  let component: BuscadorCartasComponent;
  let fixture: ComponentFixture<BuscadorCartasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscadorCartasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscadorCartasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
