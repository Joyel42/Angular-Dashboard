import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentbarComponent } from './contentbar.component';

describe('ContentbarComponent', () => {
  let component: ContentbarComponent;
  let fixture: ComponentFixture<ContentbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
