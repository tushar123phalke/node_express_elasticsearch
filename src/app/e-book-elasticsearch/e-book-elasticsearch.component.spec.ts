import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EBookElasticsearchComponent } from './e-book-elasticsearch.component';

describe('EBookElasticsearchComponent', () => {
  let component: EBookElasticsearchComponent;
  let fixture: ComponentFixture<EBookElasticsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EBookElasticsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EBookElasticsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
