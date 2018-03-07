export default class CatalogItemSwitcher {
  constructor(el) {
    this.el = el;

    $(this.el).each(function () {
      const $current = $(this);
      const $body = $('body');
      $current.on('click', () => {
        const item = $(this).data('item');
        const addClasses = `is-active-catalog-item-${item}`;
        const removeClasses = [];

        $current.siblings().each(function(){
          const item = $(this).data('item');
          removeClasses.push(`is-active-catalog-item-${item}`);
        });

        $current.siblings().removeClass('active').end().addClass('active');
        $body.removeClass(removeClasses.join(' ')).addClass(addClasses);
      });
    });
  }
}
