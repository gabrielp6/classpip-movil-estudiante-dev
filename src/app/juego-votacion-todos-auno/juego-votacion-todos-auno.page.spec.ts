import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { JuegoVotacionTodosAUnoPage } from './juego-votacion-todos-auno.page';

describe('JuegoVotacionTodosAUnoPage', () => {
  let component: JuegoVotacionTodosAUnoPage;
  let fixture: ComponentFixture<JuegoVotacionTodosAUnoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ JuegoVotacionTodosAUnoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoVotacionTodosAUnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
