import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminItemPanelComponent } from './admin-item-panel.component';

describe('AdminItemPanelComponent', () => {
  let component: AdminItemPanelComponent;
  let fixture: ComponentFixture<AdminItemPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminItemPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminItemPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
