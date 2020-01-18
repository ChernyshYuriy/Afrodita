var baner = $(".header__baner");
var nav_bar_items = $(".nav_bar_items");
var a = $(".article1__text_rotate_90_deg");
var background_img1 = $(".background_img1");
var article1_text_baner = $(".font-size_800_pers");
var button_nav_bar = $(".navbar-toggler");
var article2__h1_animation = $(".article2__h1_animation");
var article2__text_animation = $(".article2__text_animation");
var article2_read_me_animation = $(".article2__read_me_animation");
var tl = new TimelineMax({});

tl.fromTo(baner, 1.2,{y:100, opacity: 0},{y:0, opacity: 1})
  .fromTo(button_nav_bar, 1.2,{x:"-1000%", opacity: 0},{x:"0%", opacity: 1},"-=1.2")
  .fromTo(nav_bar_items[3], 1,{x:-50, opacity: 0},{x:0, opacity: 1}, "-=0.7")
  .fromTo(nav_bar_items[2], 1,{x:-50, opacity: 0},{x:0, opacity: 1}, "-=0.55")
  .fromTo(nav_bar_items[1], 1,{x:-50, opacity: 0},{x:0, opacity: 1}, "-=0.55")
  .fromTo(nav_bar_items[0], 1,{x:-50, opacity: 0},{x:0, opacity: 1}, "-=0.55")
  .fromTo(background_img1, 0.7,{"background-size": "100% 0%"},{"background-size": "100% 100%"}, "-=0.5")
  .fromTo(article1_text_baner, 1,{opacity:0, y:30},{opacity:1, y:0}) 
  .fromTo(a, 1,{y:-50, opacity: 0},{y:0, opacity: 1}, "-=0.8");

tl.fromTo(article2__h1_animation,0.7,{opacity:0, y:50},{opacity:1, y:0})
  .fromTo(article2__text_animation, 0.5,{opacity:0, y:50},{opacity:1, y:0}, "-=0.5")
  .fromTo(article2_read_me_animation,0.5,{opacity:0, y:50},{opacity:1, y:0}, "-=0.2")
  .fromTo($(".article2_date"), 1, {x:"-1000%", opacity: 0},{x:"0%", opacity: 1})
  .fromTo($(".article2__background-img_lines"), 1, { opacity: 0},{opacity: 1})
  .fromTo($(".line1"),1.1,{x:"-1000%", opacity: 0},{x:"0%", opacity: 1})
  .fromTo($(".line2"),1.1,{x:"-1000%", opacity: 0},{x:"0%", opacity: 1},"-=0.5")
  .fromTo($(".line3"),1.1,{x:"-1000%", opacity: 0},{x:"0%", opacity: 1},"-=0.6");