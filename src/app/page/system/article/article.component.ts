import {Component} from '@angular/core';
@Component({
    selector: 'article-component',
    templateUrl: './article.component.html'
})

export class ArticleComponent {

    /**
     * tab 当前选择id
     * @type {string}
     */
    selected: string = 'list';

    /**
     * 当前文章对象
     * @type {{}}
     */
    articleObj:any={};

}