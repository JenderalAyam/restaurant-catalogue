(()=>{"use strict";var r,n={948:(r,n,A)=>{A.d(n,{Z:()=>C});var e=A(537),t=A.n(e),a=A(645),i=A.n(a),o=A(667),p=A.n(o),s=new URL(A(930),A.b),l=i()(t()),d=p()(s);l.push([r.id,"@media screen and (min-width: 650px) {\r\n  .app-bar {\r\n    grid-template-columns: 1fr auto;\r\n    padding: 8px 32px;\r\n  }\r\n\r\n  .app-bar .app-bar__brand h1 {\r\n    font-size: 1.5em;\r\n  }\r\n\r\n  .app-bar .app-bar__menu {\r\n    display: none;\r\n  }\r\n\r\n  .app-bar .app-bar__navigation {\r\n    position: static;\r\n    width: 100%;\r\n  }\r\n\r\n  .app-bar .app-bar__navigation ul li {\r\n    display: inline-block;\r\n  }\r\n\r\n  .app-bar .app-bar__navigation ul li a {\r\n    display: inline-block;\r\n    width: 120px;\r\n    text-align: center;\r\n    margin: 0;\r\n  }\r\n  .hero {\r\n    background-image: url("+d+");\r\n    min-height: 460px;\r\n    width: 100%;\r\n    background-size: cover;\r\n  }\r\n}\r\n@media screen and (min-width: 850px) {\r\n  .restaurants {\r\n    grid-template-columns: repeat(3, 1fr);\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1200px) {\r\n  .restaurants {\r\n    grid-template-columns: repeat(4, 1fr);\r\n  }\r\n  .hero {\r\n    min-width: 1000px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1600px) {\r\n  .restaurants {\r\n    grid-template-columns: repeat(5, 1fr);\r\n  }\r\n}\r\n","",{version:3,sources:["webpack://./src/styles/responsive.css"],names:[],mappings:"AAAA;EACE;IACE,+BAA+B;IAC/B,iBAAiB;EACnB;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,gBAAgB;IAChB,WAAW;EACb;;EAEA;IACE,qBAAqB;EACvB;;EAEA;IACE,qBAAqB;IACrB,YAAY;IACZ,kBAAkB;IAClB,SAAS;EACX;EACA;IACE,yDAA+D;IAC/D,iBAAiB;IACjB,WAAW;IACX,sBAAsB;EACxB;AACF;AACA;EACE;IACE,qCAAqC;EACvC;AACF;;AAEA;EACE;IACE,qCAAqC;EACvC;EACA;IACE,iBAAiB;EACnB;AACF;;AAEA;EACE;IACE,qCAAqC;EACvC;AACF",sourcesContent:["@media screen and (min-width: 650px) {\r\n  .app-bar {\r\n    grid-template-columns: 1fr auto;\r\n    padding: 8px 32px;\r\n  }\r\n\r\n  .app-bar .app-bar__brand h1 {\r\n    font-size: 1.5em;\r\n  }\r\n\r\n  .app-bar .app-bar__menu {\r\n    display: none;\r\n  }\r\n\r\n  .app-bar .app-bar__navigation {\r\n    position: static;\r\n    width: 100%;\r\n  }\r\n\r\n  .app-bar .app-bar__navigation ul li {\r\n    display: inline-block;\r\n  }\r\n\r\n  .app-bar .app-bar__navigation ul li a {\r\n    display: inline-block;\r\n    width: 120px;\r\n    text-align: center;\r\n    margin: 0;\r\n  }\r\n  .hero {\r\n    background-image: url('../public/images/hero/hero-image_3.jpg');\r\n    min-height: 460px;\r\n    width: 100%;\r\n    background-size: cover;\r\n  }\r\n}\r\n@media screen and (min-width: 850px) {\r\n  .restaurants {\r\n    grid-template-columns: repeat(3, 1fr);\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1200px) {\r\n  .restaurants {\r\n    grid-template-columns: repeat(4, 1fr);\r\n  }\r\n  .hero {\r\n    min-width: 1000px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1600px) {\r\n  .restaurants {\r\n    grid-template-columns: repeat(5, 1fr);\r\n  }\r\n}\r\n"],sourceRoot:""}]);const C=l},890:(r,n,A)=>{A.d(n,{Z:()=>C});var e=A(537),t=A.n(e),a=A(645),i=A.n(a),o=A(667),p=A.n(o),s=new URL(A(930),A.b),l=i()(t());l.push([r.id,"@import url(https://fonts.googleapis.com/css2?family=Inconsolata&display=swap);"]);var d=p()(s);l.push([r.id,"* {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nbody {\r\n  font-family: 'cursive', sans-serif;\r\n  background-color: white;\r\n  min-height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n/* skip konten */\r\n.skip-link {\r\n  position: absolute;\r\n  top: -100px;\r\n  left: 0;\r\n  background-color: #bf1722;\r\n  color: white;\r\n  padding: 10px;\r\n  font-size: 20px;\r\n  z-index: 100;\r\n  text-decoration: none;\r\n}\r\n.skip-link:focus {\r\n  top: 100px;\r\n}\r\n\r\n/*\r\n    AppBar\r\n  */\r\n\r\n.app-bar {\r\n  padding: 8px 16px;\r\n  background-color: #272730;\r\n  display: grid;\r\n  grid-template-columns: auto 1fr auto;\r\n  gap: 10px;\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 99;\r\n  border-bottom: 1px solid #ffffff;\r\n}\r\n\r\n.app-bar .app-bar__menu {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.app-bar .app-bar__menu button {\r\n  background-color: transparent;\r\n  border: none;\r\n  font-size: 18px;\r\n  padding: 14px;\r\n  cursor: pointer;\r\n  color: white;\r\n}\r\n\r\n.app-bar .app-bar__brand {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.app-bar .app-bar__brand h1 {\r\n  font-family: 'Inconsolata', monospace;\r\n  color: #ffc017;\r\n  font-size: 22px;\r\n  user-select: none;\r\n}\r\n\r\n.app-bar .app-bar__navigation {\r\n  position: absolute;\r\n  top: 50px;\r\n  left: -180px;\r\n  width: 150px;\r\n  transition: all 0.3s;\r\n  padding: 8px;\r\n  background-color: #272730;\r\n  overflow: hidden;\r\n}\r\n\r\n.app-bar .app-bar__navigation.open {\r\n  left: 0;\r\n}\r\n.app-bar .app-bar__navigation ul li a {\r\n  color: white;\r\n  display: inline-block;\r\n  text-decoration: none;\r\n  padding: 14px;\r\n}\r\n\r\n.app-bar .app-bar__navigation ul li a:hover {\r\n  color: rgb(203, 198, 198);\r\n}\r\n/* hero elemen */\r\n.hero {\r\n  align-items: center;\r\n  justify-items: center;\r\n  width: 100%;\r\n  min-height: 380px;\r\n  background: #000000;\r\n  background-image: url("+d+");\r\n  background-position: center;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  position: relative;\r\n}\r\n\r\n.hero-overlay {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-content: center;\r\n}\r\n\r\n.hero-inner {\r\n  align-self: center;\r\n  text-align: center;\r\n  max-width: 60%;\r\n  position: absolute;\r\n  color: white;\r\n  z-index: 2;\r\n}\r\n\r\n.hero-inner > h1 {\r\n  text-shadow: 10px 10px black;\r\n  color: #ffc017;\r\n  font-weight: 900;\r\n  font-size: 3em;\r\n}\r\n\r\n.hero-inner > p {\r\n  color: white;\r\n  font-size: 18px;\r\n}\r\n/*\r\n  Main Content\r\n*/\r\n\r\nmain {\r\n  padding: 32px;\r\n  flex: 1;\r\n}\r\n\r\n.content {\r\n  margin: 0 auto;\r\n  min-height: 100%;\r\n}\r\n\r\n.content .content__heading {\r\n  font-weight: normal;\r\n  text-align: center;\r\n  font-size: 34px;\r\n}\r\n/*\r\n  Restaurabts\r\n*/\r\n\r\n.restaurants {\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  gap: 16px;\r\n  margin: 32px 0;\r\n}\r\n/*\r\n  restaurant item\r\n*/\r\n\r\n.restaurant-item {\r\n  width: 100%;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n  border-radius: 8px;\r\n  overflow: hidden;\r\n}\r\n\r\n.restaurant-item__header {\r\n  position: relative;\r\n}\r\n\r\n.restaurant-item .restaurant-item__header .restaurant-item__header__poster {\r\n  width: 100%;\r\n}\r\n\r\n.restaurant-item .restaurant-item__header .restaurant-item__header__rating {\r\n  position: absolute;\r\n  padding: 8px;\r\n  bottom: 20px;\r\n  left: 0;\r\n  display: inline-block;\r\n  background-color: black;\r\n  color: white;\r\n}\r\n\r\n.restaurant-item .restaurant-item__header .restaurant-item__header__rating .restaurant-item__header__rating__score {\r\n  margin-left: 10px;\r\n}\r\n\r\n.restaurant-item .restaurant-item__content {\r\n  padding: 16px;\r\n}\r\n\r\n.restaurant-item .restaurant-item__content h3 {\r\n  margin: 0 0 10px 0;\r\n}\r\n\r\n.restaurant-item .restaurant-item__content h3 a {\r\n  color: #db0000;\r\n  text-decoration: none;\r\n}\r\n\r\n.restaurant-item .restaurant-item__content p {\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  display: -webkit-box;\r\n  -webkit-line-clamp: 4; /* number of lines to show */\r\n  -webkit-box-orient: vertical;\r\n}\r\n.restaurant-item .restaurant-item__content a {\r\n  padding: 14px 0px;\r\n}\r\n\r\n/*\r\n  Movie\r\n*/\r\n\r\n.restaurant {\r\n  margin: 0 auto;\r\n  width: 100%;\r\n  max-width: 800px;\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  gap: 18px 16px;\r\n}\r\n\r\n.restaurant .restaurant__poster {\r\n  width: 100%;\r\n  max-width: 400px;\r\n}\r\n\r\n.restaurant .restaurant__info h4 {\r\n  margin: 8px 0;\r\n}\r\n\r\n/* Review */\r\n.review h3 {\r\n  padding-bottom: 1em;\r\n  font-weight: 900;\r\n}\r\n.review-head {\r\n  display: flex;\r\n  justify-content: baseline;\r\n  gap: 10px;\r\n}\r\n.reviewer-name {\r\n  color: black;\r\n  font-weight: 600;\r\n}\r\n.review-date {\r\n  color: gray;\r\n  font-weight: 600;\r\n}\r\n.reviewer-review {\r\n  font-size: 16px;\r\n}\r\n\r\n/*\r\n  Like\r\n*/\r\n.like {\r\n  width: 55px;\r\n  height: 55px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: #db0000;\r\n\r\n  position: fixed;\r\n  bottom: 16px;\r\n  right: 16px;\r\n  border-radius: 50%;\r\n  border: 0;\r\n\r\n  font-size: 18px;\r\n  color: white;\r\n  cursor: pointer;\r\n}\r\n/* footer */\r\nfooter {\r\n  background-color: #272730;\r\n  border-top: 1px solid #ffffff;\r\n  text-align: center;\r\n  color: #ffffff;\r\n  padding: 2em;\r\n}\r\n","",{version:3,sources:["webpack://./src/styles/style.css"],names:[],mappings:"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",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Inconsolata&display=swap');\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nbody {\r\n  font-family: 'cursive', sans-serif;\r\n  background-color: white;\r\n  min-height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n/* skip konten */\r\n.skip-link {\r\n  position: absolute;\r\n  top: -100px;\r\n  left: 0;\r\n  background-color: #bf1722;\r\n  color: white;\r\n  padding: 10px;\r\n  font-size: 20px;\r\n  z-index: 100;\r\n  text-decoration: none;\r\n}\r\n.skip-link:focus {\r\n  top: 100px;\r\n}\r\n\r\n/*\r\n    AppBar\r\n  */\r\n\r\n.app-bar {\r\n  padding: 8px 16px;\r\n  background-color: #272730;\r\n  display: grid;\r\n  grid-template-columns: auto 1fr auto;\r\n  gap: 10px;\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 99;\r\n  border-bottom: 1px solid #ffffff;\r\n}\r\n\r\n.app-bar .app-bar__menu {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.app-bar .app-bar__menu button {\r\n  background-color: transparent;\r\n  border: none;\r\n  font-size: 18px;\r\n  padding: 14px;\r\n  cursor: pointer;\r\n  color: white;\r\n}\r\n\r\n.app-bar .app-bar__brand {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.app-bar .app-bar__brand h1 {\r\n  font-family: 'Inconsolata', monospace;\r\n  color: #ffc017;\r\n  font-size: 22px;\r\n  user-select: none;\r\n}\r\n\r\n.app-bar .app-bar__navigation {\r\n  position: absolute;\r\n  top: 50px;\r\n  left: -180px;\r\n  width: 150px;\r\n  transition: all 0.3s;\r\n  padding: 8px;\r\n  background-color: #272730;\r\n  overflow: hidden;\r\n}\r\n\r\n.app-bar .app-bar__navigation.open {\r\n  left: 0;\r\n}\r\n.app-bar .app-bar__navigation ul li a {\r\n  color: white;\r\n  display: inline-block;\r\n  text-decoration: none;\r\n  padding: 14px;\r\n}\r\n\r\n.app-bar .app-bar__navigation ul li a:hover {\r\n  color: rgb(203, 198, 198);\r\n}\r\n/* hero elemen */\r\n.hero {\r\n  align-items: center;\r\n  justify-items: center;\r\n  width: 100%;\r\n  min-height: 380px;\r\n  background: #000000;\r\n  background-image: url('../public/images/hero/hero-image_3.jpg');\r\n  background-position: center;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  position: relative;\r\n}\r\n\r\n.hero-overlay {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-content: center;\r\n}\r\n\r\n.hero-inner {\r\n  align-self: center;\r\n  text-align: center;\r\n  max-width: 60%;\r\n  position: absolute;\r\n  color: white;\r\n  z-index: 2;\r\n}\r\n\r\n.hero-inner > h1 {\r\n  text-shadow: 10px 10px black;\r\n  color: #ffc017;\r\n  font-weight: 900;\r\n  font-size: 3em;\r\n}\r\n\r\n.hero-inner > p {\r\n  color: white;\r\n  font-size: 18px;\r\n}\r\n/*\r\n  Main Content\r\n*/\r\n\r\nmain {\r\n  padding: 32px;\r\n  flex: 1;\r\n}\r\n\r\n.content {\r\n  margin: 0 auto;\r\n  min-height: 100%;\r\n}\r\n\r\n.content .content__heading {\r\n  font-weight: normal;\r\n  text-align: center;\r\n  font-size: 34px;\r\n}\r\n/*\r\n  Restaurabts\r\n*/\r\n\r\n.restaurants {\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  gap: 16px;\r\n  margin: 32px 0;\r\n}\r\n/*\r\n  restaurant item\r\n*/\r\n\r\n.restaurant-item {\r\n  width: 100%;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n  border-radius: 8px;\r\n  overflow: hidden;\r\n}\r\n\r\n.restaurant-item__header {\r\n  position: relative;\r\n}\r\n\r\n.restaurant-item .restaurant-item__header .restaurant-item__header__poster {\r\n  width: 100%;\r\n}\r\n\r\n.restaurant-item .restaurant-item__header .restaurant-item__header__rating {\r\n  position: absolute;\r\n  padding: 8px;\r\n  bottom: 20px;\r\n  left: 0;\r\n  display: inline-block;\r\n  background-color: black;\r\n  color: white;\r\n}\r\n\r\n.restaurant-item .restaurant-item__header .restaurant-item__header__rating .restaurant-item__header__rating__score {\r\n  margin-left: 10px;\r\n}\r\n\r\n.restaurant-item .restaurant-item__content {\r\n  padding: 16px;\r\n}\r\n\r\n.restaurant-item .restaurant-item__content h3 {\r\n  margin: 0 0 10px 0;\r\n}\r\n\r\n.restaurant-item .restaurant-item__content h3 a {\r\n  color: #db0000;\r\n  text-decoration: none;\r\n}\r\n\r\n.restaurant-item .restaurant-item__content p {\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  display: -webkit-box;\r\n  -webkit-line-clamp: 4; /* number of lines to show */\r\n  -webkit-box-orient: vertical;\r\n}\r\n.restaurant-item .restaurant-item__content a {\r\n  padding: 14px 0px;\r\n}\r\n\r\n/*\r\n  Movie\r\n*/\r\n\r\n.restaurant {\r\n  margin: 0 auto;\r\n  width: 100%;\r\n  max-width: 800px;\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  gap: 18px 16px;\r\n}\r\n\r\n.restaurant .restaurant__poster {\r\n  width: 100%;\r\n  max-width: 400px;\r\n}\r\n\r\n.restaurant .restaurant__info h4 {\r\n  margin: 8px 0;\r\n}\r\n\r\n/* Review */\r\n.review h3 {\r\n  padding-bottom: 1em;\r\n  font-weight: 900;\r\n}\r\n.review-head {\r\n  display: flex;\r\n  justify-content: baseline;\r\n  gap: 10px;\r\n}\r\n.reviewer-name {\r\n  color: black;\r\n  font-weight: 600;\r\n}\r\n.review-date {\r\n  color: gray;\r\n  font-weight: 600;\r\n}\r\n.reviewer-review {\r\n  font-size: 16px;\r\n}\r\n\r\n/*\r\n  Like\r\n*/\r\n.like {\r\n  width: 55px;\r\n  height: 55px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: #db0000;\r\n\r\n  position: fixed;\r\n  bottom: 16px;\r\n  right: 16px;\r\n  border-radius: 50%;\r\n  border: 0;\r\n\r\n  font-size: 18px;\r\n  color: white;\r\n  cursor: pointer;\r\n}\r\n/* footer */\r\nfooter {\r\n  background-color: #272730;\r\n  border-top: 1px solid #ffffff;\r\n  text-align: center;\r\n  color: #ffffff;\r\n  padding: 2em;\r\n}\r\n"],sourceRoot:""}]);const C=l},362:(r,n,A)=>{var e=A(379),t=A.n(e),a=A(795),i=A.n(a),o=A(569),p=A.n(o),s=A(565),l=A.n(s),d=A(216),C=A.n(d),E=A(589),c=A.n(E),B=A(948),g={};g.styleTagTransform=c(),g.setAttributes=l(),g.insert=p().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=C(),t()(B.Z,g),B.Z&&B.Z.locals&&B.Z.locals},915:(r,n,A)=>{var e=A(379),t=A.n(e),a=A(795),i=A.n(a),o=A(569),p=A.n(o),s=A(565),l=A.n(s),d=A(216),C=A.n(d),E=A(589),c=A.n(E),B=A(890),g={};g.styleTagTransform=c(),g.setAttributes=l(),g.insert=p().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=C(),t()(B.Z,g),B.Z&&B.Z.locals&&B.Z.locals}},A={};function e(r){var t=A[r];if(void 0!==t)return t.exports;var a=A[r]={id:r,exports:{}};return n[r](a,a.exports,e),a.exports}e.m=n,r=[],e.O=(n,A,t,a)=>{if(!A){var i=1/0;for(l=0;l<r.length;l++){for(var[A,t,a]=r[l],o=!0,p=0;p<A.length;p++)(!1&a||i>=a)&&Object.keys(e.O).every((r=>e.O[r](A[p])))?A.splice(p--,1):(o=!1,a<i&&(i=a));if(o){r.splice(l--,1);var s=t();void 0!==s&&(n=s)}}return n}a=a||0;for(var l=r.length;l>0&&r[l-1][2]>a;l--)r[l]=r[l-1];r[l]=[A,t,a]},e.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return e.d(n,{a:n}),n},e.d=(r,n)=>{for(var A in n)e.o(n,A)&&!e.o(r,A)&&Object.defineProperty(r,A,{enumerable:!0,get:n[A]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"==typeof window)return window}}(),e.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),(()=>{var r;e.g.importScripts&&(r=e.g.location+"");var n=e.g.document;if(!r&&n&&(n.currentScript&&(r=n.currentScript.src),!r)){var A=n.getElementsByTagName("script");A.length&&(r=A[A.length-1].src)}if(!r)throw new Error("Automatic publicPath is not supported in this browser");r=r.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=r})(),(()=>{e.b=document.baseURI||self.location.href;var r={400:0};e.O.j=n=>0===r[n];var n=(n,A)=>{var t,a,[i,o,p]=A,s=0;if(i.some((n=>0!==r[n]))){for(t in o)e.o(o,t)&&(e.m[t]=o[t]);if(p)var l=p(e)}for(n&&n(A);s<i.length;s++)a=i[s],e.o(r,a)&&r[a]&&r[a][0](),r[a]=0;return e.O(l)},A=self.webpackChunkrestaurant_pwa=self.webpackChunkrestaurant_pwa||[];A.forEach(n.bind(null,0)),A.push=n.bind(null,A.push.bind(A))})(),e.nc=void 0;var t=e.O(void 0,[192,2,193,337,268],(()=>e(253)));t=e.O(t)})();
//# sourceMappingURL=app~4e5ec22b.bundle.js.map