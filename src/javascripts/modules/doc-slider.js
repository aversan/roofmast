import Swiper from 'swiper';

export default class DocSlider {
  constructor(el) {
    this.el = el;

    $(this.el).each(function () {
      const $wrapper = $(this);
      const $swiperContainer = $wrapper.find('.js-swiper-container');
      const $prev = $wrapper.find('.js-swiper-prev');
      const $next = $wrapper.find('.js-swiper-next');

      const options = {
        navigation: {
          prevEl: $prev,
          nextEl: $next,
        },
        slidesPerView: 3,
        spaceBetween: 100,
        slideToClickedSlide: false,
        initialSlide: 0,
        setWrapperSize: true,
        autoHeight: false,
        observer: true,
        observeParents: true,
        onInit: function(swiper) {
          $(window).resize(viewport.changed(function(){
            let $wrapper = $(swiper.wrapper[0]);
            $wrapper.height('auto');
            var maxHeight = Math.max.apply(Math, $wrapper.find('.swiper-slide').map(function(){
              return $(this).height();
            }));
            $wrapper.css('min-height', maxHeight);
            swiper.update();
          }));
        }
      };

      new Swiper($swiperContainer, options);
    });
  }
}
