/**
 * @file demo page for component
 * @author sunbai
 */

/* global Page, xhs */

const componentItems = require('../../config');

Page({

  data: {
   
  },
  onLoad(e) {
    
  },
  getInfo(){
    xhs.createSelectorQuery()
    .select('.scroll-view')
    .scrollOffset(res => {
      xhs.showToast({
        title: '高度: '+res.scrollTop,
        icon: 'none',
        image: '',
        duration: 1500,
        mask: false,
      });
        
      }).exec();
    }
});
