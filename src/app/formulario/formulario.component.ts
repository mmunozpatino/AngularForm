import {Component} from '@angular/core'

@Component({
   selector: 'formulario',
   templateUrl: 'formulario.component.html'
})
export class Formulario{
   titulo= 'Formulario';
   values = '';
   enter: string;

   onKey(event: KeyboardEvent){
      this.values += (<HTMLInputElement>event.target).value + '|';
   }
   onEnter(s: string){
      this.enter = s;
      //holaaa
   }
}

