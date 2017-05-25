
import 'normalize.css/normalize.css';
import './deploy.scss';
import App from 'app/example-app';

const app = new App({
  appStateSample: 'sample',
  enableGoogleTagManager: true,
  googleTagManagerContainerId: 'GTM-5CRC6FJ',
  // enableGoogleAnalytics: true,
  // googleAnalyticsTrackingId: 'UA-81044026-2',
  // googleOptimizeId: 'GTM-TDMM6N5',
  // googleAnalyticsInit: null,
  enableBaiduTongji: true,
  baiduTongjiId: '350bef9329950aa312bb2ce5a26b5696',
  enableGrowingIo: true,
  growingIoAccountId: '9f26e975e35e046e',
  enableZhugeIo: true,
  zhugeIoAppKey: '3e163f55fe7f4a1db945dd602d54f2fe',
  // enableWechatSdk: true,
  // wechatSignatureApi: WECHAT_SIGNATURE_API,
  // wechatDebug: false,
  // wechatShare: {
  //   imgUrl: '',
  // },
});

export default function run() {
  if (window.innerWidth && window.innerHeight
    && screen.availWidth && screen.availHeight) {
    app.mount(document.getElementById('exampleApp'));
  } else {
    setTimeout(run, 30);
  }
}

if (['complete', 'loaded', 'interactive'].includes(document.readyState)
    && document.body) {
  run();
} else {
  document.addEventListener('DOMContentLoaded', run, false);
}
