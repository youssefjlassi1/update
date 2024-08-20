import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InterfaceService } from '../Services/ASD/interface-service.service';
import { Interfaceasd } from '../Entities/ASDINTER/Interfaceasd ';

@Component({
  selector: 'ngx-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.scss']
})
export class WorkshopComponent implements OnInit {
  projectForm: FormGroup;
  projects: Interfaceasd[] = [];
  selectedProjectId: string | null = null;
  interfaceData: Interfaceasd | null = null;
  userId = '66928fac6771745902a66142'; // Static user ID

  constructor(
    private fb: FormBuilder,
    private interfaceService: InterfaceService
  ) {
    // Initialize the form group
    this.projectForm = this.fb.group({
      name: ['', Validators.required],
      definition: ['', Validators.required],
      origin: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadProjects(this.userId);
  }

  loadProjects(userId: string): void {
    this.interfaceService.getProjectsByUserId(userId).subscribe(
      (projects: Interfaceasd[]) => {
        this.projects = projects;
        if (projects.length > 0) {
          this.selectedProjectId = projects[0].id;
          this.showInterface(this.selectedProjectId);
        }
      },
      (error) => {
        console.error('Error fetching projects:', error);
      }
    );
  }

  showInterface(id: string): void {
    this.interfaceService.getProjectById(id).subscribe(
      (interfaceDetails: Interfaceasd) => {
        this.interfaceData = interfaceDetails;
        // If you want to load this project into the form for editing
        this.projectForm.patchValue({
          name: interfaceDetails.name,
          definition: interfaceDetails.definition,
          origin: interfaceDetails.origin,
         
        });
      },
      (error) => {
        console.error('Error fetching interface details:', error);
      }
    );
  }

  createProject(): void {
    if (this.projectForm.valid) {
      const newProject: Partial<Interfaceasd> = {
        userId: this.userId,
        ...this.projectForm.value
      };

      this.interfaceService.createProject(newProject).subscribe(
        (project: Interfaceasd) => {
          this.projects.push(project);
          this.selectedProjectId = project.id;
          this.showInterface(project.id);
          this.projectForm.reset(); // Reset the form after saving
        },
        (error) => {
          console.error('Error creating project:', error);
        }
      );
    } else {
      console.error('Form is invalid');
    }
  }
}
