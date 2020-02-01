import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  //styleUrls: ['./app.component.css']
  // Can use inline styles instead of urls.
  // Use back ticks for multi line css code.
  styles: [`
            h3 {
              color:dodgerblue;
            }
        `]

})
export class AppComponent {
  name = 'Hello world!';
}
