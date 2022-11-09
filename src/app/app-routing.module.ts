import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DigitalComponent } from './component/digital/digital.component';
import { FeaturesComponent } from './component/features/features.component';
import { GoldlaneComponent } from './component/goldlane/goldlane.component';
import { NavbarComponent } from './component/navbar/navbar.component';

const routes: Routes = [
  {path:'',redirectTo:'navbar', pathMatch:'full'},
  {path:'digital',component: DigitalComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'goldlane',component:GoldlaneComponent},
  {path:'features',component:FeaturesComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
