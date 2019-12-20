import { Component, OnInit } from '@angular/core';
import { CostsService } from './costs.service';
import { Cost } from './cost.model';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-costs',
  templateUrl: './costs.component.html',
  styleUrls: ['./costs.component.scss']
})
export class CostsComponent implements OnInit {

  costs: Cost[] = [];
  displayedColumns = ['nameCost'];
  listData: MatTableDataSource<any>;

  constructor(private costsService: CostsService) { }

  ngOnInit() {
    this.getAllCosts();
  }

  getAllCosts() {
    this.costsService.getAllCost().subscribe(result => {
      console.log('GET ALL ACCOUNTS ', result);
      this.costs = result;
      this.listData = new MatTableDataSource(this.costs);
    })
  }
}
