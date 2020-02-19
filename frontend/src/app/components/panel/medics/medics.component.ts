import { Component, OnInit } from '@angular/core';
import { MedicsService } from '../../../services/medics.service';
import { Observable } from 'rxjs';
import { Medics } from '../../../interfaces/medics';

@Component({
  selector: 'app-medics',
  templateUrl: './medics.component.html',
  styleUrls: ['./medics.component.css']
})
export class MedicsComponent implements OnInit {

  data;
  testData: Observable<Medics[]>;

  constructor(private medicsServ: MedicsService) { }

  ngOnInit(){
    // this.getData();
    this.testData = this.medicsServ.getMedics();
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
