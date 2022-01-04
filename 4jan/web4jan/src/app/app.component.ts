import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//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
export class AppComponent
{
  public products:any = [];
  public productIndex:number = 0;

  public deleteProduct(pid:number){
    this.products = this.products.filter((prod:any)=>prod.pid!=pid)
  }

  public add(name:any,price:any,company:any,image:any)
  {
      this.products.push({
        pid : ++this.productIndex,
        name:name.value,
        price:price.value*1,
        company:company.value,
        image:"assets/imgs/"+image.value})
  }
}
