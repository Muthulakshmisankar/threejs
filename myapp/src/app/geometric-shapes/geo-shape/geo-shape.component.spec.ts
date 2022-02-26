import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoShapeComponent } from './geo-shape.component';

describe('GeoShapeComponent', () => {
  let component: GeoShapeComponent;
  let fixture: ComponentFixture<GeoShapeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoShapeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoShapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
