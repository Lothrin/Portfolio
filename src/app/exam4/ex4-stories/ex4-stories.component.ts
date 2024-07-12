import { Component } from '@angular/core';
import { IStories } from '../../stories.model';
import { stories } from '../../stories';
import { interviews } from '../../stories';

@Component({
  selector: 'app-ex4-stories',
  templateUrl: './ex4-stories.component.html',
  styleUrl: './ex4-stories.component.css'
})
export class Ex4StoriesComponent {
  stories: IStories[];
  interviews: IStories[];
  constructor ()
  {
    this.stories = stories;
    this.interviews = interviews;
  }

}
