import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SiteLayoutComponent } from '../shared/component/site-layout/site-layout.component';

const routes: Routes = [{
  path: '', component: SiteLayoutComponent,
  children: [
    {
      path: 'welcome',
      component: WelcomeComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
