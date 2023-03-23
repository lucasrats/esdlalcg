import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportarMazoComponent } from './importar-mazo.component';

describe('ImportarMazoComponent', () => {
  let component: ImportarMazoComponent;
  let fixture: ComponentFixture<ImportarMazoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportarMazoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportarMazoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
