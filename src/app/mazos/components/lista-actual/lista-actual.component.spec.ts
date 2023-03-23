import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaActualComponent } from './lista-actual.component';

describe('ListaActualComponent', () => {
  let component: ListaActualComponent;
  let fixture: ComponentFixture<ListaActualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaActualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaActualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
