import { Component, OnInit, Input } from '@angular/core';
import { count } from 'console';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];
  constructor() { }

  ngOnInit() {
  }

  countByType(type: string): number {
    let count: number = 0;
    for (let i=0; i<this.satellites.length; i++) {
      if (type.toLowerCase() === this.satellites[i].type.toLowerCase()) {
        count +=1;
      }
    }
    return count;
  }
}
