import { TestBed } from '@angular/core/testing';
import { CdbService } from './cdb.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CdbService', () => {
  let service: CdbService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule] 
    });
    service = TestBed.inject(CdbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
