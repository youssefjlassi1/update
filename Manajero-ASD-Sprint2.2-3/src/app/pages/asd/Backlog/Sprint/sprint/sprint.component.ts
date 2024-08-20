
import { Component, OnInit } from '@angular/core';
//import { SprintService } from '../../../Services/Backlog/sprint.service';
import { NbDialogService } from '@nebular/theme';
import { AddsprintComponent } from '../addsprint/addsprint.component';
//import { MatDialog } from '@angular/material/dialog';
//import { Sprint } from '../../../Entities/Backlog/Iteration';
@Component({
  selector: 'ngx-sprint',
  templateUrl: './sprint.component.html',
  styleUrls: ['./sprint.component.scss']
})
export class SprintComponent  {
  /*sprints: any[] = [];

    sprint: any;
  
    constructor(private trainingService: SprintService) { }
    
  
    ngOnInit(): void {
      this.showTrainings();
      
    }
  
    showTrainings(): void {
      this.trainingService.getSprints().subscribe(
        (data: Sprint[]) => {
          this.sprints = data; // Assign the fetched data to the trainings array
        },
        (error) => {
          console.error('Error fetching trainings:', error);
        }
      );
  
    }*/
  }