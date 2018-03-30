import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AuthorityGroupFormPage } from './authority-group-form';
import { AuthorityGroupModule } from '../../components/authority-group/authority-group.module';

@NgModule({
  declarations: [
    AuthorityGroupFormPage,
  ],
  imports: [
    IonicPageModule.forChild(AuthorityGroupFormPage),
    AuthorityGroupModule
  ],
})
export class AuthorityGroupFormPageModule { }
