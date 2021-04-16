import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand/brand';
import { Color } from 'src/app/models/color/color';
import { BrandService } from 'src/app/services/brandService/brand.service';
import { ColorService } from 'src/app/services/colorService/color.service';

@Component({
  selector: 'app-brand-color',
  templateUrl: './brand-color.component.html',
  styleUrls: ['./brand-color.component.css']
})
export class BrandColorComponent implements OnInit {
  //all: any[] = [];
  brands: Brand[] = [];
  colors: Color[] = [];
  constructor(private colorService: ColorService, private brandService: BrandService) { }

  ngOnInit(): void {
    this.getBrandsColors();
  }
  getBrandsColors() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
      this.colorService.getColors().subscribe((response) => {
        this.colors = response.data;
      })
    });
  }
  // getBrandColor() {
  //   this.brands = this.brandService.getBrands();
  //   this.colors = this.colorService.getColors();
  // }
}
