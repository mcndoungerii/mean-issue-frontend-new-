import { Component, OnInit } from '@angular/core';

import { IssueService } from '../../issue.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {



  constructor(private issueService: IssueService) {}

  ngOnInit() {
  }

  createForm() {
  }
  updateIssue(title, responsible, description, severity, status) { }

}

// MEAN STACK APP PART 3.
