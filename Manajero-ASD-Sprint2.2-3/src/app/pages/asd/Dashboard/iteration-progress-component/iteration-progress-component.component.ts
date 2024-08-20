import { Component, OnInit } from '@angular/core';
import { IterationService } from '../../Services/iteration.service';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'ngx-iteration-progress-component',
  templateUrl: './iteration-progress-component.component.html',
  styleUrls: ['./iteration-progress-component.component.scss']
})
export class IterationProgressComponentComponent implements OnInit {
  iterations: { name: string, progress: number }[] = [];

  constructor(private iterationService: IterationService) { }

  ngOnInit(): void {
    this.loadIterationProgress();
  }

  loadIterationProgress() {
    this.iterationService.getIterations().subscribe(iterations => {
      const progressRequests = iterations.map(iteration => 
        this.iterationService.getProgressPercentage(iteration.id)
          .pipe(map(progress => ({ name: iteration.sprintName, progress })))
      );

      forkJoin(progressRequests).subscribe((progressData: { name: string, progress: number }[]) => {
        this.iterations = progressData;
      });
    });
  }
}
