//Angular components
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

//Import the module that contains all the material components
import { AppMaterialModule } from "./app.material.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//aplication modules
import { AppComponent } from "./app.component";
import { PipeSamplesComponent } from "./pipe-samples.component";

@NgModule({
  imports: [BrowserModule, FormsModule, AppMaterialModule, BrowserAnimationsModule],
  declarations: [AppComponent, PipeSamplesComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
