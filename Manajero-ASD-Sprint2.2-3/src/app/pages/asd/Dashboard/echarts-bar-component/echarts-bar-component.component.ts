/*import { AfterViewInit, Component, OnDestroy, Input } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import * as echarts from 'echarts';
import { ECharts } from 'echarts';
import { IterationService } from '../../Services/iteration.service';
@Component({
  selector: 'ngx-echarts-bar',
  templateUrl: './echarts-bar-component.component.html',
  styleUrls: ['./echarts-bar-component.component.scss']
})




export class EchartsBarComponentComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;

  constructor(private theme: NbThemeService, private iterationService: IterationService) { }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      const echartsConfig: any = config.variables.echarts;

      // Fetch data from the service
      this.iterationService.getAllIterationsProgress().subscribe(iterations => {
        const names = iterations.map(iteration => iteration.sprintName);
        const data = iterations.map(iteration => iteration.progressPercentage);

        this.options = {
          backgroundColor: echartsConfig.bg,
          color: [colors.primaryLight],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow',
            },
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
          },
          xAxis: {
            type: 'category',
            data: names,
            axisTick: {
              alignWithLabel: true,
            },
          },
          yAxis: {
            type: 'value',
          },
          series: [
            {
              name: 'Progress',
              type: 'bar',
              barWidth: '60%',
              data: data,
            },
          ],
        };

        this.initChart();
      });
    });
  }

  initChart() {
    const chart = echarts.init(document.getElementById('echarts-bar') as HTMLDivElement);
    chart.setOption(this.options);
  }

  ngOnDestroy() {
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
  }
}


/*
export class EchartsBarComponentComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;

  constructor(private theme: NbThemeService, private iterationService: IterationService) {}

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

      // Fetch data from the service
      this.iterationService.getAllIterationsProgress().subscribe(iterations => {
        const names = iterations.map(iteration => iteration.sprintName);
        const data = iterations.map(iteration => iteration.progressPercentage);

        this.options = {
          backgroundColor: echarts.bg,
          color: [colors.primaryLight],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow',
            },
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
          },
          xAxis: {
            type: 'category',
            data: names, // Dynamic data
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
          yAxis: {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            splitLine: {
              lineStyle: {
                color: echarts.splitLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
          series: [
            {
              name: 'Progress', // Updated name
              type: 'bar',
              barWidth: '60%',
              data: data, // Dynamic data
            },
          ],
        };
      });
    });
  }

  ngOnDestroy() {
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
  }
}*/

import { AfterViewInit, Component, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import * as echarts from 'echarts';
import { IterationService } from '../../Services/iteration.service';

@Component({
  selector: 'ngx-echarts-bar',
  templateUrl: './echarts-bar-component.component.html',
  styleUrls: ['./echarts-bar-component.component.scss']
})
export class EchartsBarComponentComponent implements AfterViewInit, OnDestroy {
  @ViewChild('chartContainer', { static: false }) chartContainer!: ElementRef;
  options: any = {};
  themeSubscription: any;

  constructor(private theme: NbThemeService, private iterationService: IterationService) { }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      const echartsConfig: any = config.variables.echarts;

      // Fetch data from the service
      this.iterationService.getAllIterationsProgress().subscribe(iterations => {
        const names = iterations.map(iteration => iteration.sprintName);
        const data = iterations.map(iteration => iteration.progressPercentage);

        this.options = {
          backgroundColor: echartsConfig.bg,
          color: [colors.primaryLight],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow',
            },
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
          },
          xAxis: {
            type: 'category',
            data: names,
            axisTick: {
              alignWithLabel: true,
            },
          },
          yAxis: {
            type: 'value',
          },
          series: [
            {
              name: 'Progress',
              type: 'bar',
              barWidth: '60%',
              data: data,
            },
          ],
        };

        this.initChart();
      });
    });
  }

  initChart() {
    if (this.chartContainer && this.chartContainer.nativeElement) {
      const chart = echarts.init(this.chartContainer.nativeElement);
      chart.setOption(this.options);
    }
  }

  ngOnDestroy() {
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
  }
}
