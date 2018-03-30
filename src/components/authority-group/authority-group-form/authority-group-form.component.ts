import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthorityGroup } from '../../../models/authority-group';
import { AuthorityGroupService } from '../../../services/authority-group.service';

@Component({
  selector: 'app-authority-group-form',
  templateUrl: './authority-group-form.component.html'
})
export class AuthorityGroupFormComponent implements OnInit {

  @Input()
  public authorityGroup: AuthorityGroup;

  @Output()
  public authorityGroupStoredEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  public authorityGroupForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private authorityGroupService: AuthorityGroupService) { }

  public ngOnInit(): void {
    this.renderForm();
  }

  public onSubmit(): void {
    const authorityGroup = this.authorityGroupForm.value;
    if (this.authorityGroup) {
      this.authorityGroupService.updateAuthorityGroup(authorityGroup)
        .subscribe(() => this.authorityGroupStoredEvent.emit(true));
    } else {
      this.authorityGroupService.createAuthorityGroup(authorityGroup)
        .subscribe(() => this.authorityGroupStoredEvent.emit(true));
    }
  }

  private initializeDefaultForm(authorityGroup?: AuthorityGroup): void {
    this.authorityGroupForm = this.formBuilder.group({
      id: authorityGroup ? authorityGroup.id : 0,
      name: authorityGroup ? authorityGroup.name : '',
      description: authorityGroup ? authorityGroup.description : '',
      enabled: authorityGroup ? authorityGroup.enabled : false
    });
  }

  private renderForm(): void {
    if (this.authorityGroup) {
      this.initializeDefaultForm(this.authorityGroup);
    } else {
      this.initializeDefaultForm();
    }
  }

}
