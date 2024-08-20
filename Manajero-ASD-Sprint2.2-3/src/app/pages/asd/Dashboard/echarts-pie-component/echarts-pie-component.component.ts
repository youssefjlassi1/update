import { Component, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { IterationService } from '../../Services/iteration.service';
import { IterationTaskStats } from '../../Entities/Backlog/IterationTaskStats';
import * as echarts from 'echarts';

@Component({
  selector: 'ngx-echarts-pie-component',
  templateUrl: './echarts-pie-component.component.html',
  styleUrls: ['./echarts-pie-component.component.scss']
})
export class EchartsPieComponentComponent implements AfterViewInit, OnDestroy {
  options: any;
  themeSubscription: any;
  chartInstance: any;

  @ViewChild('chartContainer', { static: false }) chartContainer!: ElementRef;

  constructor(private theme: NbThemeService, private iterationService: IterationService) {}

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;

      this.iterationService.getTaskCompletionStats().subscribe((stats: IterationTaskStats[]) => {
        const data = stats.map(stat => ({
          value: stat.completionPercentage,
          name: stat.sprintName
        }));

        const dynamicColors = this.generateDynamicColors(data.length, colors); // Generate colors

        this.options = {
          backgroundColor: colors.bg,
          color: dynamicColors, // Apply dynamic color palette
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c}% ({d}%)'
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: stats.map(stat => stat.sprintName),
            textStyle: {
              color: colors.textColor
            }
          },
          series: [
            {
              name: 'Sprints',
              type: 'pie',
              radius: '80%',
              center: ['50%', '50%'],
              data: data,
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        };

        this.initChart(); // Initialize chart after setting options
      });
    });
  }

  generateDynamicColors(count: number, colors: any): string[] {
    const baseColors = [
      colors.primaryLight, colors.infoLight, colors.successLight,
      colors.warningLight, colors.dangerLight, colors.primary,
      colors.info, colors.success, colors.warning, colors.danger
    ];

    while (baseColors.length < count) {
      baseColors.push(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
    }

    return baseColors.slice(0, count);
  }

  initChart() {
    if (this.chartContainer && this.chartContainer.nativeElement) {
      this.chartInstance = echarts.init(this.chartContainer.nativeElement);
      this.chartInstance.setOption(this.options);
    }
  }

  ngOnDestroy() {
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
    if (this.chartInstance) {
      this.chartInstance.dispose(); // Clean up the chart instance on component destroy
    }
  }
}
