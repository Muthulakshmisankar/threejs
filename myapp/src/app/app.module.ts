import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrawLineComponent } from './draw-line/draw-line.component';
import { CreateTextComponent } from './create-text/create-text.component';
import { HomeComponent } from './home/home.component';
import { ThreedModelComponent } from './threed-model/threed-model.component';
import { UpdateThingsComponent } from './update-things/update-things.component';
import { CubeComponent } from './cube/cube.component';
import { GeometricShapesComponent } from './geometric-shapes/geometric-shapes.component';
import { GeoShapeComponent } from './geometric-shapes/geo-shape/geo-shape.component';
import { MaterialsComponent } from './materials/materials.component';

@NgModule({
  declarations: [
    AppComponent,
    DrawLineComponent,
    CreateTextComponent,
    HomeComponent,
    ThreedModelComponent,
    UpdateThingsComponent,
    CubeComponent,
    GeometricShapesComponent,
    GeoShapeComponent,
    MaterialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
