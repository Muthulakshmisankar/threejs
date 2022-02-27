import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTextComponent } from './create-text/create-text.component';
import { CubeComponent } from './cube/cube.component';
import { DrawLineComponent } from './draw-line/draw-line.component';
import { GeoShapeComponent } from './geometric-shapes/geo-shape/geo-shape.component';
import { GeometricShapesComponent } from './geometric-shapes/geometric-shapes.component';
import { HomeComponent } from './home/home.component';
import { MaterialsComponent } from './materials/materials.component';
import { ThreedModelComponent } from './threed-model/threed-model.component';
import { UpdateThingsComponent } from './update-things/update-things.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'line', component: DrawLineComponent },
  { path: 'text', component: CreateTextComponent },
  { path: 'threeD', component: ThreedModelComponent },
  { path: 'getting-started', component: UpdateThingsComponent },
  { path: 'cube', component: CubeComponent },
  { path: 'shapes', component: GeometricShapesComponent },
  { path: 'geo-shapes', component: GeoShapeComponent },
  { path: 'materials', component: MaterialsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
