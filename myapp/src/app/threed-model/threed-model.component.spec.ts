import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreedModelComponent } from './threed-model.component';

describe('ThreedModelComponent', () => {
  let component: ThreedModelComponent;
  let fixture: ComponentFixture<ThreedModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreedModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreedModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
