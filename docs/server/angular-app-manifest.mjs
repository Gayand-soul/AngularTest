
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/AngularTest/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/AngularTest"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 503, hash: 'ed6530123c22901876dfb3b668e15618ec33bdeda0aada9af9c8c8c5cfa7aa3e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1016, hash: '655ee5a2a556ccf2e1103088eb8fa345e3c19ff39faeb050c5afdd40ac93519a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 739, hash: '32966991af39dcca0be0b64eb2996e526c7a01fc478dbd2868e5d8383329db33', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
