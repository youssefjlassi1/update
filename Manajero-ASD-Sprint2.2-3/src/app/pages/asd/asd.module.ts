import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkshopComponent } from './workshop/workshop.component';


import { NbMenuModule, NbCardModule, NbStepperModule, NbButtonModule ,
NbTabsetModule,NbListModule,NbAccordionModule,NbChatModule,NbAlertModule,
NbFormFieldModule,
NbInputModule,
NbCheckboxModule,
NbDatepickerModule,
NbCalendarModule,
NbSelectModule} from '@nebular/theme';


import { ThemeModule } from '../../@theme/theme.module';
import { PagesComponent } from '../pages.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { ECommerceModule } from '../e-commerce/e-commerce.module';
import { PagesRoutingModule } from '../pages-routing.module';
import { MiscellaneousModule } from '../miscellaneous/miscellaneous.module';
import { EditInterfaceModalComponent } from './workshop/edit-interface-modal/edit-interface-modal.component';
import { NbDialogModule } from '@nebular/theme';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { ConfirmationDialogComponent } from './workshop/ConfirmationDialog';
import { ReactiveFormsModule } from '@angular/forms';
import { EditHowInterfaceModalComponent } from './workshop/edit-how-interface-modal/edit-how-interface-modal.component';
import { EditWhatInterfaceModalComponent } from './workshop/edit-what-interface-modal/edit-what-interface-modal.component';
import { EditWhatifInterfaceModalComponent } from './workshop/edit-whatif-interface-modal/edit-whatif-interface-modal.component';
import { PostsComponent } from './workshop/communication/posts/posts.component';
import { PostdetailsComponent } from './workshop/communication/postdetails/postdetails.component';
import { AddpostComponent } from './workshop/communication/addpost/addpost.component';
import { ImageuploadComponent } from './workshop/communication/imageupload/imageupload.component';
import { UpdatePostDialogComponent } from './workshop/communication/update-post-dialog/update-post-dialog.component';
import { ChatComponentComponent } from './workshop/communication/chat-component/chat-component.component';
import { CustomChatMessageComponent } from './workshop/communication/chat-component/custom-chat-message/custom-chat-message.component';
import { ChatService } from '../extra-components/chat/chat.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { SprintComponent } from './Backlog/Sprint/sprint/sprint.component';
import { AddsprintComponent } from './Backlog/Sprint/addsprint/addsprint.component';
//import { SprintService } from './Services/Backlog/sprint.service';
import { TaskService } from './Services/Backlog/task.service';
import { IterationComponent } from './iteration/iteration.component';
import { ASDComponent } from './asd.component';
import { RetrospectiveComponent } from './retrospective/retrospective.component';
import { AddretrospectiveComponent } from './retrospective/addretrospective/addretrospective.component';
import { PostRetroDetailsComponent } from './retrospective/post-retro-details/post-retro-details.component';
import { AdditerationComponent } from './iteration/additeration/additeration.component';
import { AddtasksComponent } from './Backlog/Task/tasks/addtasks/addtasks.component';
import { TasksComponent } from './Backlog/Task/tasks/tasks.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { EchartsBarComponentComponent } from './Dashboard/echarts-bar-component/echarts-bar-component.component';
import { IterationProgressComponentComponent } from './Dashboard/iteration-progress-component/iteration-progress-component.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { ChartsRoutingModule } from '../charts/charts-routing.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular2-chartjs';


import * as echarts from 'echarts';
import { EchartsPieComponentComponent } from './Dashboard/echarts-pie-component/echarts-pie-component.component';

