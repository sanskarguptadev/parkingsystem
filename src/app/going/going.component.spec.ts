import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoingComponent } from './going.component';

describe('GoingComponent', () => {
  let component: GoingComponent;
  let fixture: ComponentFixture<GoingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
