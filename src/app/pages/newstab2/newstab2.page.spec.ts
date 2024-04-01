import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Newstab2Page } from './newstab2.page';

describe('Newstab2Page', () => {
  let component: Newstab2Page;
  let fixture: ComponentFixture<Newstab2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Newstab2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
