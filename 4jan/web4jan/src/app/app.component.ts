import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  public products:any = [];

  public add(name:any,price:any,company:any,image:any)
  {
      this.products.push({
        name:name.value,
        price:price.value*1,
        company:company.value,
        image:"assets/imgs/"+image.value})
  }
}
