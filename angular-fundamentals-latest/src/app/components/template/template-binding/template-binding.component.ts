import { Component } from '@angular/core';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  public name = 'Pedro Campos';
  public age = 32;

  public isDisabled = true;

  public sum() {
    return this.age++;
  }

  public sub() {
    return this.age--;
  }

  public onKeyDown(event: Event) {
    return console.log(event);
  }

  public onMouseMove(event: MouseEvent) {
    return console.log({
      clientX: event.clientX,
      clientY: event.clientY,
    });
  }
}
