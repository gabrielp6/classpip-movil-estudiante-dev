import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { JuegoCogerTurnoRapidoPage } from './juego-coger-turno-rapido.page';

describe('JuegoCogerTurnoRapidoPage', () => {
  let component: JuegoCogerTurnoRapidoPage;
  let fixture: ComponentFixture<JuegoCogerTurnoRapidoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ JuegoCogerTurnoRapidoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoCogerTurnoRapidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
