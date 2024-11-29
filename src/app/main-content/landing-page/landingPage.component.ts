import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { NavebarComponent } from "./navebar/navebar.component"

@Component({
    selector: 'app-landingPage',
    standalone: true,
    imports: [CommonModule, NavebarComponent],
    template: `
    <section>
        <div><app-navebar></app-navebar></div>
        <h1 class="fontRaleway">SAKURA RAMEN</h1>
        <h2 class="fontRaleway">BEST RAMEN IN TOWN</h2>
    </section>
    `,
    styleUrls:['./landingPage.components.scss']
})
export class LandingPageComponent {}