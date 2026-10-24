import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',  //how i need to be called name (ajay)
  imports: [RouterOutlet],
  templateUrl: './app.html',  //UI 
  styleUrl: './app.css'  //CSS 
})
export class App {
  title: string = "Angular 17";
  totalCustomers: number = 0;

  public incrementCustomer(): void {
    this.totalCustomers++;
  }
}

// class based react functional

// ts html css -> mandatory files for all components(folder)