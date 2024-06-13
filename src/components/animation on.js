gsap.registerPlugin(ScrollTrigger);

class RevealonLoadOrOnScroll{
  constructor(){
    this.DOM = {
      hero: document.querySelector('.hero'),
      cards:document.querySelectorAll('.card')
    };
    this.init();
  }
  init(){
    this.heroAnimation();
    this.cardAnimations();
  }
  heroAnimation(){
    gsap.from(this.DOM.hero, {
      duration: 1,
      opacity: 0,
      y: -10,
      scrollTrigger: {
        trigger: this.DOM.hero,
        toggleActions: "play none none none"
      }
    });
  }
  cardAnimations(){
    this.DOM.cards.forEach((card, index)=>{
      gsap.from(card, {
        duration: 1,
        opacity: 0,
        y: -10,
        scrollTrigger: {
          trigger: card,
          toggleActions: "play none none none"
        }
      });
    });
  }
}
new RevealonLoadOrOnScroll();