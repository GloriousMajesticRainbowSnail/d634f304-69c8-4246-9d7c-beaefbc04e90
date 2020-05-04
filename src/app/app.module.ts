import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '@app/app.component';
import { CoreModule } from '@core/core.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from './modules/reducers';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        CoreModule,
        BrowserModule,
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
