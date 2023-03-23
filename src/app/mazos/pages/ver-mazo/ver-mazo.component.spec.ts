import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerMazoComponent } from './ver-mazo.component';

describe('VerMazoComponent', () => {
  let component: VerMazoComponent;
  let fixture: ComponentFixture<VerMazoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerMazoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerMazoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
