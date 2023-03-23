import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisMazosComponent } from './mis-mazos.component';

describe('MisMazosComponent', () => {
  let component: MisMazosComponent;
  let fixture: ComponentFixture<MisMazosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisMazosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisMazosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
