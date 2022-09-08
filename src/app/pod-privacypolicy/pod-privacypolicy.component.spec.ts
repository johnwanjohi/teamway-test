import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodPrivacypolicyComponent } from './pod-privacypolicy.component';

describe('PodPrivacypolicyComponent', () => {
  let component: PodPrivacypolicyComponent;
  let fixture: ComponentFixture<PodPrivacypolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodPrivacypolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodPrivacypolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
