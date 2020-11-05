import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPropositoComponent } from './add-proposito.component';

describe('AddPropositoComponent', () => {
  let component: AddPropositoComponent;
  let fixture: ComponentFixture<AddPropositoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPropositoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPropositoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
