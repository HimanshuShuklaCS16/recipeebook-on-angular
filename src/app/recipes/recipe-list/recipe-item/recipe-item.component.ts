import { Component, OnInit ,Input,Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
 @Input() recipe:Recipe;
 @Output recipeeSelected=new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }
onSelected(){
this.recipeeSelected.emit();
}
}
