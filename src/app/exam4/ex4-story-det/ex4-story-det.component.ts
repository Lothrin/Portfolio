import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IStories } from '../../stories.model';
import { stories } from '../../stories';



@Component({
  selector: 'app-ex4-story-det',
  templateUrl: './ex4-story-det.component.html',
  styleUrl: './ex4-story-det.component.css'
})
export class Ex4StoryDetComponent {
  stories: IStories[];
  story: IStories;

  
 
  constructor(private route: ActivatedRoute
  ){
    this.stories = stories;
    const id = +this.route.snapshot.params['id'];
    this.story = this.stories[id];
  
  
    
  }

}
