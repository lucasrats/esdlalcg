import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniBuscadorComponent } from './mini-buscador.component';

describe('MiniBuscadorComponent', () => {
  let component: MiniBuscadorComponent;
  let fixture: ComponentFixture<MiniBuscadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniBuscadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniBuscadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
