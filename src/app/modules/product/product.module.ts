import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromoBoxComponent } from '@app/modules/product/components/promo-box/promo-box.component';
import { ActionButtonComponent } from '@product/components/action-button/action-button.component';
import { BadgesComponent } from '@product/components/badge/badges.component';
import { OfferingComponent } from '@product/components/offering/offering.component';
import { RatingComponent } from '@product/components/rating/rating.component';
import { ProductPage } from '@product/pages/product/product.page';
import { SharedModule } from '@shared/shared.module';

export const productRoutes: Routes = [
    {
        path: ':id', component: ProductPage
    }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(productRoutes),
    ],
    declarations: [
        ProductPage,
        PromoBoxComponent,
        RatingComponent,
        BadgesComponent,
        ActionButtonComponent,
        OfferingComponent
    ]
})
export class ProductModule {
}
