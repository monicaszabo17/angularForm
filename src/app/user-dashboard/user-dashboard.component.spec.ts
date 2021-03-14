import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashboardComponent } from './user-dashboard.component';

describe('UserDashboardComponent', () => {
  let component: UserDashboardComponent;
  let fixture: ComponentFixture<UserDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should use the user firstName from the service', () => {
    let fixture = TestBed.createComponent(UserDashboardComponent);
    let app = fixture.debugElement.componentInstance;
    let userslistService = fixture.debugElement.injector.get(UserslistService);
    fixture.detectChanges();
    expect(userslistService.user.firstName).toEqual(localStorage.user.firstName);
  });
});
