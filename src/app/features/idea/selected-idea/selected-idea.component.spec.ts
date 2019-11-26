import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedIdeaComponent } from './selected-idea.component';

describe('SelectedIdeaComponent', () => {
  let component: SelectedIdeaComponent;
  let fixture: ComponentFixture<SelectedIdeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedIdeaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
