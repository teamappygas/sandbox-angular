import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = {
    title: 'Angular Beginner course',
    image: 'https://www.ifri.org/sites/default/files/styles/vignette_share/public/thumbnails/image/russia_ukraine_gas_pipe.jpg?itok=pg90Qc7U'
  };

  onLogoClicked(): void {
    alert('Image clicked');
  }

  onKeyUp(title): void {
    this.data.title = title;
  }
}
