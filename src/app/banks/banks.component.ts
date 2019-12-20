import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { MatTableDataSource } from '@angular/material';
import { BankService } from './bank.service';
import { Bank } from './model/model';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];



@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.scss']
})
export class BanksComponent implements OnInit {

  banks: Bank[] = [];
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumns = ['nameBank', 'accountNumber', 'email', 'balance', 'balanceToday'];
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
              private bankservice: BankService ) { }

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
    this.bankservice.getAllBankAccount().subscribe(result => {
      console.log('GET ALL ACCOUNTS ', result);
      this.banks = result;
      this.listData = new MatTableDataSource(this.banks);
    })
  }
  
}


