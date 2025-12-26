import gsap from 'gsap'
import './style.css'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)


gsap.set('.quote', {
  opacity:0,
  scale:0.5
})

ScrollTrigger.create({
  trigger:'.quoteWrapper',
  start:'bottom 95%',
  onEnter:()=>gsap.to('.quote', {
    opacity:1, scale:1
  })
})

ScrollTrigger.create({
  trigger:'.quoteWrapper',
  start:'top 100%',
  onLeaveBack:()=>{
    console.log('i am leaving back');
    gsap.set('.quote', {
      opacity:0,
      scale:0.5
    })
    
  }
})


// let animation=gsap.timeline()

// animation.to('#3d-box', {
//     rotationY:360,
//     duration:8,
//     ease:'none',

// })

const tl=gsap.timeline();

tl.from('.orange', {xPercent:-100})
.from('.purple', {xPercent:100})
.from('.blue', {yPercent:-100})

ScrollTrigger.create({
  animation:tl,
  trigger:'#panel-container',
  start:'top top',
  end:'+=4000',
  scrub:true,
  pin:true,
 anticipatePin:1,
})


// tl.from('.test1', {xPercent:100})
// gsap.to('.test1', {
//   x:400,
//  repeat:-1,
//  yoyo:true,
//   duration:6,
//   rotation:360,
// })

