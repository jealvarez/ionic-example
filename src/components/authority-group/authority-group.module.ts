import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { AuthorityGroupService } from '../../services/authority-group.service';
import { AuthorityGroupFormComponent } from './authority-group-form/authority-group-form.component';

@NgModule({
  declarations: [
    AuthorityGroupFormComponent
  ],
  imports: [
    IonicModule
  ],
  exports: [
    AuthorityGroupFormComponent
  ],
  providers: [
    AuthorityGroupService
  ]
})
export class AuthorityGroupModule { }
