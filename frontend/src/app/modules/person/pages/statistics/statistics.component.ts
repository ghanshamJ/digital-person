import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PersonService } from "src/app/core/services/person.service";

@Component({
  selector: "app-statistics",
  templateUrl: "statistics.component.html",
  styles: [],
})
export class StatisticsComponent implements OnInit {
  constructor(private personService: PersonService, private router: Router) {}
  data: any;
  ngOnInit(): void {
    this.getStats();
  }
  getStats() {
    this.personService.getPersonCountByCountry().subscribe(
      (res) => {
        //this.data = res;
        this.buildChart(res);
      },
      (err) => {
        console.log("failed!");
      }
    );
  }

  buildChart(data: any[]): void {
    const labels = [];
    function getColor() {
      function getRandomNum(min, max) {
        return Math.random() * (max - min) + min;
      }
      let r = getRandomNum(0,255);
      let g = getRandomNum(0,255);
      let b = getRandomNum(0,255);
      return {backColor:`rgba(${r},${g},${b},1.5)`, hoverColor:`rgba(${r},${g},${b},2)` };
    }
    const datasetsPie = [
      {
        label: 'My dataset',
        data: [],
        backgroundColor: [],
        hoverBackgroundColor: [],
      },
    ];
    for (const obj of data) {
      if (obj._id) {
        labels.push(obj._id);
        datasetsPie[0].data.push(obj.count);
        const color = getColor();
        datasetsPie[0].backgroundColor.push(color.backColor);
        datasetsPie[0].hoverBackgroundColor.push(color.hoverColor);
      }
    }
    this.data = { datasets: datasetsPie, labels: labels };
  }
}
