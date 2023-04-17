

import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-ap',
  template: `
    <input type="text" #input1>
    <input type="text" #input2>
    <input type="text" #input3>
  `
})
export class ApComponent {
  constructor(private elementRef: ElementRef) {}

  @HostListener('keydown.tab', ['$event'])
  onTab(event: KeyboardEvent) {
    const inputs = this.elementRef.nativeElement.querySelectorAll('input');
    const activeElement = document.activeElement as HTMLElement;
    const activeIndex = Array.from(inputs).indexOf(activeElement);

    if (event.shiftKey) {
      // Shift+Tab pressed
      if (activeIndex === 0) {
        // Move focus to the last input field
        inputs[inputs.length - 1].focus();
        event.preventDefault();
      }
    } else {
      // Tab pressed
      if (activeIndex === inputs.length - 1) {
        // Move focus to the first input field
        inputs[0].focus();
        event.preventDefault();
      }
    }
  }
}
