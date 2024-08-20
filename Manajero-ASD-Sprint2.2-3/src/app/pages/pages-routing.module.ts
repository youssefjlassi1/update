import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { WorkshopComponent } from './asd/workshop/workshop.component';
import { PostsComponent } from './asd/workshop/communication/posts/posts.component';
import { PostdetailsComponent } from './asd/workshop/communication/postdetails/postdetails.component';
import { AddpostComponent } from './asd/workshop/communication/addpost/addpost.component';
import { ImageuploadComponent } from './asd/workshop/communication/imageupload/imageupload.component';
import { ChatComponentComponent } from './asd/workshop/communication/chat-component/chat-component.component';
import { SprintComponent } from './asd/Backlog/Sprint/sprint/sprint.component';
import { AddsprintComponent } from './asd/Backlog/Sprint/addsprint/addsprint.component';
import { IterationComponent } from './asd/iteration/iteration.component';
import { ASDComponent } from './asd/asd.component';
import { PostRetroDetailsComponent } from './asd/retrospective/post-retro-details/post-retro-details.component';
import { IterationProgressComponentComponent } from './asd/Dashboard/iteration-progress-component/iteration-progress-component.component';
import { EchartsBarComponentComponent } from './asd/Dashboard/echarts-bar-component/echarts-bar-component.component';
import { EchartsPieComponentComponent } from './asd/Dashboard/echarts-pie-component/echarts-pie-component.component';
import { DashbaComponent } from './asd/workshop/communication/dashba/dashba.component';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: ECommerceComponent,
    },
    {
      path: 'iot-dashboard',
      component: DashboardComponent,
    },
    {
      path: 'layout',
      loadChildren: () => import('./layout/layout.module')
        .then(m => m.LayoutModule),
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.FormsModule),
    },
    {
      path: 'ui-features',
      loadChildren: () => import('./ui-features/ui-features.module')
        .then(m => m.UiFeaturesModule),
    },
    {
      path: 'modal-overlays',
      loadChildren: () => import('./modal-overlays/modal-overlays.module')
        .then(m => m.ModalOverlaysModule),
    },
    {
      path: 'extra-components',
      loadChildren: () => import('./extra-components/extra-components.module')
        .then(m => m.ExtraComponentsModule),
    },
    {
      path: 'maps',
      loadChildren: () => import('./maps/maps.module')
        .then(m => m.MapsModule),
    },
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'editors',
      loadChildren: () => import('./editors/editors.module')
        .then(m => m.EditorsModule),
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: 'agile/ASD', 
      component: ASDComponent,//WorkshopComponent,
    },
    { path: 'agile/postretro/:id', component: PostRetroDetailsComponent },
    {
      path: 'agile/posts', 
      component: PostsComponent,
    },
    
    {
      path: 'agile/iterations',
      component: IterationComponent,
    },
    //
    {
      path: 'agile/sprints', 
      component: SprintComponent,
    },
    //
    {
      path: 'agile/post/:id', 
      component: PostdetailsComponent,
    },
    {
      path: 'agile/addpost', 
      component: AddpostComponent,
    },
    {
      path: 'agile/post/uploadimages/:id', 
      component: ImageuploadComponent,
    },
    {
      path: 'agile/chats', 
      component: ChatComponentComponent,
    },
    { path: 'agile/chats/:userId', component: ChatComponentComponent },
    { path: 'pages/agile/chats/:senderId/:receiverId', component: ChatComponentComponent },
  // Route with only senderId (receiver can be selected later)
  { path: 'pages/agile/chats/:senderId', component: ChatComponentComponent },



  { path: 'echarts', component: EchartsBarComponentComponent

  },

  {
    path: 'chartjs',
    component: EchartsPieComponentComponent,
  },
   
  {  path: 'agile/dashba', component: DashbaComponent },


    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
