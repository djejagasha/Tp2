import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Client } from './client/client';

@Component({
  imports: [RouterOutlet, Client],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('TP2');
}
