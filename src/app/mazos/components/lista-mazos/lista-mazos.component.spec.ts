import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMazosComponent } from './lista-mazos.component';

describe('ListaMazosComponent', () => {
  let component: ListaMazosComponent;
  let fixture: ComponentFixture<ListaMazosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaMazosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaMazosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
