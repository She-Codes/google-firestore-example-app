let firstName = document.querySelector('.first-name');
let lastName = document.querySelector('.last-name');
let leftBgSlideIn, rightBgSlideIn, slideInBottom, topAnimation, bulbResetAnimation,
outterLeftPetalAnimation, innerLeftPetalAnimation, outterRightPetalAnimation,
innerRightPetalAnimation, flowerBaseAnimation, leftLeafAnimation,
rightLeafAnimation, roseGrowAnimation, roseShowAnimation, roseBudKeyframes;

let relativeOffsetNameTimeline = anime.timeline({
  duration: 1000
});

relativeOffsetNameTimeline
  .add({
    targets: '.l1',
    translateY: [-60, 0],
    opacity: [0, 1],
    easing: 'easeOutExpo'
  })
  .add({
    targets: '.l2',
    translateY: [60, 0],
    opacity: [0, 1],
    easing: 'easeOutExpo',
    offset: '-=800'
  })
  .add({
    targets: '.l3',
    translateY: [-60, 0],
    opacity: [0, 1],
    easing: 'easeOutExpo',
    offset: '-=800'
  })
  .add({
    targets: '.l4',
    translateY: [60, 0],
    opacity: [0, 1],
    easing: 'easeOutExpo',
    offset: '-=800'
  })
  .add({
    targets: '.l5',
    translateY: [-60, 0],
    opacity: [0, 1],
    easing: 'easeOutExpo',
    offset: '-=800'
  })
  .add({
    targets: '.l6',
    translateY: [60, 0],
    opacity: [0, 1],
    easing: 'easeOutExpo',
    offset: '-=800'
  })
  .add({
    targets: '.l7',
    translateY: [-60, 0],
    opacity: [0, 1],
    easing: 'easeOutExpo',
    offset: '-=800'
  })
  .add({
    targets: '.l8',
    translateY: [60, 0],
    opacity: [0, 1],
    easing: 'easeOutExpo',
    offset: '-=800'
  })
  .add({
    targets: '.l9',
    translateY: [-60, 0],
    opacity: [0, 1],
    easing: 'easeOutExpo',
    offset: '-=800'
  });

relativeOffsetNameTimeline.finished.then(bgAndLetterAnimation);

function bgAndLetterAnimation() {
  // let oddLetterAnimation = anime({
  //   targets: ['.l1', '.l3', '.l5', '.l7', '.l9'],
  //   translateY: -15,
  //   direction: 'alternate',
  //   loop: true,
  //   duration: 3000,
  //   easing: 'linear'
  // });

  // let evenLetterAnimation = anime({
  //   targets: ['.l2', '.l4', '.l6', '.l8'],
  //   translateY: 15,
  //   direction: 'alternate',
  //   loop: true,
  //   duration: 3000,
  //   easing: 'linear'
  // });

  leftBgSlideIn = anime({
    targets: '.overlay.left',
    translateX: ['-100vw', 0],
    easing: 'easeInOutQuart',
    duration: 2000
  });

  rightBgSlideIn = anime({
    targets: '.overlay.right',
    translateX: ['100vw', 0],
    easing: 'easeInOutQuart',
    duration: 2000
  });

  rightBgSlideIn.finished.then(menuAnimation);
}

function menuAnimation() {
  let menuShowAnimation = anime({
    targets: '.menu',
    opacity: 1,
    duration: 1000,
    easing: 'linear'
  });

  let slideInTop = anime({
    targets: '.about',
    translateY: ['-200', 0],
    easing: 'easeInOutQuart',
    duration: 2000
  });

  slideInBottom = anime({
    targets: '.featured',
    translateY: ['200', 0],
    easing: 'easeInOutQuart',
    duration: 2000
  });

  slideInBottom.finished.then(roseAnimation);
}

function roseAnimation() {
  roseGrowAnimationDuration = 1000;

  topAnimation = anime({
    targets: '.rose .top',
    translateY: ['3.45vw', 0],
    duration: roseGrowAnimationDuration,
    elasticity: 150,
    delay: (roseGrowAnimationDuration / 2)
  });

  bulbResetAnimation = anime({
    targets: '.bulb',
    scale: [1, 1],
    elasticity: 0
  });

  outterLeftPetalAnimation = anime({
    targets: '.left-outter',
    scale: [0, 1],
    rotate: [50, 0],
    duration: roseGrowAnimationDuration,
    elasticity: 150,
    delay: (roseGrowAnimationDuration / 2)
  });

  innerLeftPetalAnimation = anime({
    targets: '.left-inner',
    scale: [0, 1],
    rotate: [17, 0],
    duration: roseGrowAnimationDuration,
    elasticity: 150,
    delay: (roseGrowAnimationDuration / 2)
  });

  outterRightPetalAnimation = anime({
    targets: '.right-outter',
    scale: [0, 1],
    rotate: [-50, 0],
    duration: roseGrowAnimationDuration,
    elasticity: 150,
    delay: (roseGrowAnimationDuration / 2)
  });

  innerRightPetalAnimation = anime({
    targets: '.right-inner',
    scale: [0, 1],
    rotate: [-17, 0],
    duration: roseGrowAnimationDuration,
    elasticity: 150,
    delay: (roseGrowAnimationDuration / 2)
  });

  flowerBaseAnimation = anime({
    targets: '.base',
    scale: [0, 1],
    duration: roseGrowAnimationDuration,
    elasticity: 150,
    delay: (roseGrowAnimationDuration / 2)
  });

  leftLeafAnimation = anime({
    targets: '.left-leaf',
    translateY: '2.5vw',
    scale: [0.55, 1],
    duration: roseGrowAnimationDuration,
    elasticity: 150,
    delay: (roseGrowAnimationDuration / 2)
  });

  rightLeafAnimation = anime({
    targets: '.right-leaf',
    translateY: '1vw',
    scale: [0.41, 1],
    duration: roseGrowAnimationDuration,
    elasticity: 150,
    delay: (roseGrowAnimationDuration / 2)
  });

  roseGrowAnimation = anime({
    targets: '.rose',
    translateY: ['5vw', 0],
    duration: roseGrowAnimationDuration,
    elasticity: 150
  });

  roseShowAnimation = anime({
    targets: '.rose',
    opacity: [0, 1]
  });

  roseGrowAnimation.finished.then(roseBudSwayAnimation);
}

