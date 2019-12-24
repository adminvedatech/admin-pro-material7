import { Component, OnInit } from "@angular/core";
import { Product, RawMaterial } from "./product.model";
import { MatTableDataSource } from "@angular/material";
import { Label, Color } from "ng2-charts";
import { FormGroup, FormBuilder } from "@angular/forms";
import { ProductionService } from "./production.service";
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';

@Component({
  selector: "app-production",
  templateUrl: "./production.component.html",
  styleUrls: ["./production.component.scss"]
})
export class ProductionComponent implements OnInit {
  products: Product[] = [];
  rawMaterial: RawMaterial[] =[];
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumns = [
    "nameProduct",
    "codeBar",
    "description",
  ];

  displayedColumns2 = [
    "nameRawMaterial",
    "codeBar",
    "description",
    "unitCost"
  ];
  listData: MatTableDataSource<any>;
  listDataRaw: MatTableDataSource<any>;

  // dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    //  this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  barChartLabels: Label[] = [
    "Apple",
    "Banana",
    "Kiwifruit",
    "Blueberry",
    "Orange",
    "Grapes"
  ];
  colors: Color[] = [
    {
      borderColor: "black",
      backgroundColor: "rgba(58, 83, 155, 1)"
    }
  ];

  private form: FormGroup;

  constructor(
    private f: FormBuilder,
    private productionservice: ProductionService
  ) {}

  ngOnInit() {
    this.getAllProducts();
    this.getAllRawMaterials();
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
 
   getAllProducts() {
     this.productionservice.getAllProducts().subscribe(result => {
       console.log('GET ALL ACCOUNTS ', result);
       this.products = result;
       this.listData = new MatTableDataSource(this.products);
     })
   }

   getAllRawMaterials() {
    this.productionservice.getAllRawMaterials().subscribe(result => {
      console.log('GET ALL ACCOUNTS ', result);
      this.rawMaterial = result;
      this.listDataRaw = new MatTableDataSource(this.rawMaterial);
    })
  }
}
