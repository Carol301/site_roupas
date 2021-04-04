import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  data: string;
  dados;

  constructor(private http: HttpClient) {

    this.data = '';
  }

  ionViewWillEnter() {
    // Load the data
    this.prepareDataRequest()
      .subscribe(
        data => {
          // Set the data to display in the template
          this.dados = data["items"];
          this.data = JSON.stringify(this.dados);
        }
      );
  }

  private prepareDataRequest(): Observable<object> {
    // Define the data URL
    const dataUrl = 'https://api.nigelbpeck.com/';

    const dataUrl2 = 'http://localhost:8888/api/V1/categories/list';
 
    // Prepare the request
    return this.http.get(dataUrl2);
  }

}