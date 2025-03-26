import { animate, state, style, transition, trigger } from '@angular/animations';
import {
	AfterViewInit,
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	Input,
	ViewChild,
} from '@angular/core';

export const listAnimation = trigger('listAnimation', [
	state(
		'opened',
		style({
			height: '*',
			opacity: 1,
		}),
	),
	state(
		'closed',
		style({
			height: '0',
			opacity: 0,
		}),
	),
	transition('closed <=> opened', [animate('400ms ease-in-out')]),
]);

@Component({
	selector: 'app-node',
	imports: [],
	templateUrl: './node.component.html',
	styleUrl: './node.component.sass',
	animations: [listAnimation],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NodeComponent implements AfterViewInit {
	@Input({ required: true }) node?: ITreeNode;

	@ViewChild('children') childrenElement?: ElementRef<HTMLDivElement>;
	ngAfterViewInit(): void {
		const element = this.childrenElement?.nativeElement;
		if (element === undefined) return;
		setTimeout(() => {
			element.style.display = 'block';
		});
	}

	isViewList = false;
	animationState: 'opened' | 'closed' = 'closed';

	toggleViewChildrenNode() {
		this.isViewList = !this.isViewList;
		this.animationState = this.isViewList ? 'opened' : 'closed';
	}
}
