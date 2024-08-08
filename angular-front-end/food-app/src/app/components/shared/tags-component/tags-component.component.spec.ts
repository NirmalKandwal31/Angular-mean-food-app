import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsComponentComponent } from './tags-component.component';

describe('TagsComponentComponent', () => {
  let component: TagsComponentComponent;
  let fixture: ComponentFixture<TagsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagsComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TagsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
