import { Component ,OnInit, HostBinding, Input } from '@angular/core';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-article',
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent  implements OnInit{
  @HostBinding('attr.class') cssClass = 'card';
  @Input() article!:Article;

  constructor() {
   
  }
  voteUp():Boolean {
    this.article.voteUp()
    return false;
  }
  voteDown():Boolean {
    this.article.voteDown()
    return false;
  }
  ngOnInit() {}
}

