import { AfterContentChecked, Component, Input, OnInit } from '@angular/core';
import SwiperCore, {Pagination, Keyboard, SwiperOptions} from 'swiper';


SwiperCore.use([Pagination, Keyboard]);


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent  implements OnInit, AfterContentChecked {


  @Input() bannerImages: any[];

  config: SwiperOptions = {};

  constructor() { }

  ngOnInit() {
    console.log(this.bannerImages);
  }

  ngAfterContentChecked(): void {
    this.config = {
      slidesPerView: 1.1,
      // navigation: true,
      pagination: { clickable: true },
      // centeredSlides: true,
      keyboard: { enabled: true },
      
    };
  }
}
