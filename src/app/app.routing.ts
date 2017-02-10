import { ModuleWithProviders } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

//Alterativ:
// import { Routes, RouterModule } from '@angular/router';
// export const routes: Routes = [];
export const routes: Route[] = [
   {
        path: '',
        redirectTo: '/books',
        pathMatch: 'full'
    },
{
     path: 'books',
     loadChildren: './book/book.module#BookModule'
}   
    //  , {
    //     path: '**',
    //     component: PageNotFoundComponent
    // }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
