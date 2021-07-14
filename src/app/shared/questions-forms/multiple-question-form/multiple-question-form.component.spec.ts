import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleQuestionFormComponent } from './multiple-question-form.component';

describe('MultipleQuestionFormComponent', () => {
  let component: MultipleQuestionFormComponent;
  let fixture: ComponentFixture<MultipleQuestionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleQuestionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleQuestionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
