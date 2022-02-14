import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTextComponent } from './create-text/create-text.component';
import { DrawLineComponent } from './draw-line/draw-line.component';
import { HomeComponent } from './home/home.component';
import { ThreedModelComponent } from './threed-model/threed-model.component';
import { UpdateThingsComponent } from './update-things/update-things.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'line', component: DrawLineComponent },
  { path: 'text', component: CreateTextComponent },
  { path: 'threeD', component: ThreedModelComponent },
  { path: 'updateThings', component: UpdateThingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
