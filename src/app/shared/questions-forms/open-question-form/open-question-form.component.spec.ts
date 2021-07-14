import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenQuestionFormComponent } from './open-question-form.component';

describe('OpenQuestionFormComponent', () => {
  let component: OpenQuestionFormComponent;
  let fixture: ComponentFixture<OpenQuestionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenQuestionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenQuestionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
