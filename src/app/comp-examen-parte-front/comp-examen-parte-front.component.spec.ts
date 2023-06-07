import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompExamenParteFrontComponent } from './comp-examen-parte-front.component';

describe('CompExamenParteFrontComponent', () => {
  let component: CompExamenParteFrontComponent;
  let fixture: ComponentFixture<CompExamenParteFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompExamenParteFrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompExamenParteFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
