import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('inputName', {static:false}) inputNameRef : ElementRef;
  @ViewChild('inputAmount') inputAmountRef : ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();



  onAddIngredient(){
    const newIngredient = new Ingredient(this.inputNameRef.nativeElement.value, this.inputAmountRef.nativeElement.value);
    this.ingredientAdded.emit(newIngredient);

  }


}
