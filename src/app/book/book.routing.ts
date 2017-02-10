import { ModuleWithProviders } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { BookComponent } from './book.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

import { ConfirmCandeactivateGuardService } from './shared/confirm-candeactivate-guard.service'


const routes: Route[] = [
    {
        path: '',
        component: BookComponent,
        children: [

            {
                component: BookListComponent,
                path: ''
            },
            {
                path: ':isbn',
                component: BookDetailComponent,
                canDeactivate: [ConfirmCandeactivateGuardService]
            }

        ]

    }
];

export const routing = RouterModule.forChild(routes);