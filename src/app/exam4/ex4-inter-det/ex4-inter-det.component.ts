import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IStories } from '../../stories.model';
import { interviews } from '../../stories';

@Component({
  selector: 'app-ex4-inter-det',
  templateUrl: './ex4-inter-det.component.html',
  styleUrl: './ex4-inter-det.component.css'
})
export class Ex4InterDetComponent {
  interviews: IStories[];
interview: IStories;


constructor(private route: ActivatedRoute
){
  this.interviews = interviews;
  const id = +this.route.snapshot.params['id2'];
  this.interview = this.interviews[id];


  
}

}
