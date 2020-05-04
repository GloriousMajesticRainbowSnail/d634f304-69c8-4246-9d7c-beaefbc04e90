import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


export const appRoutes: Routes = [
    {
        path: 'landing',
        loadChildren: '@app/modules/landing/landing.module#LandingModule',
    },
    {
        path: 'products',
        loadChildren: '@app/modules/products/products.module#ProductsModule',
    },
    {
        path: 'product',
        loadChildren: '@app/modules/product/product.module#ProductModule',
    },
    { path: '**', redirectTo: 'landing' }
];

@NgModule({
    imports: [
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
    ],
    exports: [
        RouterModule,
        HttpClientModule
    ],
    providers: [
    ]
})
export class CoreModule {
}
