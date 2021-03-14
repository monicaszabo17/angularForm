import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { User } from './user';

import { UserslistService } from './userslist.service';

describe('UserslistService', () => {
  let service: UserslistService;
  
  beforeEach(async() => {
   await TestBed.configureTestingModule({
    imports: [
      RouterTestingModule
    ]
   });
    service = TestBed.inject(UserslistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  
});
