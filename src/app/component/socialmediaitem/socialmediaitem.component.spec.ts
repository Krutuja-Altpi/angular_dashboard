import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialmediaitemComponent } from './socialmediaitem.component';

describe('SocialmediaitemComponent', () => {
  let component: SocialmediaitemComponent;
  let fixture: ComponentFixture<SocialmediaitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialmediaitemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialmediaitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