@NgModule({
  declarations: [WorkshopComponent,
    ASDComponent,

    EditInterfaceModalComponent,
    ConfirmationDialogComponent,
    EditHowInterfaceModalComponent,
    EditWhatInterfaceModalComponent, 
    EditWhatifInterfaceModalComponent,
    PostsComponent,
    PostdetailsComponent,
    AddpostComponent,
    ImageuploadComponent,
    UpdatePostDialogComponent,
   
    CustomChatMessageComponent,
    SprintComponent,AddsprintComponent,IterationComponent,RetrospectiveComponent, AddretrospectiveComponent,PostRetroDetailsComponent
  ,AdditerationComponent,AddtasksComponent,
  TasksComponent,
  IterationProgressComponentComponent,
  EchartsBarComponentComponent,EchartsPieComponentComponent
 
  
  ],
  imports: [
   
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    ThemeModule,
    NbChatModule,
    NbMenuModule,
    NbCardModule,
    NbStepperModule,
    NbButtonModule,
    PagesRoutingModule,
    NbTabsetModule,NbListModule,NbAccordionModule,NbChatModule,NbAlertModule,FormsModule,NbFormFieldModule,
     NbDialogModule.forRoot(),
     NbDialogModule.forChild(),
     ReactiveFormsModule,
     
     NbCardModule,
     NbFormFieldModule,
     NbInputModule,
     
     NbCheckboxModule,
      NbDatepickerModule,
      NbDatepickerModule.forRoot(),
      NbCalendarModule,Ng2SmartTableModule,NbSelectModule,
      //charts 
    
      NgxEchartsModule,
      NgxChartsModule,
      ChartModule,
    
    

  
  
     
     

      
      
    
     
     
     
      
  
  ],
  providers: [ChatService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ASDModule { }
/*
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbThemeModule, NbChatModule, NbMenuModule, NbCardModule, NbStepperModule, NbButtonModule, NbTabsetModule, NbListModule, NbAccordionModule, NbAlertModule, NbFormFieldModule, NbInputModule, NbCheckboxModule, NbDatepickerModule, NbCalendarModule, NbSelectModule, NbDialogModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { PagesRoutingModule } from '../pages-routing.module';

import { WorkshopComponent } from './workshop/workshop.component';
import { EditInterfaceModalComponent } from './workshop/edit-interface-modal/edit-interface-modal.component';
import { ConfirmationDialogComponent } from './workshop/ConfirmationDialog';
import { EditHowInterfaceModalComponent } from './workshop/edit-how-interface-modal/edit-how-interface-modal.component';
import { EditWhatInterfaceModalComponent } from './workshop/edit-what-interface-modal/edit-what-interface-modal.component';
import { EditWhatifInterfaceModalComponent } from './workshop/edit-whatif-interface-modal/edit-whatif-interface-modal.component';
import { PostsComponent } from './workshop/communication/posts/posts.component';
import { PostdetailsComponent } from './workshop/communication/postdetails/postdetails.component';
import { AddpostComponent } from './workshop/communication/addpost/addpost.component';
import { ImageuploadComponent } from './workshop/communication/imageupload/imageupload.component';
import { UpdatePostDialogComponent } from './workshop/communication/update-post-dialog/update-post-dialog.component';
import { CustomChatMessageComponent } from './workshop/communication/chat-component/custom-chat-message/custom-chat-message.component';
import { ChatService } from '../extra-components/chat/chat.service';
import { SprintComponent } from './Backlog/Sprint/sprint/sprint.component';
import { AddsprintComponent } from './Backlog/Sprint/addsprint/addsprint.component';
import { TaskService } from './Services/Backlog/task.service';
import { IterationComponent } from './iteration/iteration.component';
import { ASDComponent } from './asd.component';
import { RetrospectiveComponent } from './retrospective/retrospective.component';
import { AddretrospectiveComponent } from './retrospective/addretrospective/addretrospective.component';
import { PostRetroDetailsComponent } from './retrospective/post-retro-details/post-retro-details.component';
import { AdditerationComponent } from './iteration/additeration/additeration.component';
import { AddtasksComponent } from './Backlog/Task/tasks/addtasks/addtasks.component';
import { TasksComponent } from './Backlog/Task/tasks/tasks.component';
import { EchartsBarComponentComponent } from './Dashboard/echarts-bar-component/echarts-bar-component.component';
import { IterationProgressComponentComponent } from './Dashboard/iteration-progress-component/iteration-progress-component.component';

@NgModule({
  declarations: [
    WorkshopComponent,
    ASDComponent,
    EditInterfaceModalComponent,
    ConfirmationDialogComponent,
    EditHowInterfaceModalComponent,
    EditWhatInterfaceModalComponent,
    EditWhatifInterfaceModalComponent,
    PostsComponent,
    PostdetailsComponent,
    AddpostComponent,
    ImageuploadComponent,
    UpdatePostDialogComponent,
    CustomChatMessageComponent,
    SprintComponent,
    AddsprintComponent,
    IterationComponent,
    RetrospectiveComponent,
    AddretrospectiveComponent,
    PostRetroDetailsComponent,
    AdditerationComponent,
    AddtasksComponent,
    TasksComponent,
    IterationProgressComponentComponent,
    EchartsBarComponentComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
    NbThemeModule.forRoot(),
    NbChatModule,
    NbMenuModule,
    NbCardModule,
    NbStepperModule,
    NbButtonModule,
    NbTabsetModule,
    NbListModule,
    NbAccordionModule,
    NbAlertModule,
    NbFormFieldModule,
    NbInputModule,
    NbCheckboxModule,
    NbDatepickerModule,
    NbCalendarModule,
    NbSelectModule,
    Ng2SmartTableModule,
    NgxEchartsModule,
    PagesRoutingModule,
    NbDialogModule.forRoot(), // Corrected: Only need forRoot() once
  ],
  providers: [ChatService, TaskService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ASDModule { }
*/