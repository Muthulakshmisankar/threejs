import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateThingsComponent } from './update-things.component';

describe('UpdateThingsComponent', () => {
  let component: UpdateThingsComponent;
  let fixture: ComponentFixture<UpdateThingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateThingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateThingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
