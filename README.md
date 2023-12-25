# Starbucks

스타벅스 홈페이지 클론 코딩

## reset-css url

```html

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.2/reset.min.css">
```

## Google Fonts

[Google Fonts](https://fonts.google.com/)

```html

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&display=swap" rel="stylesheet">
```

## Google Material Icons

[Google Material Icons](https://fonts.google.com/icons)

[Getting started for web](https://m2.material.io/develop/web/getting-started)

```html

<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>```
```

## Lodash

```html

<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"></script>
```

## GSAP & ScrollToPlugin

[GSAP(The GreenSock Animation Platform)](https://gsap.com)<br>
자바스크립트로 제어하는 타임라인 기반의 애니메이션 라이브러리

[ScrollToPlugin](https://greensock.com/scrolltoplugin/)<br>
스크롤 애니메이션을 지원하는 GSAP 플러그인

```html

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/gsap.min.js"
        integrity="sha512-EZI2cBcGPnmR89wTgVnN3602Yyi7muWo8y1B3a8WmIv1J9tYG+udH4LvmYjLiGp37yHB7FfaPBo8ly178m9g4Q=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/ScrollToPlugin.min.js"
        integrity="sha512-gXXZigEOXAVnGZ2otmK1DqTFK/vF87A+x6Owjf5CN+zVxcg9bLg3F6J1s9yGnFFT08QLt7G0vI3XNWJVue260w=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

[GSAP DOCS](https://gsap.com/docs/v3/Eases)

[GSAP gsap.to()](https://gsap.com/docs/v3/GSAP/gsap.to()/)

[GSAP Easing](https://gsap.com/docs/v3/Eases)

```js
gsap.to(요소, 시간, 옵션)
// 또는
TweenMax.to(요소, 시간, 옵션)
```

```js
gsap.to(window, .7, {
    scrollTo: 0
});
```

## Swiper

[Swiper](https://swiperjs.com/)<br>
하드웨어 가속 전환과 여러 기본 동작을 갖춘 현대적인 슬라이드 라이브러리

[Getting Started With Swiper](https://swiperjs.com/get-started)

```html
<!-- in HEAD -->
<link rel="stylesheet" href="https://unpkg.com/swiper@6.8.4/swiper-bundle.min.css"/>
<script src="https://unpkg.com/swiper@6.8.4/swiper-bundle.min.js"></script>

<!-- in BODY -->
<div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">1</div>
        <div class="swiper-slide">2</div>
        <div class="swiper-slide">3</div>
    </div>
</div>
```

## ScrollMagic

[ScrollMagic](https://github.com/janpaepke/ScrollMagic)<br>
스크롤과 요소의 상호 작용을 위한 자바스크립트 라이브러리<br>
대표적으로 요소가 현재 화면에 보이는 상태인지를 확인할 때 사용

[ScrollMagic API](http://scrollmagic.io/docs/)

```html

<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js"
        integrity="sha512-8E3KZoPoZCD+1dgfqhPbejQBnQfBXe8FuwL4z/c8sTrgeDMFEnoyTlH3obB4/fV+6Sg0a0XF+L/6xS4Xx1fUEg=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

```js
new ScrollMagic
    .Scene({ // 감시할 장면(Scene)을 추가
        triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
        triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
    })
    .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당(필수)
```

## Youtube API

[IFrame Player API](https://developers.google.com/youtube/iframe_api_reference?hl=ko)

```html
<!-- in HEAD -->
<script defer src="./js/youtube.js"></script>

<!-- in BODY -->
<div id="player"></div>
```

[플레이어 매개변수(playerVars)](https://developers.google.com/youtube/player_parameters.html?playerVersion=HTML5&hl=ko#Parameters)

```js
let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubePlayerAPIReady() {
    // <div id="player"></div>
    new YT.Player('player', {
        videoId: 'An6LvWQuj_8',
        playerVars: {
            autoplay: true,
            loop: true,
            playlist: 'An6LvWQuj_8' // 반복 재생할 유튜브 영상 ID 목록
        },
        events: {
            onReady: function (event) {
                event.target.mute();
            }
        }
    });
}
```

