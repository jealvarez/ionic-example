import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AuthorityGroupListPage } from './authority-group-list';
import { AuthorityGroupModule } from '../../components/authority-group/authority-group.module';

@NgModule({
  declarations: [
    AuthorityGroupListPage,
  ],
  imports: [
    IonicPageModule.forChild(AuthorityGroupListPage),
    AuthorityGroupModule
  ],
})
export class AuthorityGroupListPageModule { }
