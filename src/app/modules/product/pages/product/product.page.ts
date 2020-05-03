import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '@app/services/api.service';

@Component({
    selector: 'product-page',
    templateUrl: 'product.page.html'
})
export class ProductPage implements OnInit {
    constructor(private route: ActivatedRoute, private api: ApiService) {
    }

    ngOnInit() {
        this.getProduct();
    }

    getProduct() {
        let id: string;
        this.route.paramMap.subscribe(params => {
            id = params.get('id');
            console.log(id);
            this.api.getProduct(id).subscribe(res => {
                console.log(res);
            });
        });


    }

}

