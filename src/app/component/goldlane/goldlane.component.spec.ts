import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldlaneComponent } from './goldlane.component';

describe('GoldlaneComponent', () => {
  let component: GoldlaneComponent;
  let fixture: ComponentFixture<GoldlaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoldlaneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoldlaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
