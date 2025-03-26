import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TreeComponent } from '../components/tree/tree.component';

@Component({
	selector: 'app-root',
	imports: [RouterOutlet, TreeComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.sass',
})
export class AppComponent {
	title = 'node-tree';
}
