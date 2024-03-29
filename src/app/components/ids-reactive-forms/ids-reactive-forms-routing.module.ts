import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsReactiveFormsComponent } from './ids-reactive-forms.component';
import { ExampleComponent } from './demos/example/example.component';

export const routes: Routes = [
  {
    path: '',
    component: IdsReactiveFormsComponent
  },
  {
    path: 'example',
    component: ExampleComponent,
    data: {
      type: 'Example',
      description: 'All fields in a reactive form'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdsReactiveFormsRoutingModule { }
