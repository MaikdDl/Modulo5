import { Component } from '@angular/core';
import { faHackerrank } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'sn-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss']
})
export class DashboardHeaderComponent {

  logo = faHackerrank;

}
