import { Component, OnInit } from '@angular/core';

import { FaqService } from '../../shared/services/faq.service';
import { Faq } from '../../shared/models/faq';

import { SearchService } from '../../shared/services/search.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  page = 1;
  faqs: Faq[];
  search = '';

  constructor(
    private faqService: FaqService,
    private searchService: SearchService
  ) { }

  ngOnInit() {
    this.faqService.getFaq()
      .subscribe((faqs: Faq[]) => {
        this.faqs = faqs;
      })
  }

  setFaqNo(f_no: number) {
    this.faqService.setFaqNo(f_no);
  }

  searchTerm() {
    if (this.search == '' || this.search == 'search') {
      this.faqService.getFaq()
        .subscribe((faqs: Faq[]) => {
          this.faqs = faqs;
        });
    } else {
      this.searchService.faqSearch(this.search)
        .subscribe((faqs: Faq[]) => {
          this.faqs = faqs;
        });
    }
  }

}
