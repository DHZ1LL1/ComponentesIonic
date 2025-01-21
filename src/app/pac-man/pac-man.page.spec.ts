import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PacManPage } from './pac-man.page';

describe('PacManPage', () => {
  let component: PacManPage;
  let fixture: ComponentFixture<PacManPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PacManPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
