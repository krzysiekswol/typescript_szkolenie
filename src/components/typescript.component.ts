import { ChangeDetectionStrategy, Component, WritableSignal, signal } from "@angular/core";

@Component({
    standalone: true,
    selector: 'bhr-typescript-practice',
    template:  `
    <h4>Unknown</h4>
    <p>{{ dataTs }}</p>
    <button (click)="update()">Update</button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TypescriptComponent {
    data: any = 2;
    dataTs: unknown = 2;

    update(): void {
    }
}