import { Component } from '@angular/core';
import { DashboardService } from './Services/Dashboard/dashboard.service';

@Component({
  selector: 'ngx-asd',
  templateUrl: './asd.component.html',
  styleUrls: ['./asd.component.scss']
})
export class ASDComponent {
  stats: any = {};
  topPosts: any[] = [];
  mostActiveUsers: any[] = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.getDashboardStats();
    this.getTopPosts();
    this.getMostActiveUsers();
  }

  getDashboardStats() {
    this.dashboardService.getStats().subscribe(data => {
      this.stats = data;
    });
  }

  getTopPosts() {
    this.dashboardService.getTopPosts().subscribe(data => {
      this.topPosts = data;
    });
  }

  getMostActiveUsers() {
    this.dashboardService.getMostActiveUsers().subscribe(data => {
      this.mostActiveUsers = data;
    });
  }
}