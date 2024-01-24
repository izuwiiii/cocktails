import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByNamePageComponent } from './search-by-name-page.component';

describe('SearchByNamePageComponent', () => {
  let component: SearchByNamePageComponent;
  let fixture: ComponentFixture<SearchByNamePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchByNamePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchByNamePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
