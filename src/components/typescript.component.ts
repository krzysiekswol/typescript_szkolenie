import { ChangeDetectionStrategy, Component, WritableSignal, signal } from "@angular/core";

type flightType = 'pax' | 'airTaxi';
type privateFlight = number;
type paxFlight = { num: number, cost: number }

type Flight = Record<flightType, privateFlight | paxFlight>


@Component({
    standalone: true,
    selector: 'bhr-typescript-practice',
    template:  `
    <h4>Satifies</h4>
    <button (click)="message()">Log</button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TypescriptComponent {  

    
    message(): void {
    }
    
}