function replayRoseAnimation() {
  topAnimation.restart();
  bulbResetAnimation.restart();
  outterLeftPetalAnimation.restart();
  innerLeftPetalAnimation.restart();
  outterRightPetalAnimation.restart();
  innerRightPetalAnimation.restart();
  flowerBaseAnimation.restart();
  leftLeafAnimation.restart();
  rightLeafAnimation.restart();
  roseGrowAnimation.restart();
  roseShowAnimation.restart();
  roseGrowAnimation.finished.then(roseBudSwayAnimation);
}


function reverseRoseAnimation() {
  let flowerReverseAnimationDuration = 1300;

  let outterLeftPetalAnimation = anime({
    targets: '.left-outter',
    rotate: 35,
    duration: flowerReverseAnimationDuration,
    elasticity: 150
  });

  let innerLeftPetalAnimation = anime({
    targets: '.left-inner',
    rotate: 13,
    duration: flowerReverseAnimationDuration,
    elasticity: 150
  });

  let outterRightPetalAnimation = anime({
    targets: '.right-outter',
    rotate: -35,
    duration: flowerReverseAnimationDuration,
    elasticity: 150,
  });

  let innerRightPetalAnimation = anime({
    targets: '.right-inner',
    rotate: -13,
    duration: flowerReverseAnimationDuration,
    elasticity: 150
  });

  let bulbAnimation = anime({
    targets: '.bulb',
    scale: 0.31,
    duration: flowerReverseAnimationDuration,
    elasticity: 150
  });

  let roseUngrowAnimation = anime({
    targets: '.rose',
    translateY: '10vw',
    duration: flowerReverseAnimationDuration,
    elasticity: 150,
    delay: flowerReverseAnimationDuration / 2.4
  });

  // roseUngrowAnimation.finished.then(function() {
  //   document.querySelector('.bulb').style.transform = 'scale(1)';
  // });
}



function roseBudSwayAnimation() {
  roseBudKeyframes = anime({
    targets: '.bulb',
    rotate: [
      { value: 10, duration: 1600, easing: 'easeInOutCirc' },
      { value: -10, duration: 1600, easing: 'easeInOutCirc' },
      { value: 10, duration: 1600, easing: 'easeInOutCirc' },
      { value: 0, duration: 3500, easing: 'easeInOutCirc' }
    ],
    direction: 'alternate',
    loop: true
  });
}


// document.addEventListener('dblclick', function (e) {
//   let target = e.target;

//   leftBgSlideIn.play();
//   leftBgSlideIn.reverse();
//   rightBgSlideIn.play();
//   rightBgSlideIn.reverse();


//   document.body.classList.remove('slide-in');
//   void firstName.offsetWidth;
//   void lastName.offsetWidth;
//   document.body.classList.add('slide-out');
// });

document.addEventListener('click', function (e) {
  let target = e.target;

  if ( target.closest('.close') ) {
    e.preventDefault();
    leftBgSlideIn.play();
    leftBgSlideIn.reverse();
    rightBgSlideIn.play();
    rightBgSlideIn.reverse();
    //rightBgSlideIn.finished.then(replayRoseAnimation);
    //replayRoseAnimation();

    // rightBgSlideIn.finished.then didn't seem to work here
    let replayTimer = setTimeout(function() {
      replayRoseAnimation();
    }, 2000);

    document.body.classList.remove('slide-out');
    void firstName.offsetWidth;
    void lastName.offsetWidth;
    document.body.classList.add('slide-in');
  }

  if ( target.closest('.about') ) {
    e.preventDefault();

    leftBgSlideIn.play();
    leftBgSlideIn.reverse();
    rightBgSlideIn.play();
    rightBgSlideIn.reverse();
    roseBudKeyframes.pause();
    reverseRoseAnimation();


    document.body.classList.remove('slide-in');
    void firstName.offsetWidth;
    void lastName.offsetWidth;
    document.body.classList.add('slide-out');
  }
});