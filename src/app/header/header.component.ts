import {Component,Output,EventEmitter} from '@angular/core';
@Component({
  selector:'app-header',
  templateUrl:'./header.component.html'
})
export class HeaderComponent{
@Output()  featureSelected:EventEmitter=new EventEmitter<String>();
onSelect(feature:String)
{
  this.featureSelected.emit(feature);
}
}
