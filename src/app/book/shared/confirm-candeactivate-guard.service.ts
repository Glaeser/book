import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { BookDetailComponent } from './../book-detail/book-detail.component';


@Injectable()
export class ConfirmCandeactivateGuardService implements CanDeactivate<BookDetailComponent>{

  constructor() { }

  canDeactivate(component: BookDetailComponent, route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return confirm('Are you sure?');
  }

}
