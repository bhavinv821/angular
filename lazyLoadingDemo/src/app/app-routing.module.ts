import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, PreloadAllModules } from '@angular/router';
//import {CustomPreloading} from './common/common.module'
const routes: Routes = [
  {
    path:"car",
    loadChildren: ()=> import('./car-module/car-module.module').then(mod=>mod.CarModuleModule)
  },
  {
    path:"bike",
    loadChildren: ()=> import('./bike-module/bike-module.module').then(mod=>mod.BikeModuleModule),
    data:{
      preload:true
    }
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      //for custome preloading
      //preloadingStrategy: CustomPreloading
      
      // preloadingStrategy: PreloadAllModules

    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
