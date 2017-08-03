import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretParagraphComponent } from './secret-paragraph.component';

describe('SecretParagraphComponent', () => {
  let component: SecretParagraphComponent;
  let fixture: ComponentFixture<SecretParagraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecretParagraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
