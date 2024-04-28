module.exports = {

  
  loginPagetitanium:
  {
     loginheader: 'div.Home_headerPanelContainer__2D2t1 header.Home_headerPanel__2lckP div.Home_topmenu__2tOzT.Home_center__3PM_e ul:nth-child(1) li:nth-child(2) > a.MuiTypography-root.MuiLink-root.MuiLink-underlineHover.MuiTypography-colorPrimary',
     username: '#userName',
     password: '#password',
     loginBtnClick: '#signIn'
  },

  terminaltitanium:
  {
    terminal:'div.wrapper div.sidebar div.sidebarMenu ul.MuiList-root.MuiList-padding a.MuiTypography-root.MuiLink-root.MuiLink-underlineHover.MuiTypography-colorPrimary:nth-child(2) > li.MuiButtonBase-root.MuiListItem-root.MuiMenuItem-root.jss2.MuiMenuItem-gutters.MuiListItem-gutters.MuiListItem-button',
    customerdropdown: '/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/main[1]/div[2]/div[1]/form[1]/div[1]/div[2]/div[1]/div[3]',
    selectcustomerfromdropdown:' #react-select-3-option-1',
    amount:'#amount',
    email:'#email',
    ACHlink:'div.wrapper div.rightPanel div.contentPart main.MuiContainer-root.terminal-container.term-add div._loading_overlay_wrapper.css-79elbk div.terminal-inner div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-3 div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-sm-12.MuiGrid-grid-md-4:nth-child(1) div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-3:nth-child(3) div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-sm-12.MuiGrid-grid-md-12:nth-child(2) > span.Terminal_cursorPointer__3EWbL',
    accountName:'#accountName',
    accountNumber:'#accountNumber',
    routingNumber:'#routingNumber',
    chargeACH:'#chargeCard'
    
  },

  loginPage: {
    txt_uname: '#user-name',
    txt_pwd: '#password',
    btn_login: '#login-button'
  },

  homePage: {
    list_sort: '.product_sort_container',
    lnk_cart: '//div[@id="shopping_cart_container"]/a',
    lnk_menu: '//button[contains(.,"Open Menu")]',
    lnk_logout: '#logout_sidebar_link',
    lnk_inventory: '#inventory_sidebar_link',
  },

  productPage: {
    btn_addToCart: '//button[contains(.,"ADD TO CART")]',
    btn_back: '//button[@class="inventory_details_back_button"]',
  },

  cartPage: {
    btn_continueShpg: '//a[contains(.,"Continue Shopping")',
    lnk_chkout: '//a[contains(.,"CHECKOUT")]',
    info_summary: '.summary_info',
    lnk_finish: '//a[contains(.,"FINISH")]',
    img_chkoutComplete: '#checkout_complete_container',
  },

  checkoutPage: {
    txt_fname: '#first-name',
    txt_lname: '#last-name',
    txt_zip: '#postal-code',
    btn_continue: '//input[@value="CONTINUE"]',
    btn_cancel: '//a[contains(.,"CANCEL")]',
  }
}