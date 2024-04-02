import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Newstab3Page } from './newstab3.page';

describe('Newstab3Page', () => {
  let component: Newstab3Page;
  let fixture: ComponentFixture<Newstab3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Newstab3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
