import { ModuleWithProviders } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { BookComponent } from './book.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookNewComponent } from './book-new/book-new.component';

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
                path: 'new',
                component: BookNewComponent
                // canDeactivate: [ConfirmCandeactivateGuardService]
            },
            {
                path: ':isbn',
                component: BookDetailComponent
                // canDeactivate: [ConfirmCandeactivateGuardService]
            },
            {
                path: ':isbn/edit',
                component: BookEditComponent,
                canDeactivate: [ConfirmCandeactivateGuardService]
            }

        ]

    }
];

export const routing = RouterModule.forChild(routes);