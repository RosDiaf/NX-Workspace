import { Component, OnInit } from '@angular/core';
import { ClientData } from '@myorg/client-data';
import { NgbdModalContent } from '../modal/modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss']
})
export class TypographyComponent implements OnInit {
  buttonLabel: String = 'View';
  clientData = ClientData;
  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    console.log(this.clientData);
  }

  open(title, description) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.body = description;
  }
}
