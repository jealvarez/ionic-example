import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthorityGroup } from '../../models/authority-group';

@IonicPage({
  segment: '/authority-groups/form'
})
@Component({
  selector: 'page-authority-group-form',
  templateUrl: 'authority-group-form.html',
})
export class AuthorityGroupFormPage implements OnInit {

  public authorityGroup: AuthorityGroup;

  constructor(private navController: NavController,
    private navParams: NavParams) {
  }

  public ngOnInit(): void {
    this.authorityGroup = this.navParams.get('authorityGroup');
  }

  public onAuthorityGroupStored(): void {
    this.navController.popTo('AuthorityGroupListPage');
  }

}
