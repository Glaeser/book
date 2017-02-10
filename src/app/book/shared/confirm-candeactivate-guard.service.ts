import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { BookEditComponent } from './../book-edit/book-edit.component';


@Injectable()
export class ConfirmCandeactivateGuardService implements CanDeactivate<BookEditComponent>{

  constructor() { }

  canDeactivate(component: BookEditComponent, route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return confirm('Bist da gwies sicha??');
  }

}
