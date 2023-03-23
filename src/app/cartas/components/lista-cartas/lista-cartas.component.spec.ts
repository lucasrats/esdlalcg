import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCartasComponent } from './lista-cartas.component';

describe('ListaCartasComponent', () => {
  let component: ListaCartasComponent;
  let fixture: ComponentFixture<ListaCartasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCartasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaCartasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
