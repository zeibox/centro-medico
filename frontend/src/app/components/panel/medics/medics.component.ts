import { Component, OnInit } from '@angular/core';
import { MedicsService } from '../../../services/medics.service';
import demodata from '../../../../assets/jsonFiles/medics.json';

@Component({
  selector: 'app-medics',
  templateUrl: './medics.component.html',
  styleUrls: ['./medics.component.css']
})
export class MedicsComponent implements OnInit {

  data;
  testData: any = demodata;

  constructor(private medicsServ: MedicsService) { }

  ngOnInit(): void {
    // this.getData();
    console.log(this.testData);
  }

  async getData() {
    try {
      this.data = await this.medicsServ
      .getMedicos()
      .toPromise();
      this.data = this.data.consultorios;

    } catch (error) {}
  }

}
