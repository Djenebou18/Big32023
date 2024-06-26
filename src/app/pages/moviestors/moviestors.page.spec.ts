import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoviestorsPage } from './moviestors.page';

describe('MoviestorsPage', () => {
  let component: MoviestorsPage;
  let fixture: ComponentFixture<MoviestorsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviestorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
