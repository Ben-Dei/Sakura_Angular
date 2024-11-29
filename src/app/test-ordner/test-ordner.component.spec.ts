import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOrdnerComponent } from './test-ordner.component';

describe('TestOrdnerComponent', () => {
  let component: TestOrdnerComponent;
  let fixture: ComponentFixture<TestOrdnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestOrdnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestOrdnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
