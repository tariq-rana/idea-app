import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaEditableComponent } from './idea-editable.component';

describe('IdeaEditableComponent', () => {
  let component: IdeaEditableComponent;
  let fixture: ComponentFixture<IdeaEditableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeaEditableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaEditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
