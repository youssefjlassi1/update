/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  NbChatCustomMessageService,
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbLayoutModule,
  NbMenuModule,
  NbSidebarModule,
  NbThemeModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';
import { EditWhatInterfaceModalComponent } from './pages/asd/workshop/edit-what-interface-modal/edit-what-interface-modal.component';
import { EditHowInterfaceModalComponent } from './pages/asd/workshop/edit-how-interface-modal/edit-how-interface-modal.component';
import { EditWhatifInterfaceModalComponent } from './pages/asd/workshop/edit-whatif-interface-modal/edit-whatif-interface-modal.component';
import { ChatComponentComponent } from './pages/asd/workshop/communication/chat-component/chat-component.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ChatService } from './pages/extra-components/chat/chat.service';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataSource } from '@angular/cdk/collections';
import { RetrospectiveComponent } from './pages/asd/retrospective/retrospective.component';
import { AddretrospectiveComponent } from './pages/asd/retrospective/addretrospective/addretrospective.component';
import { PostRetroDetailsComponent } from './pages/asd/retrospective/post-retro-details/post-retro-details.component';

import { AdditerationComponent } from './pages/asd/iteration/additeration/additeration.component';
import { AddtasksComponent } from './pages/asd/Backlog/Task/tasks/addtasks/addtasks.component';
import { TasksComponent } from './pages/asd/Backlog/Task/tasks/tasks.component';
import { EchartsPieComponentComponent } from './pages/asd/Dashboard/echarts-pie-component/echarts-pie-component.component';
import { DashbaComponent } from './pages/asd/workshop/communication/dashba/dashba.component';






@NgModule({
  declarations: [AppComponent,
  ChatComponentComponent,
  DashbaComponent,
  
 
  
  
 
  
  

  
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbLayoutModule,
    NbEvaIconsModule,
    NbThemeModule.forRoot(),
    NbChatModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
  ],
  providers: [ChatService,NbChatCustomMessageService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
