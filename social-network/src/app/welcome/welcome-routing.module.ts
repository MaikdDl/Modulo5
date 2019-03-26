import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SiteLayoutComponent } from '../shared/components/site-layout/site-layout.component';

const routes: Routes = [{
  path: '', component: SiteLayoutComponent,
  children: [
    {
      path: '',
      redirectTo: 'welcome',
      pathMatch: 'full'
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
