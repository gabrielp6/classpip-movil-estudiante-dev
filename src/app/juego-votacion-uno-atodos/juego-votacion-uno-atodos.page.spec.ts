import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { JuegoVotacionUnoATodosPage } from './juego-votacion-uno-atodos.page';

describe('JuegoVotacionUnoATodosPage', () => {
  let component: JuegoVotacionUnoATodosPage;
  let fixture: ComponentFixture<JuegoVotacionUnoATodosPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ JuegoVotacionUnoATodosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoVotacionUnoATodosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
