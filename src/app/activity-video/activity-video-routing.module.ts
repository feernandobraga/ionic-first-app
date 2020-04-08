import { NgModule } from '@angular/core';
import { ActivityVideoPage } from './activity-video.page';
import { Routes, RouterModule } from '@angular/router';


// const routes: Routes = [
//   {
//     path: '',
//     component: ActivityVideoPage
//   }
// ];

@NgModule({
  // imports: [RouterModule.forChild(routes)],
  // exports: [RouterModule],
  entryComponents: [ActivityVideoPage]
})
export class ActivityVideoPageRoutingModule {}
