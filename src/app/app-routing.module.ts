import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ApiDataComponent } from './pages/api-data/api-data.component';
import { FormComponent } from './pages/form/form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'api-data', component: ApiDataComponent },
  { path: 'form', component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
