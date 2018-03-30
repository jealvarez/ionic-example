import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ItemSliding } from 'ionic-angular';
import { AuthorityGroup } from '../../models/authority-group';
import { AuthorityGroupService } from '../../services/authority-group.service';

@IonicPage({
  segment: '/authority-groups'
})
@Component({
  selector: 'page-authority-group-list',
  templateUrl: 'authority-group-list.html',
})
export class AuthorityGroupListPage {

  public authorityGroups: AuthorityGroup[];

  constructor(private navController: NavController,
    private navParams: NavParams,
    private authorityGroupService: AuthorityGroupService) {
  }

  public ionViewDidEnter(): void {
    this.getAuthorityGroups();
  }

  public onSelectedItem(authorityGroup: AuthorityGroup): void {
    this.navController.push('AuthorityGroupFormPage', { authorityGroup: authorityGroup });
  }

  public onDelete(itemSliding: ItemSliding, authorityGroup: AuthorityGroup): boolean {
    this.authorityGroupService.deleteAuthorityGroup(authorityGroup.id)
      .subscribe(response => {
        this.authorityGroups.splice(Number(itemSliding.item.id), 1);
      });

    return false;
  }

  private getAuthorityGroups(): void {
    this.authorityGroupService.getAuthorityGroups()
      .subscribe((response: AuthorityGroup[]) => {
        this.authorityGroups = response;
      });
  }

}
