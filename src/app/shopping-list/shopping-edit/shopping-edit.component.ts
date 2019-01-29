import { Component, OnInit ,ViewChild,ElementRef,EventEmitter,Output} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('inputname') inputnameref:ElementRef;
@ViewChild('inputamount') inputamountref:ElementRef;
@Output() ingredientsadded =new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }
onitemadded(){
const ingname=this.inputnameref.nativeElement.value;
const ingamount=this.inputamountref.nativeElement.value;
const newingredient=new Ingredient(ingname,ingamount);
this.ingredientsadded.emit(newingredient);
}
}
