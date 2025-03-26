import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NodeComponent } from '../node/node.component';
import { TREE_NODE } from '../../utils/consts';

@Component({
	selector: 'app-tree',
	imports: [NodeComponent],
	templateUrl: './tree.component.html',
	styleUrl: './tree.component.sass',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeComponent {
	readonly treeData = TREE_NODE ?? [];
}
