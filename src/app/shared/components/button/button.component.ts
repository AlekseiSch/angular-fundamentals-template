import { Component, Input } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() buttonText: string;
  @Input() iconName: IconProp;
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
    library.addIcons(faHeart);
  }
  get buttonClass(): string {
    return this.iconName ? "has-icon" : "";
  }
  // Use the names for the inputs `buttonText` and `iconName`.
}
