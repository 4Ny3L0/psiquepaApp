import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { PsLandingComponent } from './pages/ps-landing/ps-landing.component';
import { Title } from '@angular/platform-browser';
import { PsFooterComponent } from './ps-footer/ps-footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PsLandingComponent, PsFooterComponent, RouterLink],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Psiquepa | Inicio';
}
