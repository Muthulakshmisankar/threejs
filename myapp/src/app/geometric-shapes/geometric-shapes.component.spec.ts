import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeometricShapesComponent } from './geometric-shapes.component';

describe('GeometricShapesComponent', () => {
  let component: GeometricShapesComponent;
  let fixture: ComponentFixture<GeometricShapesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeometricShapesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeometricShapesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
