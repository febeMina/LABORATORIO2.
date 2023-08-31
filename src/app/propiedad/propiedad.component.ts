import { Component } from '@angular/core';

@Component({
  selector: 'app-propiedad',
  templateUrl: './propiedad.component.html',
  styleUrls: ['./propiedad.component.css']
})
export class PropiedadComponent {
  color_div_property = "background-color: blue;";

  cambiar_color_div() {
    if(this.color_div_property == "background-color: blue;"){
      this.color_div_property = "background-color: red;";
    }else{
      this.color_div_property = "background-color: blue;";
    }
  }

}