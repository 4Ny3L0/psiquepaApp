import { Component } from '@angular/core';

@Component({
  selector: 'app-ps-footer',
  standalone: true,
  imports: [],
  templateUrl: './ps-footer.component.html',
  styleUrl: './ps-footer.component.css',
})
export class PsFooterComponent {
  private date = new Date();
  footerInfo: string =
    'By Unknown developers \u00A9 ' + this.date.getFullYear();
}
