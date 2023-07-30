import { ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
   selector: 'ngx-lib',
   templateUrl: './ngx-lib.component.html',
   styleUrls: ['./ngx-lib.component.scss'],
   standalone: true,
   encapsulation: ViewEncapsulation.None,
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxLibComponent {
   @HostBinding()
   public class: string = 'ngx-lib';
}
