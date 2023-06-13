import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Chart,registerables } from 'chart.js';
import { Router } from '@angular/router';
Chart.register(...registerables);

@Component({
  selector: 'app-contentbar',
  templateUrl: './contentbar.component.html',
  styleUrls: ['./contentbar.component.css']
})
export class ContentbarComponent {
  constructor(private loginService:LoginService, private router:Router){}

  signout(){
    this.loginService.changeflag();
    window.localStorage.setItem("loginflag","false");
    this.router.navigate(["'/login'"]);
  }

  ngOnInit(): void {
    var myChart = new Chart("myChart1", {
      type: 'doughnut',
      data: {
        labels: ['United States', 'Canada', 'Mexico', 'Other'],
        datasets: [
          {
            data: [38.5, 22.5, 30.8, 8.1], 
            backgroundColor: ['rgb(185, 238, 192)', 'rgb(198, 198, 246)','rgb(28, 28, 28)' ,'rgb(150, 161, 248)'], 
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'right',
            labels: {
              usePointStyle: true,
            },
          },
          title: {
            display: false,
            text: 'Chart.js Doughnut Chart'
          }
        },
        maintainAspectRatio: false,
      }
  });
  
  
  var myChart1 = new Chart("myChart2", {
    type: 'bar',
    data: {
       labels:['Linux' ,'Mac' ,'iOS', 'Windows', 'Android', 'Other' ,],   
       datasets: [
        {
           data: [380, 220, 300, 450, 670, 100, 0],
           backgroundColor: ['#C2F0C8', '#CECDF6','#3D3D3D','#BBE6FD','#A4AEF8','#ADE7D3']
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
         display: false
        },
        title: {
          display: false,
        }
      },
      scales: {
        x: {
          title: {
            display: false,
            text: 'Month'
          },
          display: false,
        },
        y: {
          title: {
            display: false,
            text: 'Value'
          },
          min: 0,
          max: 700,
          ticks: {
            // forces step size to be 50 units
            stepSize: 100
          }
        }
      }
    }
  });
  
  var myChart2 = new Chart("myChart3", {
    type: 'line',
    data: {
       labels:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],   
       datasets: [
        {
          label: 'Dataset 1',
          data:[10,29,44,21,37,33,49],
          borderColor: '#ADC8DB',
          pointRadius:0
        },
        {
          label: 'Dataset 2',
          data:[0,10,11,23,45,22,19],
          borderColor: '#1C1C1C',
          pointRadius:0
        }
      ]
    },
    options: {
      interaction: {
        intersect: false
      },
      elements: {
        line: {
            tension: 0.4
        }
      },
      plugins: {
          legend: {
           display: false
          },
          title: {
            display: false,
          }
        },
        scales: {
          x: {
            title: {
              display: false,
              text: 'Month'
            },
            display: false,
          },
          y: {
            title: {
              display: false,
              text: 'Value'
            },
            min: 0,
            max: 50,
            ticks: {
              stepSize: 10,
            }
          }
        }
    }
  });
  }
}
