import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { SiteLayoutComponent } from '../shared/component/site-layout/site-layout.component';

const routes: Routes = [{
  path: '', component: SiteLayoutComponent,
  children: [
    {
      path: 'about',
      component: AboutComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: []
})

export class AboutRoutingNModule { }