import { Component, Input } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatDividerModule } from '@angular/material/divider'
import { MatIconModule } from '@angular/material/icon'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-link-custom',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, RouterModule],
  templateUrl: './link-custom.component.html',
  styleUrl: './link-custom.component.scss',
})
export class LinkCustomComponent {
  @Input() url: string = '';
}
