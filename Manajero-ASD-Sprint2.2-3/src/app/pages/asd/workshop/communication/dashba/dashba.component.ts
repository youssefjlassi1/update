import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../Services/Dashboard/dashboard.service';

@Component({
  selector: 'ngx-dashba',
  templateUrl: './dashba.component.html',
  styleUrls: ['./dashba.component.scss']
})
export class DashbaComponent implements OnInit {

  stats: any = {};
  topPosts: any[] = [];
  mostActiveUsers: any[] = [];
  averages: any = {}; // This stores the average comments and reacts per post

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.getDashboardStats();
    this.getTopPosts();
    this.getMostActiveUsers();
    this.getAverageCommentsAndReacts();
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

  getAverageCommentsAndReacts() {
    this.dashboardService.getAverageCommentsAndReacts().subscribe(data => {
      this.averages = data;
    });
  }
}
