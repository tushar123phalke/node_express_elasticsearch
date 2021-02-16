import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebexManagerComponent } from './webex-manager/webex-manager.component';
import { EBookComponent } from './e-book/e-book.component';
import { EBookElasticsearchComponent } from './e-book-elasticsearch/e-book-elasticsearch.component';
import { NewsComponent } from './news/news.component';


const routes: Routes = [{
  path: '',
  component: WebexManagerComponent

}, {
  path: 'ebook',
  component: EBookComponent
}, {
  path: 'ebook-elasticsearch',
  component: EBookElasticsearchComponent
},{
  path: 'news',
  component: NewsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
