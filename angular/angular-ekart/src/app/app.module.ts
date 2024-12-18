import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { headerComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { PlistComponent } from './container/plist/plist.component';
import { SeachComponent } from './container/seach/seach.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './container/plist/product/product.component';
import { FilterComponent } from './container/plist/filter/filter.component';
import { PdetailComponent } from './container/pdetail/pdetail.component';
import { FeaturedBrandComponent } from './container/featured-brand/featured-brand.component';
import { SetbgDirective } from './CustomDirectives/setbg.directive';
import { HighlightsDirective } from './CustomDirectives/highlights.directive';
import { HoverDirective } from './CustomDirectives/hover.directive';
import { DisabledDirective } from './CustomDirectives/disabled.directive';

@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    ContainerComponent,
    PlistComponent,
    SeachComponent,
    ProductComponent,
    FilterComponent,
    PdetailComponent,
    FeaturedBrandComponent,
    SetbgDirective,
    HighlightsDirective,
    HoverDirective,
    DisabledDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
