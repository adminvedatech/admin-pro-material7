import { Component, OnInit } from '@angular/core';
import { Accounting } from './models/model';
import { MatTableDataSource } from '@angular/material';
import { Label, Color } from 'ng2-charts';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AccountingService } from './accounting.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-accountings',
  templateUrl: './accountings.component.html',
  styleUrls: ['./accountings.component.scss']
})
export class AccountingsComponent implements OnInit {

  accountings: Accounting[] = [];
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumns = ['nameAccount', 'accountNumber', 'balance'];
  listData: MatTableDataSource<any>;

 // dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
  //  this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  barChartLabels: Label[] = ['Apple', 'Banana', 'Kiwifruit', 'Blueberry', 'Orange', 'Grapes'];
  colors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(58, 83, 155, 1)',
    },
  ]
  
  private form : FormGroup;
  constructor(private f: FormBuilder,
              private accountingservice: AccountingService ) { }

  ngOnInit() {
   this.getAllBanksAccount();
  }

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [45, 37, 60, 70, 46, 33], label: 'Best Fruits' },
    { data: [15, 25, 30, 40, 26, 20], label: 'Best Orange' }
  ];

  getAllBanksAccount() {
    this.accountingservice.getAllAccountings().subscribe(result => {
      console.log('GET ALL ACCOUNTS ', result);
      this.accountings = result;
      this.listData = new MatTableDataSource(this.accountings);
    })
  }
  
}
