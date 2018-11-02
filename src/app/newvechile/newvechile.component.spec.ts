import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewvechileComponent } from './newvechile.component';

describe('NewvechileComponent', () => {
  let component: NewvechileComponent;
  let fixture: ComponentFixture<NewvechileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewvechileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewvechileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
