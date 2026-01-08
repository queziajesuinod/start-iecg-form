/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app/api/dummy/brand.js":
/*!********************************!*\
  !*** ./app/api/dummy/brand.js ***!
  \********************************/
/***/ ((module) => {

module.exports = {
  name: 'Portal IECG',
  desc: 'Portal IECG - Portal de Dados da Igreja Evangélica Comunidade Global',
  prefix: 'portaliecg',
  footerText: 'Igreja Evangélica Comunidade Global - Reserved 2025',
  logoText: 'Portal IECG'
};

/***/ }),

/***/ "./app/api/dummy/dummyContents.js":
/*!****************************************!*\
  !*** ./app/api/dummy/dummyContents.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_avatars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/avatars */ "./app/api/images/avatars.js");

const dummyContents = {
  user: {
    name: 'John Doe',
    id: '86876789i',
    title: 'Administrator',
    avatar: _images_avatars__WEBPACK_IMPORTED_MODULE_0__["default"][6],
    status: 'online'
  },
  text: {
    title: 'Lorem ipsum',
    subtitle: 'Ut a lorem eu odio cursus laoreet.',
    sentences: 'Donec lacus sem, scelerisque sed ligula nec, iaculis porttitor mauris.',
    paragraph: 'Sed rutrum augue libero, id faucibus quam aliquet sed. Phasellus interdum orci quam, volutpat ornare eros rhoncus sed. Donec vestibulum leo a auctor convallis. In dignissim consectetur molestie. Vivamus interdum tempor dui, nec posuere augue consequat sit amet. Suspendisse quis semper quam. Nullam nec neque sem.',
    date: 'Jan 9, 2018'
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dummyContents);

/***/ }),

/***/ "./app/api/dummy/guideData.js":
/*!************************************!*\
  !*** ./app/api/dummy/guideData.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const guideSteps = [{
  title: 'Hi, welcome',
  label: 'Here is some guide to use this template. Click next to continue or click on outside to skip it',
  imgPath: '/images/guide/guide1.jpg'
}, {
  title: 'Dark and Light Mode',
  label: 'Enjoy your eyes with dark/light mode, just switch the option in theme panel or on header',
  imgPath: '/images/guide/guide2.gif'
}, {
  title: 'Themes and Layout',
  label: 'Build your template with various themes and layout combination. It easy to adjust following your brand identity',
  imgPath: '/images/guide/guide3.gif'
}, {
  title: 'Search Components and Pages',
  label: 'Find any ui component or template page quicker',
  imgPath: '/images/guide/guide4.gif'
}, {
  title: 'Code Preview',
  label: 'Get source code easier without open files. Just click showcode button then You will see what a magic behind. It is available for Layout, Form Buttons, UI Components, Chart and Maps category',
  imgPath: '/images/guide/guide5.gif'
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (guideSteps);

/***/ }),

/***/ "./app/api/images/avatars.js":
/*!***********************************!*\
  !*** ./app/api/images/avatars.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const avatars = ['/images/avatars/pp_girl.svg', '/images/avatars/pp_girl.svg', '/images/avatars/pp_girl2.svg', '/images/avatars/pp_girl3.svg', '/images/avatars/pp_girl4.svg', '/images/avatars/pp_girl5.svg', '/images/avatars/pp_boy.svg', '/images/avatars/pp_boy2.svg', '/images/avatars/pp_boy3.svg', '/images/avatars/pp_boy4.svg', '/images/avatars/pp_boy5.svg'];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (avatars);

/***/ }),

/***/ "./app/api/palette/darkPalette.js":
/*!****************************************!*\
  !*** ./app/api/palette/darkPalette.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const darkPalette = {
  greyTheme: {
    palette: {
      primary: {
        light: '#ECEFF1',
        main: '#90A4AE',
        dark: '#455A64',
        contrastText: '#fff'
      },
      secondary: {
        light: '#E0E0E0',
        main: '#757575',
        dark: '#424242',
        contrastText: '#fff'
      }
    }
  },
  blueCyanTheme: {
    palette: {
      primary: {
        light: '#E0F7FA',
        main: '#00BCD4',
        dark: '#00838F',
        contrastText: '#fff'
      },
      secondary: {
        light: '#E1F5FE',
        main: '#039BE5',
        dark: '#01579B',
        contrastText: '#fff'
      }
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (darkPalette);

/***/ }),

/***/ "./app/api/palette/lightPalette.js":
/*!*****************************************!*\
  !*** ./app/api/palette/lightPalette.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const lightPalette = {
  greyTheme: {
    palette: {
      primary: {
        light: '#ECEFF1',
        main: '#607D8B',
        dark: '#455A64',
        contrastText: '#fff'
      },
      secondary: {
        light: '#E0E0E0',
        main: '#757575',
        dark: '#424242',
        contrastText: '#fff'
      }
    }
  },
  blueCyanTheme: {
    palette: {
      primary: {
        light: '#E1F5FE',
        main: '#039BE5',
        dark: '#01579B',
        contrastText: '#fff'
      },
      secondary: {
        light: '#E0F7FA',
        main: '#00BCD4',
        dark: '#00838F',
        contrastText: '#fff'
      }
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lightPalette);

/***/ }),

/***/ "./app/api/palette/themePaletteMode.js":
/*!*********************************************!*\
  !*** ./app/api/palette/themePaletteMode.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightPalette__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lightPalette */ "./app/api/palette/lightPalette.js");
/* harmony import */ var _darkPalette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./darkPalette */ "./app/api/palette/darkPalette.js");



const themePalette = (color, mode) => {
  if (mode === 'dark') {
    return _darkPalette__WEBPACK_IMPORTED_MODULE_1__["default"][color];
  }

  return _lightPalette__WEBPACK_IMPORTED_MODULE_0__["default"][color];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (themePalette);

/***/ }),

/***/ "./app/api/ui/menu.js":
/*!****************************!*\
  !*** ./app/api/ui/menu.js ***!
  \****************************/
/***/ ((module) => {

module.exports = [{
  key: 'mia',
  name: 'Ministério Mia',
  icon: 'ion-ios-contacts-outline',
  child: [{
    key: 'listagemMia',
    name: 'Listagem do MIA',
    link: '/app/mia',
    icon: 'ion-ios-list-box-outline',
    permission: 'MIA_LISTAR'
  }, {
    key: 'cadastroMia',
    name: 'Cadastro do MIA',
    link: '/app/mia/cadastrar',
    icon: 'ion-ios-contacts-outline',
    permission: 'MIA_CADASTRAR'
  }, {
    key: 'listasPresencaMia',
    name: 'Listas de presença',
    link: '/app/mia/listas-presenca',
    icon: 'ion-ios-checkbox-outline',
    permission: 'MIA_LISTAR'
  }]
}, {
  key: 'start',
  name: 'Start',
  icon: 'ion-ios-contacts-outline',
  child: [{
    key: 'listagemCelulas',
    name: 'Listagem de Células',
    link: '/app/start/celulas',
    icon: 'ion-ios-list-box-outline',
    permission: 'CELULA_LISTAR'
  }, {
    key: 'cadastroCelulas',
    name: 'Cadastro de Células',
    link: '/app/start/celulas/cadastrar',
    icon: 'ion-ios-contacts-outline',
    permission: 'CELULA_CADASTRAR'
  }, {
    key: 'apelosDirecionados',
    name: 'Apelos Direcionados',
    link: '/app/start/direcionamentos',
    icon: 'ion-ios-git-compare',
    permission: 'APELOS_LISTAR'
  }, {
    key: 'filaApelos',
    name: 'Fila de Apelos',
    link: '/app/start/fila-apelos',
    icon: 'ion-ios-timer',
    permission: 'APELOS_LISTAR'
  }, {
    key: 'listagemCampus',
    name: 'Listagem de Campus',
    link: '/app/start/campus',
    icon: 'ion-ios-world-outline',
    permission: 'CELULA_LISTAR'
  }, {
    key: 'chatwoot',
    name: 'Chat Start',
    link: '/app/start/chatwoot',
    icon: 'ion-ios-chatbubbles',
    permission: 'CELULA_LISTAR'
  }]
}, {
  key: 'admin',
  name: 'Administração',
  icon: 'ion-ios-settings-outline',
  child: [{
    key: 'perfisPermissoes',
    name: 'Perfis e Permissões',
    link: '/app/admin/perfis',
    icon: 'ion-ios-locked-outline',
    permission: 'ADMIN_PERFIS'
  }, {
    key: 'novoUsuario',
    name: 'Cadastrar Usuário',
    link: '/app/admin/usuarios/novo',
    icon: 'ion-ios-personadd-outline',
    permission: 'ADMIN_USUARIOS'
  }, {
    key: 'listagemUsuarios',
    name: 'Usuários',
    link: '/app/admin/usuarios',
    icon: 'ion-ios-people',
    permission: 'ADMIN_USUARIOS'
  }, {
    key: 'webhooks',
    name: 'Webhooks',
    link: '/app/admin/webhooks',
    icon: 'ion-ios-git-compare',
    permission: 'WEBHOOKS_VIEW'
  }]
}];

/***/ }),

/***/ "./app/app.js":
/*!********************!*\
  !*** ./app/app.js ***!
  \********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-persist/integration/react */ "./node_modules/redux-persist/es/integration/react.js");
/* harmony import */ var connected_react18_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! connected-react18-router */ "./node_modules/connected-react18-router/lib/index.js");
/* harmony import */ var fontfaceobserver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fontfaceobserver */ "./node_modules/fontfaceobserver/fontfaceobserver.standalone.js");
/* harmony import */ var fontfaceobserver__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(fontfaceobserver__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var utils_history__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/history */ "./app/utils/history.js");
/* harmony import */ var react_18_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-18-image-lightbox/style.css */ "./node_modules/react-18-image-lightbox/style.css");
/* harmony import */ var react_18_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_18_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var sanitize_css_sanitize_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sanitize.css/sanitize.css */ "./node_modules/sanitize.css/sanitize.css");
/* harmony import */ var sanitize_css_sanitize_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sanitize_css_sanitize_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var containers_App__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! containers/App */ "./app/containers/App/index.js");
/* harmony import */ var _styles_layout_base_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/layout/base.scss */ "./app/styles/layout/base.scss");
/* harmony import */ var _styles_layout_base_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_layout_base_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var containers_LanguageProvider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! containers/LanguageProvider */ "./app/containers/LanguageProvider/index.js");
/* harmony import */ var _file_loader_name_name_ext_public_favicons_favicon_ico__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! !file-loader?name=[name].[ext]!../public/favicons/favicon.ico */ "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./public/favicons/favicon.ico");
/* harmony import */ var file_loader_name_htaccess_htaccess__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! file-loader?name=.htaccess!./.htaccess */ "./node_modules/file-loader/dist/cjs.js?name=.htaccess!./app/.htaccess");
/* harmony import */ var _redux_configureStore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./redux/configureStore */ "./app/redux/configureStore.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./i18n */ "./app/i18n.js");
/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */
// Import all the third party stuff








 // Import root app


 // Import Language Provider

 // Load the favicon and the .htaccess file

 // eslint-disable-line

 // eslint-disable-line

 // Import i18n messages

 // Observe loading of Open Sans (to remove open sans, remove the <link> tag in
// the index.html file and this observer)

const openSansObserver = new (fontfaceobserver__WEBPACK_IMPORTED_MODULE_5___default())('Open Sans', {}); // When Open Sans is loaded, add a font-family using Open Sans to the body

openSansObserver.load().then(() => {
  document.body.classList.add('fontLoaded');
}); // Create redux store with history

const initialState = {};
const {
  store,
  persistor
} = (0,_redux_configureStore__WEBPACK_IMPORTED_MODULE_14__["default"])(initialState, utils_history__WEBPACK_IMPORTED_MODULE_6__["default"]);
const MOUNT_NODE = document.getElementById('app');
const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(MOUNT_NODE);

const render = messages => {
  root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {
    store: store
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_3__.PersistGate, {
    loading: null,
    persistor: persistor
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(containers_LanguageProvider__WEBPACK_IMPORTED_MODULE_11__["default"], {
    messages: messages
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(connected_react18_router__WEBPACK_IMPORTED_MODULE_4__.ConnectedRouter, {
    history: utils_history__WEBPACK_IMPORTED_MODULE_6__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(containers_App__WEBPACK_IMPORTED_MODULE_9__["default"], {
    history: utils_history__WEBPACK_IMPORTED_MODULE_6__["default"]
  }))))));
};

if (true) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept([/*! ./i18n */ "./app/i18n.js", /*! containers/App */ "./app/containers/App/index.js"], __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _i18n__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./i18n */ "./app/i18n.js");
/* harmony import */ containers_App__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! containers/App */ "./app/containers/App/index.js");
(() => {
    root.unmount();
    render(_i18n__WEBPACK_IMPORTED_MODULE_15__.translationMessages);
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); });
} // Chunked polyfill for browsers without Intl support


if (!window.Intl) {
  new Promise(resolve => {
    resolve(__webpack_require__.e(/*! import() */ "node_modules_intl_index_js").then(__webpack_require__.t.bind(__webpack_require__, /*! intl */ "./node_modules/intl/index.js", 23)));
  }).then(() => Promise.all([__webpack_require__.e(/*! import() */ "vendors-node_modules_intl_locale-data_jsonp_en_js").then(__webpack_require__.t.bind(__webpack_require__, /*! intl/locale-data/jsonp/en.js */ "./node_modules/intl/locale-data/jsonp/en.js", 23)), __webpack_require__.e(/*! import() */ "vendors-node_modules_intl_locale-data_jsonp_de_js").then(__webpack_require__.t.bind(__webpack_require__, /*! intl/locale-data/jsonp/de.js */ "./node_modules/intl/locale-data/jsonp/de.js", 23))])) // eslint-disable-line
  .then(() => render(_i18n__WEBPACK_IMPORTED_MODULE_15__.translationMessages)).catch(err => {
    throw err;
  });
} else {
  render(_i18n__WEBPACK_IMPORTED_MODULE_15__.translationMessages);
}
/**
Offline access for production mode.
Uncomment this code bellow to register Service Worker.
* */
//  if ('serviceWorker' in navigator) {
//    window.addEventListener('load', () => {
//      navigator.serviceWorker.register('/service-worker.js').then(registration => {
//        console.log('SW registered: ', registration);
//      }).catch(registrationError => {
//        console.log('SW registration failed: ', registrationError);
//      });
//    });
//  }

/***/ }),

/***/ "./app/components/BreadCrumb/BreadCrumb.js":
/*!*************************************************!*\
  !*** ./app/components/BreadCrumb/BreadCrumb.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _breadCrumb_jss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./breadCrumb-jss */ "./app/components/BreadCrumb/breadCrumb-jss.js");
/* harmony import */ var _config_pageTitles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/pageTitles */ "./app/config/pageTitles.js");






const Breadcrumbs = props => {
  const {
    classes,
    cx
  } = (0,_breadCrumb_jss__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const {
    theme,
    separator,
    location
  } = props;
  const pathname = location.pathname.replace(/\/+$/, '');
  const normalizedPath = pathname.replace(/^\/+/, '');
  const segments = normalizedPath.split('/');
  const placeKey = normalizedPath || 'app';
  const parts = segments.slice(0, -1);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: cx(theme === 'dark' ? classes.dark : classes.light, classes.breadcrumbs)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Voc\xEA est\xE1 em:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, parts.map((part, partIndex) => {
    const pathParts = parts.slice(0, partIndex + 1).join('/');
    const linkPath = `/${pathParts}`;
    const partTitle = (0,_config_pageTitles__WEBPACK_IMPORTED_MODULE_4__.getPageTitle)(pathParts || 'app');
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: linkPath
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
      to: linkPath
    }, partTitle), separator);
  }), "\xA0", (0,_config_pageTitles__WEBPACK_IMPORTED_MODULE_4__.getPageTitle)(placeKey))));
};

Breadcrumbs.propTypes = {
  location: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired),
  theme: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  separator: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Breadcrumbs);

/***/ }),

/***/ "./app/components/BreadCrumb/breadCrumb-jss.js":
/*!*****************************************************!*\
  !*** ./app/components/BreadCrumb/breadCrumb-jss.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tss-react/mui */ "./node_modules/tss-react/esm/mui.js");

const useStyles = (0,tss_react_mui__WEBPACK_IMPORTED_MODULE_0__.makeStyles)()((theme, _params, classes) => ({
  dark: {},
  breadcrumbs: {
    position: 'relative',
    display: 'block',
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.5)',
    '& p': {
      display: 'block',
      margin: 0,
      '& span': {
        textTransform: 'capitalize',
        marginLeft: 5
      },
      '& a': {
        color: theme.palette.common.white,
        textDecoration: 'none',
        margin: '0 5px'
      }
    },
    [`&.${classes.dark}`]: {
      color: theme.palette.text.secondary,
      '& a': {
        color: theme.palette.text.primary
      }
    }
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStyles);

/***/ }),

/***/ "./app/components/Divider/divider-jss.js":
/*!***********************************************!*\
  !*** ./app/components/Divider/divider-jss.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tss-react/mui */ "./node_modules/tss-react/esm/mui.js");

const space = {
  margin: '40px 0'
};
const useStyles = (0,tss_react_mui__WEBPACK_IMPORTED_MODULE_0__.makeStyles)()(theme => ({
  gradient: {
    extend: space,
    border: 0,
    height: 1,
    background: '#333',
    backgroundImage: 'linear-gradient(to right, #fff, #8c8c8c, #fff)'
  },
  colorDash: {
    border: 0,
    extend: space,
    borderBottom: `1px dashed ${theme.palette.grey[100]}`,
    background: '#999'
  },
  shadow: {
    height: 12,
    extend: space,
    border: 0,
    boxShadow: 'inset 0 12px 12px -12px rgba(0, 0, 0, 0.5)'
  },
  inset: {
    border: 0,
    extend: space,
    height: 0,
    borderTop: '1px solid rgba(0, 0, 0, 0.1)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.3)'
  },
  flairedEdges: {
    overflow: 'visible',

    /* For IE */
    extend: space,
    height: 30,
    borderStyle: 'solid',
    borderColor: theme.palette.grey[400],
    borderWidth: '1px 0 0 0',
    borderRadius: 20,
    '&:before': {
      display: 'block',
      content: '""',
      height: 30,
      marginTop: -31,
      borderStyle: 'solid',
      borderColor: theme.palette.grey[400],
      borderWidth: '0 0 1px 0',
      borderRadius: 20
    }
  },
  content: {
    overflow: 'visible',

    /* For IE */
    extend: space,
    padding: 0,
    border: 'none',
    borderTop: theme.palette.mode === 'dark' ? `1px solid ${theme.palette.grey[700]}` : `1px solid ${theme.palette.grey[300]}`,
    color: theme.palette.text.secondary,
    margin: `${theme.spacing(4)} ${theme.spacing(0.5)} ${theme.spacing(2)}`,
    textAlign: 'center',
    '&:after': {
      content: 'attr(data-content)',
      display: 'inline-block',
      position: 'relative',
      top: -15,
      fontSize: 14,
      padding: '0 1.25em',
      background: theme.palette.background.paper
    }
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStyles);

/***/ }),

/***/ "./app/components/Divider/index.js":
/*!*****************************************!*\
  !*** ./app/components/Divider/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GradientDivider": () => (/* binding */ GradientDivider),
/* harmony export */   "DashDivider": () => (/* binding */ DashDivider),
/* harmony export */   "ShadowDivider": () => (/* binding */ ShadowDivider),
/* harmony export */   "InsetDivider": () => (/* binding */ InsetDivider),
/* harmony export */   "FlairedEdgesDivider": () => (/* binding */ FlairedEdgesDivider),
/* harmony export */   "ContentDivider": () => (/* binding */ ContentDivider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _divider_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./divider-jss */ "./app/components/Divider/divider-jss.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




/* Gradient Divider */

const GradientDivider = props => {
  const {
    classes
  } = (0,_divider_jss__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    thin,
    ...rest
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", _extends({
    className: classes.gradient,
    style: {
      height: `${thin}`
    }
  }, rest));
};
GradientDivider.propTypes = {
  thin: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
};
GradientDivider.defaultProps = {
  thin: 1
};
/* Dash Divider */

const DashDivider = props => {
  const {
    classes
  } = (0,_divider_jss__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    thin,
    ...rest
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", _extends({
    className: classes.colorDash,
    style: {
      height: `${thin}`
    }
  }, rest));
};
DashDivider.propTypes = {
  thin: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
};
DashDivider.defaultProps = {
  thin: 1
};
/* Shadow Divider */

const ShadowDivider = props => {
  const {
    classes
  } = (0,_divider_jss__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    thin,
    ...rest
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", _extends({
    className: classes.shadow,
    style: {
      height: `${thin}`
    }
  }, rest));
};
ShadowDivider.propTypes = {
  thin: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
};
ShadowDivider.defaultProps = {
  thin: 1
};
/* Shadow Inset */

const InsetDivider = props => {
  const {
    classes
  } = (0,_divider_jss__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    thin,
    ...rest
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", _extends({
    className: classes.inset,
    style: {
      height: `${thin}`
    }
  }, rest));
};
InsetDivider.propTypes = {
  thin: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
};
InsetDivider.defaultProps = {
  thin: 1
};
/* Shadow FlairedEdges */

const FlairedEdgesDivider = props => {
  const {
    classes
  } = (0,_divider_jss__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    thin,
    ...rest
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", _extends({
    className: classes.flairedEdges,
    style: {
      height: `${thin}`
    }
  }, rest));
};
FlairedEdgesDivider.propTypes = {
  thin: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
};
FlairedEdgesDivider.defaultProps = {
  thin: 1
};
const ContentDivider = props => {
  const {
    classes
  } = (0,_divider_jss__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    thin,
    content,
    ...rest
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", _extends({
    className: classes.content,
    style: {
      height: `${thin}`
    },
    "data-content": content
  }, rest));
};
ContentDivider.propTypes = {
  thin: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  content: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)
};
ContentDivider.defaultProps = {
  thin: 1
};

/***/ }),

/***/ "./app/components/Error/ErrorWrap.js":
/*!*******************************************!*\
  !*** ./app/components/Error/ErrorWrap.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tss-react/mui */ "./node_modules/tss-react/esm/mui.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/node/Typography/index.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/node/Button/index.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");






const useStyles = (0,tss_react_mui__WEBPACK_IMPORTED_MODULE_2__.makeStyles)()(theme => ({
  errorWrap: {
    background: theme.palette.background.paper,
    boxShadow: theme.shadows[2],
    borderRadius: '50%',
    width: 500,
    height: 500,
    [theme.breakpoints.down('md')]: {
      width: 300,
      height: 300
    },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    position: 'relative',
    margin: `${theme.spacing(3)} auto`,
    '& h5': {
      [theme.breakpoints.down('md')]: {
        fontSize: '1.2rem'
      }
    }
  },
  title: {
    color: theme.palette.primary.main,
    textShadow: `10px 6px 50px ${theme.palette.primary.main}`,
    [theme.breakpoints.down('md')]: {
      fontSize: '4rem',
      marginBottom: theme.spacing(2)
    }
  },
  deco: {
    boxShadow: theme.shadows[2],
    position: 'absolute',
    borderRadius: 2
  },
  button: {
    marginTop: 24
  }
}));

const ErrorWrap = props => {
  const {
    classes
  } = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {
    render: _ref => {
      let {
        staticContext
      } = _ref;

      if (staticContext) {
        staticContext.status = 404; // eslint-disable-line
      }

      const {
        title,
        desc
      } = props;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: classes.errorWrap
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
        className: classes.title,
        variant: "h1"
      }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
        variant: "h5"
      }, desc), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
        variant: "contained",
        color: "primary",
        className: classes.button,
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link,
        to: "/app/"
      }, "Go To Dashboard"));
    }
  });
};

ErrorWrap.propTypes = {
  desc: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorWrap);

/***/ }),

/***/ "./app/components/Forms/LoginForm.js":
/*!*******************************************!*\
  !*** ./app/components/Forms/LoginForm.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/node/Button/index.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material/IconButton */ "./node_modules/@mui/material/node/IconButton/index.js");
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/icons-material/Visibility */ "./node_modules/@mui/icons-material/Visibility.js");
/* harmony import */ var _mui_icons_material_VisibilityOff__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/icons-material/VisibilityOff */ "./node_modules/@mui/icons-material/VisibilityOff.js");
/* harmony import */ var _mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/InputAdornment */ "./node_modules/@mui/material/node/InputAdornment/index.js");
/* harmony import */ var _mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/node/Typography/index.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/FormControl */ "./node_modules/@mui/material/node/FormControl/index.js");
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_icons_material_ArrowForward__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/icons-material/ArrowForward */ "./node_modules/@mui/icons-material/ArrowForward.js");
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Paper */ "./node_modules/@mui/material/node/Paper/index.js");
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/useMediaQuery */ "./node_modules/@mui/material/node/useMediaQuery/index.js");
/* harmony import */ var dan_api_dummy_brand__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dan-api/dummy/brand */ "./app/api/dummy/brand.js");
/* harmony import */ var dan_api_dummy_brand__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dan_api_dummy_brand__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var dan_images_logo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dan-images/logo.png */ "./public/images/logo.png");
/* harmony import */ var _ReduxFormMUI__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ReduxFormMUI */ "./app/components/Forms/ReduxFormMUI.js");
/* harmony import */ var _user_jss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-jss */ "./app/components/Forms/user-jss.js");
/* harmony import */ var _Divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Divider */ "./app/components/Divider/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

























 // validation functions

const required = value => value === null ? 'Required' : undefined;

const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email' : undefined;

const LinkBtn = react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function LinkBtn(props, ref) {
  // eslint-disable-line
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, _extends({
    to: props.to
  }, props, {
    innerRef: ref
  })); // eslint-disable-line
});

function LoginForm(props) {
  const {
    classes,
    cx
  } = (0,_user_jss__WEBPACK_IMPORTED_MODULE_8__["default"])();
  const [showPassword, setShowPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const handleClickShowPassword = () => {
    setShowPassword(show => !show);
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const mdUp = (0,_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_10__["default"])(theme => theme.breakpoints.up('md'));
  const mdDown = (0,_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_10__["default"])(theme => theme.breakpoints.down('md'));
  const {
    handleSubmit,
    pristine,
    submitting,
    deco
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, !mdUp && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
    to: "/",
    className: cx(classes.brand, classes.outer)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: dan_images_logo_png__WEBPACK_IMPORTED_MODULE_6__["default"],
    alt: (dan_api_dummy_brand__WEBPACK_IMPORTED_MODULE_5___default().name)
  }), (dan_api_dummy_brand__WEBPACK_IMPORTED_MODULE_5___default().name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Paper__WEBPACK_IMPORTED_MODULE_11___default()), {
    className: cx(classes.paperWrap, deco && classes.petal)
  }, !mdDown && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classes.topBar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
    to: "/",
    className: classes.brand
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: dan_images_logo_png__WEBPACK_IMPORTED_MODULE_6__["default"],
    alt: (dan_api_dummy_brand__WEBPACK_IMPORTED_MODULE_5___default().name)
  }), (dan_api_dummy_brand__WEBPACK_IMPORTED_MODULE_5___default().name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {
    variant: "h4",
    className: classes.title,
    gutterBottom: true
  }, "Sign In"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {
    variant: "caption",
    className: classes.subtitle,
    gutterBottom: true,
    align: "center"
  }, "Painel de controle IECG"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: classes.formWrap
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_13___default()), {
    variant: "standard",
    className: classes.formControl
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__.Field, {
    name: "email",
    component: _ReduxFormMUI__WEBPACK_IMPORTED_MODULE_7__.TextFieldRedux,
    placeholder: "Your Email",
    label: "Your Email",
    required: true,
    validate: [required, email],
    className: classes.field
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_13___default()), {
    variant: "standard",
    className: classes.formControl
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__.Field, {
    name: "password",
    component: _ReduxFormMUI__WEBPACK_IMPORTED_MODULE_7__.TextFieldRedux,
    type: showPassword ? 'text' : 'password',
    label: "Your Password",
    InputProps: {
      endAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_14___default()), {
        position: "end"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_15___default()), {
        "aria-label": "Toggle password visibility",
        onClick: handleClickShowPassword,
        onMouseDown: handleMouseDownPassword,
        size: "large"
      }, showPassword ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_VisibilityOff__WEBPACK_IMPORTED_MODULE_16__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_17__["default"], null)))
    },
    required: true,
    validate: required,
    className: classes.field
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classes.btnArea
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Button__WEBPACK_IMPORTED_MODULE_18___default()), {
    variant: "contained",
    color: "primary",
    size: "large",
    type: "submit"
  }, "Continue", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ArrowForward__WEBPACK_IMPORTED_MODULE_19__["default"], {
    className: cx(classes.rightIcon, classes.iconSmall),
    disabled: submitting || pristine
  })))))));
}

LoginForm.propTypes = {
  handleSubmit: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  pristine: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired),
  submitting: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired),
  deco: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired)
};
const LoginFormReduxed = (0,redux_form__WEBPACK_IMPORTED_MODULE_2__.reduxForm)({
  form: 'loginForm',
  enableReinitialize: true
})(LoginForm);
const FormInit = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(state => ({
  force: state,
  initialValues: state.login.usersLogin,
  deco: state.ui.decoration
}))(LoginFormReduxed);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormInit);

/***/ }),

/***/ "./app/components/Forms/ReduxFormMUI.js":
/*!**********************************************!*\
  !*** ./app/components/Forms/ReduxFormMUI.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextFieldRedux": () => (/* binding */ TextFieldRedux),
/* harmony export */   "SelectRedux": () => (/* binding */ SelectRedux),
/* harmony export */   "CheckboxRedux": () => (/* binding */ CheckboxRedux),
/* harmony export */   "SwitchRedux": () => (/* binding */ SwitchRedux)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/TextField */ "./node_modules/@mui/material/node/TextField/index.js");
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Select */ "./node_modules/@mui/material/node/Select/index.js");
/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Select__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Checkbox */ "./node_modules/@mui/material/node/Checkbox/index.js");
/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Switch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Switch */ "./node_modules/@mui/material/node/Switch/index.js");
/* harmony import */ var _mui_material_Switch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Switch__WEBPACK_IMPORTED_MODULE_5__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







/* Textfield */

const TextFieldRedux = _ref => {
  let {
    meta: {
      touched,
      error
    },
    input,
    ...rest
  } = _ref;
  const [val, setVal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');

  const handleChange = e => {
    setVal(e.target.value);

    if (input && input.onChange) {
      input.onChange(e);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2___default()), _extends({
    variant: "standard"
  }, rest, input, {
    value: val || input.value,
    onChange: handleChange,
    error: touched && Boolean(error)
  }));
};
TextFieldRedux.propTypes = {
  input: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired),
  meta: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
TextFieldRedux.defaultProps = {
  meta: null
};
/* End */

/* Select */

const SelectRedux = _ref2 => {
  let {
    input,
    children,
    ...rest
  } = _ref2;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Select__WEBPACK_IMPORTED_MODULE_3___default()), _extends({
    variant: "standard"
  }, input, rest), children);
};
SelectRedux.propTypes = {
  input: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node.isRequired)
};
/* End */

/* Checkbox */

const CheckboxRedux = _ref3 => {
  let {
    input,
    ...rest
  } = _ref3;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_4___default()), _extends({
    checked: input.value === '' ? false : input.value
  }, input, rest));
};
CheckboxRedux.propTypes = {
  input: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired)
};
/* End */

/* Switch */

const SwitchRedux = _ref4 => {
  let {
    input,
    ...rest
  } = _ref4;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Switch__WEBPACK_IMPORTED_MODULE_5___default()), _extends({
    checked: input.value === '' ? false : input.value
  }, input, rest));
};
SwitchRedux.propTypes = {
  input: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired)
};
/* End */

/***/ }),

/***/ "./app/components/Forms/RegisterForm.js":
/*!**********************************************!*\
  !*** ./app/components/Forms/RegisterForm.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/node/Button/index.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material/FormControl */ "./node_modules/@mui/material/node/FormControl/index.js");
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material/FormControlLabel */ "./node_modules/@mui/material/node/FormControlLabel/index.js");
/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _mui_material_Tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/Tabs */ "./node_modules/@mui/material/node/Tabs/index.js");
/* harmony import */ var _mui_material_Tabs__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Tabs__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_material_Tab__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material/Tab */ "./node_modules/@mui/material/node/Tab/index.js");
/* harmony import */ var _mui_material_Tab__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Paper */ "./node_modules/@mui/material/node/Paper/index.js");
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/node/Typography/index.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_icons_material_ArrowForward__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/icons-material/ArrowForward */ "./node_modules/@mui/icons-material/ArrowForward.js");
/* harmony import */ var _mui_icons_material_AllInclusive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/icons-material/AllInclusive */ "./node_modules/@mui/icons-material/AllInclusive.js");
/* harmony import */ var _mui_icons_material_Brightness5__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/icons-material/Brightness5 */ "./node_modules/@mui/icons-material/Brightness5.js");
/* harmony import */ var _mui_icons_material_People__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/icons-material/People */ "./node_modules/@mui/icons-material/People.js");
/* harmony import */ var _mui_material_Icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Icon */ "./node_modules/@mui/material/node/Icon/index.js");
/* harmony import */ var _mui_material_Icon__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Icon__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/useMediaQuery */ "./node_modules/@mui/material/node/useMediaQuery/index.js");
/* harmony import */ var dan_api_dummy_brand__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dan-api/dummy/brand */ "./app/api/dummy/brand.js");
/* harmony import */ var dan_api_dummy_brand__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dan_api_dummy_brand__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var dan_images_logo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dan-images/logo.png */ "./public/images/logo.png");
/* harmony import */ var _ReduxFormMUI__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ReduxFormMUI */ "./app/components/Forms/ReduxFormMUI.js");
/* harmony import */ var _user_jss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-jss */ "./app/components/Forms/user-jss.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






















 // validation functions

const required = value => value === null ? 'Required' : undefined;

const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email' : undefined;

const passwordsMatch = (value, allValues) => {
  if (value !== allValues.password) {
    return 'Passwords dont match';
  }

  return undefined;
};

const LinkBtn = react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function LinkBtn(props, ref) {
  // eslint-disable-line
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.NavLink, _extends({
    to: props.to
  }, props, {
    innerRef: ref
  })); // eslint-disable-line
});

function RegisterForm(props) {
  const {
    classes,
    cx
  } = (0,_user_jss__WEBPACK_IMPORTED_MODULE_8__["default"])();
  const [tab, setTab] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const mdUp = (0,_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_9__["default"])(theme => theme.breakpoints.up('md'));
  const mdDown = (0,_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_9__["default"])(theme => theme.breakpoints.down('md'));

  const handleChangeTab = (event, value) => {
    setTab(value);
  };

  const {
    handleSubmit,
    pristine,
    submitting,
    deco
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, !mdUp && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
    to: "/",
    className: cx(classes.brand, classes.outer)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: dan_images_logo_png__WEBPACK_IMPORTED_MODULE_6__["default"],
    alt: (dan_api_dummy_brand__WEBPACK_IMPORTED_MODULE_5___default().name)
  }), (dan_api_dummy_brand__WEBPACK_IMPORTED_MODULE_5___default().name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Paper__WEBPACK_IMPORTED_MODULE_10___default()), {
    className: cx(classes.paperWrap, deco && classes.petal)
  }, !mdDown && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classes.topBar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
    to: "/",
    className: classes.brand
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: dan_images_logo_png__WEBPACK_IMPORTED_MODULE_6__["default"],
    alt: (dan_api_dummy_brand__WEBPACK_IMPORTED_MODULE_5___default().name)
  }), (dan_api_dummy_brand__WEBPACK_IMPORTED_MODULE_5___default().name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Button__WEBPACK_IMPORTED_MODULE_11___default()), {
    size: "small",
    className: classes.buttonLink,
    component: LinkBtn,
    to: "/login"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Icon__WEBPACK_IMPORTED_MODULE_12___default()), {
    className: classes.icon
  }, "arrow_forward"), "Already have account ?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_13___default()), {
    variant: "h4",
    className: classes.title,
    gutterBottom: true
  }, "Register"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_13___default()), {
    variant: "caption",
    className: classes.subtitle,
    gutterBottom: true,
    align: "center"
  }, "Lorem ipsum dolor sit amet"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Tabs__WEBPACK_IMPORTED_MODULE_14___default()), {
    value: tab,
    onChange: handleChangeTab,
    indicatorColor: "secondary",
    textColor: "secondary",
    centered: true,
    className: classes.tab
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Tab__WEBPACK_IMPORTED_MODULE_15___default()), {
    label: "With Email"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Tab__WEBPACK_IMPORTED_MODULE_15___default()), {
    label: "With Social Media"
  })), tab === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: classes.formWrap
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_16___default()), {
    variant: "standard",
    className: classes.formControl
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(redux_form__WEBPACK_IMPORTED_MODULE_4__.Field, {
    name: "name",
    component: _ReduxFormMUI__WEBPACK_IMPORTED_MODULE_7__.TextFieldRedux,
    placeholder: "Username",
    label: "Username",
    required: true,
    className: classes.field
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_16___default()), {
    variant: "standard",
    className: classes.formControl
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(redux_form__WEBPACK_IMPORTED_MODULE_4__.Field, {
    name: "email",
    component: _ReduxFormMUI__WEBPACK_IMPORTED_MODULE_7__.TextFieldRedux,
    placeholder: "Your Email",
    label: "Your Email",
    required: true,
    validate: [required, email],
    className: classes.field
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_16___default()), {
    variant: "standard",
    className: classes.formControl
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(redux_form__WEBPACK_IMPORTED_MODULE_4__.Field, {
    name: "password",
    component: _ReduxFormMUI__WEBPACK_IMPORTED_MODULE_7__.TextFieldRedux,
    type: "password",
    label: "Your Password",
    required: true,
    validate: [required, passwordsMatch],
    className: classes.field
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_16___default()), {
    variant: "standard",
    className: classes.formControl
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(redux_form__WEBPACK_IMPORTED_MODULE_4__.Field, {
    name: "passwordConfirm",
    component: _ReduxFormMUI__WEBPACK_IMPORTED_MODULE_7__.TextFieldRedux,
    type: "password",
    label: "Re-type Password",
    required: true,
    validate: [required, passwordsMatch],
    className: classes.field
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_17___default()), {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(redux_form__WEBPACK_IMPORTED_MODULE_4__.Field, {
      name: "checkbox",
      component: _ReduxFormMUI__WEBPACK_IMPORTED_MODULE_7__.CheckboxRedux,
      required: true,
      className: classes.agree
    }),
    label: "Agree with"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#",
    className: classes.link
  }, "Terms & Condition")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classes.btnArea
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Button__WEBPACK_IMPORTED_MODULE_11___default()), {
    variant: "contained",
    color: "primary",
    type: "submit"
  }, "Continue", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ArrowForward__WEBPACK_IMPORTED_MODULE_18__["default"], {
    className: cx(classes.rightIcon, classes.iconSmall),
    disabled: submitting || pristine
  }))))), tab === 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: classes.socmedFull
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Button__WEBPACK_IMPORTED_MODULE_11___default()), {
    fullWidth: true,
    variant: "outlined",
    size: "large",
    className: classes.redBtn,
    type: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_AllInclusive__WEBPACK_IMPORTED_MODULE_19__["default"], {
    className: cx(classes.leftIcon, classes.iconSmall)
  }), "Socmed 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Button__WEBPACK_IMPORTED_MODULE_11___default()), {
    fullWidth: true,
    variant: "outlined",
    size: "large",
    className: classes.blueBtn,
    type: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Brightness5__WEBPACK_IMPORTED_MODULE_20__["default"], {
    className: cx(classes.leftIcon, classes.iconSmall)
  }), "Socmed 2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Button__WEBPACK_IMPORTED_MODULE_11___default()), {
    fullWidth: true,
    variant: "outlined",
    size: "large",
    className: classes.cyanBtn,
    type: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_People__WEBPACK_IMPORTED_MODULE_21__["default"], {
    className: cx(classes.leftIcon, classes.iconSmall)
  }), "Socmed 3"))));
}

RegisterForm.propTypes = {
  handleSubmit: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  pristine: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired),
  submitting: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired),
  deco: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired)
};
const RegisterFormReduxed = (0,redux_form__WEBPACK_IMPORTED_MODULE_4__.reduxForm)({
  form: 'registerForm',
  enableReinitialize: true
})(RegisterForm);
const RegisterFormMapped = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(state => ({
  deco: state.ui.decoration
}))(RegisterFormReduxed);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegisterFormMapped);

/***/ }),

/***/ "./app/components/Forms/ResetForm.js":
/*!*******************************************!*\
  !*** ./app/components/Forms/ResetForm.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/node/Button/index.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/FormControl */ "./node_modules/@mui/material/node/FormControl/index.js");
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_icons_material_ArrowForward__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/icons-material/ArrowForward */ "./node_modules/@mui/icons-material/ArrowForward.js");
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Paper */ "./node_modules/@mui/material/node/Paper/index.js");
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/node/Typography/index.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var dan_api_dummy_brand__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dan-api/dummy/brand */ "./app/api/dummy/brand.js");
/* harmony import */ var dan_api_dummy_brand__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dan_api_dummy_brand__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var dan_images_logo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dan-images/logo.png */ "./public/images/logo.png");
/* harmony import */ var _ReduxFormMUI__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ReduxFormMUI */ "./app/components/Forms/ReduxFormMUI.js");
/* harmony import */ var _user_jss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-jss */ "./app/components/Forms/user-jss.js");













 // validation functions

const required = value => value === null ? 'Required' : undefined;

const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email' : undefined;

function ResetForm(props) {
  const {
    classes,
    cx
  } = (0,_user_jss__WEBPACK_IMPORTED_MODULE_8__["default"])();
  const {
    handleSubmit,
    pristine,
    submitting,
    deco
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Paper__WEBPACK_IMPORTED_MODULE_9___default()), {
    className: cx(classes.paperWrap, deco && classes.petal)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classes.topBar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
    to: "/",
    className: classes.brand
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: dan_images_logo_png__WEBPACK_IMPORTED_MODULE_6__["default"],
    alt: (dan_api_dummy_brand__WEBPACK_IMPORTED_MODULE_5___default().name)
  }), (dan_api_dummy_brand__WEBPACK_IMPORTED_MODULE_5___default().name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10___default()), {
    variant: "h4",
    className: classes.title,
    gutterBottom: true
  }, "Reset Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10___default()), {
    variant: "caption",
    className: classes.subtitle,
    gutterBottom: true,
    align: "center"
  }, "Send reset password link to Your email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: classes.formWrap
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_11___default()), {
    variant: "standard",
    className: classes.formControl
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(redux_form__WEBPACK_IMPORTED_MODULE_4__.Field, {
    name: "email",
    component: _ReduxFormMUI__WEBPACK_IMPORTED_MODULE_7__.TextFieldRedux,
    placeholder: "Your Email",
    label: "Your Email",
    required: true,
    validate: [required, email],
    className: classes.field
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classes.btnArea
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Button__WEBPACK_IMPORTED_MODULE_12___default()), {
    variant: "contained",
    color: "primary",
    type: "submit"
  }, "Send Reset Link", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ArrowForward__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: cx(classes.rightIcon, classes.iconSmall),
    disabled: submitting || pristine
  }))))));
}

ResetForm.propTypes = {
  handleSubmit: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  pristine: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired),
  submitting: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired),
  deco: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired)
};
const ResetFormReduxed = (0,redux_form__WEBPACK_IMPORTED_MODULE_4__.reduxForm)({
  form: 'resetFrm',
  enableReinitialize: true
})(ResetForm);
const RegisterFormMapped = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(state => ({
  deco: state.ui.decoration
}))(ResetFormReduxed);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegisterFormMapped);

/***/ }),

/***/ "./app/components/Forms/user-jss.js":
/*!******************************************!*\
  !*** ./app/components/Forms/user-jss.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tss-react/mui */ "./node_modules/tss-react/esm/mui.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/node/styles/index.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var dan_images_petal_grey_bg_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dan-images/petal_grey_bg.svg */ "./public/images/petal_grey_bg.svg");
/* harmony import */ var dan_images_petal_bg_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dan-images/petal_bg.svg */ "./public/images/petal_bg.svg");
/* harmony import */ var containers_Templates_appStyles_jss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! containers/Templates/appStyles-jss */ "./app/containers/Templates/appStyles-jss.js");
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/colors */ "./node_modules/@mui/material/node/colors/index.js");






const rootWraper = {
  display: 'flex',
  width: '100%',
  zIndex: 1,
  position: 'relative'
};

const wrapper = (theme, opacity) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.alpha)(theme.palette.background.paper, opacity),
  backgroundRepeat: 'no-repeat',
  color: theme.palette.text.primary,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed'
});

const useStyles = (0,tss_react_mui__WEBPACK_IMPORTED_MODULE_0__.makeStyles)()((theme, _params, classes) => ({
  root: { ...rootWraper
  },
  rootFull: { ...rootWraper,
    height: '100%'
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    [theme.breakpoints.down('lg')]: {
      overflow: 'hidden'
    }
  },
  containerSide: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    [theme.breakpoints.down('lg')]: {
      overflow: 'hidden'
    }
  },
  paperWrap: { ...wrapper(theme, 1)
  },
  sideWrap: { ...wrapper(theme, 1),
    height: '100%',
    borderRadius: 0,
    [theme.breakpoints.up('md')]: {
      width: 480
    },
    [`& .${classes.topBar}`]: {
      marginBottom: theme.spacing(4)
    }
  },
  fullWrap: { ...wrapper(theme, 0.9),
    height: '100%',
    borderRadius: 0,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    [`& .${classes.topBar}`]: {
      width: '100%'
    }
  },
  petal: {
    backgroundImage: theme.palette.mode === 'dark' ? `url(${dan_images_petal_bg_svg__WEBPACK_IMPORTED_MODULE_2__["default"]})` : `url(${dan_images_petal_grey_bg_svg__WEBPACK_IMPORTED_MODULE_1__["default"]})`
  },
  icon: {},
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    [`& .${classes.icon}`]: {
      marginRight: theme.spacing(1)
    },
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
      marginBottom: theme.spacing(3),
      '& a': {
        display: 'none'
      }
    }
  },
  outer: {},
  brand: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5px 10px',
    position: 'relative',
    fontSize: 16,
    fontWeight: 500,
    color: theme.palette.text.primary,
    textDecoration: 'none',
    [`&.${classes.outer}`]: {
      color: theme.palette.common.white
    },
    [theme.breakpoints.down('lg')]: {
      margin: theme.spacing(2)
    },
    '& img': {
      width: 30,
      marginRight: 10
    }
  },
  formWrap: {
    [theme.breakpoints.up('sm')]: {
      padding: '0 100px'
    },
    [theme.breakpoints.up('md')]: {
      padding: '0 150px'
    }
  },
  pageFormWrap: {
    width: '100%',
    margin: `${theme.spacing(2)} auto`,
    [theme.breakpoints.up('sm')]: {
      width: 480
    }
  },
  pageFormSideWrap: {
    margin: '0 auto',
    [theme.breakpoints.only('sm')]: {
      width: 480
    }
  },
  formControl: {
    width: '100%',
    marginBottom: theme.spacing(1)
  },
  socmedLogin: {
    [theme.breakpoints.up('sm')]: {
      padding: '24px 100px 1px'
    },
    '& button': {
      padding: '4px 24px'
    }
  },
  socmedSideLogin: {
    padding: '24px 24px 1px',
    margin: '0 auto',
    '& button': {
      padding: '4px 16px',
      margin: `0 ${theme.spacing(1)}`
    },
    [theme.breakpoints.only('sm')]: {
      width: 480
    }
  },
  userFormWrap: {
    width: '94%',
    [theme.breakpoints.up('md')]: {
      width: 720
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(3)
    }
  },
  sideFormWrap: {
    height: '100%',
    [theme.breakpoints.down('md')]: {
      width: '100%'
    }
  },
  fullFormWrap: {
    height: '100%',
    width: '100%'
  },
  title: {
    color: theme.palette.primary.main
  },
  subtitle: {
    fontSize: 14
  },
  titleGradient: {
    background: (0,containers_Templates_appStyles_jss__WEBPACK_IMPORTED_MODULE_3__.gradientBgLight)(theme),
    fontWeight: 'bold',
    color: theme.palette.primary.main,
    paddingBottom: theme.spacing(3),
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    [theme.breakpoints.down('md')]: {
      fontSize: '2.55em'
    }
  },
  opening: {
    color: theme.palette.common.white,
    width: '100%',
    textAlign: 'center',
    '& h1': {
      display: 'block',
      [theme.breakpoints.down('lg')]: {
        fontSize: 32,
        lineHeight: '48px'
      }
    },
    '& p': {
      color: theme.palette.common.white,
      fontSize: 18,
      [theme.breakpoints.down('lg')]: {
        fontSize: 14
      }
    }
  },
  label: {},
  btnArea: {
    display: 'flex',
    justifyContent: 'space-around',
    margin: `${theme.spacing(2)} 0`,
    fontSize: 12,
    [`& .${classes.label}`]: {
      fontSize: 12,
      '& span': {
        fontSize: 12
      }
    },
    '& button': {
      margin: `0 ${theme.spacing(1)}`
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      '& button': {
        width: '100%',
        margin: 5
      }
    }
  },
  noMargin: {
    margin: 0
  },
  redBtn: {
    color: _mui_material_colors__WEBPACK_IMPORTED_MODULE_5__.red[500],
    borderColor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_5__.red[500],
    '&:hover': {
      borderColor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_5__.red[700]
    }
  },
  blueBtn: {
    color: _mui_material_colors__WEBPACK_IMPORTED_MODULE_5__.indigo[300],
    borderColor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_5__.indigo[300],
    '&:hover': {
      borderColor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_5__.indigo[500]
    }
  },
  cyanBtn: {
    color: _mui_material_colors__WEBPACK_IMPORTED_MODULE_5__.cyan[500],
    borderColor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_5__.cyan[500],
    '&:hover': {
      borderColor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_5__.cyan[700]
    }
  },
  buttonLink: {
    background: 'none',
    padding: 0,
    textTransform: 'none',
    transition: 'color ease 0.3s',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: '0.875rem',
    '&:hover': {
      background: 'none',
      color: theme.palette.secondary.main
    }
  },
  leftIcon: {
    marginRight: theme.spacing(1)
  },
  rightIcon: {
    marginLeft: theme.spacing(1)
  },
  iconSmall: {
    fontSize: 20
  },
  footer: {
    textAlign: 'center',
    padding: 5,
    background: theme.palette.grey[100],
    fontSize: 14,
    position: 'relative'
  },
  welcomeWrap: {
    position: 'relative'
  },
  tab: {
    margin: `${theme.spacing(3)} 0 ${theme.spacing(1)}`
  },
  link: {
    fontSize: '0.875rem',
    color: theme.palette.secondary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  socmedFull: {
    textAlign: 'center',
    width: '100%',
    margin: `${theme.spacing(3)} ${theme.spacing(1)}`,
    '& button': {
      width: '100%',
      display: 'block',
      margin: `0 auto ${theme.spacing(2)}`
    },
    [theme.breakpoints.up('sm')]: {
      '& button': {
        width: 400
      }
    }
  },
  lockWrap: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  lockForm: {
    display: 'flex',
    alignItems: 'baseline'
  },
  unlockBtn: {
    top: -4
  },
  notifyForm: {
    alignItems: 'baseline',
    [theme.breakpoints.down('sm')]: {
      '& button': {
        marginTop: theme.spacing(3),
        width: '100%'
      }
    },
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      '& button': {
        width: 'auto'
      }
    }
  },
  lockField: {
    marginRight: theme.spacing(1),
    '& label': {
      color: `${theme.palette.common.white} !important`
    },
    '& label + div': {
      background: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.alpha)(theme.palette.primary.light, 0.3),
      border: 'none',
      '& svg': {
        fill: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.alpha)(theme.palette.common.white, 0.7)
      }
    }
  },
  avatar: {
    width: 150,
    height: 150,
    [theme.breakpoints.up('lg')]: {
      marginRight: theme.spacing(3)
    },
    boxShadow: theme.glow.medium
  },
  userName: {
    color: theme.palette.common.white,
    fontWeight: theme.typography.fontWeightMedium,
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(3),
      textAlign: 'center'
    }
  },
  hint: {
    padding: theme.spacing(1)
  },
  brandCenter: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(3)
  },
  centerAdornment: {
    justifyContent: 'center',
    '& > div': {
      width: '100%'
    },
    '& aside': {
      top: -10,
      [theme.breakpoints.up('sm')]: {
        left: 10
      },
      position: 'relative'
    },
    '& a i': {
      width: 32,
      height: 32
    }
  },
  centerV: {
    justifyContent: 'center'
  },
  optArea: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: `0 ${theme.spacing(0.5)}`
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStyles);

/***/ }),

/***/ "./app/components/GuideSlider/guide-jss.js":
/*!*************************************************!*\
  !*** ./app/components/GuideSlider/guide-jss.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tss-react/mui */ "./node_modules/tss-react/esm/mui.js");

const useStyles = (0,tss_react_mui__WEBPACK_IMPORTED_MODULE_0__.makeStyles)()(theme => ({
  root: {
    padding: 0,
    overflow: 'hidden'
  },
  rootContent: {
    padding: 0,
    paddingTop: '0 !important',
    overflow: 'hidden'
  },
  guideWrap: {
    '& > div > div': {
      overflow: 'hidden !important'
    }
  },
  header: {
    textAlign: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    marginBottom: 20,
    backgroundColor: theme.palette.background.default
  },
  img: {
    width: 'auto',
    display: 'block',
    height: 'auto',
    overflow: 'hidden',
    margin: '0 auto'
  },
  figure: {
    width: '150%',
    left: '-25%',
    position: 'relative',
    borderRadius: '0 0 50% 50%',
    overflow: 'hidden',
    height: 255,
    margin: '0 auto'
  },
  mobileStepper: {
    margin: '0 auto',
    textAlign: 'center'
  },
  text: {
    padding: theme.spacing(3),
    '& h2': {
      marginBottom: theme.spacing(2)
    }
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStyles);

/***/ }),

/***/ "./app/components/GuideSlider/index.js":
/*!*********************************************!*\
  !*** ./app/components/GuideSlider/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_MobileStepper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/MobileStepper */ "./node_modules/@mui/material/node/MobileStepper/index.js");
/* harmony import */ var _mui_material_MobileStepper__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_MobileStepper__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/node/Typography/index.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/node/Button/index.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_icons_material_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/icons-material/KeyboardArrowLeft */ "./node_modules/@mui/icons-material/KeyboardArrowLeft.js");
/* harmony import */ var _mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/icons-material/KeyboardArrowRight */ "./node_modules/@mui/icons-material/KeyboardArrowRight.js");
/* harmony import */ var react18_swipeable_views__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react18-swipeable-views */ "./node_modules/react18-swipeable-views/lib/index.js");
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Dialog */ "./node_modules/@mui/material/node/Dialog/index.js");
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/DialogContent */ "./node_modules/@mui/material/node/DialogContent/index.js");
/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_Slide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Slide */ "./node_modules/@mui/material/node/Slide/index.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/node/styles/index.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var dan_api_dummy_guideData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dan-api/dummy/guideData */ "./app/api/dummy/guideData.js");
/* harmony import */ var _guide_jss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guide-jss */ "./app/components/GuideSlider/guide-jss.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }















const maxStepsSwipe = dan_api_dummy_guideData__WEBPACK_IMPORTED_MODULE_3__["default"].length;
const Transition = react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function Transition(props, ref) {
  // eslint-disable-line
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Slide__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({
    direction: "up",
    ref: ref
  }, props));
});

function GuideSlider(props) {
  const {
    classes
  } = (0,_guide_jss__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__.useTheme)();
  const [activeStepSwipe, setActiveStepSwipe] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);

  const handleNextSwipe = () => {
    setActiveStepSwipe(activeStepSwipe + 1);
  };

  const handleBackSwipe = () => {
    setActiveStepSwipe(activeStepSwipe - 1);
  };

  const handleStepChangeSwipe = index => {
    setActiveStepSwipe(index);
  };

  const handleClose = () => {
    const {
      closeGuide
    } = props;
    closeGuide();
    setActiveStepSwipe(0);
  };

  const {
    openGuide,
    closeGuide
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_7___default()), {
    TransitionComponent: Transition,
    keepMounted: true,
    open: openGuide,
    onClose: closeGuide,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description",
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_8___default()), {
    className: classes.rootContent
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react18_swipeable_views__WEBPACK_IMPORTED_MODULE_2__["default"], {
    axis: theme.direction === 'rtl' ? 'x-reverse' : 'x',
    index: activeStepSwipe,
    onChangeIndex: handleStepChangeSwipe,
    enableMouseEvents: true,
    className: classes.guideWrap
  }, dan_api_dummy_guideData__WEBPACK_IMPORTED_MODULE_3__["default"].map((step, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classes.figure,
    key: index.toString()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    key: step.label,
    className: classes.img,
    src: step.imgPath,
    alt: step.title
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article", {
    className: classes.text
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9___default()), {
    variant: "h6"
  }, dan_api_dummy_guideData__WEBPACK_IMPORTED_MODULE_3__["default"][activeStepSwipe].title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9___default()), null, dan_api_dummy_guideData__WEBPACK_IMPORTED_MODULE_3__["default"][activeStepSwipe].label)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_MobileStepper__WEBPACK_IMPORTED_MODULE_10___default()), {
    variant: "progress",
    steps: maxStepsSwipe,
    position: "static",
    activeStep: activeStepSwipe,
    className: classes.mobileStepper,
    nextButton: activeStepSwipe === maxStepsSwipe - 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Button__WEBPACK_IMPORTED_MODULE_11___default()), {
      size: "small",
      color: "primary",
      onClick: handleClose
    }, "Done", theme.direction === 'rtl' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_12__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_13__["default"], null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Button__WEBPACK_IMPORTED_MODULE_11___default()), {
      size: "small",
      onClick: handleNextSwipe
    }, "Next", theme.direction === 'rtl' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_12__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_13__["default"], null)),
    backButton: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Button__WEBPACK_IMPORTED_MODULE_11___default()), {
      size: "small",
      onClick: handleBackSwipe,
      disabled: activeStepSwipe === 0
    }, theme.direction === 'rtl' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_13__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_12__["default"], null), "Back")
  })));
}

GuideSlider.propTypes = {
  openGuide: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired),
  closeGuide: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GuideSlider);

/***/ }),

/***/ "./app/components/Header/DropListMenu.js":
/*!***********************************************!*\
  !*** ./app/components/Header/DropListMenu.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/node/Button/index.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_ClickAwayListener__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/ClickAwayListener */ "./node_modules/@mui/material/node/ClickAwayListener/index.js");
/* harmony import */ var _mui_material_ClickAwayListener__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ClickAwayListener__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_Grow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Grow */ "./node_modules/@mui/material/node/Grow/index.js");
/* harmony import */ var _mui_material_Popper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Popper */ "./node_modules/@mui/material/node/Popper/index.js");
/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/ExpandMore */ "./node_modules/@mui/icons-material/ExpandMore.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/lib/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Paper */ "./node_modules/@mui/material/node/Paper/index.js");
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/node/List/index.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_List__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/ListItem */ "./node_modules/@mui/material/node/ListItem/index.js");
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material/ListItemText */ "./node_modules/@mui/material/node/ListItemText/index.js");
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _mui_material_ListSubheader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/ListSubheader */ "./node_modules/@mui/material/node/ListSubheader/index.js");
/* harmony import */ var _mui_material_ListSubheader__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListSubheader__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _header_jss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header-jss */ "./app/components/Header/header-jss.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

















const LinkBtn = react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function LinkBtn(props, ref) {
  // eslint-disable-line
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, _extends({
    to: props.to
  }, props, {
    innerRef: ref
  })); // eslint-disable-line
}); // eslint-disable-next-line

function MainMenu(props) {
  const {
    classes,
    cx
  } = (0,_header_jss__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [openMenu, setOpenMenu] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [anchorEl, setAnchorEl] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const {
      open
    } = props;
    setTimeout(() => {
      setActive(open);
    }, 50);
  }, []);

  const handleOpenMenu = (event, key, keyParent) => {
    const {
      openSubMenu
    } = props;
    openSubMenu(key, keyParent);
    setAnchorEl(event.currentTarget);
    setTimeout(() => {
      setOpenMenu([key]);
    }, 50);
  };

  const handleClose = event => {
    if (anchorEl.contains(event.target)) {
      return;
    }

    setOpenMenu([]);
  };

  const handleActiveParent = key => {
    setActive([key]);
    setOpenMenu([]);
  };

  const {
    open,
    dataMenu
  } = props;

  const getMenus = (parent, menuArray) => menuArray.map((item, index) => {
    if (item.multilevel) {
      return false;
    }

    if (item.child || item.linkParent) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        key: index.toString()
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Button__WEBPACK_IMPORTED_MODULE_6___default()), {
        "aria-owns": open ? 'menu-list-grow' : undefined,
        component: LinkBtn,
        to: item.linkParent ? item.linkParent : '#',
        className: cx(classes.headMenu, open.indexOf(item.key) > -1 ? classes.opened : '', active.indexOf(item.key) > -1 ? classes.selected : ''),
        onClick: event => handleOpenMenu(event, item.key, item.keyParent)
      }, item.name, !item.linkParent ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: classes.rightIcon
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: classes.rightIcon
      }, "\xA0\xA0")), !item.linkParent && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Popper__WEBPACK_IMPORTED_MODULE_8__["default"], {
        open: openMenu.indexOf(item.key) > -1,
        anchorEl: anchorEl,
        transition: true,
        disablePortal: true
      }, _ref => {
        let {
          TransitionProps,
          placement
        } = _ref;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Grow__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({}, TransitionProps, {
          id: "menu-list-grow",
          style: {
            transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Paper__WEBPACK_IMPORTED_MODULE_10___default()), {
          className: classes.dropDownMenu
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_ClickAwayListener__WEBPACK_IMPORTED_MODULE_11___default()), {
          onClickAway: handleClose
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_List__WEBPACK_IMPORTED_MODULE_12___default()), {
          role: "menu",
          component: "nav",
          className: classes.paperMenu
        }, getMenus(item.key, item.child)))));
      }));
    }

    if (item.title) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_ListSubheader__WEBPACK_IMPORTED_MODULE_13___default()), {
        component: "div",
        key: index.toString(),
        className: classes.title
      }, item.name);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_14___default()), {
      key: index.toString(),
      button: true,
      exact: true,
      className: classes.menuItem,
      activeClassName: classes.active,
      component: LinkBtn,
      to: item.link,
      onClick: () => handleActiveParent(parent)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_15___default()), {
      primary: item.name
    }));
  });

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    className: classes.mainMenu
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, getMenus(null, dataMenu)));
}

MainMenu.propTypes = {
  open: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired),
  openSubMenu: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  dataMenu: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired)
};

const openAction = (key, keyParent) => ({
  type: 'OPEN_SUBMENU',
  key,
  keyParent
});

const mapStateToProps = state => ({
  open: state.ui.subMenuOpen
});

const mapDispatchToProps = dispatch => ({
  openSubMenu: (0,redux__WEBPACK_IMPORTED_MODULE_2__.bindActionCreators)(openAction, dispatch)
});

const MainMenuMapped = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, mapDispatchToProps)(MainMenu);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainMenuMapped);

/***/ }),

/***/ "./app/components/Header/Header.js":
/*!*****************************************!*\
  !*** ./app/components/Header/Header.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/node/Typography/index.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/useMediaQuery */ "./node_modules/@mui/material/node/useMediaQuery/index.js");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/node/AppBar/index.js");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/node/Toolbar/index.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/icons-material/Search */ "./node_modules/@mui/icons-material/Search.js");
/* harmony import */ var _mui_material_Fab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Fab */ "./node_modules/@mui/material/node/Fab/index.js");
/* harmony import */ var _mui_material_Fab__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Fab__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/node/Tooltip/index.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/IconButton */ "./node_modules/@mui/material/node/IconButton/index.js");
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _UserMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserMenu */ "./app/components/Header/UserMenu.js");
/* harmony import */ var _Search_SearchUi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Search/SearchUi */ "./app/components/Search/SearchUi.js");
/* harmony import */ var _header_jss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header-jss */ "./app/components/Header/header-jss.js");














const elem = document.documentElement;

function Header(props) {
  const {
    classes,
    cx
  } = (0,_header_jss__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const [open] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [fullScreen, setFullScreen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [turnDarker, setTurnDarker] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [showTitle, setShowTitle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false); // Initial header style

  let flagDarker = false;
  let flagTitle = false;

  const handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const newFlagDarker = scroll > 30;
    const newFlagTitle = scroll > 40;

    if (flagDarker !== newFlagDarker) {
      setTurnDarker(newFlagDarker);
      flagDarker = newFlagDarker;
    }

    if (flagTitle !== newFlagTitle) {
      setShowTitle(newFlagTitle);
      flagTitle = newFlagTitle;
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const openFullScreen = () => {
    setFullScreen(true);

    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Chrome, Safari & Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE/Edge */
      elem.msRequestFullscreen();
    }
  };

  const closeFullScreen = () => {
    setFullScreen(false);

    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  };

  const turnMode = mode => {
    if (mode === 'light') {
      props.changeMode('dark');
    } else {
      props.changeMode('light');
    }
  };

  const {
    toggleDrawerOpen,
    margin,
    position,
    gradient,
    mode,
    title,
    history
  } = props;

  const setMargin = sidebarPosition => {
    if (sidebarPosition === 'right-sidebar') {
      return classes.right;
    }

    if (sidebarPosition === 'left-sidebar-big') {
      return classes.leftBig;
    }

    return classes.left;
  };

  const smDown = (0,_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__["default"])(theme => theme.breakpoints.down('sm'));
  const mdDown = (0,_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__["default"])(theme => theme.breakpoints.down('md'));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_6___default()), {
    className: cx(classes.appBar, classes.floatingBar, margin && classes.appBarShift, setMargin(position), turnDarker && classes.darker, gradient ? classes.gradientBg : classes.solidBg)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_7___default()), {
    disableGutters: !open
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Fab__WEBPACK_IMPORTED_MODULE_8___default()), {
    size: "small",
    className: classes.menuButton,
    "aria-label": "Menu",
    onClick: toggleDrawerOpen
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_9__["default"], null)), !mdDown && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classes.headerProperties
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: cx(classes.headerAction, showTitle && classes.fadeOut)
  }, fullScreen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_10___default()), {
    title: "Exit Full Screen",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_11___default()), {
    className: classes.button,
    onClick: closeFullScreen,
    size: "large"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "ion-ios-qr-scanner-outline"
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_10___default()), {
    title: "Full Screen",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_11___default()), {
    className: classes.button,
    onClick: openFullScreen,
    size: "large"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "ion-ios-qr-scanner-outline"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_10___default()), {
    title: "Turn Dark/Light",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_11___default()), {
    className: classes.button,
    onClick: () => turnMode(mode),
    size: "large"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "ion-ios-bulb-outline"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {
    component: "h2",
    className: cx(classes.headerTitle, showTitle && classes.show)
  }, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classes.searchWrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: cx(classes.wrapper, classes.light)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classes.search
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_13__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Search_SearchUi__WEBPACK_IMPORTED_MODULE_3__["default"], {
    history: history
  }))), !smDown && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: classes.separatorV
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_UserMenu__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
}

Header.propTypes = {
  toggleDrawerOpen: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  margin: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired),
  gradient: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired),
  position: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  mode: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  changeMode: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  history: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./app/components/Header/HeaderMenu.js":
/*!*********************************************!*\
  !*** ./app/components/Header/HeaderMenu.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/node/AppBar/index.js");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/node/Toolbar/index.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/icons-material/Search */ "./node_modules/@mui/icons-material/Search.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/node/Tooltip/index.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/IconButton */ "./node_modules/@mui/material/node/IconButton/index.js");
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var dan_images_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dan-images/logo.png */ "./public/images/logo.png");
/* harmony import */ var dan_api_dummy_brand__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dan-api/dummy/brand */ "./app/api/dummy/brand.js");
/* harmony import */ var dan_api_dummy_brand__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dan_api_dummy_brand__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/useMediaQuery */ "./node_modules/@mui/material/node/useMediaQuery/index.js");
/* harmony import */ var _mui_material_SwipeableDrawer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material/SwipeableDrawer */ "./node_modules/@mui/material/node/SwipeableDrawer/index.js");
/* harmony import */ var dan_api_dummy_dummyContents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dan-api/dummy/dummyContents */ "./app/api/dummy/dummyContents.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _Sidebar_SidebarContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Sidebar/SidebarContent */ "./app/components/Sidebar/SidebarContent.js");
/* harmony import */ var _DropListMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DropListMenu */ "./app/components/Header/DropListMenu.js");
/* harmony import */ var _MegaMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MegaMenu */ "./app/components/Header/MegaMenu.js");
/* harmony import */ var _UserMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./UserMenu */ "./app/components/Header/UserMenu.js");
/* harmony import */ var _header_jss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header-jss */ "./app/components/Header/header-jss.js");
/* harmony import */ var _Search_SearchUi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Search/SearchUi */ "./app/components/Search/SearchUi.js");




















const elem = document.documentElement;

function HeaderMenu(props) {
  const {
    classes,
    cx
  } = (0,_header_jss__WEBPACK_IMPORTED_MODULE_10__["default"])();
  const [fullScreen, setFullScreen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(dan_api_dummy_dummyContents__WEBPACK_IMPORTED_MODULE_5__["default"].user.status);
  const [anchorEl, setAnchorEl] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [fixed, setFixed] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false); // Initial menu ui

  let flagFixedMenu = false;

  const handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const newFlagFixedMenu = scroll > 64;

    if (flagFixedMenu !== newFlagFixedMenu) {
      setFixed(newFlagFixedMenu);
      flagFixedMenu = newFlagFixedMenu;
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const openFullScreen = () => {
    setFullScreen(true);

    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Chrome, Safari & Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE/Edge */
      elem.msRequestFullscreen();
    }
  };

  const closeFullScreen = () => {
    setFullScreen(false);

    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  };

  const turnMode = mode => {
    if (mode === 'light') {
      props.changeMode('dark');
    } else {
      props.changeMode('light');
    }
  };

  const handleOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeStatus = st => {
    setStatus(st);
    handleClose();
  };

  const {
    type,
    dataMenu,
    history,
    mode,
    toggleDrawerOpen,
    openMobileNav,
    loadTransition,
    isLogin,
    logoLink
  } = props;
  const mdDown = (0,_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_12__["default"])(theme => theme.breakpoints.down('md'));
  const lgUp = (0,_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_12__["default"])(theme => theme.breakpoints.up('lg'));
  const lgDown = (0,_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_12__["default"])(theme => theme.breakpoints.down('lg'));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_13___default()), {
    className: cx(classes.appBar, classes.attachedbar, fixed ? classes.fixed : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classes.appMenu
  }, !lgUp && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_14___default()), {
    className: classes.menuButton,
    "aria-label": "Menu",
    onClick: toggleDrawerOpen,
    size: "large"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_15__["default"], null)), !mdDown && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classes.headerProperties
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: cx(classes.headerAction, classes.invert)
  }, fullScreen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_16___default()), {
    title: "Exit Full Screen",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_14___default()), {
    className: classes.button,
    onClick: closeFullScreen,
    size: "large"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "ion-ios-qr-scanner-outline"
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_16___default()), {
    title: "Full Screen",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_14___default()), {
    className: classes.button,
    onClick: openFullScreen,
    size: "large"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "ion-ios-qr-scanner-outline"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_16___default()), {
    title: "Turn Dark/Light",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_14___default()), {
    className: classes.button,
    onClick: () => turnMode(mode),
    size: "large"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "ion-ios-bulb-outline"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
    to: logoLink,
    className: classes.brand
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: dan_images_logo_png__WEBPACK_IMPORTED_MODULE_3__["default"],
    alt: (dan_api_dummy_brand__WEBPACK_IMPORTED_MODULE_4___default().name)
  }), (dan_api_dummy_brand__WEBPACK_IMPORTED_MODULE_4___default().name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classes.searchHeaderMenu
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: cx(classes.wrapper, classes.dark)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classes.search
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_17__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Search_SearchUi__WEBPACK_IMPORTED_MODULE_11__["default"], {
    history: history
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_18___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_UserMenu__WEBPACK_IMPORTED_MODULE_9__["default"], {
    dark: true
  }))), !lgDown && type === 'mega-menu' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MegaMenu__WEBPACK_IMPORTED_MODULE_8__["default"], {
    dataMenu: dataMenu
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_DropListMenu__WEBPACK_IMPORTED_MODULE_7__["default"], {
    dataMenu: dataMenu
  }), !lgUp && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_SwipeableDrawer__WEBPACK_IMPORTED_MODULE_19__["default"], {
    onClose: toggleDrawerOpen,
    onOpen: toggleDrawerOpen,
    open: !openMobileNav,
    anchor: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classes.swipeDrawerPaper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Sidebar_SidebarContent__WEBPACK_IMPORTED_MODULE_6__["default"], {
    drawerPaper: true,
    leftSidebar: true,
    toggleDrawerOpen: toggleDrawerOpen,
    loadTransition: loadTransition,
    dataMenu: dataMenu,
    status: status,
    anchorEl: anchorEl,
    openMenuStatus: handleOpen,
    closeMenuStatus: handleClose,
    changeStatus: handleChangeStatus,
    isLogin: isLogin
  }))));
}

HeaderMenu.propTypes = {
  type: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  dataMenu: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired),
  openMobileNav: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired),
  mode: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  changeMode: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  toggleDrawerOpen: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  loadTransition: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  history: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired),
  logoLink: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  isLogin: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
HeaderMenu.defaultProps = {
  isLogin: true,
  logoLink: '/'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderMenu);

/***/ }),

/***/ "./app/components/Header/MegaMenu.js":
/*!*******************************************!*\
  !*** ./app/components/Header/MegaMenu.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/node/Button/index.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Fade__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Fade */ "./node_modules/@mui/material/node/Fade/index.js");
/* harmony import */ var _mui_material_Popper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Popper */ "./node_modules/@mui/material/node/Popper/index.js");
/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/ExpandMore */ "./node_modules/@mui/icons-material/ExpandMore.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/lib/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _mui_material_ClickAwayListener__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/ClickAwayListener */ "./node_modules/@mui/material/node/ClickAwayListener/index.js");
/* harmony import */ var _mui_material_ClickAwayListener__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ClickAwayListener__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Paper */ "./node_modules/@mui/material/node/Paper/index.js");
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Grid */ "./node_modules/@mui/material/node/Grid/index.js");
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/node/List/index.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_List__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material/ListItem */ "./node_modules/@mui/material/node/ListItem/index.js");
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material/ListItemText */ "./node_modules/@mui/material/node/ListItemText/index.js");
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _mui_material_ListSubheader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/ListSubheader */ "./node_modules/@mui/material/node/ListSubheader/index.js");
/* harmony import */ var _mui_material_ListSubheader__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListSubheader__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _header_jss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header-jss */ "./app/components/Header/header-jss.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


















const LinkBtn = react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function LinkBtn(props, ref) {
  // eslint-disable-line
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, _extends({
    to: props.to
  }, props, {
    innerRef: ref
  })); // eslint-disable-line
}); // eslint-disable-next-line

function MegaMenu(props) {
  const {
    classes,
    cx
  } = (0,_header_jss__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [openMenu, setOpenMenu] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [anchorEl, setAnchorEl] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const {
      open
    } = props;
    setTimeout(() => {
      setActive(open);
    }, 50);
  }, []);

  const handleOpenMenu = (event, key, keyParent) => {
    const {
      openSubMenu
    } = props;
    openSubMenu(key, keyParent);
    setAnchorEl(event.currentTarget);
    setTimeout(() => {
      setOpenMenu([key]);
    }, 50);
  };

  const handleClose = event => {
    if (anchorEl.contains(event.target)) {
      return;
    }

    setOpenMenu([]);
  };

  const handleActiveParent = key => {
    setActive([key]);
    setOpenMenu([]);
  };

  const {
    open,
    dataMenu
  } = props;

  const getMenus = (parent, menuArray) => menuArray.map((item, index) => {
    if (item.multilevel) {
      return false;
    }

    if (item.child || item.linkParent) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        key: index.toString()
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Button__WEBPACK_IMPORTED_MODULE_6___default()), {
        "aria-haspopup": "true",
        component: LinkBtn,
        to: item.linkParent ? item.linkParent : '#',
        className: cx(classes.headMenu, open.indexOf(item.key) > -1 ? classes.opened : '', active.indexOf(item.key) > -1 ? classes.selected : ''),
        onClick: event => handleOpenMenu(event, item.key, item.keyParent)
      }, item.name, !item.linkParent ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: classes.rightIcon
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: classes.rightIcon
      }, "\xA0\xA0")), !item.linkParent && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Popper__WEBPACK_IMPORTED_MODULE_8__["default"], {
        open: openMenu.indexOf(item.key) > -1,
        anchorEl: anchorEl,
        transition: true,
        disablePortal: true
      }, _ref => {
        let {
          TransitionProps,
          placement
        } = _ref;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Fade__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({}, TransitionProps, {
          id: "menu-list-grow",
          style: {
            transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Paper__WEBPACK_IMPORTED_MODULE_10___default()), {
          className: classes.dropDownMenu
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_ClickAwayListener__WEBPACK_IMPORTED_MODULE_11___default()), {
          onClickAway: handleClose
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_12___default()), {
          container: true
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_12___default()), {
          item: true,
          md: 3,
          container: true,
          justifyContent: "center"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
          className: classes.bigIcon
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
          className: cx(classes.icon, item.icon)
        }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_12___default()), {
          item: true,
          md: 9
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_List__WEBPACK_IMPORTED_MODULE_13___default()), {
          role: "menu",
          component: "nav",
          className: classes.megaMenu
        }, getMenus(item.key, item.child)))))));
      }));
    }

    if (item.title) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_ListSubheader__WEBPACK_IMPORTED_MODULE_14___default()), {
        component: "div",
        key: index.toString(),
        className: classes.title
      }, item.name);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_15___default()), {
      key: index.toString(),
      button: true,
      exact: true,
      className: classes.megaItem,
      activeClassName: classes.active,
      component: LinkBtn,
      to: item.link || item.linkParent,
      onClick: () => handleActiveParent(parent)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_16___default()), {
      primary: item.name
    }));
  });

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    className: classes.mainMenu
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classes.megaMenu
  }, getMenus(null, dataMenu)));
}

MegaMenu.propTypes = {
  open: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired),
  openSubMenu: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  dataMenu: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired)
};

const openAction = (key, keyParent) => ({
  type: 'OPEN_SUBMENU',
  key,
  keyParent
});

const mapStateToProps = state => ({
  open: state.ui.subMenuOpen
});

const mapDispatchToProps = dispatch => ({
  openSubMenu: (0,redux__WEBPACK_IMPORTED_MODULE_2__.bindActionCreators)(openAction, dispatch)
});

const MegaMenuMapped = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, mapDispatchToProps)(MegaMenu);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MegaMenuMapped);

/***/ }),

/***/ "./app/components/Header/UserMenu.js":
/*!*******************************************!*\
  !*** ./app/components/Header/UserMenu.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Avatar */ "./node_modules/@mui/material/node/Avatar/index.js");
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/node/Button/index.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_ExitToApp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/ExitToApp */ "./node_modules/@mui/icons-material/ExitToApp.js");
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Divider */ "./node_modules/@mui/material/node/Divider/index.js");
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Menu */ "./node_modules/@mui/material/node/Menu/index.js");
/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Menu__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/MenuItem */ "./node_modules/@mui/material/node/MenuItem/index.js");
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/ListItemIcon */ "./node_modules/@mui/material/node/ListItemIcon/index.js");
/* harmony import */ var _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var dan_api_dummy_dummyContents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dan-api/dummy/dummyContents */ "./app/api/dummy/dummyContents.js");












function UserMenu() {
  const [menuState, setMenuState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    anchorEl: null,
    openMenu: null
  });

  const handleMenu = menu => event => {
    const {
      openMenu
    } = menuState;
    setMenuState({
      openMenu: openMenu === menu ? null : menu,
      anchorEl: event.currentTarget
    });
  };

  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useHistory)();

  const handleClose = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.clear();
    history.push("/login");
  };

  const handleProfile = () => {
    setMenuState({
      anchorEl: null,
      openMenu: null
    }); // fecha o menu

    history.push("/app/profile");
  };

  const {
    anchorEl,
    openMenu
  } = menuState;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
    onClick: handleMenu('user-setting')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_4___default()), {
    alt: dan_api_dummy_dummyContents__WEBPACK_IMPORTED_MODULE_2__["default"].user.name,
    src: dan_api_dummy_dummyContents__WEBPACK_IMPORTED_MODULE_2__["default"].user.avatar
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Menu__WEBPACK_IMPORTED_MODULE_5___default()), {
    id: "menu-appbar",
    anchorEl: anchorEl,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    open: openMenu === 'user-setting',
    onClose: () => setMenuState({
      anchorEl: null,
      openMenu: null
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6___default()), {
    onClick: handleProfile,
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link,
    to: "/app/profile"
  }, "Meu Perfil"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Divider__WEBPACK_IMPORTED_MODULE_7___default()), null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6___default()), {
    onClick: handleClose,
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link,
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_8___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ExitToApp__WEBPACK_IMPORTED_MODULE_9__["default"], null)), "Log Out")));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserMenu);

/***/ }),

/***/ "./app/components/Header/header-jss.js":
/*!*********************************************!*\
  !*** ./app/components/Header/header-jss.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tss-react/mui */ "./node_modules/tss-react/esm/mui.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/node/styles/index.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var containers_Templates_appStyles_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! containers/Templates/appStyles-jss */ "./app/containers/Templates/appStyles-jss.js");



const drawerWidth = 240;
const drawerBigWidth = 280;
const useStyles = (0,tss_react_mui__WEBPACK_IMPORTED_MODULE_0__.makeStyles)()((theme, _params, classes) => ({
  appBar: {
    background: 'rgba(0,0,0,0)',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin', 'background'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    [`& .${classes.menuButton}`]: {
      color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
      backgroundColor: 'transparent',
      boxShadow: 'none',
      zIndex: 10
    },
    [`&.${classes.left}`]: {
      [`& .${classes.menuButton}`]: {
        marginLeft: 13
      },
      [`& .${classes.headerTitle}`]: {
        left: theme.spacing(2)
      }
    },
    [`&.${classes.leftBig}`]: {
      [`& .${classes.menuButton}`]: {
        marginLeft: 30,
        marginRight: theme.spacing(2),
        [theme.breakpoints.down('lg')]: {
          marginLeft: 13
        }
      },
      [`& .${classes.headerTitle}`]: {
        left: 0
      }
    },
    [`&.${classes.right}`]: {
      [`& .${classes.menuButton}`]: {
        marginRight: 13
      },
      [`& .${classes.headerTitle}`]: {
        right: theme.spacing(2)
      },
      '& > div': {
        flexDirection: 'row-reverse'
      },
      [`& .${classes.flex}`]: {
        textAlign: 'left'
      }
    }
  },
  attachedbar: {
    position: 'relative',
    [`& .${classes.menuButton}`]: {
      margin: `0 ${theme.spacing(2)}`
    },
    [`& .${classes.wrapper}`]: {
      [theme.breakpoints.down('xl')]: {
        border: `1px solid ${theme.palette.divider}`
      }
    }
  },
  floatingBar: {
    position: 'fixed'
  },
  appMenu: {
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
    background: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
    [theme.breakpoints.down('lg')]: {
      padding: `${theme.spacing(0.5)} 0`
    },
    [theme.breakpoints.up('lg')]: {
      background: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.alpha)(theme.palette.background.paper, 0.8)
    },
    color: theme.palette.text.primary
  },
  flex: {
    flex: 1,
    textAlign: 'right'
  },
  flexDefault: {
    flex: 1,
    textAlign: 'right'
  },
  left: {},
  leftBig: {},
  right: {},
  appBarShift: {
    transition: theme.transitions.create(['width', 'margin', 'background'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    [`&.${classes.left}`]: {
      [`& .${classes.menuButton}`]: {
        [theme.breakpoints.up('lg')]: {
          marginLeft: -20
        }
      },
      [theme.breakpoints.up('lg')]: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`
      }
    },
    [`&.${classes.leftBig}`]: {
      [`& .${classes.menuButton}`]: {
        [theme.breakpoints.up('lg')]: {
          marginLeft: -20
        }
      },
      [theme.breakpoints.up('lg')]: {
        marginLeft: drawerBigWidth,
        width: `calc(100% - ${drawerBigWidth}px)`
      }
    },
    [`&.${classes.right}`]: {
      [`& .${classes.menuButton}`]: {
        [theme.breakpoints.up('lg')]: {
          marginRight: -20
        }
      },
      [theme.breakpoints.up('lg')]: {
        marginRight: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`
      }
    },
    [`& .${classes.menuButton}`]: {
      backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.main : theme.palette.primary.light,
      boxShadow: theme.glow.medium
    },
    [`& .${classes.headerAction}`]: {
      marginLeft: theme.spacing(1)
    },
    [`&.${classes.darker}`]: {
      [`& .${classes.menuButton}`]: {
        color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main
      }
    }
  },
  menuButton: {},
  hide: {
    display: 'none'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  dark: {},
  light: {},
  wrapper: {
    fontFamily: theme.typography.fontFamily,
    position: 'relative',
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(1),
    borderRadius: 22,
    display: 'inline-block',
    '&:hover': {
      background: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.alpha)(theme.palette.common.white, 0.25)
    },
    [`&.${classes.light}`]: {
      background: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.alpha)(theme.palette.common.white, 0.2)
    },
    [`&.${classes.dark}`]: {
      background: theme.palette.mode === 'dark' ? theme.palette.grey[700] : (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.alpha)(theme.palette.common.white, 0.8),
      boxShadow: theme.shade.light,
      '& input': {
        color: theme.palette.grey[700]
      },
      '& input::placeholder': {
        color: theme.palette.grey[400],
        opacity: 1
        /* Firefox */

      },
      '& input:-ms-input-placeholder': {
        color: theme.palette.grey[400]
      },
      '& input::-ms-input-placeholder': {
        /* Internet Explorer 10-11 */
        color: theme.palette.grey[400]
      }
    },
    [`& .${classes.miniInput}`]: {
      width: 70
    }
  },
  searchWrapper: {
    [theme.breakpoints.down('lg')]: {
      flex: 1,
      textAlign: 'right'
    }
  },
  search: {
    width: theme.spacing(9),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  miniInput: {
    paddingLeft: 0,
    textIndent: '999999px'
  },
  gradientBg: {},
  solidBg: {},
  darker: {
    backgroundAttachment: 'fixed',
    boxShadow: theme.shadows[3],
    [`&.${classes.gradientBg}`]: {
      backgroundImage: theme.palette.mode === 'dark' ? (0,containers_Templates_appStyles_jss__WEBPACK_IMPORTED_MODULE_1__.gradientBgDark)(theme) : (0,containers_Templates_appStyles_jss__WEBPACK_IMPORTED_MODULE_1__.gradientBgLight)(theme)
    },
    [`&.${classes.solidBg}`]: {
      backgroundColor: theme.palette.mode === 'dark' ? (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.darken)(theme.palette.primary.main, 0.4) : theme.palette.primary.main
    },
    [`& .${classes.menuButton}`]: {
      color: theme.palette.common.white
    }
  },
  fixed: {
    position: 'fixed',
    left: 0,
    top: 0,
    [theme.breakpoints.up('lg')]: {
      top: theme.spacing(-8)
    }
  },
  separatorV: {
    borderLeft: `1px solid ${theme.palette.grey[300]}`,
    height: 20,
    margin: '0 10px',
    opacity: 0.4
  },
  notifMenu: {
    '& li': {
      height: 'auto',
      '& h3': {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
      }
    }
  },
  badgeMenu: {
    '& span': {
      top: 0,
      right: -30
    }
  },
  textNotif: {
    '& span': {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      display: 'block'
    }
  },
  notifIcon: {
    '& i': {
      width: 28,
      height: 28,
      fontSize: 28
    },
    [`&.${classes.dark}`]: {
      '& i': {
        color: theme.palette.text.primary
      }
    },
    [`&.${classes.light}`]: {
      '& i': {
        color: theme.palette.common.white
      }
    }
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px 20px 5px',
    height: 64,
    position: 'absolute',
    width: '100%',
    fontSize: 16,
    margin: 0,
    fontWeight: 500,
    textDecoration: 'none',
    color: theme.palette.text.primary,
    '& img': {
      marginRight: 10,
      width: 30
    }
  },
  mainMenu: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 0),
    boxShadow: theme.shadows[3],
    position: 'relative',
    transition: 'padding 0.3s ease',
    '& > div': {
      display: 'flex',
      justifyContent: 'center'
    }
  },
  headMenu: {
    fontSize: 12,
    padding: `${theme.spacing(0.5)} ${theme.spacing(1)} ${theme.spacing(0.5)} ${theme.spacing(2)}`,
    minHeight: 'auto',
    margin: `0 ${theme.spacing(0.5)}`,
    lineHeight: '2em',
    color: theme.palette.text.primary
  },
  opened: {
    color: theme.palette.primary.main,
    boxShadow: `inset 0 0 0 1px ${theme.palette.primary.main}`,
    '& svg': {
      fill: theme.palette.primary.main
    }
  },
  rightIcon: {
    marginLeft: theme.spacing(0.5),
    opacity: 0.3
  },
  selected: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.light,
    '&:hover': {
      background: theme.palette.primary.main
    },
    '& svg': {
      fill: theme.palette.primary.light
    },
    [`& .${classes.rightIcon}`]: {
      opacity: 0.7
    }
  },
  paperMenu: {
    overflow: 'auto',
    maxHeight: 500
  },
  popperClose: {
    pointerEvents: 'none',
    zIndex: 2
  },
  title: {
    fontSize: 10,
    textTransform: 'uppercase',
    display: 'block',
    color: theme.palette.secondary.main,
    lineHeight: '28px',
    fontWeight: 'bold',
    background: theme.palette.background.paper,
    borderRadius: theme.rounded.medium
  },
  dropDownMenu: {
    minWidth: 300,
    marginTop: theme.spacing(1.5),
    position: 'relative'
  },
  active: {},
  menuItem: {
    '& span': {
      fontSize: 14
    },
    [`&.${classes.active}`]: {
      borderLeft: `5px solid ${theme.palette.primary.main}`,
      backgroundColor: theme.palette.mode === 'dark' ? (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.alpha)(theme.palette.secondary.main, 0.24) : theme.palette.secondary.light,
      '& span': {
        color: theme.palette.primary.main
      },
      '&:hover': {
        backgroundColor: theme.palette.mode === 'dark' ? (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.alpha)(theme.palette.secondary.main, 0.24) : theme.palette.secondary.light
      }
    }
  },
  megaMenu: {
    [`& .${classes.title}`]: {
      paddingLeft: theme.spacing(2)
    }
  },
  megaItem: {
    display: 'inline-block',
    width: 'auto',
    margin: theme.spacing(1),
    borderRadius: theme.rounded.big,
    padding: `${theme.spacing(0.25)} ${theme.spacing(1)}`,
    '& span': {
      fontSize: 14
    },
    '& div': {
      padding: 0
    },
    [`&.${classes.active}`]: {
      border: `1px solid ${theme.palette.primary.main}`,
      backgroundColor: theme.palette.mode === 'dark' ? (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.alpha)(theme.palette.secondary.main, 0.24) : theme.palette.secondary.light,
      '& span': {
        color: theme.palette.primary.main
      },
      '&:hover': {
        backgroundColor: theme.palette.mode === 'dark' ? (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.alpha)(theme.palette.secondary.main, 0.24) : theme.palette.secondary.light
      }
    }
  },
  bigIcon: {
    display: 'block',
    marginTop: 40,
    '& i': {
      fontSize: 100,
      color: theme.palette.primary.main,
      margin: '0 auto',
      display: 'inherit'
    }
  },
  button: {},
  headerProperties: {
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    zIndex: 1
  },
  fadeOut: {},
  invert: {},
  headerAction: {
    margin: `0 ${theme.spacing(3)}`,
    transition: 'opacity 0.5s ease',
    [`& .${classes.button}`]: {
      margin: `0 ${theme.spacing(1)} / 2`,
      '& i': {
        color: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.alpha)(theme.palette.common.white, 0.87),
        width: 28,
        height: 28,
        fontSize: 28
      }
    },
    [`&.${classes.fadeOut}`]: {
      opacity: 0
    },
    [`&.${classes.invert}`]: {
      [`& .${classes.button}`]: {
        '& i': {
          color: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.alpha)(theme.palette.text.primary, 0.5)
        }
      }
    }
  },
  show: {},
  headerTitle: {
    transition: 'all 0.3s ease',
    fontSize: theme.spacing(3),
    position: 'absolute',
    textTransform: 'capitalize',
    fontWeight: 700,
    top: 60,
    color: theme.palette.common.white,
    opacity: 0,
    [`&.${classes.show}`]: {
      top: theme.spacing(1),
      opacity: 0.87
    }
  },
  swipeDrawerPaper: {
    width: drawerWidth
  },
  searchHeaderMenu: {
    flex: 1,
    flexDirection: 'row-reverse',
    display: 'flex',
    alignItems: 'center'
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStyles);

/***/ }),

/***/ "./app/components/Loading/index.js":
/*!*****************************************!*\
  !*** ./app/components/Loading/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tss-react/mui */ "./node_modules/tss-react/esm/mui.js");
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/CircularProgress */ "./node_modules/@mui/material/node/CircularProgress/index.js");
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_2__);



const useStyles = (0,tss_react_mui__WEBPACK_IMPORTED_MODULE_1__.makeStyles)()(() => ({
  circularProgress: {
    position: 'fixed',
    top: 'calc(50% - 45px)',
    left: 'calc(50% - 45px)'
  }
}));

function Loading() {
  const {
    classes
  } = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_2___default()), {
    className: classes.circularProgress,
    size: 90,
    thickness: 1,
    color: "secondary"
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loading);

/***/ }),

/***/ "./app/components/Notification/Notification.js":
/*!*****************************************************!*\
  !*** ./app/components/Notification/Notification.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tss-react/mui */ "./node_modules/tss-react/esm/mui.js");
/* harmony import */ var _mui_material_Snackbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Snackbar */ "./node_modules/@mui/material/node/Snackbar/index.js");
/* harmony import */ var _mui_material_Snackbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Snackbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/IconButton */ "./node_modules/@mui/material/node/IconButton/index.js");
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");






const useStyles = (0,tss_react_mui__WEBPACK_IMPORTED_MODULE_2__.makeStyles)()(theme => ({
  close: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    padding: 0
  }
}));

function Notification(props) {
  const {
    classes
  } = useStyles();

  const handleClose = (event, reason) => {
    const {
      close
    } = props;

    if (reason === 'clickaway') {
      return;
    }

    close('crudTableDemo');
  };

  const {
    message
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Snackbar__WEBPACK_IMPORTED_MODULE_3___default()), {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left'
    },
    open: message !== '',
    autoHideDuration: 3000,
    onClose: () => handleClose(),
    ContentProps: {
      'aria-describedby': 'message-id'
    },
    message: message,
    action: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4___default()), {
      key: "close",
      "aria-label": "Close",
      color: "inherit",
      className: classes.close,
      onClick: () => handleClose(),
      size: "large"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_5__["default"], null))]
  });
}

Notification.propTypes = {
  close: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  message: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Notification);

/***/ }),

/***/ "./app/components/PapperBlock/PapperBlock.js":
/*!***************************************************!*\
  !*** ./app/components/PapperBlock/PapperBlock.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Paper */ "./node_modules/@mui/material/node/Paper/index.js");
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/node/Typography/index.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _papperStyle_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./papperStyle-jss */ "./app/components/PapperBlock/papperStyle-jss.js");






function PapperBlock(props) {
  const {
    classes,
    cx
  } = (0,_papperStyle_jss__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    title,
    desc,
    children,
    whiteBg,
    noMargin,
    colorMode,
    overflowX,
    icon
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Paper__WEBPACK_IMPORTED_MODULE_3___default()), {
    className: cx(classes.root, noMargin && classes.noMargin, colorMode && classes.colorMode),
    elevation: 0
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classes.descBlock
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: classes.iconTitle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: icon
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classes.titleText
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
    variant: "h6",
    component: "h2",
    className: classes.title
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
    component: "p",
    className: classes.description
  }, desc))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: cx(classes.content, whiteBg && classes.whiteBg, overflowX && classes.overflowX)
  }, children)));
}

PapperBlock.propTypes = {
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  desc: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  icon: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node.isRequired),
  whiteBg: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  colorMode: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  noMargin: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  overflowX: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
PapperBlock.defaultProps = {
  whiteBg: false,
  noMargin: false,
  colorMode: false,
  overflowX: false,
  icon: 'ion-ios-bookmark-outline'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PapperBlock);

/***/ }),

/***/ "./app/components/PapperBlock/papperStyle-jss.js":
/*!*******************************************************!*\
  !*** ./app/components/PapperBlock/papperStyle-jss.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tss-react/mui */ "./node_modules/tss-react/esm/mui.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/node/styles/index.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);


const useStyles = (0,tss_react_mui__WEBPACK_IMPORTED_MODULE_0__.makeStyles)()((theme, _params, classes) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    marginBottom: theme.spacing(3),
    boxShadow: theme.shade.light,
    color: theme.palette.text.primary,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3)
    },
    [`&.${classes.noMargin}`]: {
      margin: 0
    }
  },
  descBlock: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(3)
    }
  },
  titleText: {
    flex: 1
  },
  title: {
    position: 'relative',
    textTransform: 'capitalize',
    fontSize: 24,
    fontWeight: 400,
    color: theme.palette.mode === 'dark' ? theme.palette.primary.main : theme.palette.primary.dark,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      fontWeight: 600,
      marginBottom: theme.spacing(1)
    }
  },
  description: {
    maxWidth: 960,
    paddingTop: theme.spacing(0.5),
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
  },
  content: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(1),
    borderRadius: theme.rounded.medium,
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(2)
    }
  },
  whiteBg: {
    backgroundColor: 'transparent',
    margin: 0,
    padding: 0
  },
  noMargin: {},
  colorMode: {
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main,
    [`& .${classes.title}`]: {
      color: theme.palette.grey[100],
      '&:after': {
        borderBottom: `5px solid ${theme.palette.primary.light}`
      }
    },
    [`& .${classes.description}`]: {
      color: theme.palette.grey[100]
    }
  },
  overflowX: {
    width: '100%',
    overflowX: 'auto'
  },
  iconTitle: {
    borderRadius: theme.rounded.small,
    border: theme.palette.mode === 'dark' ? 'none' : `1px solid ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.lighten)(theme.palette.primary.dark, 0.9)}`,
    boxShadow: `0 2px 15px -5px ${theme.palette.primary.main}`,
    background: theme.palette.mode === 'dark' ? theme.palette.primary.main : (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.lighten)(theme.palette.primary.light, 0.5),
    width: 48,
    height: 48,
    textAlign: 'center',
    lineHeight: '44px',
    verticalAlign: 'middle',
    marginRight: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    '& i': {
      fontSize: 28,
      verticalAlign: 'baseline',
      color: theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.primary.main
    }
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStyles);

/***/ }),

/***/ "./app/components/Search/SearchUi.js":
/*!*******************************************!*\
  !*** ./app/components/Search/SearchUi.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_autosuggest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-autosuggest */ "./node_modules/react-autosuggest/dist/index.js");
/* harmony import */ var react_autosuggest__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_autosuggest__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var autosuggest_highlight_match__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! autosuggest-highlight/match */ "./node_modules/autosuggest-highlight/match/index.js");
/* harmony import */ var autosuggest_highlight_match__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(autosuggest_highlight_match__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var autosuggest_highlight_parse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! autosuggest-highlight/parse */ "./node_modules/autosuggest-highlight/parse/index.js");
/* harmony import */ var autosuggest_highlight_parse__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(autosuggest_highlight_parse__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/TextField */ "./node_modules/@mui/material/node/TextField/index.js");
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Paper */ "./node_modules/@mui/material/node/Paper/index.js");
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/MenuItem */ "./node_modules/@mui/material/node/MenuItem/index.js");
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var dan_api_ui_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dan-api/ui/menu */ "./app/api/ui/menu.js");
/* harmony import */ var dan_api_ui_menu__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dan_api_ui_menu__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_permissions_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/permissions.js */ "./app/utils/permissions.js");
/* harmony import */ var _search_jss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search-jss */ "./app/components/Search/search-jss.js");













function renderInput(inputProps) {
  const {
    ref,
    ...rest
  } = inputProps;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_9___default()), {
    variant: "standard",
    className: "input-header",
    fullWidth: true,
    InputProps: {
      inputRef: ref,
      ...rest
    }
  });
}

function renderSuggestion(suggestion, _ref) {
  let {
    query,
    isHighlighted
  } = _ref;
  const matches = autosuggest_highlight_match__WEBPACK_IMPORTED_MODULE_4___default()(suggestion.name, query);
  const parts = autosuggest_highlight_parse__WEBPACK_IMPORTED_MODULE_5___default()(suggestion.name, matches);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_10___default()), {
    selected: isHighlighted,
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_3__.NavLink,
    to: suggestion.link
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, parts.map((part, index) => part.highlight ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    key: String(index),
    style: {
      fontWeight: 700
    }
  }, part.text) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", {
    key: String(index),
    style: {
      fontWeight: 300
    }
  }, part.text))));
}

function renderSuggestionsContainer(options) {
  const {
    containerProps,
    children
  } = options;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Paper__WEBPACK_IMPORTED_MODULE_11___default()), containerProps, children);
}

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function SearchUi(props) {
  const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [suggestions, setSuggestions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [menu, setMenu] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    classes
  } = (0,_search_jss__WEBPACK_IMPORTED_MODULE_8__["default"])();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const permissions = (0,_utils_permissions_js__WEBPACK_IMPORTED_MODULE_7__.getStoredPermissions)();
    const filteredMenu = (0,_utils_permissions_js__WEBPACK_IMPORTED_MODULE_7__.filterMenuByPermissions)((dan_api_ui_menu__WEBPACK_IMPORTED_MODULE_6___default()), permissions);
    const flattened = [];
    filteredMenu.forEach(item => {
      if (item.child) {
        item.child.forEach(itemChild => {
          if (itemChild.link) {
            flattened.push(itemChild);
          }
        });
      }
    });
    setMenu(flattened);
  }, []);

  const getSuggestions = textValue => {
    const inputValue = textValue.trim().toLowerCase();
    const inputLength = inputValue.length;
    let count = 0;
    return inputLength === 0 ? [] : menu.filter(suggestion => {
      const keep = (!inputValue || suggestion.name.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1) && count < 5;

      if (keep) {
        count += 1;
      }

      return keep;
    });
  };

  const handleSuggestionsFetchRequested = e => {
    setSuggestions(getSuggestions(e.value));
  };

  const handleSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const handleChange = (event, _ref2) => {
    let {
      newValue
    } = _ref2;
    setValue(newValue);
  };

  const handleSuggestionSelected = (event, _ref3) => {
    let {
      suggestion,
      method
    } = _ref3;
    const {
      history
    } = props;

    if (method === 'enter') {
      history.push(suggestion.link);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_autosuggest__WEBPACK_IMPORTED_MODULE_2___default()), {
    theme: {
      container: classes.containerSearch,
      suggestionsContainerOpen: classes.suggestionsContainerOpen,
      suggestionsList: classes.suggestionsList,
      suggestion: classes.suggestion
    },
    renderInputComponent: renderInput,
    suggestions: suggestions,
    onSuggestionsFetchRequested: e => handleSuggestionsFetchRequested(e),
    onSuggestionsClearRequested: handleSuggestionsClearRequested,
    renderSuggestionsContainer: renderSuggestionsContainer,
    getSuggestionValue: getSuggestionValue,
    onSuggestionSelected: handleSuggestionSelected,
    renderSuggestion: renderSuggestion,
    className: classes.autocomplete,
    inputProps: {
      placeholder: 'Search UI',
      value,
      onChange: handleChange
    }
  });
}

SearchUi.propTypes = {
  history: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchUi);

/***/ }),

/***/ "./app/components/Search/search-jss.js":
/*!*********************************************!*\
  !*** ./app/components/Search/search-jss.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tss-react/mui */ "./node_modules/tss-react/esm/mui.js");

const useStyles = (0,tss_react_mui__WEBPACK_IMPORTED_MODULE_0__.makeStyles)()(theme => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(2, 0, 4),
    borderRadius: 40,
    overflow: 'hidden',
    boxShadow: theme.shadows[5]
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  wrapper: {
    fontFamily: theme.typography.fontFamily,
    position: 'relative',
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(1),
    borderRadius: 2,
    display: 'block',
    color: theme.palette.text.secondary,
    '& svg': {
      fill: theme.palette.text.secondary
    }
  },
  cart: {
    '& svg': {
      fill: theme.palette.text.secondary
    }
  },
  search: {
    width: 'auto',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    font: 'inherit',
    padding: `${theme.spacing(1)} ${theme.spacing(1)} ${theme.spacing(1)} ${theme.spacing(4)}`,
    border: 0,
    display: 'block',
    verticalAlign: 'middle',
    whiteSpace: 'normal',
    background: 'none',
    margin: 0,
    // Reset for Safari
    color: 'inherit',
    width: '100%',
    '&:focus': {
      outline: 0
    }
  },
  toggleContainer: {
    height: 56,
    padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: `${theme.spacing(1)} 0`
  },
  containerSearch: {
    flexGrow: 1,
    position: 'relative',
    color: theme.palette.text.primary,
    '& [class*="input-header"]': {
      font: 'inherit',
      padding: `${theme.spacing(1)} ${theme.spacing(1)} ${theme.spacing(1)} ${theme.spacing(9)}`,
      border: 0,
      display: 'block',
      verticalAlign: 'middle',
      whiteSpace: 'normal',
      background: 'none',
      margin: 0,
      // Reset for Safari
      color: 'inherit',
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      },
      '& > div': {
        border: 'none',
        '&:after': {
          display: 'none'
        }
      },
      '& input': {
        transition: theme.transitions.create('width'),
        padding: 0,
        color: theme.palette.common.white,
        width: 100,
        '&:focus': {
          width: 250,
          textIndent: 0,
          outline: 0
        }
      },
      '& ::-webkit-input-placeholder': {
        /* Chrome/Opera/Safari */
        color: 'rgba(255,255,255,1)'
      },
      '& ::-moz-placeholder': {
        /* Firefox 19+ */
        color: 'rgba(255,255,255,1)'
      },
      '& :-ms-input-placeholder': {
        /* IE 10+ */
        color: 'rgba(255,255,255,1)'
      },
      '& :-moz-placeholder': {
        /* Firefox 18- */
        color: 'rgba(255,255,255,1)'
      }
    }
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0,
    overflow: 'hidden'
  },
  suggestion: {
    display: 'block'
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none'
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStyles);

/***/ }),

/***/ "./app/components/Sidebar/MainMenu.js":
/*!********************************************!*\
  !*** ./app/components/Sidebar/MainMenu.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/lib/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/node/List/index.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_List__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/node/Box/index.js");
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/ListItem */ "./node_modules/@mui/material/node/ListItem/index.js");
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/ListItemIcon */ "./node_modules/@mui/material/node/ListItemIcon/index.js");
/* harmony import */ var _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/ListItemText */ "./node_modules/@mui/material/node/ListItemText/index.js");
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_ListSubheader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/ListSubheader */ "./node_modules/@mui/material/node/ListSubheader/index.js");
/* harmony import */ var _mui_material_ListSubheader__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListSubheader__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_material_Collapse__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Collapse */ "./node_modules/@mui/material/node/Collapse/index.js");
/* harmony import */ var _mui_material_Collapse__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Collapse__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_Chip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material/Chip */ "./node_modules/@mui/material/node/Chip/index.js");
/* harmony import */ var _mui_material_Chip__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _mui_icons_material_ExpandLess__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/ExpandLess */ "./node_modules/@mui/icons-material/ExpandLess.js");
/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/ExpandMore */ "./node_modules/@mui/icons-material/ExpandMore.js");
/* harmony import */ var _sidebar_jss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar-jss */ "./app/components/Sidebar/sidebar-jss.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

















const LinkBtn = react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function LinkBtn(props, ref) {
  // eslint-disable-line
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, _extends({
    to: props.to
  }, props, {
    innerRef: ref
  })); // eslint-disable-line
}); // eslint-disable-next-line

function MainMenu(props) {
  const {
    classes,
    cx
  } = (0,_sidebar_jss__WEBPACK_IMPORTED_MODULE_5__["default"])();

  const handleClick = () => {
    const {
      toggleDrawerOpen,
      loadTransition
    } = props;
    toggleDrawerOpen();
    loadTransition(false);
  };

  const {
    openSubMenu,
    open,
    dataMenu
  } = props;

  const getMenus = (menuArray, paddingLevel) => menuArray.map((item, index) => {
    if (item.child || item.linkParent) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        key: index.toString()
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_6___default()), {
        button: true,
        component: LinkBtn,
        to: item.linkParent ? item.linkParent : '#',
        sx: {
          marginLeft: !item.icon ? paddingLevel : 0
        },
        className: cx(classes.head, item.icon ? classes.iconed : '', open.indexOf(item.key) > -1 ? classes.opened : ''),
        onClick: () => openSubMenu(item.key, item.keyParent)
      }, item.icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_7___default()), {
        className: classes.icon
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
        className: item.icon
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_8___default()), {
        classes: {
          primary: classes.primary
        },
        variant: "inset",
        primary: item.name
      }), !item.linkParent && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, open.indexOf(item.key) > -1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ExpandLess__WEBPACK_IMPORTED_MODULE_9__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_10__["default"], null))), !item.linkParent && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Collapse__WEBPACK_IMPORTED_MODULE_11___default()), {
        component: "div",
        className: cx(classes.nolist, item.keyParent ? classes.child : ''),
        in: open.indexOf(item.key) > -1,
        timeout: "auto",
        unmountOnExit: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_List__WEBPACK_IMPORTED_MODULE_12___default()), {
        className: classes.dense,
        component: "nav"
      }, getMenus(item.child, item.level))));
    }

    if (item.title) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_ListSubheader__WEBPACK_IMPORTED_MODULE_13___default()), {
        disableSticky: true,
        key: index.toString(),
        component: "div",
        className: classes.title
      }, item.name);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_6___default()), {
      key: index.toString(),
      button: true,
      exact: true,
      sx: {
        pl: paddingLevel
      },
      className: classes.nested,
      activeClassName: classes.active,
      component: LinkBtn,
      to: item.link,
      onClick: () => handleClick()
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_14__["default"], {
      sx: {
        flex: 1,
        pl: paddingLevel,
        display: 'flex',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_8___default()), {
      classes: {
        primary: classes.primary
      },
      inset: true,
      primary: item.name
    }), item.badge && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Chip__WEBPACK_IMPORTED_MODULE_15___default()), {
      color: "primary",
      label: item.badge,
      className: classes.badge
    })));
  });

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, getMenus(dataMenu));
}

MainMenu.propTypes = {
  open: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired),
  openSubMenu: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  toggleDrawerOpen: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  loadTransition: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  dataMenu: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired)
};

const openAction = (key, keyParent) => ({
  type: 'OPEN_SUBMENU',
  key,
  keyParent
});

const mapStateToProps = state => ({
  open: state.ui.subMenuOpen
});

const mapDispatchToProps = dispatch => ({
  openSubMenu: (0,redux__WEBPACK_IMPORTED_MODULE_2__.bindActionCreators)(openAction, dispatch)
});

const MainMenuMapped = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, mapDispatchToProps)(MainMenu);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainMenuMapped);

/***/ }),

/***/ "./app/components/Sidebar/SidebarContent.js":
/*!**************************************************!*\
  !*** ./app/components/Sidebar/SidebarContent.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/node/Button/index.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Menu */ "./node_modules/@mui/material/node/Menu/index.js");
/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Menu__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/MenuItem */ "./node_modules/@mui/material/node/MenuItem/index.js");
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Avatar */ "./node_modules/@mui/material/node/Avatar/index.js");
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var dan_api_dummy_brand__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dan-api/dummy/brand */ "./app/api/dummy/brand.js");
/* harmony import */ var dan_api_dummy_brand__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dan_api_dummy_brand__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dan_api_dummy_dummyContents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dan-api/dummy/dummyContents */ "./app/api/dummy/dummyContents.js");
/* harmony import */ var dan_images_logo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dan-images/logo.png */ "./public/images/logo.png");
/* harmony import */ var _MainMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MainMenu */ "./app/components/Sidebar/MainMenu.js");
/* harmony import */ var _sidebar_jss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidebar-jss */ "./app/components/Sidebar/sidebar-jss.js");













function SidebarContent(props) {
  const {
    classes,
    cx
  } = (0,_sidebar_jss__WEBPACK_IMPORTED_MODULE_7__["default"])();
  const [transform, setTransform] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);

  const handleScroll = event => {
    const scroll = event.target.scrollTop;
    setTransform(scroll);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const mainContent = document.getElementById('sidebar');
    mainContent.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const {
    turnDarker,
    drawerPaper,
    toggleDrawerOpen,
    loadTransition,
    leftSidebar,
    dataMenu,
    status,
    anchorEl,
    openMenuStatus,
    closeMenuStatus,
    changeStatus,
    isLogin
  } = props;

  const setStatus = st => {
    switch (st) {
      case 'online':
        return classes.online;

      case 'idle':
        return classes.idle;

      case 'bussy':
        return classes.bussy;

      default:
        return classes.offline;
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: cx(classes.drawerInner, !drawerPaper ? classes.drawerPaperClose : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classes.drawerHeader
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
    to: "/app",
    className: cx(classes.brand, classes.brandBar, turnDarker && classes.darker)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: dan_images_logo_png__WEBPACK_IMPORTED_MODULE_5__["default"],
    alt: (dan_api_dummy_brand__WEBPACK_IMPORTED_MODULE_3___default().name)
  }), (dan_api_dummy_brand__WEBPACK_IMPORTED_MODULE_3___default().name)), isLogin && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: cx(classes.profile, classes.user),
    style: {
      opacity: 1 - transform / 100,
      marginTop: transform * -0.3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_8___default()), {
    alt: dan_api_dummy_dummyContents__WEBPACK_IMPORTED_MODULE_4__["default"].user.name,
    src: dan_api_dummy_dummyContents__WEBPACK_IMPORTED_MODULE_4__["default"].user.avatar,
    className: cx(classes.avatar, classes.bigAvatar)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, dan_api_dummy_dummyContents__WEBPACK_IMPORTED_MODULE_4__["default"].user.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Button__WEBPACK_IMPORTED_MODULE_9___default()), {
    size: "small",
    onClick: openMenuStatus
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: cx(classes.dotStatus, setStatus(status))
  }), status), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Menu__WEBPACK_IMPORTED_MODULE_10___default()), {
    id: "status-menu",
    anchorEl: anchorEl,
    open: Boolean(anchorEl),
    onClose: closeMenuStatus,
    className: classes.statusMenu
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_11___default()), {
    onClick: () => changeStatus('online')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: cx(classes.dotStatus, classes.online)
  }), "Online"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_11___default()), {
    onClick: () => changeStatus('idle')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: cx(classes.dotStatus, classes.idle)
  }), "Idle"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_11___default()), {
    onClick: () => changeStatus('bussy')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: cx(classes.dotStatus, classes.bussy)
  }), "Bussy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_11___default()), {
    onClick: () => changeStatus('offline')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: cx(classes.dotStatus, classes.offline)
  }), "Offline"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "sidebar",
    className: cx(classes.menuContainer, leftSidebar && classes.rounded, isLogin && classes.withProfile)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MainMenu__WEBPACK_IMPORTED_MODULE_6__["default"], {
    loadTransition: loadTransition,
    dataMenu: dataMenu,
    toggleDrawerOpen: toggleDrawerOpen
  })));
}

SidebarContent.propTypes = {
  drawerPaper: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired),
  turnDarker: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  toggleDrawerOpen: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  loadTransition: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  leftSidebar: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired),
  dataMenu: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired),
  status: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  anchorEl: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  openMenuStatus: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  closeMenuStatus: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  changeStatus: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  isLogin: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
SidebarContent.defaultProps = {
  turnDarker: false,
  toggleDrawerOpen: () => {},
  loadTransition: () => {},
  anchorEl: null,
  isLogin: true
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SidebarContent);

/***/ }),

/***/ "./app/components/Sidebar/index.js":
/*!*****************************************!*\
  !*** ./app/components/Sidebar/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/useMediaQuery */ "./node_modules/@mui/material/node/useMediaQuery/index.js");
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Drawer */ "./node_modules/@mui/material/node/Drawer/index.js");
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_SwipeableDrawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/SwipeableDrawer */ "./node_modules/@mui/material/node/SwipeableDrawer/index.js");
/* harmony import */ var dan_api_dummy_dummyContents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dan-api/dummy/dummyContents */ "./app/api/dummy/dummyContents.js");
/* harmony import */ var _sidebar_jss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar-jss */ "./app/components/Sidebar/sidebar-jss.js");
/* harmony import */ var _SidebarContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SidebarContent */ "./app/components/Sidebar/SidebarContent.js");









function Sidebar(props) {
  const {
    classes,
    cx
  } = (0,_sidebar_jss__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(dan_api_dummy_dummyContents__WEBPACK_IMPORTED_MODULE_2__["default"].user.status);
  const [anchorEl, setAnchorEl] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [turnDarker, setTurnDarker] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false); // Initial header style

  let flagDarker = false;

  const handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const newFlagDarker = scroll > 30;

    if (flagDarker !== newFlagDarker) {
      setTurnDarker(newFlagDarker);
      flagDarker = newFlagDarker;
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeStatus = st => {
    setStatus(st);
    handleClose();
  };

  const {
    open,
    toggleDrawerOpen,
    loadTransition,
    leftSidebar,
    dataMenu
  } = props;
  const lgDown = (0,_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__["default"])(theme => theme.breakpoints.down('lg'));
  const lgUp = (0,_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__["default"])(theme => theme.breakpoints.up('lg'));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, !lgUp && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_SwipeableDrawer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClose: toggleDrawerOpen,
    onOpen: toggleDrawerOpen,
    open: !open,
    anchor: leftSidebar ? 'left' : 'right'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classes.swipeDrawerPaper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SidebarContent__WEBPACK_IMPORTED_MODULE_4__["default"], {
    drawerPaper: true,
    leftSidebar: leftSidebar,
    toggleDrawerOpen: toggleDrawerOpen,
    loadTransition: loadTransition,
    dataMenu: dataMenu,
    status: status,
    anchorEl: anchorEl,
    openMenuStatus: handleOpen,
    closeMenuStatus: handleClose,
    changeStatus: handleChangeStatus
  }))), !lgDown && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_7___default()), {
    variant: "permanent",
    onClose: toggleDrawerOpen,
    className: open ? classes.drawer : '',
    classes: {
      paper: cx(classes.drawer, classes.drawerPaper, !open ? classes.drawerPaperClose : '')
    },
    open: open,
    anchor: leftSidebar ? 'left' : 'right'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SidebarContent__WEBPACK_IMPORTED_MODULE_4__["default"], {
    drawerPaper: open,
    leftSidebar: leftSidebar,
    turnDarker: turnDarker,
    loadTransition: loadTransition,
    dataMenu: dataMenu,
    status: status,
    anchorEl: anchorEl,
    openMenuStatus: handleOpen,
    closeMenuStatus: handleClose,
    changeStatus: handleChangeStatus
  })));
}

Sidebar.propTypes = {
  toggleDrawerOpen: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  loadTransition: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  open: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired),
  leftSidebar: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  dataMenu: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired)
};
Sidebar.defaultProps = {
  leftSidebar: true
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);

/***/ }),

/***/ "./app/components/Sidebar/sidebar-jss.js":
/*!***********************************************!*\
  !*** ./app/components/Sidebar/sidebar-jss.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tss-react/mui */ "./node_modules/tss-react/esm/mui.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/node/styles/index.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/colors */ "./node_modules/@mui/material/node/colors/index.js");



const drawerWidth = 240;
const useStyles = (0,tss_react_mui__WEBPACK_IMPORTED_MODULE_0__.makeStyles)()((theme, _params, classes) => ({
  user: {
    justifyContent: 'center'
  },
  drawer: {
    width: drawerWidth
  },
  drawerPaper: {
    position: 'relative',
    height: '100%',
    overflow: 'hidden',
    border: 'none',
    background: 'none',
    color: theme.palette.text.primary,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  swipeDrawerPaper: {
    width: drawerWidth
  },
  opened: {
    [`& .${classes.primary}, & .${classes.icon}`]: {
      color: theme.palette.primary.main
    }
  },
  drawerPaperClose: {
    width: theme.spacing(8),
    overflowX: 'hidden',
    background: theme.palette.background.paper,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    [`& .${classes.user}`]: {
      justifyContent: 'flex-start'
    },
    [`& .${classes.bigAvatar}`]: {
      width: 40,
      height: 40
    },
    '& nav': {
      display: 'none'
    },
    '&:hover': {
      width: drawerWidth,
      boxShadow: theme.shadows[6],
      '& nav': {
        display: 'block'
      }
    },
    [`& .${classes.brand}`]: {
      display: 'none'
    },
    [`& .${classes.profile}`]: {
      flexDirection: 'row',
      top: theme.spacing(6),
      padding: theme.spacing(0.5),
      textAlign: 'left',
      '& button': {
        width: 'auto'
      }
    },
    [`& .${classes.avatar}`]: {
      marginRight: theme.spacing(3)
    },
    [`& .${classes.menuContainer}`]: {
      [`&.${classes.menuContainer}`]: {
        paddingTop: theme.spacing(10),
        paddingBottom: 0
      }
    }
  },
  drawerInner: {
    // Make the items inside not wrap when transitioning:
    height: '100%',
    position: 'fixed',
    backgroundColor: theme.palette.mode === 'dark' ? (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.alpha)(theme.palette.background.paper, 0.75) : (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.alpha)(theme.palette.background.paper, 0.9),
    boxShadow: theme.shade.light,
    backdropFilter: 'saturate(180%) blur(20px)'
  },
  drawerInnerMobile: {
    // Make the items inside not wrap when transitioning:
    height: '100%',
    backgroundColor: theme.palette.mode === 'dark' ? (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.alpha)(theme.palette.background.paper, 0.75) : (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.alpha)(theme.palette.background.paper, 0.95)
  },
  drawerHeader: {
    padding: '0',
    zIndex: 1,
    position: 'relative',
    ...theme.mixins.toolbar
  },
  avatar: {
    margin: 10
  },
  bigAvatar: {
    width: 80,
    height: 80,
    boxShadow: theme.glow.light
  },
  brandBar: {
    transition: theme.transitions.create(['width', 'margin', 'background'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    '&:after': {
      transition: theme.transitions.create(['box-shadow'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    }
  },
  darker: {
    background: 'none'
  },
  nested: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    margin: `${theme.spacing(0.5)} 0`,
    paddingLeft: 0
  },
  title: {
    fontSize: 10,
    textTransform: 'uppercase',
    paddingLeft: theme.spacing(7),
    marginTop: theme.spacing(3),
    display: 'block',
    color: theme.palette.secondary.main,
    lineHeight: '28px',
    fontWeight: 'bold'
  },
  dense: {
    [`& > .${classes.title}:first-of-type`]: {
      margin: '0'
    },
    [`& .${classes.head}`]: {
      paddingLeft: theme.spacing(7)
    }
  },
  active: {
    backgroundColor: theme.palette.mode === 'dark' ? (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.alpha)(theme.palette.primary.main, 0.24) + ' !important' : (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.alpha)(theme.palette.primary.main, 0.3) + ' !important',
    [`& .${classes.primary}`]: {
      color: theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.primary.dark
    },
    [`& .${classes.icon}`]: {
      color: theme.palette.primary.dark
    },
    '&:hover, &:focus': {
      backgroundColor: theme.palette.mode === 'dark' ? (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.alpha)(theme.palette.primary.main, 0.24) : (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.alpha)(theme.palette.primary.main, 0.3)
    }
  },
  nolist: {
    listStyle: 'none'
  },
  primary: {
    whiteSpace: 'nowrap'
  },
  icon: {
    minWidth: theme.spacing(4),
    fontSize: 24
  },
  iconed: {
    [`&.${classes.opened}`]: {
      '&:before': {
        content: '""',
        position: 'absolute',
        width: 5,
        height: theme.spacing(6),
        top: 0,
        left: 0,
        background: theme.palette.primary.main
      }
    }
  },
  head: {
    padding: '6px 0',
    borderRadius: `0 ${theme.spacing(3)} ${theme.spacing(3)} 0`,
    paddingLeft: theme.spacing(3),
    [`&.${classes.iconed}`]: {
      paddingLeft: theme.spacing(3)
    },
    '& svg[class^="MuiSvgIcon"]': {
      left: -10,
      position: 'relative'
    }
  },
  headCapital: {
    padding: `${theme.spacing(1)} 0 ${theme.spacing(1)} ${theme.spacing(9)}`,
    left: theme.spacing(1) * -2,
    position: 'relative',
    textTransform: 'uppercase',
    borderRadius: `0 ${theme.spacing(3)} ${theme.spacing(3)} 0`,
    margin: theme.spacing(1),
    '& span': {
      fontSize: 14
    }
  },
  copyright: {
    color: theme.palette.text.secondary,
    background: theme.palette.background.paper,
    padding: theme.spacing(2),
    position: 'fixed',
    [theme.breakpoints.up('lg')]: {
      background: 'none',
      position: 'absolute'
    },
    left: theme.spacing(3),
    lineHeight: '24px'
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px 10px 5px',
    height: 64,
    position: 'relative',
    textDecoration: 'none',
    fontSize: 16,
    margin: 0,
    fontWeight: 500,
    color: theme.palette.text.primary,
    '& img': {
      width: 30,
      marginRight: 10
    }
  },
  brandBig: {
    paddingTop: theme.spacing(4),
    position: 'relative',
    textAlign: 'center',
    '& img': {
      width: 68
    },
    '& h3': {
      fontSize: 18,
      marginTop: theme.spacing(2),
      fontWeight: 500,
      color: theme.palette.text.primary
    }
  },
  profile: {
    height: 120,
    width: '100%',
    display: 'flex',
    fontSize: 14,
    padding: 10,
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    position: 'absolute',
    margin: `${theme.spacing(2)} 0`,
    zIndex: 0,
    '& h4': {
      fontSize: 18,
      marginBottom: 0,
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      width: 110
    },
    '& button': {
      color: theme.palette.text.primary,
      fontSize: 12,
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      width: 110,
      display: 'block',
      overflow: 'hidden',
      textTransform: 'capitalize',
      padding: 0,
      minHeight: 20,
      marginTop: 4
    }
  },
  statusMenu: {
    '& li': {
      width: 100
    }
  },
  dotStatus: {
    width: theme.spacing(1),
    height: theme.spacing(1),
    display: 'inline-block',
    borderRadius: '50%',
    marginRight: theme.spacing(0.5)
  },
  online: {
    backgroundColor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_2__.lightGreen[500]
  },
  bussy: {
    backgroundColor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_2__.red[500]
  },
  idle: {
    backgroundColor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_2__.amber[500]
  },
  offline: {
    backgroundColor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_2__.grey[500]
  },
  rounded: {},
  landingNav: {},
  withProfile: {},
  menuContainer: {
    overflow: 'auto',
    height: 'calc(100% - 64px)',
    width: drawerWidth,
    position: 'relative',
    display: 'block',
    padding: `${theme.spacing(5)} 0`,
    [`&.${classes.withProfile}`]: {
      paddingTop: theme.spacing(18)
    },
    [`&.${classes.landingNav}`]: {
      [theme.breakpoints.up('lg')]: {
        paddingTop: theme.spacing(5)
      },
      [theme.breakpoints.down('xl')]: {
        height: 'calc(100% - 164px)',
        paddingTop: theme.spacing(5)
      }
    },
    [`&.${classes.rounded}`]: {
      paddingRight: theme.spacing(1.5),
      '& a': {
        borderRadius: `0 ${theme.spacing(3)} ${theme.spacing(3)} 0`
      }
    },
    '&::-webkit-scrollbar': {
      width: 8
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: 12,
      backgroundColor: 'rgba(0,0,0,0)'
    },
    '&:hover': {
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(0,0,0,0.3)',
        border: '1px solid rgba(255,255,255,0.4)'
      }
    }
  },
  divider: {
    marginTop: theme.spacing(1)
  },
  badge: {
    height: 'auto'
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStyles);

/***/ }),

/***/ "./app/components/SidebarBig/MainMenuBig.js":
/*!**************************************************!*\
  !*** ./app/components/SidebarBig/MainMenuBig.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/lib/redux.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/node/List/index.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_List__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_material_ListSubheader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/ListSubheader */ "./node_modules/@mui/material/node/ListSubheader/index.js");
/* harmony import */ var _mui_material_ListSubheader__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListSubheader__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/ListItem */ "./node_modules/@mui/material/node/ListItem/index.js");
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/ListItemIcon */ "./node_modules/@mui/material/node/ListItemIcon/index.js");
/* harmony import */ var _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/ListItemText */ "./node_modules/@mui/material/node/ListItemText/index.js");
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_material_ButtonBase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/ButtonBase */ "./node_modules/@mui/material/node/ButtonBase/index.js");
/* harmony import */ var _mui_material_ButtonBase__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ButtonBase__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var dan_redux_actions_uiActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dan-redux/actions/uiActions */ "./app/redux/actions/uiActions.js");
/* harmony import */ var _MenuProfile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MenuProfile */ "./app/components/SidebarBig/MenuProfile.js");
/* harmony import */ var _sidebarBig_jss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidebarBig-jss */ "./app/components/SidebarBig/sidebarBig-jss.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }















const LinkBtn = react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function LinkBtn(props, ref) {
  // eslint-disable-line
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.NavLink, _extends({
    to: props.to
  }, props, {
    innerRef: ref
  })); // eslint-disable-line
});

function MainMenuBig(props) {
  const {
    classes,
    cx
  } = (0,_sidebarBig_jss__WEBPACK_IMPORTED_MODULE_7__["default"])();
  const [selectedMenu, setSelectedMenu] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [menuLoaded, setMenuLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const {
    open,
    closeDrawer,
    dataMenu,
    drawerPaper,
    openSubMenu
  } = props;

  const handleLoadMenu = (menu, key) => {
    const {
      openDrawer,
      mobile
    } = props;
    setSelectedMenu(menu);
    setMenuLoaded(false); // unload transition menu

    openSubMenu(key);
    setTimeout(() => {
      setMenuLoaded(true); // load transtion menu
    }, 100); // Unecessary in mobile, because toggle menu is handled already

    if (!mobile) {
      openDrawer();
    }
  };

  const handleLoadSingleMenu = () => {
    setSelectedMenu([]);
    closeDrawer();
  };

  const handleLoadPage = () => {
    const {
      loadTransition,
      toggleDrawerOpen
    } = props;
    toggleDrawerOpen();
    loadTransition(false);
  };

  const currentMenu = dataMenu.filter(item => item.key === open[0]);

  const activeMenu = (key, child) => {
    if (selectedMenu.length < 1) {
      if (open.indexOf(key) > -1) {
        return true;
      }

      return false;
    }

    if (child === selectedMenu) {
      return true;
    }

    return false;
  };

  const getMenus = menuArray => menuArray.map((item, index) => {
    if (item.key === 'menu_levels') {
      return false;
    }

    if (item.child) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_ButtonBase__WEBPACK_IMPORTED_MODULE_8___default()), {
        key: index.toString(),
        focusRipple: true,
        className: cx(classes.menuHead, activeMenu(item.key, item.child) ? classes.active : ''),
        onClick: () => handleLoadMenu(item.child, item.key)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
        className: cx(classes.icon, item.icon)
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: classes.text
      }, item.name));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_ButtonBase__WEBPACK_IMPORTED_MODULE_8___default()), {
      key: index.toString(),
      focusRipple: true,
      className: classes.menuHead,
      component: LinkBtn,
      activeClassName: classes.active,
      to: item.linkParent,
      onClick: () => handleLoadSingleMenu(item.key)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
      className: cx(classes.icon, item.icon)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: classes.text
    }, item.name));
  });

  const getChildMenu = menuArray => menuArray.map((item, index) => {
    if (item.title) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_ListSubheader__WEBPACK_IMPORTED_MODULE_9___default()), {
        key: index.toString(),
        disableSticky: true,
        className: classes.title
      }, item.name);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_10___default()), {
      key: index.toString(),
      button: true,
      exact: true,
      className: classes.item,
      activeClassName: classes.active,
      component: LinkBtn,
      to: item.link,
      onClick: () => handleLoadPage()
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_11___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
      className: cx(classes.icon, item.icon)
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_12___default()), {
      className: classes.text,
      primary: item.name
    }));
  });

  const renderChildMenu = () => {
    if (selectedMenu.length < 1) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_List__WEBPACK_IMPORTED_MODULE_13___default()), {
        dense: true,
        className: classes.fixedWrap
      }, currentMenu.length > 0 ? getChildMenu(currentMenu[0].child) : '');
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_List__WEBPACK_IMPORTED_MODULE_13___default()), {
      dense: true,
      className: cx(classes.fixedWrap, classes.childMenuWrap, menuLoaded && classes.menuLoaded)
    }, getChildMenu(selectedMenu));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("aside", {
    className: classes.bigSidebar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    className: classes.category
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: cx(classes.fixedWrap, !drawerPaper && classes.userShifted)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MenuProfile__WEBPACK_IMPORTED_MODULE_6__["default"], null), getMenus(dataMenu))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    className: cx(classes.listMenu, !drawerPaper && classes.drawerPaperClose)
  }, renderChildMenu()));
}

MainMenuBig.propTypes = {
  open: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired),
  dataMenu: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired),
  openDrawer: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  openSubMenu: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  closeDrawer: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  loadTransition: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  drawerPaper: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired),
  mobile: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  toggleDrawerOpen: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
MainMenuBig.defaultProps = {
  toggleDrawerOpen: () => {},
  mobile: false
};

const openAction = key => ({
  type: 'OPEN_SUBMENU',
  key
});

const mapStateToProps = state => ({
  open: state.ui.subMenuOpen
});

const mapDispatchToProps = dispatch => ({
  openDrawer: () => dispatch(dan_redux_actions_uiActions__WEBPACK_IMPORTED_MODULE_5__.openMenuAction),
  closeDrawer: () => dispatch(dan_redux_actions_uiActions__WEBPACK_IMPORTED_MODULE_5__.closeMenuAction),
  openSubMenu: (0,redux__WEBPACK_IMPORTED_MODULE_4__.bindActionCreators)(openAction, dispatch)
});

const MainMenuBigMapped = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, mapDispatchToProps)(MainMenuBig);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainMenuBigMapped);

/***/ }),

/***/ "./app/components/SidebarBig/MenuProfile.js":
/*!**************************************************!*\
  !*** ./app/components/SidebarBig/MenuProfile.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_ButtonBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/ButtonBase */ "./node_modules/@mui/material/node/ButtonBase/index.js");
/* harmony import */ var _mui_material_ButtonBase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ButtonBase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Menu */ "./node_modules/@mui/material/node/Menu/index.js");
/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Menu__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/MenuItem */ "./node_modules/@mui/material/node/MenuItem/index.js");
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Avatar */ "./node_modules/@mui/material/node/Avatar/index.js");
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var dan_api_dummy_dummyContents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dan-api/dummy/dummyContents */ "./app/api/dummy/dummyContents.js");
/* harmony import */ var _sidebarBig_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebarBig-jss */ "./app/components/SidebarBig/sidebarBig-jss.js");








function MenuProfile() {
  const {
    classes,
    cx
  } = (0,_sidebarBig_jss__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(dan_api_dummy_dummyContents__WEBPACK_IMPORTED_MODULE_1__["default"].user.status);
  const [anchorEl, setAnchorEl] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);

  const handleOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeStatus = st => {
    setStatus(st);
    handleClose();
  };

  const changeStatus = st => {
    switch (st) {
      case 'online':
        return classes.online;

      case 'idle':
        return classes.idle;

      case 'bussy':
        return classes.bussy;

      default:
        return classes.offline;
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_ButtonBase__WEBPACK_IMPORTED_MODULE_3___default()), {
    className: classes.avatarHead,
    onClick: handleOpen
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_4___default()), {
    alt: dan_api_dummy_dummyContents__WEBPACK_IMPORTED_MODULE_1__["default"].user.name,
    src: dan_api_dummy_dummyContents__WEBPACK_IMPORTED_MODULE_1__["default"].user.avatar,
    className: cx(classes.avatar, classes.bigAvatar)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: cx(classes.dotStatus, classes.pinned, changeStatus(status))
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Menu__WEBPACK_IMPORTED_MODULE_5___default()), {
    id: "status-menu",
    anchorEl: anchorEl,
    open: Boolean(anchorEl),
    onClose: handleClose,
    className: classes.statusMenu
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6___default()), {
    className: classes.profile
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_4___default()), {
    alt: dan_api_dummy_dummyContents__WEBPACK_IMPORTED_MODULE_1__["default"].user.name,
    src: dan_api_dummy_dummyContents__WEBPACK_IMPORTED_MODULE_1__["default"].user.avatar,
    className: cx(classes.avatar, classes.bigAvatar)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classes.name
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, dan_api_dummy_dummyContents__WEBPACK_IMPORTED_MODULE_1__["default"].user.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: cx(classes.dotStatus, changeStatus(status))
  }), status)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6___default()), {
    onClick: () => handleChangeStatus('online')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: cx(classes.dotStatus, classes.online)
  }), "online"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6___default()), {
    onClick: () => handleChangeStatus('idle')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: cx(classes.dotStatus, classes.idle)
  }), "idle"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6___default()), {
    onClick: () => handleChangeStatus('bussy')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: cx(classes.dotStatus, classes.bussy)
  }), "bussy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6___default()), {
    onClick: () => handleChangeStatus('offline')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: cx(classes.dotStatus, classes.offline)
  }), "offline")));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuProfile);

/***/ }),

/***/ "./app/components/SidebarBig/index.js":
/*!********************************************!*\
  !*** ./app/components/SidebarBig/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/useMediaQuery */ "./node_modules/@mui/material/node/useMediaQuery/index.js");
/* harmony import */ var _mui_material_SwipeableDrawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/SwipeableDrawer */ "./node_modules/@mui/material/node/SwipeableDrawer/index.js");
/* harmony import */ var _sidebarBig_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebarBig-jss */ "./app/components/SidebarBig/sidebarBig-jss.js");
/* harmony import */ var _MainMenuBig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MainMenuBig */ "./app/components/SidebarBig/MainMenuBig.js");







function SidebarBig(props) {
  const {
    classes
  } = (0,_sidebarBig_jss__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    dataMenu,
    loadTransition,
    open,
    toggleDrawerOpen
  } = props;
  const lgDown = (0,_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__["default"])(theme => theme.breakpoints.down('lg'));
  const lgUp = (0,_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__["default"])(theme => theme.breakpoints.up('lg'));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, !lgUp && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_SwipeableDrawer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClose: toggleDrawerOpen,
    onOpen: toggleDrawerOpen,
    open: !open,
    anchor: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classes.swipeDrawerPaper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MainMenuBig__WEBPACK_IMPORTED_MODULE_3__["default"], {
    dataMenu: dataMenu,
    loadTransition: loadTransition,
    drawerPaper: true,
    toggleDrawerOpen: toggleDrawerOpen,
    mobile: true
  }))), !lgDown && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MainMenuBig__WEBPACK_IMPORTED_MODULE_3__["default"], {
    dataMenu: dataMenu,
    loadTransition: loadTransition,
    drawerPaper: open
  })));
}

SidebarBig.propTypes = {
  dataMenu: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired),
  loadTransition: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  toggleDrawerOpen: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  open: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SidebarBig);

/***/ }),

/***/ "./app/components/SidebarBig/sidebarBig-jss.js":
/*!*****************************************************!*\
  !*** ./app/components/SidebarBig/sidebarBig-jss.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tss-react/mui */ "./node_modules/tss-react/esm/mui.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/node/styles/index.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/colors */ "./node_modules/@mui/material/node/colors/index.js");



const categoryWidth = 100;
const listWidth = 180;
const useStyles = (0,tss_react_mui__WEBPACK_IMPORTED_MODULE_0__.makeStyles)()((theme, _params, classes) => ({
  bigSidebar: {
    color: theme.palette.text.primary,
    padding: `${theme.spacing(1)} 0`,
    position: 'relative',
    zIndex: 10,
    height: '100%',
    display: 'flex',
    '&:before': {
      content: '""',
      width: '100%',
      height: '100%',
      backgroundColor: theme.palette.mode === 'dark' ? (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.alpha)(theme.palette.background.paper, 0.75) : (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.alpha)(theme.palette.background.paper, 0.9),
      boxShadow: theme.shade.light,
      backdropFilter: 'saturate(180%) blur(20px)',
      position: 'absolute',
      top: 0,
      left: 0
    }
  },
  category: {
    width: categoryWidth,
    [`& .${classes.fixedWrap}`]: {
      paddingBottom: theme.spacing(8)
    }
  },
  icon: {},
  text: {},
  active: {},
  selected: {},
  fixedWrap: {
    position: 'fixed',
    overflow: 'auto',
    height: '100%',
    '&::-webkit-scrollbar': {
      width: 8
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: 12,
      backgroundColor: 'rgba(0,0,0,0)'
    },
    '&:hover': {
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(0,0,0,0.2)',
        border: '1px solid rgba(255,255,255,0.3)'
      }
    }
  },
  avatarHead: {
    textAlign: 'center',
    width: '100%',
    padding: theme.spacing(0.5),
    marginBottom: theme.spacing(1)
  },
  statusMenu: {
    '& ul': {
      paddingTop: 0
    },
    '& li': {
      width: 180
    }
  },
  swipeDrawerPaper: {
    width: categoryWidth + listWidth
  },
  profile: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  name: {
    textAlign: 'left',
    marginLeft: theme.spacing(1),
    fontSize: 14,
    '& h5': {
      marginBottom: 0
    }
  },
  pinned: {},
  dotStatus: {
    width: theme.spacing(1.5),
    height: theme.spacing(1.5),
    display: 'inline-block',
    borderRadius: '50%',
    border: '1px solid #fff',
    marginRight: theme.spacing(1),
    [`&.${classes.pinned}`]: {
      position: 'absolute',
      bottom: 3,
      left: 60
    }
  },
  online: {
    backgroundColor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_2__.lightGreen[500]
  },
  bussy: {
    backgroundColor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_2__.red[500]
  },
  idle: {
    backgroundColor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_2__.amber[500]
  },
  offline: {
    backgroundColor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_2__.grey[500]
  },
  menuHead: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: theme.spacing(1),
    marginBottom: theme.spacing(1),
    borderRadius: 4,
    '&:hover': {
      background: theme.palette.action.hover
    },
    [`&.${classes.active}`]: {
      '&:before': {
        content: '""',
        position: 'absolute',
        width: 5,
        height: 68,
        borderRadius: 5,
        top: 0,
        left: 0,
        background: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.alpha)(theme.palette.primary.main, 0.5)
      },
      [`& .${classes.icon}, .${classes.text}`]: {
        color: theme.palette.mode === 'dark' ? theme.palette.primary.main : theme.palette.primary.main
      }
    },
    [`& .${classes.icon}`]: {
      color: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.alpha)(theme.palette.text.secondary, 0.54),
      display: 'block',
      fontSize: 28,
      marginBottom: theme.spacing(1)
    },
    [`& .${classes.text}`]: {
      width: 80,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      fontSize: 12,
      color: theme.palette.text.secondary
    }
  },
  item: {},
  listMenu: {
    width: listWidth,
    marginTop: -10,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    '& > ul': {
      width: listWidth,
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1),
      paddingBottom: theme.spacing(8)
    },
    [`& .${classes.icon}`]: {
      color: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.alpha)(theme.palette.text.secondary, 0.54),
      fontSize: 22
    },
    [`& .${classes.text}`]: {
      paddingLeft: 0,
      paddingRight: 0,
      '& span': {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        fontSize: 12,
        display: 'block'
      }
    },
    [`& .${classes.item}`]: {
      borderRadius: 40,
      textAlign: 'left',
      paddingLeft: 0,
      margin: '4px 0',
      '& > div:first-of-type': {
        margin: `0 ${theme.spacing(1)}`,
        minWidth: 'auto'
      },
      [`&.${classes.active}`]: {
        backgroundColor: theme.palette.mode === 'dark' ? (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.alpha)(theme.palette.primary.main, 0.24) : (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.alpha)(theme.palette.primary.main, 0.3),
        [`& .${classes.icon}`]: {
          color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark
        },
        [`& .${classes.text}`]: {
          '& span': {
            color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark
          }
        },
        '&:hover': {
          backgroundColor: theme.palette.mode === 'dark' ? (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.alpha)(theme.palette.primary.main, 0.24) : (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.alpha)(theme.palette.primary.main, 0.3)
        }
      }
    }
  },
  drawerPaperClose: {
    width: 0,
    padding: 0,
    overflowX: 'hidden',
    '& ul': {
      position: 'relative'
    }
  },
  userShifted: {
    marginTop: theme.spacing(7),
    [`& .${classes.avatarHead}`]: {
      marginTop: theme.spacing(2)
    }
  },
  title: {
    fontSize: 10,
    textTransform: 'uppercase',
    marginTop: theme.spacing(2),
    paddingLeft: 0,
    display: 'block',
    color: theme.palette.primary.main,
    lineHeight: '28px',
    fontWeight: '900'
  },
  childMenuWrap: {
    opacity: 0,
    transform: 'translateX(-5px)'
  },
  menuLoaded: {
    opacity: 1,
    transform: 'translateX(0px)',
    transition: 'all 0.2s ease-out'
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStyles);

/***/ }),

/***/ "./app/components/SourceReader/SourceReader.js":
/*!*****************************************************!*\
  !*** ./app/components/SourceReader/SourceReader.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tss-react/mui */ "./node_modules/tss-react/esm/mui.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_syntax_highlighter_dist_esm_prism_light__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-syntax-highlighter/dist/esm/prism-light */ "./node_modules/react-syntax-highlighter/dist/esm/prism-light.js");
/* harmony import */ var react_syntax_highlighter_dist_esm_languages_prism_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-syntax-highlighter/dist/esm/languages/prism/jsx */ "./node_modules/react-syntax-highlighter/dist/esm/languages/prism/jsx.js");
/* harmony import */ var react_syntax_highlighter_dist_esm_styles_prism_prism__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-syntax-highlighter/dist/esm/styles/prism/prism */ "./node_modules/react-syntax-highlighter/dist/esm/styles/prism/prism.js");
/* harmony import */ var react_syntax_highlighter_dist_esm_styles_prism_xonokai__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-syntax-highlighter/dist/esm/styles/prism/xonokai */ "./node_modules/react-syntax-highlighter/dist/esm/styles/prism/xonokai.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/node/Button/index.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_LinearProgress__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/LinearProgress */ "./node_modules/@mui/material/node/LinearProgress/index.js");
/* harmony import */ var _mui_material_LinearProgress__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_LinearProgress__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_icons_material_Code__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/Code */ "./node_modules/@mui/icons-material/Code.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
/* harmony import */ var _mui_material_Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Icon */ "./node_modules/@mui/material/node/Icon/index.js");
/* harmony import */ var _mui_material_Icon__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Icon__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_ToggleButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/ToggleButton */ "./node_modules/@mui/material/node/ToggleButton/index.js");
/* harmony import */ var _mui_material_ToggleButton__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ToggleButton__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_material_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/ToggleButtonGroup */ "./node_modules/@mui/material/node/ToggleButtonGroup/index.js");
/* harmony import */ var _mui_material_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _config_codePreview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/codePreview */ "./app/config/codePreview.js");

















const url = '/api/docs?src=';
const useStyles = (0,tss_react_mui__WEBPACK_IMPORTED_MODULE_2__.makeStyles)()(theme => ({
  button: {
    margin: '8px 5px'
  },
  iconSmall: {
    fontSize: 20
  },
  leftIcon: {
    marginRight: theme.spacing(1)
  },
  source: {
    textAlign: 'left',
    overflow: 'hidden',
    height: 0,
    position: 'relative',
    transition: 'all .5s',
    margin: '0 -10px',
    '& pre': {
      paddingTop: '80px !important'
    }
  },
  preloader: {
    position: 'absolute',
    top: 36,
    left: 0,
    width: '100%'
  },
  open: {
    height: 'auto',
    minHeight: 20
  },
  src: {
    padding: 10,
    position: 'absolute',
    top: 10,
    left: 0,
    zIndex: 1,
    fontFamily: 'monospace',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    '& span': {
      fontSize: 14
    },
    '& p': {
      color: 'grey',
      '& span': {
        marginRight: 5,
        top: 3,
        position: 'relative'
      }
    }
  },
  toggleContainer: {
    height: 56,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    '& button': {
      background: 'rgba(255, 255, 255, 0.4)',
      color: '#000 !important',
      '&:hover': {
        background: 'rgba(255, 255, 255, 0.4) !important'
      }
    }
  }
}));

function SourceReader(props) {
  const {
    classes,
    cx
  } = useStyles();
  const {
    componentName,
    mode
  } = props;
  const [raws, setRaws] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [style, setStyle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(mode);

  const sourceOpen = () => {
    setLoading(true);
  };

  const handleStyle = (event, value) => {
    setStyle(value);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (loading) {
      axios__WEBPACK_IMPORTED_MODULE_3___default().get(url + componentName).then(result => {
        setRaws(result.data.records);
        setLoading(false);
      });
      setOpen(!open);
    }
  }, [loading]);
  react_syntax_highlighter_dist_esm_prism_light__WEBPACK_IMPORTED_MODULE_6__["default"].registerLanguage('jsx', react_syntax_highlighter_dist_esm_languages_prism_jsx__WEBPACK_IMPORTED_MODULE_7__["default"]);

  if (!_config_codePreview__WEBPACK_IMPORTED_MODULE_5__["default"].enable) {
    return false;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Button__WEBPACK_IMPORTED_MODULE_8___default()), {
    onClick: sourceOpen,
    color: "secondary",
    className: classes.button,
    size: "small"
  }, open ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: cx(classes.leftIcon, classes.iconSmall)
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Code__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: cx(classes.leftIcon, classes.iconSmall)
  }), open ? 'Hide Code' : 'Show Code'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    dir: "ltr",
    className: cx(classes.source, open ? classes.open : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classes.src
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Icon__WEBPACK_IMPORTED_MODULE_11___default()), {
    className: "description"
  }, "description"), "src/app/", componentName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classes.toggleContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_12___default()), {
    value: style,
    exclusive: true,
    onChange: handleStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_ToggleButton__WEBPACK_IMPORTED_MODULE_13___default()), {
    value: "light"
  }, "Light"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_ToggleButton__WEBPACK_IMPORTED_MODULE_13___default()), {
    value: "dark"
  }, "Dark")))), loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_LinearProgress__WEBPACK_IMPORTED_MODULE_14___default()), {
    color: "secondary",
    className: classes.preloader
  }), raws.map((raw, index) => [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: index.toString()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_syntax_highlighter_dist_esm_prism_light__WEBPACK_IMPORTED_MODULE_6__["default"], {
    language: "jsx",
    style: style === 'dark' ? react_syntax_highlighter_dist_esm_styles_prism_xonokai__WEBPACK_IMPORTED_MODULE_15__["default"] : react_syntax_highlighter_dist_esm_styles_prism_prism__WEBPACK_IMPORTED_MODULE_16__["default"],
    showLineNumbers: "true"
  }, raw.source.toString()))])));
}

SourceReader.propTypes = {
  componentName: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.string.isRequired,
  mode: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  mode: state.ui.type
});

const AppMapped = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.connect)(mapStateToProps)(SourceReader);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppMapped);

/***/ }),

/***/ "./app/components/Tables/EmptyData.js":
/*!********************************************!*\
  !*** ./app/components/Tables/EmptyData.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_Apps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/icons-material/Apps */ "./node_modules/@mui/icons-material/Apps.js");
/* harmony import */ var dan_components_Tables_tableStyle_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dan-components/Tables/tableStyle-jss */ "./app/components/Tables/tableStyle-jss.js");




function EmptyData() {
  const {
    classes
  } = (0,dan_components_Tables_tableStyle_jss__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classes.nodata
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Apps__WEBPACK_IMPORTED_MODULE_2__["default"], null), "No Data");
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmptyData);

/***/ }),

/***/ "./app/components/Tables/tableStyle-jss.js":
/*!*************************************************!*\
  !*** ./app/components/Tables/tableStyle-jss.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/node/styles/index.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tss-react/mui */ "./node_modules/tss-react/esm/mui.js");
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/colors */ "./node_modules/@mui/material/node/colors/index.js");


 // TODO jss-to-tss-react codemod: Unable to handle style definition reliably. Unsupported arrow function syntax.
// Unexpected value type of ConditionalExpression.

const useStyles = (0,tss_react_mui__WEBPACK_IMPORTED_MODULE_0__.makeStyles)()(theme => ({
  root: {
    paddingRight: theme.spacing(1)
  },
  rootTable: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto'
  },
  highlight: theme.palette.mode === 'light' ? {
    color: theme.palette.secondary.main,
    backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.lighten)(theme.palette.secondary.light, 0.85)
  } : {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.secondary.dark
  },
  spacer: {
    flex: '1 1 100%'
  },
  avatar: {
    marginRight: theme.spacing(1)
  },
  flex: {
    display: 'flex'
  },
  actionsToolbar: {
    color: theme.palette.text.secondary,
    flex: '1 0 auto'
  },
  textField: {
    flexBasis: 200,
    width: 300,
    marginTop: 4
  },
  table: {
    minWidth: 860
  },
  tableSmall: {
    minWidth: 500
  },
  actions: {
    color: theme.palette.text.secondary
  },
  toolbar: {
    backgroundColor: theme.palette.mode === 'dark' ? (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.darken)(theme.palette.primary.light, 0.6) : theme.palette.primary.light,
    minHeight: 48
  },
  title: {
    flex: '0 0 auto',
    '& h6': {
      fontSize: 16,
      color: theme.palette.mode === 'dark' ? (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.darken)(theme.palette.primary.light, 0.2) : (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.darken)(theme.palette.primary.dark, 0.2)
    }
  },
  button: {
    margin: `${theme.spacing(1)} 0`
  },
  iconSmall: {
    fontSize: 20
  },
  leftIcon: {
    marginRight: theme.spacing(1)
  },
  tableChip: {
    margin: theme.spacing(1),
    color: theme.palette.common.white
  },

  /*
  -----------------------
  ' Table Style '
  ' - Odd Even Stripped
  ' - Hover Style
  ' - Bordered Style
  ' - Empty Table
  ' - Table SIze
  -----------------------
  */
  stripped: {
    '& tbody tr:nth-of-type(even)': {
      background: theme.palette.mode === 'dark' ? (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.alpha)(theme.palette.grey[900], 0.5) : theme.palette.grey[50]
    }
  },
  hover: {
    '& tbody tr:hover': {
      background: theme.palette.mode === 'dark' ? (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.darken)(theme.palette.primary.light, 0.8) : (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.lighten)(theme.palette.primary.light, 0.5)
    }
  },
  bordered: {
    border: theme.palette.mode === 'dark' ? `1px solid ${theme.palette.grey[900]}` : `1px solid ${theme.palette.primary.light}`,
    '& thead tr': {
      background: theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.primary.light
    },
    '& td, th': {
      border: theme.palette.mode === 'dark' ? `1px solid ${theme.palette.grey[900]}` : `1px solid ${theme.palette.primary.light}`
    },
    '& tr td, tr th': {
      '&:first-of-type': {
        borderLeft: 'none'
      },
      '&:last-child': {
        borderRight: 'none'
      }
    }
  },
  nodata: {
    textAlign: 'center',
    padding: '10px 10px 40px',
    fontSize: 24,
    lineHeight: '16px',
    color: theme.palette.grey[500],
    '& svg': {
      position: 'relative',
      top: -2,
      width: 26,
      height: 26,
      margin: '0 6px',
      fill: theme.palette.grey[500]
    }
  },
  small: {
    '& tr': {
      height: 24,
      '& td, th': {
        padding: '4px 10px',
        fontSize: 12
      }
    }
  },
  medium: {
    '& tr': {
      height: 48,
      '& td, th': {
        padding: '4px 56px 4px 24px',
        fontSize: 14
      }
    }
  },
  big: {
    '& tr': {
      height: 64,
      '& td, th': {
        padding: '8px 56px 8px 24px',
        fontSize: 18
      }
    }
  },
  settings: {
    background: theme.palette.background.default,
    padding: 20,
    borderRadius: theme.rounded.medium
  },
  up: {
    color: _mui_material_colors__WEBPACK_IMPORTED_MODULE_2__.green[500],
    '& svg': {
      fill: _mui_material_colors__WEBPACK_IMPORTED_MODULE_2__.green[500]
    }
  },
  down: {
    color: _mui_material_colors__WEBPACK_IMPORTED_MODULE_2__.red[500],
    '& svg': {
      fill: _mui_material_colors__WEBPACK_IMPORTED_MODULE_2__.red[500]
    }
  },
  flat: {
    color: theme.palette.divider,
    '& svg': {
      fill: theme.palette.divider
    }
  },
  chartTable: {
    '& svg': {
      '& [class*="recharts-bar-rectangle"] path': {
        fill: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.alpha)(theme.palette.primary.main, 0.5)
      }
    }
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStyles);

/***/ }),

/***/ "./app/components/index.js":
/*!*********************************!*\
  !*** ./app/components/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": () => (/* reexport safe */ _Header_Header__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "HeaderMenu": () => (/* reexport safe */ _Header_HeaderMenu__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "Sidebar": () => (/* reexport safe */ _Sidebar__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "SidebarBig": () => (/* reexport safe */ _SidebarBig__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "BreadCrumb": () => (/* reexport safe */ _BreadCrumb_BreadCrumb__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "SourceReader": () => (/* reexport safe */ _SourceReader_SourceReader__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "PapperBlock": () => (/* reexport safe */ _PapperBlock_PapperBlock__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "SearchUi": () => (/* reexport safe */ _Search_SearchUi__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   "GuideSlider": () => (/* reexport safe */ _GuideSlider__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   "LoginForm": () => (/* reexport safe */ _Forms_LoginForm__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   "RegisterForm": () => (/* reexport safe */ _Forms_RegisterForm__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   "ResetForm": () => (/* reexport safe */ _Forms_ResetForm__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   "Notification": () => (/* reexport safe */ _Notification_Notification__WEBPACK_IMPORTED_MODULE_12__["default"]),
/* harmony export */   "EmptyData": () => (/* reexport safe */ _Tables_EmptyData__WEBPACK_IMPORTED_MODULE_13__["default"]),
/* harmony export */   "ErrorWrap": () => (/* reexport safe */ _Error_ErrorWrap__WEBPACK_IMPORTED_MODULE_14__["default"])
/* harmony export */ });
/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header/Header */ "./app/components/Header/Header.js");
/* harmony import */ var _Header_HeaderMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header/HeaderMenu */ "./app/components/Header/HeaderMenu.js");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sidebar */ "./app/components/Sidebar/index.js");
/* harmony import */ var _SidebarBig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SidebarBig */ "./app/components/SidebarBig/index.js");
/* harmony import */ var _BreadCrumb_BreadCrumb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BreadCrumb/BreadCrumb */ "./app/components/BreadCrumb/BreadCrumb.js");
/* harmony import */ var _SourceReader_SourceReader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SourceReader/SourceReader */ "./app/components/SourceReader/SourceReader.js");
/* harmony import */ var _PapperBlock_PapperBlock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PapperBlock/PapperBlock */ "./app/components/PapperBlock/PapperBlock.js");
/* harmony import */ var _Search_SearchUi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Search/SearchUi */ "./app/components/Search/SearchUi.js");
/* harmony import */ var _GuideSlider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./GuideSlider */ "./app/components/GuideSlider/index.js");
/* harmony import */ var _Forms_LoginForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Forms/LoginForm */ "./app/components/Forms/LoginForm.js");
/* harmony import */ var _Forms_RegisterForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Forms/RegisterForm */ "./app/components/Forms/RegisterForm.js");
/* harmony import */ var _Forms_ResetForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Forms/ResetForm */ "./app/components/Forms/ResetForm.js");
/* harmony import */ var _Notification_Notification__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Notification/Notification */ "./app/components/Notification/Notification.js");
/* harmony import */ var _Tables_EmptyData__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Tables/EmptyData */ "./app/components/Tables/EmptyData.js");
/* harmony import */ var _Error_ErrorWrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Error/ErrorWrap */ "./app/components/Error/ErrorWrap.js");
// Main Components















 // Guide


 // Form








 // Table


 // Error




/***/ }),

/***/ "./app/config/codePreview.js":
/*!***********************************!*\
  !*** ./app/config/codePreview.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  enable: true
});

/***/ }),

/***/ "./app/config/pageTitles.js":
/*!**********************************!*\
  !*** ./app/config/pageTitles.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPageTitle": () => (/* binding */ getPageTitle),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Mapeamento centralizado de títulos personalizados para rotas
 *
 * Use este arquivo para definir títulos customizados que serão
 * exibidos no pageTitle e no breadcrumb.
 */
const pageTitles = {
  // Raiz do app
  app: 'Portal IECG',
  // MIA
  'app/mia': 'Listagem Ministério MIA',
  'app/mia/cadastrar': 'Cadastro do MIA',
  'app/mia/detalhes': 'Detalhes do MIA',
  'app/mia/listas-presenca': 'Listas de Presença',
  // Start
  'app/start': 'Start',
  'app/start/celulas': 'Listagem de Células',
  'app/start/celulas/cadastrar': 'Cadastrar Célula',
  'app/start/celulas/detalhes': 'Detalhes da Célula',
  'app/start/campus': 'Campus',
  'app/start/direcionamentos': 'Apelos Direcionados',
  'app/start/fila-apelos': 'Fila de Apelos',
  'app/start/chatwoot': 'Chat de Atendimento',
  // Administração
  'app/admin': 'Administração',
  'app/admin/perfis': 'Perfis e Permissões',
  'app/admin/usuarios': 'Usuários',
  'app/admin/usuarios/novo': 'Novo Usuário',
  'app/admin/webhooks': 'Webhooks',
  // Perfil
  'app/profile': 'Meu Perfil',
  // Fallback por segmento
  start: 'Start',
  admin: 'Administração',
  mia: 'Ministério MIA',
  celulas: 'Células',
  cadastrar: 'Cadastro',
  detalhes: 'Detalhes',
  campus: 'Campus',
  direcionamentos: 'Apelos Direcionados',
  'fila-apelos': 'Fila de Apelos',
  perfis: 'Perfis e Permissões',
  usuarios: 'Usuários',
  webhooks: 'Webhooks',
  novo: 'Novo Usuário',
  profile: 'Meu Perfil',
  'listas-presenca': 'Listas de Presença',
  chatwoot: 'Chat de Atendimento'
};
/**
 * Obtém o título personalizado de uma rota ou segmento
 * @param {string} routeName - Caminho ou segmento (ex: 'app/start/celulas')
 * @returns {string} - Título personalizado ou nome formatado
 */

const getPageTitle = routeName => {
  if (!routeName) return '';
  const normalizedRoute = routeName.replace(/^\/+/, '').replace(/\/+$/, '');
  if (!normalizedRoute) return pageTitles.app;
  const lastSegment = normalizedRoute.split('/').pop();
  return pageTitles[normalizedRoute] || pageTitles[lastSegment] || lastSegment.replace(/-/g, ' ');
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageTitles);

/***/ }),

/***/ "./app/containers/App/Application.js":
/*!*******************************************!*\
  !*** ./app/containers/App/Application.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _Templates_Dashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Templates/Dashboard */ "./app/containers/Templates/Dashboard.js");
/* harmony import */ var _ThemeWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeWrapper */ "./app/containers/App/ThemeWrapper.js");
/* harmony import */ var _Pages_MiaPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Pages/MiaPage */ "./app/containers/Pages/MiaPage/index.js");
/* harmony import */ var _Pages_StartPage_WelcomePage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Pages/StartPage/WelcomePage */ "./app/containers/Pages/StartPage/WelcomePage.js");
/* harmony import */ var _Pages_BlankPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Pages/BlankPage */ "./app/containers/Pages/BlankPage/index.js");
/* harmony import */ var _Pages_StartPage_celulasPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Pages/StartPage/celulasPage */ "./app/containers/Pages/StartPage/celulasPage.js");
/* harmony import */ var _Pages_StartPage_cadastrarCelulasPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Pages/StartPage/cadastrarCelulasPage */ "./app/containers/Pages/StartPage/cadastrarCelulasPage.js");
/* harmony import */ var _Pages_StartPage_campusPage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Pages/StartPage/campusPage */ "./app/containers/Pages/StartPage/campusPage.js");
/* harmony import */ var _Pages_StartPage_ApelosDirecionadosPage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Pages/StartPage/ApelosDirecionadosPage */ "./app/containers/Pages/StartPage/ApelosDirecionadosPage.js");
/* harmony import */ var _Pages_StartPage_FilaApelosPage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Pages/StartPage/FilaApelosPage */ "./app/containers/Pages/StartPage/FilaApelosPage.js");
/* harmony import */ var _Pages_StartPage_ChatwootPage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Pages/StartPage/ChatwootPage */ "./app/containers/Pages/StartPage/ChatwootPage.js");
/* harmony import */ var _Pages_Public_ApeloPublicPage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Pages/Public/ApeloPublicPage */ "./app/containers/Pages/Public/ApeloPublicPage.js");
/* harmony import */ var _Pages_Users_Profile__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Pages/Users/Profile */ "./app/containers/Pages/Users/Profile.js");
/* harmony import */ var _Pages_Webhooks_WebhooksPage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Pages/Webhooks/WebhooksPage */ "./app/containers/Pages/Webhooks/WebhooksPage.js");
/* harmony import */ var _Pages_MiaPage_MiaListPage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../Pages/MiaPage/MiaListPage */ "./app/containers/Pages/MiaPage/MiaListPage.js");
/* harmony import */ var _Pages_MiaPage_MiaDetailsPage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../Pages/MiaPage/MiaDetailsPage */ "./app/containers/Pages/MiaPage/MiaDetailsPage.js");
/* harmony import */ var _Pages_MiaPage_AttendanceListPage__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../Pages/MiaPage/AttendanceListPage */ "./app/containers/Pages/MiaPage/AttendanceListPage.js");
/* harmony import */ var _Pages_MiaPage_AttendanceDetailPage__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../Pages/MiaPage/AttendanceDetailPage */ "./app/containers/Pages/MiaPage/AttendanceDetailPage.js");
/* harmony import */ var _Pages_Users_Login__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../Pages/Users/Login */ "./app/containers/Pages/Users/Login.js");
/* harmony import */ var _routes_ProtectedRoute__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../routes/ProtectedRoute */ "./app/routes/ProtectedRoute.js");
/* harmony import */ var _Pages_Admin_PerfilPermissaoPage__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../Pages/Admin/PerfilPermissaoPage */ "./app/containers/Pages/Admin/PerfilPermissaoPage.js");
/* harmony import */ var _Pages_Admin_UserCreatePage__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../Pages/Admin/UserCreatePage */ "./app/containers/Pages/Admin/UserCreatePage.js");
/* harmony import */ var _Pages_Admin_UsersListPage__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../Pages/Admin/UsersListPage */ "./app/containers/Pages/Admin/UsersListPage.js");
/* harmony import */ var dan_api_dummy_dummyContents__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! dan-api/dummy/dummyContents */ "./app/api/dummy/dummyContents.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





























function Application(_ref) {
  let {
    history
  } = _ref;
  const changeMode = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_ThemeWrapper__WEBPACK_IMPORTED_MODULE_4__.ThemeContext);
  const [isAuthenticated, setIsAuthenticated] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
    const storedAuth = localStorage.getItem('isAuthenticated');
    return storedAuth === 'true';
  });
  const storedUser = localStorage.getItem('user');

  if (storedUser) {
    dan_api_dummy_dummyContents__WEBPACK_IMPORTED_MODULE_26__["default"].user = JSON.parse(storedUser);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated);
  }, [isAuthenticated]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
    exact: true,
    path: "/login",
    render: routeProps => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Pages_Users_Login__WEBPACK_IMPORTED_MODULE_21__["default"], _extends({}, routeProps, {
      setIsAuthenticated: setIsAuthenticated
    }))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
    exact: true,
    path: "/apelo",
    component: _Pages_Public_ApeloPublicPage__WEBPACK_IMPORTED_MODULE_14__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
    exact: true,
    path: "/public/apelo",
    component: _Pages_Public_ApeloPublicPage__WEBPACK_IMPORTED_MODULE_14__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
    path: "/app"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Templates_Dashboard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    history: history,
    changeMode: changeMode
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_routes_ProtectedRoute__WEBPACK_IMPORTED_MODULE_22__["default"], {
    exact: true,
    path: "/app",
    component: _Pages_StartPage_WelcomePage__WEBPACK_IMPORTED_MODULE_6__["default"],
    isAuthenticated: isAuthenticated
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_routes_ProtectedRoute__WEBPACK_IMPORTED_MODULE_22__["default"], {
    exact: true,
    path: "/app/mia/cadastrar",
    component: _Pages_MiaPage__WEBPACK_IMPORTED_MODULE_5__["default"],
    isAuthenticated: isAuthenticated,
    requiredPermission: "MIA_CADASTRAR"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_routes_ProtectedRoute__WEBPACK_IMPORTED_MODULE_22__["default"], {
    exact: true,
    path: "/app/mia",
    component: _Pages_MiaPage_MiaListPage__WEBPACK_IMPORTED_MODULE_17__["default"],
    isAuthenticated: isAuthenticated,
    requiredPermission: "MIA_LISTAR"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_routes_ProtectedRoute__WEBPACK_IMPORTED_MODULE_22__["default"], {
    exact: true,
    path: "/app/mia/detalhes",
    component: _Pages_MiaPage_MiaDetailsPage__WEBPACK_IMPORTED_MODULE_18__["default"],
    isAuthenticated: isAuthenticated,
    requiredPermission: "MIA_LISTAR"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_routes_ProtectedRoute__WEBPACK_IMPORTED_MODULE_22__["default"], {
    exact: true,
    path: "/app/mia/listas-presenca",
    component: _Pages_MiaPage_AttendanceListPage__WEBPACK_IMPORTED_MODULE_19__["default"],
    isAuthenticated: isAuthenticated,
    requiredPermission: "MIA_LISTAR"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_routes_ProtectedRoute__WEBPACK_IMPORTED_MODULE_22__["default"], {
    exact: true,
    path: "/app/mia/listas-presenca/:id",
    component: _Pages_MiaPage_AttendanceDetailPage__WEBPACK_IMPORTED_MODULE_20__["default"],
    isAuthenticated: isAuthenticated,
    requiredPermission: "MIA_LISTAR"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_routes_ProtectedRoute__WEBPACK_IMPORTED_MODULE_22__["default"], {
    exact: true,
    path: "/app/profile",
    component: _Pages_Users_Profile__WEBPACK_IMPORTED_MODULE_15__["default"],
    isAuthenticated: isAuthenticated
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_routes_ProtectedRoute__WEBPACK_IMPORTED_MODULE_22__["default"], {
    exact: true,
    path: "/app/start/celulas",
    component: _Pages_StartPage_celulasPage__WEBPACK_IMPORTED_MODULE_8__["default"],
    isAuthenticated: isAuthenticated,
    requiredPermission: "CELULA_LISTAR"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_routes_ProtectedRoute__WEBPACK_IMPORTED_MODULE_22__["default"], {
    exact: true,
    path: "/app/start/celulas/cadastrar",
    component: _Pages_StartPage_cadastrarCelulasPage__WEBPACK_IMPORTED_MODULE_9__["default"],
    isAuthenticated: isAuthenticated,
    requiredPermission: "CELULA_CADASTRAR"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_routes_ProtectedRoute__WEBPACK_IMPORTED_MODULE_22__["default"], {
    exact: true,
    path: "/app/start/celulas/detalhes",
    component: _Pages_BlankPage__WEBPACK_IMPORTED_MODULE_7__["default"],
    isAuthenticated: isAuthenticated,
    requiredPermission: "CELULA_LISTAR"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_routes_ProtectedRoute__WEBPACK_IMPORTED_MODULE_22__["default"], {
    exact: true,
    path: "/app/start/campus",
    component: _Pages_StartPage_campusPage__WEBPACK_IMPORTED_MODULE_10__["default"],
    isAuthenticated: isAuthenticated,
    requiredPermission: "CELULA_LISTAR"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_routes_ProtectedRoute__WEBPACK_IMPORTED_MODULE_22__["default"], {
    exact: true,
    path: "/app/start/direcionamentos",
    component: _Pages_StartPage_ApelosDirecionadosPage__WEBPACK_IMPORTED_MODULE_11__["default"],
    isAuthenticated: isAuthenticated,
    requiredPermission: "CELULA_LISTAR"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_routes_ProtectedRoute__WEBPACK_IMPORTED_MODULE_22__["default"], {
    exact: true,
    path: "/app/start/fila-apelos",
    component: _Pages_StartPage_FilaApelosPage__WEBPACK_IMPORTED_MODULE_12__["default"],
    isAuthenticated: isAuthenticated,
    requiredPermission: "CELULA_LISTAR"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_routes_ProtectedRoute__WEBPACK_IMPORTED_MODULE_22__["default"], {
    exact: true,
    path: "/app/start/chatwoot",
    component: _Pages_StartPage_ChatwootPage__WEBPACK_IMPORTED_MODULE_13__["default"],
    isAuthenticated: isAuthenticated,
    requiredPermission: "CELULA_LISTAR"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_routes_ProtectedRoute__WEBPACK_IMPORTED_MODULE_22__["default"], {
    exact: true,
    path: "/app/admin/perfis",
    component: _Pages_Admin_PerfilPermissaoPage__WEBPACK_IMPORTED_MODULE_23__["default"],
    isAuthenticated: isAuthenticated,
    requiredPermission: "ADMIN_PERFIS"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_routes_ProtectedRoute__WEBPACK_IMPORTED_MODULE_22__["default"], {
    exact: true,
    path: "/app/admin/usuarios/novo",
    component: _Pages_Admin_UserCreatePage__WEBPACK_IMPORTED_MODULE_24__["default"],
    isAuthenticated: isAuthenticated,
    requiredPermission: "ADMIN_USUARIOS"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_routes_ProtectedRoute__WEBPACK_IMPORTED_MODULE_22__["default"], {
    exact: true,
    path: "/app/admin/usuarios",
    component: _Pages_Admin_UsersListPage__WEBPACK_IMPORTED_MODULE_25__["default"],
    isAuthenticated: isAuthenticated,
    requiredPermission: "ADMIN_USUARIOS"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_routes_ProtectedRoute__WEBPACK_IMPORTED_MODULE_22__["default"], {
    exact: true,
    path: "/app/admin/webhooks",
    component: _Pages_Webhooks_WebhooksPage__WEBPACK_IMPORTED_MODULE_16__["default"],
    isAuthenticated: isAuthenticated,
    requiredPermission: "WEBHOOKS_VIEW"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Redirect, {
    to: "/login"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Application);
Application.propTypes = {
  history: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    push: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
  }).isRequired
};

/***/ }),

/***/ "./app/containers/App/Auth.js":
/*!************************************!*\
  !*** ./app/containers/App/Auth.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _Templates_Outer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Templates/Outer */ "./app/containers/Templates/Outer.js");
/* harmony import */ var _pageListAsync__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pageListAsync */ "./app/containers/pageListAsync.js");





function Auth() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Templates_Outer__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
    path: "/login",
    component: _pageListAsync__WEBPACK_IMPORTED_MODULE_3__.Login
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
    path: "/reset-password",
    component: _pageListAsync__WEBPACK_IMPORTED_MODULE_3__.ResetPassword
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
    path: "/maintenance",
    component: _pageListAsync__WEBPACK_IMPORTED_MODULE_3__.Maintenance
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
    component: _pageListAsync__WEBPACK_IMPORTED_MODULE_3__.NotFound
  })));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Auth);

/***/ }),

/***/ "./app/containers/App/ThemeWrapper.js":
/*!********************************************!*\
  !*** ./app/containers/App/ThemeWrapper.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeContext": () => (/* binding */ ThemeContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tss-react/mui */ "./node_modules/tss-react/esm/mui.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/node/styles/index.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-element-6a883da9.browser.esm.js");
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/cache */ "./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js");
/* harmony import */ var stylis_plugin_rtl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! stylis-plugin-rtl */ "./node_modules/stylis-plugin-rtl/dist/cjs/stylis-rtl.js");
/* harmony import */ var stylis_plugin_rtl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(stylis_plugin_rtl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! stylis */ "./node_modules/stylis/src/Middleware.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_LinearProgress__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/LinearProgress */ "./node_modules/@mui/material/node/LinearProgress/index.js");
/* harmony import */ var _mui_material_LinearProgress__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_LinearProgress__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux */ "./node_modules/redux/lib/redux.js");
/* harmony import */ var dan_redux_actions_uiActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! dan-redux/actions/uiActions */ "./app/redux/actions/uiActions.js");
/* harmony import */ var _styles_theme_applicationTheme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/theme/applicationTheme */ "./app/styles/theme/applicationTheme.js");













const useStyles = (0,tss_react_mui__WEBPACK_IMPORTED_MODULE_2__.makeStyles)()(() => ({
  root: {
    width: '100%',
    minHeight: '100%',
    marginTop: 0,
    zIndex: 1
  },
  loading: {
    zIndex: '10 !important',
    position: 'fixed !important',
    top: 0,
    left: 0,
    width: '100%',
    opacity: 1,
    transition: 'opacity .5s ease'
  },
  loadingWrap: {
    background: 'none !important'
  },
  bar: {
    background: 'rgba(255, 255, 255, 0.7) !important'
  },
  hide: {
    opacity: 0
  }
}));
const isBrowser = typeof document !== 'undefined';
let insertionPoint;

if (isBrowser) {
  const emotionInsertionPoint = document.querySelector('meta[name="emotion-insertion-point"]');
  insertionPoint = emotionInsertionPoint ?? undefined;
}

const cacheRTL = (0,_emotion_cache__WEBPACK_IMPORTED_MODULE_3__["default"])({
  key: 'mui-style-rtl',
  stylisPlugins: [stylis__WEBPACK_IMPORTED_MODULE_9__.prefixer, (stylis_plugin_rtl__WEBPACK_IMPORTED_MODULE_4___default())],
  insertionPoint
});
const cacheLTR = (0,_emotion_cache__WEBPACK_IMPORTED_MODULE_3__["default"])({
  key: 'mui-style-ltr',
  insertionPoint
});
const ThemeContext = react__WEBPACK_IMPORTED_MODULE_0___default().createContext(undefined);

function ThemeWrapper(props) {
  const {
    classes
  } = useStyles();
  const [progress, setProgress] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [theme, setTheme] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_styles_theme_applicationTheme__WEBPACK_IMPORTED_MODULE_8__["default"])(props.color, props.mode, props.direction));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const timer = setInterval(() => {
      setProgress(oldProgress => {
        if (oldProgress === 100) {
          clearInterval(timer);
        }

        const diff = Math.random() * 40;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleChangeMode = mode => {
    // eslint-disable-line
    const {
      color,
      changeMode
    } = props;
    setTheme((0,_styles_theme_applicationTheme__WEBPACK_IMPORTED_MODULE_8__["default"])(color, mode));
    changeMode(mode);
  };

  const muiTheme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_10__.createTheme)(theme);
  const {
    children
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.C, {
    value: theme.direction === 'rtl' ? cacheRTL : cacheLTR
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_styles__WEBPACK_IMPORTED_MODULE_10__.ThemeProvider, {
    theme: muiTheme
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_LinearProgress__WEBPACK_IMPORTED_MODULE_12___default()), {
    variant: "determinate",
    value: progress,
    className: progress >= 100 ? classes.hide : '',
    classes: {
      root: classes.loading,
      colorPrimary: classes.loadingWrap,
      barColorPrimary: classes.bar
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ThemeContext.Provider, {
    value: handleChangeMode
  }, children))));
}

ThemeWrapper.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.node.isRequired,
  direction: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.string.isRequired,
  color: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.string.isRequired,
  mode: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.string.isRequired,
  changeMode: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  color: state.ui.theme,
  mode: state.ui.type,
  direction: state.ui.direction
});

const dispatchToProps = dispatch => ({
  changeMode: (0,redux__WEBPACK_IMPORTED_MODULE_6__.bindActionCreators)(dan_redux_actions_uiActions__WEBPACK_IMPORTED_MODULE_7__.changeModeAction, dispatch)
});

const ThemeWrapperMapped = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.connect)(mapStateToProps, dispatchToProps)(ThemeWrapper);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeWrapperMapped);

/***/ }),

/***/ "./app/containers/App/index.js":
/*!*************************************!*\
  !*** ./app/containers/App/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _pageListAsync__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pageListAsync */ "./app/containers/pageListAsync.js");
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Auth */ "./app/containers/App/Auth.js");
/* harmony import */ var _Application__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Application */ "./app/containers/App/Application.js");
/* harmony import */ var _Pages_Standalone_LoginDedicated__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Pages/Standalone/LoginDedicated */ "./app/containers/Pages/Standalone/LoginDedicated.js");
/* harmony import */ var _ThemeWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ThemeWrapper */ "./app/containers/App/ThemeWrapper.js");








window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

function App(props) {
  const {
    history
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ThemeWrapper__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Router, {
    history: history
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
    path: "/",
    exact: true,
    component: _Pages_Standalone_LoginDedicated__WEBPACK_IMPORTED_MODULE_6__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
    path: "/app",
    component: _Application__WEBPACK_IMPORTED_MODULE_5__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
    component: _Auth__WEBPACK_IMPORTED_MODULE_4__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
    component: _pageListAsync__WEBPACK_IMPORTED_MODULE_3__.NotFound
  }))));
}

App.propTypes = {
  history: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.object.isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./app/containers/LanguageProvider/constants.js":
/*!******************************************************!*\
  !*** ./app/containers/LanguageProvider/constants.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CHANGE_LOCALE": () => (/* binding */ CHANGE_LOCALE),
/* harmony export */   "CHANGE": () => (/* binding */ CHANGE)
/* harmony export */ });
/*
 *
 * LanguageProvider constants
 *
 */
const CHANGE_LOCALE = 'app/LanguageToggle/CHANGE_LOCALE';
const CHANGE = 'app/LanguageToggle/CHANGE';

/***/ }),

/***/ "./app/containers/LanguageProvider/index.js":
/*!**************************************************!*\
  !*** ./app/containers/LanguageProvider/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguageProvider": () => (/* binding */ LanguageProvider),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/index.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selectors */ "./app/containers/LanguageProvider/selectors.js");
/*
 *
 * LanguageProvider
 *
 * this component connects the redux state language locale to the
 * IntlProvider component and i18n messages (loaded from `app/translations`)
 */

/* eslint-disable */






function LanguageProvider(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__.IntlProvider, {
    locale: props.locale,
    key: props.locale,
    messages: props.messages[props.locale]
  }, react__WEBPACK_IMPORTED_MODULE_0___default().Children.only(props.children));
}
LanguageProvider.propTypes = {
  locale: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  messages: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().element.isRequired)
};
const mapStateToProps = (0,reselect__WEBPACK_IMPORTED_MODULE_3__.createSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_5__.makeSelectLocale)(), locale => ({
  locale
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps)(LanguageProvider));

/***/ }),

/***/ "./app/containers/LanguageProvider/reducer.js":
/*!****************************************************!*\
  !*** ./app/containers/LanguageProvider/reducer.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./app/containers/LanguageProvider/constants.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n */ "./app/i18n.js");
/*
 *
 * LanguageProvider reducer
 *
 */

/* eslint-disable */



const initialState = {
  locale: _i18n__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_LOCALE
};
/* eslint-disable default-case, no-param-reassign */

const languageProviderReducer = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  let action = arguments.length > 1 ? arguments[1] : undefined;
  return (0,immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, draft => {
    switch (action.type) {
      case _constants__WEBPACK_IMPORTED_MODULE_1__.CHANGE_LOCALE:
        draft.locale = action.locale;
        break;
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (languageProviderReducer);

/***/ }),

/***/ "./app/containers/LanguageProvider/selectors.js":
/*!******************************************************!*\
  !*** ./app/containers/LanguageProvider/selectors.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectLanguage": () => (/* binding */ selectLanguage),
/* harmony export */   "makeSelectLocale": () => (/* binding */ makeSelectLocale)
/* harmony export */ });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ "./app/containers/LanguageProvider/reducer.js");
/* eslint-disable */


/**
 * Direct selector to the language domain
 */

const selectLanguage = state => state.language || _reducer__WEBPACK_IMPORTED_MODULE_1__.initialState;
/**
 * Select the language locale
 */


const makeSelectLocale = () => (0,reselect__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectLanguage, languageState => languageState.locale);



/***/ }),

/***/ "./app/containers/Pages/Admin/PerfilPermissaoPage.js":
/*!***********************************************************!*\
  !*** ./app/containers/Pages/Admin/PerfilPermissaoPage.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var dan_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dan-components */ "./app/components/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/node/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* provided dependency */ var process = __webpack_require__(/*! process/browser */ "./node_modules/process/browser.js");




const fallbackHost = `${window.location.protocol}//${window.location.host}`;
const API_URL = process.env.REACT_APP_API_URL && process.env.REACT_APP_API_URL.replace(/\/$/, '') || fallbackHost || 'https://portal.iecg.com.br';

const PerfilPermissaoPage = () => {
  var _perfilSelecionadoObj;

  const [perfis, setPerfis] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [permissoes, setPermissoes] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [descricao, setDescricao] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [selecionado, setSelecionado] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [permissoesSelecionadas, setPermissoesSelecionadas] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [saving, setSaving] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const token = localStorage.getItem('token');
  const headersAuth = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  };

  const carregarDados = async () => {
    setLoading(true);

    try {
      const [perfisResp, permissoesResp] = await Promise.all([fetch(`${API_URL}/perfil`, {
        headers: headersAuth
      }), fetch(`${API_URL}/permissoes`, {
        headers: headersAuth
      })]);

      if (!perfisResp.ok || !permissoesResp.ok) {
        throw new Error('Falha ao carregar perfis/permissões');
      }

      setPerfis(await perfisResp.json());
      setPermissoes(await permissoesResp.json());
      setMessage('');
    } catch (err) {
      setMessage('Não foi possível carregar perfis/permissões. Verifique a API.');
    } finally {
      setLoading(false);
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    carregarDados();
  }, []);

  const criarPerfil = async () => {
    if (!descricao) return;
    setSaving(true);
    await fetch(`${API_URL}/perfil`, {
      method: 'POST',
      headers: headersAuth,
      body: JSON.stringify({
        descricao
      })
    });
    setDescricao('');
    await carregarDados();
    setSaving(false);
  };

  const salvarPermissoesPerfil = async () => {
    if (!selecionado) return;
    setSaving(true);
    await fetch(`${API_URL}/perfil/${selecionado}/permissoes`, {
      method: 'PUT',
      headers: headersAuth,
      body: JSON.stringify({
        permissoesIds: permissoesSelecionadas
      })
    });
    setMessage('Permissões atualizadas');
    await carregarDados();
    setSaving(false);
  };

  const handleSelecionaPerfil = idPerfil => {
    var _perfil$permissoes;

    setSelecionado(idPerfil);
    const perfil = perfis.find(p => p.id === idPerfil);
    const jaMarcadas = (perfil === null || perfil === void 0 ? void 0 : (_perfil$permissoes = perfil.permissoes) === null || _perfil$permissoes === void 0 ? void 0 : _perfil$permissoes.map(p => p.id)) || [];
    setPermissoesSelecionadas(jaMarcadas);
  };

  const togglePermissao = id => {
    setPermissoesSelecionadas(prev => prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]);
  };

  const perfilSelecionadoObj = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => perfis.find(p => p.id === selecionado), [perfis, selecionado]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(dan_components__WEBPACK_IMPORTED_MODULE_2__.PapperBlock, {
    title: "Perfis e Permiss\xF5es",
    desc: "Crie perfis e atribua permiss\xF5es"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, "Perfis e Permiss\xF5es")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
    direction: "row",
    justifyContent: "space-between",
    alignItems: "center",
    mb: 2
  }, message && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
    color: "primary"
  }, message), (loading || saving) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CircularProgress, {
    size: 20
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
    display: "flex",
    gap: 3,
    flexWrap: "wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Paper, {
    sx: {
      p: 2,
      minWidth: 280,
      flex: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
    variant: "h6",
    gutterBottom: true
  }, "Criar novo perfil"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {
    fullWidth: true,
    label: "Descri\xE7\xE3o do perfil",
    value: descricao,
    onChange: e => setDescricao(e.target.value),
    margin: "normal"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
    variant: "contained",
    color: "primary",
    onClick: criarPerfil,
    disabled: saving
  }, "Criar perfil"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Divider, {
    sx: {
      my: 2
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
    variant: "h6",
    gutterBottom: true
  }, "Perfis existentes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.List, {
    dense: true
  }, perfis.map(p => {
    var _p$permissoes;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.ListItem, {
      button: true,
      key: p.id,
      selected: p.id === selecionado,
      onClick: () => handleSelecionaPerfil(p.id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.ListItemText, {
      primary: p.descricao,
      secondary: `${((_p$permissoes = p.permissoes) === null || _p$permissoes === void 0 ? void 0 : _p$permissoes.length) || 0} permissões`
    }));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Paper, {
    sx: {
      p: 2,
      minWidth: 320,
      flex: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
    variant: "h6",
    gutterBottom: true
  }, "Permiss\xF5es do perfil"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {
    select: true,
    fullWidth: true,
    label: "Perfil",
    value: selecionado,
    onChange: e => handleSelecionaPerfil(e.target.value),
    margin: "normal"
  }, perfis.map(p => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
    key: p.id,
    value: p.id
  }, p.descricao))), perfilSelecionadoObj && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
    direction: "row",
    spacing: 1,
    mb: 2,
    flexWrap: "wrap"
  }, (_perfilSelecionadoObj = perfilSelecionadoObj.permissoes) === null || _perfilSelecionadoObj === void 0 ? void 0 : _perfilSelecionadoObj.map(perm => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Chip, {
    key: perm.id,
    label: perm.nome,
    size: "small"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
    variant: "subtitle1",
    gutterBottom: true
  }, "Permiss\xF5es dispon\xEDveis"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.FormGroup, null, permissoes.map(perm => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.FormControlLabel, {
    key: perm.id,
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Checkbox, {
      checked: permissoesSelecionadas.includes(perm.id),
      onChange: () => togglePermissao(perm.id),
      color: "primary"
    }),
    label: `${perm.nome} - ${perm.descricao || ''}`
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
    variant: "contained",
    color: "primary",
    onClick: salvarPermissoesPerfil,
    disabled: !selecionado || saving
  }, "Salvar permiss\xF5es"))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PerfilPermissaoPage);

/***/ }),

/***/ "./app/containers/Pages/Admin/UserCreatePage.js":
/*!******************************************************!*\
  !*** ./app/containers/Pages/Admin/UserCreatePage.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var dan_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dan-components */ "./app/components/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/node/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* provided dependency */ var process = __webpack_require__(/*! process/browser */ "./node_modules/process/browser.js");




const fallbackHost = `${window.location.protocol}//${window.location.host}`;
const API_URL = process.env.REACT_APP_API_URL && process.env.REACT_APP_API_URL.replace(/\/$/, '') || fallbackHost || 'https://portal.iecg.com.br';

const UserCreatePage = () => {
  const [perfis, setPerfis] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    name: '',
    email: '',
    username: '',
    password: '',
    perfilId: ''
  });
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const token = localStorage.getItem('token');
  const headersAuth = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  };

  const carregarPerfis = async () => {
    const resp = await fetch(`${API_URL}/perfil`, {
      headers: headersAuth
    });
    setPerfis(await resp.json());
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    carregarPerfis();
  }, []);

  const updateField = (field, value) => {
    setForm(prev => ({ ...prev,
      [field]: value
    }));
  };

  const submit = async () => {
    setLoading(true);
    setMessage('');

    try {
      const resp = await fetch(`${API_URL}/users`, {
        method: 'POST',
        headers: headersAuth,
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          username: form.username,
          password: form.password,
          perfilId: form.perfilId,
          active: true
        })
      });

      if (!resp.ok) {
        const errorData = await resp.json();
        throw new Error((errorData === null || errorData === void 0 ? void 0 : errorData.message) || 'Erro ao criar usuario');
      }

      setMessage('Usuario criado com sucesso');
      setForm({
        name: '',
        email: '',
        username: '',
        password: '',
        perfilId: ''
      });
    } catch (err) {
      setMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(dan_components__WEBPACK_IMPORTED_MODULE_2__.PapperBlock, {
    title: "Cadastro de Usuario",
    desc: "Somente administradores podem acessar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, "Cadastrar Usuario")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    maxWidth: 480
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {
    label: "Nome",
    value: form.name,
    onChange: e => updateField('name', e.target.value),
    fullWidth: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {
    label: "Email",
    value: form.email,
    onChange: e => updateField('email', e.target.value),
    fullWidth: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {
    label: "Username",
    value: form.username,
    onChange: e => updateField('username', e.target.value),
    fullWidth: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {
    label: "Senha",
    type: "password",
    value: form.password,
    onChange: e => updateField('password', e.target.value),
    fullWidth: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {
    select: true,
    label: "Perfil",
    value: form.perfilId,
    onChange: e => updateField('perfilId', e.target.value),
    fullWidth: true
  }, perfis.map(p => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
    key: p.id,
    value: p.id
  }, p.descricao))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
    variant: "contained",
    color: "primary",
    onClick: submit,
    disabled: loading
  }, loading ? 'Salvando...' : 'Cadastrar'), message && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
    color: "primary"
  }, message)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserCreatePage);

/***/ }),

/***/ "./app/containers/Pages/Admin/UsersListPage.js":
/*!*****************************************************!*\
  !*** ./app/containers/Pages/Admin/UsersListPage.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var dan_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dan-components */ "./app/components/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/node/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* provided dependency */ var process = __webpack_require__(/*! process/browser */ "./node_modules/process/browser.js");




const fallbackHost = `${window.location.protocol}//${window.location.host}`;
const API_URL = process.env.REACT_APP_API_URL && process.env.REACT_APP_API_URL.replace(/\/$/, '') || fallbackHost || 'https://portal.iecg.com.br';

const UsersListPage = () => {
  const token = localStorage.getItem('token');
  const headersAuth = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  };
  const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [perfis, setPerfis] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [selectedUser, setSelectedUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [rowsPerPage, setRowsPerPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(10);
  const [filterPerfil, setFilterPerfil] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [filterStatus, setFilterStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [filterNome, setFilterNome] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');

  const loadData = async () => {
    setLoading(true);

    try {
      const [uResp, pResp] = await Promise.all([fetch(`${API_URL}/users`, {
        headers: headersAuth
      }), fetch(`${API_URL}/perfil`, {
        headers: headersAuth
      })]);

      if (!uResp.ok || !pResp.ok) {
        throw new Error('Falha ao carregar usuarios/perfis');
      }

      setUsers(await uResp.json());
      setPerfis(await pResp.json());
      setMessage('');
    } catch (err) {
      setMessage('Não foi possível carregar usuários. Verifique a API.');
    } finally {
      setLoading(false);
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    loadData();
  }, []);

  const handleEdit = user => {
    setSelectedUser(user);
    setForm({
      name: user.name || '',
      email: user.email || '',
      username: user.username || '',
      perfilId: user.perfilId || '',
      active: user.active !== false
    });
    setOpen(true);
  };

  const handleSave = async () => {
    if (!selectedUser) return;

    try {
      setLoading(true);
      const resp = await fetch(`${API_URL}/users/${selectedUser.id}`, {
        method: 'PUT',
        headers: headersAuth,
        body: JSON.stringify(form)
      });

      if (!resp.ok) {
        const data = await resp.json();
        throw new Error((data === null || data === void 0 ? void 0 : data.message) || 'Erro ao salvar');
      }

      setMessage('Usuário atualizado');
      setOpen(false);
      await loadData();
    } catch (err) {
      setMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleToggleActive = async user => {
    try {
      setLoading(true);
      await fetch(`${API_URL}/users/${user.id}`, {
        method: 'PUT',
        headers: headersAuth,
        body: JSON.stringify({
          active: !user.active
        })
      });
      await loadData();
    } finally {
      setLoading(false);
    }
  };

  const updateField = (field, value) => {
    setForm(prev => ({ ...prev,
      [field]: value
    }));
  };

  const filteredUsers = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return users.filter(u => {
      var _u$Perfil;

      const matchPerfil = filterPerfil ? u.perfilId === filterPerfil || ((_u$Perfil = u.Perfil) === null || _u$Perfil === void 0 ? void 0 : _u$Perfil.id) === filterPerfil : true;
      const matchStatus = filterStatus ? filterStatus === 'ativo' ? u.active : !u.active : true;
      const matchNome = filterNome ? (u.name || '').toLowerCase().includes(filterNome.toLowerCase()) : true;
      return matchPerfil && matchStatus && matchNome;
    });
  }, [users, filterPerfil, filterStatus, filterNome]);
  const pagedUsers = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const start = page * rowsPerPage;
    return filteredUsers.slice(start, start + rowsPerPage);
  }, [filteredUsers, page, rowsPerPage]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(dan_components__WEBPACK_IMPORTED_MODULE_2__.PapperBlock, {
    title: "Usu\xE1rios",
    desc: "Listar, editar e inativar usu\xE1rios"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, "Usuarios")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
    direction: "row",
    justifyContent: "space-between",
    alignItems: "center",
    mb: 2
  }, message && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
    color: "primary"
  }, message), loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CircularProgress, {
    size: 20
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
    direction: {
      xs: 'column',
      md: 'row'
    },
    spacing: 2,
    mb: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {
    label: "Pesquisar por nome",
    value: filterNome,
    onChange: e => {
      setFilterNome(e.target.value);
      setPage(0);
    },
    fullWidth: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {
    select: true,
    label: "Perfil",
    value: filterPerfil,
    onChange: e => {
      setFilterPerfil(e.target.value);
      setPage(0);
    },
    sx: {
      minWidth: 200
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
    value: ""
  }, "Todos"), perfis.map(p => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
    key: p.id,
    value: p.id
  }, p.descricao))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {
    select: true,
    label: "Status",
    value: filterStatus,
    onChange: e => {
      setFilterStatus(e.target.value);
      setPage(0);
    },
    sx: {
      minWidth: 160
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
    value: ""
  }, "Todos"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
    value: "ativo"
  }, "Ativo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
    value: "inativo"
  }, "Inativo"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Table, {
    size: "small"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableHead, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, null, "Nome"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, null, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, null, "Perfil"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, null, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {
    align: "right"
  }, "A\xE7\xF5es"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableBody, null, pagedUsers.map(u => {
    var _u$Perfil2, _u$perfil;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableRow, {
      key: u.id,
      hover: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, null, u.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, null, u.email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, null, ((_u$Perfil2 = u.Perfil) === null || _u$Perfil2 === void 0 ? void 0 : _u$Perfil2.descricao) || ((_u$perfil = u.perfil) === null || _u$perfil === void 0 ? void 0 : _u$perfil.descricao) || '-'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Chip, {
      color: u.active ? 'success' : 'default',
      label: u.active ? 'Ativo' : 'Inativo',
      size: "small"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {
      align: "right"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
      direction: "row",
      spacing: 1,
      justifyContent: "flex-end"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
      size: "small",
      variant: "outlined",
      onClick: () => handleEdit(u)
    }, "Editar"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
      size: "small",
      variant: "text",
      onClick: () => handleToggleActive(u)
    }, u.active ? 'Inativar' : 'Reativar'))));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TablePagination, {
    component: "div",
    count: filteredUsers.length,
    page: page,
    onPageChange: (e, newPage) => setPage(newPage),
    rowsPerPage: rowsPerPage,
    onRowsPerPageChange: e => {
      setRowsPerPage(parseInt(e.target.value, 10));
      setPage(0);
    },
    rowsPerPageOptions: [5, 10, 20]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Dialog, {
    open: open,
    onClose: () => setOpen(false),
    fullWidth: true,
    maxWidth: "sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.DialogTitle, null, "Editar usu\xE1rio"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.DialogContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    mt: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {
    label: "Nome",
    value: form.name || '',
    onChange: e => updateField('name', e.target.value),
    fullWidth: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {
    label: "Email",
    value: form.email || '',
    onChange: e => updateField('email', e.target.value),
    fullWidth: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {
    label: "Username",
    value: form.username || '',
    onChange: e => updateField('username', e.target.value),
    fullWidth: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {
    select: true,
    label: "Perfil",
    value: form.perfilId || '',
    onChange: e => updateField('perfilId', e.target.value),
    fullWidth: true
  }, perfis.map(p => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
    key: p.id,
    value: p.id
  }, p.descricao))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.FormControlLabel, {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Switch, {
      checked: form.active !== false,
      onChange: e => updateField('active', e.target.checked)
    }),
    label: "Ativo"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.DialogActions, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
    onClick: () => setOpen(false)
  }, "Cancelar"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
    variant: "contained",
    onClick: handleSave
  }, "Salvar"))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UsersListPage);

/***/ }),

/***/ "./app/containers/Pages/BlankPage/index.js":
/*!*************************************************!*\
  !*** ./app/containers/Pages/BlankPage/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var dan_api_dummy_brand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dan-api/dummy/brand */ "./app/api/dummy/brand.js");
/* harmony import */ var dan_api_dummy_brand__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dan_api_dummy_brand__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dan_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dan-components */ "./app/components/index.js");





function BlankPage() {
  const title = (dan_api_dummy_brand__WEBPACK_IMPORTED_MODULE_2___default().name) + ' - Blank Page';
  const description = (dan_api_dummy_brand__WEBPACK_IMPORTED_MODULE_2___default().desc);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "description",
    content: description
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    property: "og:title",
    content: title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    property: "og:description",
    content: description
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    property: "twitter:title",
    content: title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    property: "twitter:description",
    content: description
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(dan_components__WEBPACK_IMPORTED_MODULE_3__.PapperBlock, {
    title: "Blank Page",
    desc: "Some text description"
  }, "Content"));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlankPage);

/***/ }),

/***/ "./app/containers/Pages/MiaPage/AttendanceDetailPage.js":
/*!**************************************************************!*\
  !*** ./app/containers/Pages/MiaPage/AttendanceDetailPage.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/node/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/index.js");
/* harmony import */ var dan_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dan-components */ "./app/components/index.js");
/* provided dependency */ var process = __webpack_require__(/*! process/browser */ "./node_modules/process/browser.js");








const resolveApiUrl = () => {
  if (process.env.REACT_APP_API_URL) {
    return process.env.REACT_APP_API_URL.replace(/\/$/, '');
  }

  const {
    protocol,
    hostname,
    port
  } = window.location;

  if (port === '3005') {
    return `${protocol}//${hostname}:3005`;
  }

  return `${protocol}//${hostname}${port ? `:${port}` : ''}`;
};

const formatDateBr = value => {
  if (!value) return '-';
  const parts = value.split('-');

  if (parts.length === 3) {
    const [year, month, day] = parts;
    return `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`;
  }

  try {
    return new Date(value).toLocaleDateString('pt-BR');
  } catch (error) {
    return value;
  }
};

const AttendanceDetailPage = () => {
  const {
    id
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useParams)();
  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useHistory)();
  const API_URL = resolveApiUrl();
  const [lista, setLista] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [participantes, setParticipantes] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [tipoFiltro, setTipoFiltro] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('all');
  const [notification, setNotification] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const fetchDetalhes = async () => {
    const token = localStorage.getItem('token');
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/mia/attendance/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.erro || 'Erro ao carregar lista');
      }

      setLista(data.lista);
      setParticipantes(data.participantes || []);
    } catch (error) {
      console.error(error);
      setNotification(error.message);
    } finally {
      setLoading(false);
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchDetalhes();
  }, [id]);

  const normalizeTipo = valor => valor && valor.trim() ? valor : 'Sem tipo definido';

  const tipoOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const valores = new Set(participantes.map(item => normalizeTipo(item.tipo)));
    return Array.from(valores);
  }, [participantes]);

  const handleToggle = participanteId => {
    setParticipantes(prev => prev.map(item => item.id === participanteId ? { ...item,
      presente: !item.presente
    } : item));
  };

  const handleSalvar = async () => {
    const token = localStorage.getItem('token');

    try {
      const payload = {
        presencas: participantes.map(item => ({
          aposentadoId: item.id,
          presente: !!item.presente,
          idade: item.idade
        }))
      };
      const response = await fetch(`${API_URL}/mia/attendance/${id}/presencas`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.erro || 'Erro ao salvar Presenças');
      }

      setParticipantes(data.participantes || []);
      setNotification('Presenças atualizadas com sucesso!');
    } catch (error) {
      console.error(error);
      setNotification(error.message);
    }
  };

  const filteredParticipantes = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const termo = searchTerm.toLowerCase();
    return participantes.filter(participante => {
      const nome = (participante.nome || '').toLowerCase();
      const tipoAtual = normalizeTipo(participante.tipo);

      if (!nome.includes(termo)) {
        return false;
      }

      if (tipoFiltro !== 'all' && tipoAtual !== tipoFiltro) {
        return false;
      }

      return true;
    });
  }, [participantes, searchTerm, tipoFiltro]);

  const handleExportFilledPdf = () => {
    if (!lista) return;
    const doc = new jspdf__WEBPACK_IMPORTED_MODULE_3__["default"]();
    doc.setFontSize(14);
    doc.text(`Lista de Presença - ${lista.titulo}`, 14, 15);
    doc.setFontSize(11);
    doc.text(`Data: ${formatDateBr(lista.dataReferencia)}`, 14, 22);
    let y = 32;
    filteredParticipantes.forEach((participante, index) => {
      if (y > 280) {
        doc.addPage();
        y = 20;
      }

      doc.text(`${index + 1}. ${participante.nome} - ${participante.telefone || ''} - ${participante.presente ? 'Presente' : 'Ausente'}`, 14, y);
      y += 8;
    });
    doc.save(`lista-presenca-${lista.id}.pdf`);
  };

  const handleExportBlankPdf = () => {
    if (!lista) return;
    const doc = new jspdf__WEBPACK_IMPORTED_MODULE_3__["default"]();
    doc.setFontSize(14);
    doc.text(`Lista de Presença - ${lista.titulo}`, 14, 15);
    doc.setFontSize(11);
    doc.text(`Data: ${formatDateBr(lista.dataReferencia)}`, 14, 22);
    doc.text('Folha para preenchimento manual', 14, 28);
    const colNome = 14;
    const colTelefone = 100;
    const colPresenca = 160;
    let y = 36;

    const printHeader = () => {
      doc.text('Nome', colNome, y);
      doc.text('Telefone', colTelefone, y);
      doc.text('Presenca', colPresenca, y);
      y += 6;
    };

    printHeader();
    filteredParticipantes.forEach(participante => {
      if (y > 280) {
        doc.addPage();
        y = 20;
        printHeader();
      }

      doc.text(participante.nome, colNome, y);
      doc.text(participante.telefone || '-', colTelefone, y);
      doc.text('__________', colPresenca, y);
      y += 8;
    });
    doc.save(`lista-presenca-${lista.id}-folha-manual.pdf`);
  };

  if (!lista) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, "Lista de Presen\xE7a - MIA")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(dan_components__WEBPACK_IMPORTED_MODULE_5__.PapperBlock, {
      title: "Carregando lista",
      desc: "Aguarde..."
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, null, "Buscando informacoes...")));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, "Lista de Presen\xE7a - ", lista.titulo)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(dan_components__WEBPACK_IMPORTED_MODULE_5__.PapperBlock, {
    title: lista.titulo,
    desc: "Marque as Presen\xE7as deste dia"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Toolbar, {
    sx: {
      padding: 0,
      marginBottom: 2,
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
    display: "flex",
    gap: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__.IconButton, {
    onClick: () => history.push('/app/mia/listas-presenca')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_4__.ArrowBack, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {
    variant: "subtitle1"
  }, "Data: ", formatDateBr(lista.dataReferencia)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
    display: "flex",
    gap: 1,
    flexWrap: "wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {
    variant: "outlined",
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_4__.Download, null),
    onClick: handleExportFilledPdf
  }, "Exportar preenchido"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {
    variant: "outlined",
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_4__.Download, null),
    onClick: handleExportBlankPdf
  }, "Exportar folha"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {
    variant: "contained",
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_4__.Save, null),
    onClick: handleSalvar,
    disabled: loading
  }, "Salvar Presen\xE7as"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
    display: "flex",
    gap: 2,
    mb: 2,
    flexWrap: "wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__.TextField, {
    label: "Buscar por nome",
    value: searchTerm,
    onChange: e => setSearchTerm(e.target.value),
    size: "small"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__.TextField, {
    select: true,
    label: "Tipo de pessoa",
    value: tipoFiltro,
    onChange: e => setTipoFiltro(e.target.value),
    size: "small",
    sx: {
      minWidth: 200
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__.MenuItem, {
    value: "all"
  }, "Todos os tipos"), tipoOptions.map(tipo => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__.MenuItem, {
    key: tipo,
    value: tipo
  }, tipo)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__.TableContainer, {
    component: _mui_material__WEBPACK_IMPORTED_MODULE_6__.Paper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Table, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__.TableHead, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__.TableRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__.TableCell, null, "Presente"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__.TableCell, null, "Nome"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__.TableCell, null, "Telefone"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__.TableBody, null, filteredParticipantes.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__.TableRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__.TableCell, {
    colSpan: 3,
    align: "center"
  }, "Nenhum participante encontrado.")), filteredParticipantes.map(participante => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__.TableRow, {
    key: participante.id,
    hover: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__.TableCell, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Checkbox, {
    checked: !!participante.presente,
    onChange: () => handleToggle(participante.id),
    color: "primary"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__.TableCell, null, participante.nome), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__.TableCell, null, participante.telefone || '-'))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(dan_components__WEBPACK_IMPORTED_MODULE_5__.Notification, {
    message: notification,
    close: () => setNotification('')
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AttendanceDetailPage);

/***/ }),

/***/ "./app/containers/Pages/MiaPage/AttendanceListPage.js":
/*!************************************************************!*\
  !*** ./app/containers/Pages/MiaPage/AttendanceListPage.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/node/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/index.js");
/* harmony import */ var dan_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dan-components */ "./app/components/index.js");
/* provided dependency */ var process = __webpack_require__(/*! process/browser */ "./node_modules/process/browser.js");







const resolveApiUrl = () => {
  if (process.env.REACT_APP_API_URL) {
    return process.env.REACT_APP_API_URL.replace(/\/$/, '');
  }

  const {
    protocol,
    hostname,
    port
  } = window.location;

  if (port === '3005') {
    return `${protocol}//${hostname}:3005`;
  }

  return `${protocol}//${hostname}${port ? `:${port}` : ''}`;
};

const formInicial = {
  titulo: '',
  dataReferencia: new Date().toISOString().slice(0, 10),
  observacoes: ''
};

const formatDateBr = value => {
  if (!value) return '-';
  const parts = value.split('-');

  if (parts.length === 3) {
    const [year, month, day] = parts;
    return `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`;
  }

  try {
    return new Date(value).toLocaleDateString('pt-BR');
  } catch (error) {
    return value;
  }
};

const AttendanceListPage = () => {
  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useHistory)();
  const API_URL = resolveApiUrl();
  const [listas, setListas] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const [totalPages, setTotalPages] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const [rowsPerPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(10);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [notification, setNotification] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [totalRegistros, setTotalRegistros] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [openDialog, setOpenDialog] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(formInicial);
  const [loadingDelete, setLoadingDelete] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const fetchListas = async () => {
    const token = localStorage.getItem('token');
    setLoading(true);

    try {
      const query = new URLSearchParams({
        page,
        limit: rowsPerPage
      }).toString();
      const response = await fetch(`${API_URL}/mia/attendance?${query}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('Erro ao carregar listas de presença');
      }

      const data = await response.json();
      setListas(data.registros || []);
      setTotalPages(data.totalPaginas || 1);
    } catch (error) {
      console.error(error);
      setNotification(error.message);
    } finally {
      setLoading(false);
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchListas();
  }, [page]);

  const handleSubmit = async () => {
    if (!form.titulo || !form.dataReferencia) {
      setNotification('Informe título e data para criar a lista.');
      return;
    }

    const token = localStorage.getItem('token');

    try {
      const payload = { ...form
      };
      const response = await fetch(`${API_URL}/mia/attendance`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.erro || 'Erro ao criar lista');
      }

      setNotification('Lista criada com sucesso!');
      setOpenDialog(false);
      setForm(formInicial);
      fetchListas();
    } catch (error) {
      console.error(error);
      setNotification(error.message);
    }
  };

  const handleDelete = async lista => {
    if (!window.confirm('Excluir esta lista? Essa ação só é permitida enquanto não houver presenças salvas.')) {
      return;
    }

    const token = localStorage.getItem('token');
    setLoadingDelete(true);

    try {
      const response = await fetch(`${API_URL}/mia/attendance/${lista.id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (response.status === 204) {
        setNotification('Lista excluida com sucesso!');
        fetchListas();
        return;
      }

      let errorMessage = 'Nao foi possivel excluir a lista.';
      const contentType = response.headers.get('content-type');

      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        errorMessage = (data === null || data === void 0 ? void 0 : data.erro) || errorMessage;
      } else {
        const text = await response.text();

        if (text) {
          errorMessage = text;
        }
      }

      throw new Error(errorMessage);
    } catch (error) {
      console.error(error);
      setNotification(error.message);
    } finally {
      setLoadingDelete(false);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, "Listas de Presen\uFFFD\uFFFDa - MIA")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(dan_components__WEBPACK_IMPORTED_MODULE_4__.PapperBlock, {
    title: "Listas de Presen\xE7a",
    desc: "Controle as Presen\xE7as do MIA"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Toolbar, {
    sx: {
      justifyContent: 'space-between',
      padding: 0,
      marginBottom: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    variant: "h6"
  }, loading ? 'Carregando...' : `${listas.length} listas encontradas`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {
    variant: "contained",
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_3__.Add, null),
    onClick: () => setOpenDialog(true)
  }, "Nova lista")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableContainer, {
    component: _mui_material__WEBPACK_IMPORTED_MODULE_5__.Paper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Table, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableHead, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, null, "T\xEDtulo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, null, "Data"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, null, "Observa\xE7\xF5es"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {
    align: "right"
  }, "A\xE7\xF5es"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableBody, null, listas.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {
    colSpan: 5,
    align: "center"
  }, "Nenhuma lista criada ainda.")), listas.map(lista => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableRow, {
    key: lista.id,
    hover: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, null, lista.titulo), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, null, formatDateBr(lista.dataReferencia)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, null, lista.observacoes || '-'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {
    align: "right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.IconButton, {
    color: "primary",
    onClick: () => history.push(`/app/mia/listas-presenca/${lista.id}`)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_3__.Visibility, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.IconButton, {
    color: "error",
    disabled: loadingDelete,
    onClick: () => handleDelete(lista)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_3__.Delete, null)))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
    mt: 2,
    display: "flex",
    justifyContent: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Pagination, {
    count: totalPages,
    page: page,
    onChange: (e, value) => setPage(value),
    color: "primary"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Dialog, {
    open: openDialog,
    onClose: () => setOpenDialog(false),
    fullWidth: true,
    maxWidth: "sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.DialogTitle, null, "Nova lista de presen\xE7a"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.DialogContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    mt: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TextField, {
    label: "T\xEDtulo",
    value: form.titulo,
    onChange: e => setForm({ ...form,
      titulo: e.target.value
    }),
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TextField, {
    label: "Data",
    type: "date",
    value: form.dataReferencia,
    onChange: e => setForm({ ...form,
      dataReferencia: e.target.value
    }),
    InputLabelProps: {
      shrink: true
    },
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TextField, {
    label: "Observa\xE7\xF5es",
    multiline: true,
    minRows: 3,
    value: form.observacoes,
    onChange: e => setForm({ ...form,
      observacoes: e.target.value
    })
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.DialogActions, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {
    onClick: () => setOpenDialog(false)
  }, "Cancelar"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {
    variant: "contained",
    onClick: handleSubmit
  }, "Salvar"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(dan_components__WEBPACK_IMPORTED_MODULE_4__.Notification, {
    message: notification,
    close: () => setNotification('')
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AttendanceListPage);

/***/ }),

/***/ "./app/containers/Pages/MiaPage/MiaDetailsPage.js":
/*!********************************************************!*\
  !*** ./app/containers/Pages/MiaPage/MiaDetailsPage.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var dan_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dan-components */ "./app/components/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/node/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/index.js");
/* provided dependency */ var process = __webpack_require__(/*! process/browser */ "./node_modules/process/browser.js");







const MiaDetailsPage = () => {
  var _aposentado$user, _aposentado$user2, _aposentado$user3, _aposentado$user4, _aposentado$user5, _aposentado$user6, _aposentado$user7, _aposentado$user8, _aposentado$user9, _aposentado$user10, _aposentado$user11, _aposentado$filhos, _aposentado$remedios;

  const [aposentado, setAposentado] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useHistory)();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");

  const formatDate = dateString => {
    if (!dateString) return "Não informado";
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
  };

  const formatCPF = cpf => {
    if (!cpf) return "Não informado";
    const digits = cpf.replace(/\D/g, "");
    return digits.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let isMounted = true;

    const fetchAposentado = async () => {
      var _process$env$REACT_AP;

      const token = localStorage.getItem('token');
      const API_URL = ((_process$env$REACT_AP = process.env.REACT_APP_API_URL) === null || _process$env$REACT_AP === void 0 ? void 0 : _process$env$REACT_AP.replace(/\/$/, '')) || 'https://portal.iecg.com.br';

      try {
        const response = await fetch(`${API_URL}/mia/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error("Erro ao carregar os detalhes");
        }

        const data = await response.json();

        if (isMounted) {
          setAposentado(data);
        }
      } catch (error) {
        if (isMounted) {
          console.error("Erro ao buscar Mia:", error);
        }
      }
    };

    if (id) {
      fetchAposentado();
    } else {
      console.warn("ID não encontrado na URL!");
    }

    return () => {
      isMounted = false;
    };
  }, [id]);
  if (!aposentado) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    color: "error"
  }, "Erro ao carregar os dados. Verifique a conex\xE3o.");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, "Detalhes de ", (_aposentado$user = aposentado.user) === null || _aposentado$user === void 0 ? void 0 : _aposentado$user.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(dan_components__WEBPACK_IMPORTED_MODULE_3__.PapperBlock, {
    title: "Detalhes do Mia",
    desc: "Informa\xE7\xF5es completas"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
    display: "flex",
    justifyContent: "flex-end",
    mb: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {
    variant: "contained",
    color: "primary",
    onClick: () => history.push('/app/mia/cadastrar', {
      aposentado,
      pageTitle: 'Editar Dados'
    })
  }, "Editar")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Paper, {
    style: {
      padding: 20,
      marginTop: 20
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
    display: "flex",
    alignItems: "center",
    gap: 2,
    mb: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Avatar, {
    src: ((_aposentado$user2 = aposentado.user) === null || _aposentado$user2 === void 0 ? void 0 : _aposentado$user2.image) || "https://via.placeholder.com/100",
    alt: (_aposentado$user3 = aposentado.user) === null || _aposentado$user3 === void 0 ? void 0 : _aposentado$user3.name,
    sx: {
      width: 80,
      height: 80
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    variant: "h5",
    fontWeight: "bold"
  }, (_aposentado$user4 = aposentado.user) === null || _aposentado$user4 === void 0 ? void 0 : _aposentado$user4.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    variant: "body2",
    color: "textSecondary",
    component: "span"
  }, aposentado.profissao || "Sem profissão"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.List, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItemIcon, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_4__.Person, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItemText, {
    primary: "CPF",
    secondary: formatCPF((_aposentado$user5 = aposentado.user) === null || _aposentado$user5 === void 0 ? void 0 : _aposentado$user5.cpf)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItemIcon, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_4__.CalendarToday, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItemText, {
    primary: "Data de Nascimento",
    secondary: formatDate((_aposentado$user6 = aposentado.user) === null || _aposentado$user6 === void 0 ? void 0 : _aposentado$user6.data_nascimento)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItemIcon, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_4__.Phone, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItemText, {
    primary: "Telefone",
    secondary: ((_aposentado$user7 = aposentado.user) === null || _aposentado$user7 === void 0 ? void 0 : _aposentado$user7.telefone) || "Não informado"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItemIcon, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_4__.Person, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItemText, {
    primary: "Tipo de Pessoa",
    secondary: aposentado.tipo_pessoa || "Não informado"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItemIcon, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_4__.LocationOn, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItemText, {
    primary: "Endere\xE7o",
    secondary: ((_aposentado$user8 = aposentado.user) === null || _aposentado$user8 === void 0 ? void 0 : _aposentado$user8.endereco) || "Não informado"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItemIcon, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_4__.Person, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItemText, {
    primary: "Estado Civil",
    secondary: ((_aposentado$user9 = aposentado.user) === null || _aposentado$user9 === void 0 ? void 0 : _aposentado$user9.estado_civil) || "Não informado"
  })), aposentado.estado_civil === "Casado" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItemIcon, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_4__.FamilyRestroom, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItemText, {
    primary: "Nome do Esposo(a)",
    secondary: ((_aposentado$user10 = aposentado.user) === null || _aposentado$user10 === void 0 ? void 0 : _aposentado$user10.nome_esposo) || "Não informado"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItemIcon, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_4__.Facebook, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItemText, {
    primary: "Rede Social",
    secondary: ((_aposentado$user11 = aposentado.user) === null || _aposentado$user11 === void 0 ? void 0 : _aposentado$user11.rede_social) || "Não informado"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItemIcon, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_4__.School, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItemText, {
    primary: "Escolas",
    secondary: aposentado.escolas || "Não informado"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItemIcon, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_4__.Healing, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItemText, {
    primary: "Patologia",
    secondary: aposentado.patologia || "Não informado"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItemIcon, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_4__.LocalHospital, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItemText, {
    primary: "Hospital de Refer\xEAncia",
    secondary: aposentado.hospital || "Não informado"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItemIcon, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_4__.MedicalServices, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItemText, {
    primary: "Plano de Sa\xFAde",
    secondary: aposentado.plano_saude || "Não informado"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Divider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    variant: "h6",
    sx: {
      mt: 2
    }
  }, "Filhos"), (_aposentado$filhos = aposentado.filhos) === null || _aposentado$filhos === void 0 ? void 0 : _aposentado$filhos.map((filho, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItem, {
    key: index
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItemText, {
    primary: filho.nome,
    secondary: `Telefone: ${filho.telefone}`
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Divider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    variant: "h6",
    sx: {
      mt: 2
    }
  }, "Rem\xE9dios"), (_aposentado$remedios = aposentado.remedios) === null || _aposentado$remedios === void 0 ? void 0 : _aposentado$remedios.map((remedio, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItem, {
    key: index
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItemText, {
    primary: remedio.nome,
    secondary: `Indicação: ${remedio.indicacao}`
  })))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MiaDetailsPage);

/***/ }),

/***/ "./app/containers/Pages/MiaPage/MiaListPage.js":
/*!*****************************************************!*\
  !*** ./app/containers/Pages/MiaPage/MiaListPage.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var dan_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dan-components */ "./app/components/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/node/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/index.js");
/* provided dependency */ var process = __webpack_require__(/*! process/browser */ "./node_modules/process/browser.js");







const MiaListPage = () => {
  var _process$env$REACT_AP;

  const title = "Listagem Ministério MIA";
  const description = "Listagem de todos os Integrantes do MIA cadastrados";
  const [aposentados, setAposentados] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const [totalPages, setTotalPages] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const [rowsPerPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(10);
  const [notification, setNotification] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [totalRegistros, setTotalRegistros] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useHistory)(); // Trim env var to remove accidental spaces and fallback to current origin for local dev

  const API_URL = (((_process$env$REACT_AP = process.env.REACT_APP_API_URL) === null || _process$env$REACT_AP === void 0 ? void 0 : _process$env$REACT_AP.trim()) || window.location.origin || 'https://portal.iecg.com.br').replace(/\/$/, '');

  const fetchAposentados = async () => {
    const token = localStorage.getItem("token");

    try {
      const query = new URLSearchParams({
        name: searchTerm,
        page,
        limit: rowsPerPage
      }).toString();
      const response = await fetch(`${API_URL}/mia?${query}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error("Erro ao carregar dados");
      }

      const data = await response.json();
      const registros = data.registros || [];
      setAposentados(registros);
      setTotalPages(data.totalPaginas || 1);
      setTotalRegistros(data.totalRegistros || registros.length);
    } catch (error) {
      console.error("Erro ao buscar Mia:", error);
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchAposentados();
  }, [page, searchTerm]);

  const handleDelete = async id => {
    const confirm = window.confirm("Tem certeza que deseja excluir este registro?");
    if (!confirm) return;
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(`${API_URL}/mia/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      });

      if (!response.ok) {
        const data = await response.json();
        const errorMessage = data.erro || data.message || "Erro ao deletar Mia.";
        setNotification(`Erro: ${errorMessage}`);
        return;
      }

      setAposentados(prev => prev.filter(p => p.id !== id));
      setNotification("Registro deletado com sucesso!");
    } catch (error) {
      console.error("Erro ao deletar Mia:", error);
      setNotification("Erro ao conectar com o servidor. Por favor, tente novamente mais tarde.");
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "description",
    content: description
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(dan_components__WEBPACK_IMPORTED_MODULE_3__.PapperBlock, {
    title: "Listagem Minist\xE9rio Mia",
    desc: "Todos os dados do MIA"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Paper, {
    style: {
      padding: 20,
      marginTop: 20
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    mb: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TextField, {
    label: "Pesquisar por nome",
    variant: "outlined",
    size: "small",
    value: searchTerm,
    onChange: e => {
      setSearchTerm(e.target.value);
      setPage(1); // reseta a paginação ao pesquisar
    },
    style: {
      width: 300
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.List, null, aposentados.map((item, index) => {
    var _item$user, _item$user2, _item$user3;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
      key: item.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItem, {
      style: {
        transition: "background 0.3s",
        borderRadius: 8,
        padding: "10px 25px",
        "&:hover": {
          backgroundColor: "#f5f5f5"
        }
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItemAvatar, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Avatar, {
      src: ((_item$user = item.user) === null || _item$user === void 0 ? void 0 : _item$user.image) || "https://via.placeholder.com/100",
      alt: (_item$user2 = item.user) === null || _item$user2 === void 0 ? void 0 : _item$user2.name,
      sx: {
        width: 60,
        height: 60
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItemText, {
      style: {
        padding: "10px"
      },
      primary: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
        variant: "h6",
        fontWeight: "bold"
      }, (_item$user3 = item.user) === null || _item$user3 === void 0 ? void 0 : _item$user3.name),
      secondary: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, item.remedios && item.remedios.length > 0 ? item.remedios.map((remedio, remedioIndex) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
        key: remedioIndex,
        variant: "body2",
        color: "textSecondary"
      }, remedio.nome, " - ", remedio.indicacao)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
        variant: "body2",
        color: "textSecondary"
      }, "Sem Rem\xE9dio cadastrado"))
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
      display: "flex",
      alignItems: "center",
      gap: 1
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.IconButton, {
      color: "primary",
      onClick: () => history.push(`/app/mia/detalhes?id=${item.id}`, {
        pageTitle: 'Detalhes Dados do Mia'
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_4__.Visibility, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.IconButton, {
      color: "secondary",
      onClick: () => history.push('/app/mia/cadastrar', {
        aposentado: item,
        pageTitle: 'Editar Mia'
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_4__.Edit, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.IconButton, {
      color: "error",
      onClick: () => handleDelete(item.id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_4__.Delete, null)))), index !== aposentados.length - 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Divider, null));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    variant: "body2",
    color: "textSecondary"
  }, "Total de registros: ", totalRegistros), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
    mt: 2,
    display: "flex",
    justifyContent: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Pagination, {
    count: totalPages,
    page: page,
    onChange: (e, value) => setPage(value),
    color: "primary"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(dan_components__WEBPACK_IMPORTED_MODULE_3__.Notification, {
    message: notification,
    close: () => setNotification('')
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MiaListPage);

/***/ }),

/***/ "./app/containers/Pages/MiaPage/index.js":
/*!***********************************************!*\
  !*** ./app/containers/Pages/MiaPage/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var dan_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dan-components */ "./app/components/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/node/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/index.js");
/* harmony import */ var _mui_icons_material_AccountCircle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/AccountCircle */ "./node_modules/@mui/icons-material/AccountCircle.js");
/* harmony import */ var react_webcam__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-webcam */ "./node_modules/react-webcam/dist/react-webcam.js");
/* harmony import */ var react_webcam__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_webcam__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _utils_formatPhone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/formatPhone */ "./app/utils/formatPhone.js");
/* harmony import */ var _utils_formatCpf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/formatCpf */ "./app/utils/formatCpf.js");
/* provided dependency */ var process = __webpack_require__(/*! process/browser */ "./node_modules/process/browser.js");
// Página completa de cadastro com todos os campos e suporte à edição, webcam e upload de foto












const MiaPage = () => {
  var _location$state;

  const title = 'Cadastro do MIA';
  const description = 'Formulário para registrar informações';
  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useHistory)();
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useLocation)();
  const aposentadoEditando = (_location$state = location.state) === null || _location$state === void 0 ? void 0 : _location$state.aposentado;
  const isEdit = Boolean(aposentadoEditando);
  const [aposentadoId, setAposentadoId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const formDataInicial = {
    id: '',
    name: '',
    email: '',
    data_nascimento: '',
    filhos: [],
    endereco: '',
    telefone: '',
    estado_civil: '',
    nome_esposo: '',
    profissao: '',
    rede_social: '',
    indicacao: '',
    frequenta_celula: false,
    batizado: false,
    encontro: false,
    escolas: '',
    patologia: '',
    plano_saude: '',
    hospital: '',
    remedios: [],
    habilidades: '',
    analfabeto: false,
    image: '',
    cpf: '',
    tipo_pessoa: ''
  };
  const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(formDataInicial);
  const [notification, setNotification] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [showWebcam, setShowWebcam] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [capturedImage, setCapturedImage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const webcamRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isEdit && aposentadoEditando) {
      const userData = aposentadoEditando.user || {};
      const filhosFormatados = Array.isArray(aposentadoEditando.filhos) ? aposentadoEditando.filhos.map(filho => ({ ...filho,
        telefone: (0,_utils_formatPhone__WEBPACK_IMPORTED_MODULE_6__.formatPhoneNumber)(filho.telefone || '')
      })) : [];
      const data = { ...formDataInicial,
        ...aposentadoEditando,
        ...userData,
        image: userData.image || aposentadoEditando.image || '',
        nome: userData.name || '',
        email: userData.email || '',
        cpf: (0,_utils_formatCpf__WEBPACK_IMPORTED_MODULE_7__.formatCpf)(userData.cpf || aposentadoEditando.cpf || ''),
        data_nascimento: userData.data_nascimento || '',
        endereco: userData.endereco || '',
        telefone: (0,_utils_formatPhone__WEBPACK_IMPORTED_MODULE_6__.formatPhoneNumber)(userData.telefone || aposentadoEditando.telefone || ''),
        estado_civil: userData.estado_civil || '',
        nome_esposo: userData.nome_esposo || '',
        profissao: userData.profissao || '',
        frequenta_celula: userData.frequenta_celula || false,
        batizado: userData.batizado || false,
        encontro: userData.encontro || false,
        escolas: userData.escolas || '',
        filhos: filhosFormatados
      };
      setFormData(data);
      setCapturedImage(data.image);
      setAposentadoId(aposentadoEditando.id); // ��? aqui Ǹ o pulo do gato
    }
  }, [isEdit, aposentadoEditando]);

  const capturePhoto = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();

      if (imageSrc) {
        setCapturedImage(imageSrc);
        setFormData({ ...formData,
          image: imageSrc
        });
        setShowWebcam(false);
      }
    }
  };

  const resetPhoto = () => {
    setCapturedImage('');
    setFormData({ ...formData,
      image: ''
    });
    setShowWebcam(false);
  };

  const handleFileUpload = e => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setCapturedImage(reader.result);
        setFormData({ ...formData,
          image: reader.result
        });
      };

      reader.readAsDataURL(file);
    }
  };

  const handleChange = e => {
    const {
      name,
      value,
      type,
      checked
    } = e.target;
    let nextValue = value;

    if (type === 'checkbox') {
      nextValue = checked;
    } else if (name === 'telefone') {
      nextValue = (0,_utils_formatPhone__WEBPACK_IMPORTED_MODULE_6__.formatPhoneNumber)(value);
    } else if (name === 'cpf') {
      nextValue = (0,_utils_formatCpf__WEBPACK_IMPORTED_MODULE_7__.formatCpf)(value);
    }

    setFormData({ ...formData,
      [name]: nextValue
    });
  };

  const handleAddChild = () => {
    setFormData({ ...formData,
      filhos: [...formData.filhos, {
        nome: '',
        telefone: ''
      }]
    });
  };

  const handleRemoveChild = index => {
    const updatedFilhos = formData.filhos.filter((_, i) => i !== index);
    setFormData({ ...formData,
      filhos: updatedFilhos
    });
  };

  const handleChildChange = (index, e) => {
    const {
      name,
      value
    } = e.target;
    const updatedFilhos = [...formData.filhos];
    updatedFilhos[index][name] = name === 'telefone' ? (0,_utils_formatPhone__WEBPACK_IMPORTED_MODULE_6__.formatPhoneNumber)(value) : value;
    setFormData({ ...formData,
      filhos: updatedFilhos
    });
  };

  const handleAddMedicine = () => {
    setFormData({ ...formData,
      remedios: [...formData.remedios, {
        nome: '',
        indicacao: ''
      }]
    });
  };

  const handleRemoveMedicine = index => {
    const updatedRemedios = formData.remedios.filter((_, i) => i !== index);
    setFormData({ ...formData,
      remedios: updatedRemedios
    });
  };

  const handleMedicineChange = (index, e) => {
    const {
      name,
      value
    } = e.target;
    const updatedRemedios = [...formData.remedios];
    updatedRemedios[index][name] = value;
    setFormData({ ...formData,
      remedios: updatedRemedios
    });
  };

  const handleSubmit = async e => {
    var _process$env$REACT_AP;

    e.preventDefault();
    const token = localStorage.getItem('token');
    const API_URL = ((_process$env$REACT_AP = process.env.REACT_APP_API_URL) === null || _process$env$REACT_AP === void 0 ? void 0 : _process$env$REACT_AP.replace(/\/$/, '')) || 'https://portal.iecg.com.br';
    const method = isEdit ? 'PUT' : 'POST';
    const endpoint = isEdit ? `${API_URL}/mia/${aposentadoId}` : `${API_URL}/mia`; // Remove o ID se for cadastro (para evitar erro do UUID)

    const dadosParaEnviar = { ...formData
    };

    if (!isEdit) {
      delete dadosParaEnviar.id;
    }

    try {
      const response = await fetch(endpoint, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(dadosParaEnviar)
      });
      const data = await response.json();

      if (response.ok) {
        setNotification(isEdit ? 'Atualização realizada com sucesso!' : 'Cadastro realizado com sucesso!');

        if (!isEdit) {
          setFormData({ ...formDataInicial
          });
          setCapturedImage('');
          setShowWebcam(false);
        } else {
          history.push({
            pathname: `/app/mia`,
            state: {
              pageTitle: 'Listagem Mia'
            }
          });
        }
      } else {
        const errorMessage = data.erro || data.message || 'Falha ao processar a solicitação.';
        setNotification(`Erro: ${errorMessage}`);
      }
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      setNotification('Erro ao conectar com o servidor. Por favor, tente novamente mais tarde.');
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, isEdit ? 'Editar Mia' : title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "description",
    content: description
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(dan_components__WEBPACK_IMPORTED_MODULE_2__.PapperBlock, {
    title: isEdit ? 'Editar Mia' : 'Cadastro Mia',
    desc: "Preencha os dados abaixo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Grid, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {
    variant: "h6"
  }, "Foto do Mia"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      width: 150,
      height: 150,
      borderRadius: '50%',
      overflow: 'hidden',
      border: '2px solid #ccc',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, showWebcam ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_webcam__WEBPACK_IMPORTED_MODULE_4___default()), {
    audio: false,
    ref: webcamRef,
    screenshotFormat: "image/jpeg",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : capturedImage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: capturedImage,
    alt: "Foto Capturada",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_AccountCircle__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      width: '80%',
      height: '80%',
      color: '#ccc'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      marginTop: 10,
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, !showWebcam && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Button, {
    variant: "outlined",
    onClick: () => setShowWebcam(true)
  }, "Habilitar Webcam"), showWebcam && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Button, {
    variant: "contained",
    color: "primary",
    onClick: capturePhoto
  }, "Capturar Foto"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Button, {
    variant: "outlined",
    component: "label"
  }, "Upload da Foto", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "file",
    hidden: true,
    accept: "image/*",
    onChange: handleFileUpload
  })), capturedImage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Button, {
    variant: "outlined",
    color: "error",
    onClick: resetPhoto
  }, "Remover Foto"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Grid, {
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.TextField, {
    fullWidth: true,
    label: "Nome Completo",
    name: "name",
    value: formData.name,
    onChange: handleChange,
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Grid, {
    item: true,
    xs: 12,
    md: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.TextField, {
    fullWidth: true,
    label: "Data de Nascimento",
    name: "data_nascimento",
    type: "date",
    value: formData.data_nascimento,
    onChange: handleChange,
    InputLabelProps: {
      shrink: true
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Grid, {
    item: true,
    xs: 12,
    md: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.TextField, {
    fullWidth: true,
    label: "CPF",
    name: "cpf",
    value: formData.cpf,
    onChange: handleChange,
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Grid, {
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.TextField, {
    fullWidth: true,
    label: "Tipo de Pessoa",
    name: "tipo_pessoa",
    select: true,
    value: formData.tipo_pessoa,
    onChange: handleChange
  }, ['Coordenadora', 'Coordenador', 'Líder', 'Pastor', 'Pastora', 'Apoio', 'Idoso'].map(tipo => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.MenuItem, {
    key: tipo,
    value: tipo
  }, tipo)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Grid, {
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.TextField, {
    fullWidth: true,
    label: "Endere\xE7o",
    name: "endereco",
    value: formData.endereco,
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Grid, {
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.TextField, {
    fullWidth: true,
    label: "Email",
    name: "email",
    type: "email",
    value: formData.email,
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Grid, {
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.TextField, {
    fullWidth: true,
    label: "Telefone",
    name: "telefone",
    value: formData.telefone,
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Grid, {
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.TextField, {
    fullWidth: true,
    select: true,
    label: "Estado Civil",
    name: "estado_civil",
    value: formData.estado_civil,
    onChange: handleChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.MenuItem, {
    value: "Solteiro"
  }, "Solteiro"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.MenuItem, {
    value: "Casado"
  }, "Casado"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.MenuItem, {
    value: "Vi\xFAvo"
  }, "Vi\xFAvo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.MenuItem, {
    value: "Divorciado"
  }, "Divorciado"))), formData.estado_civil === 'Casado' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Grid, {
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.TextField, {
    fullWidth: true,
    label: "Nome do Esposo(a)",
    name: "nome_esposo",
    value: formData.nome_esposo,
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Grid, {
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.TextField, {
    fullWidth: true,
    label: "Profiss\xE3o",
    name: "profissao",
    value: formData.profissao,
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Grid, {
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.TextField, {
    fullWidth: true,
    label: "Rede Social",
    name: "rede_social",
    value: formData.rede_social,
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.TextField, {
    fullWidth: true,
    label: "Indica\xE7\xE3o",
    name: "indicacao",
    value: formData.indicacao,
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Grid, {
    item: true,
    xs: 12,
    container: true,
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Grid, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.FormControlLabel, {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Checkbox, {
      checked: formData.frequenta_celula,
      onChange: handleChange,
      name: "frequenta_celula"
    }),
    label: "Frequenta C\xE9lula?"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Grid, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.FormControlLabel, {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Checkbox, {
      checked: formData.batizado,
      onChange: handleChange,
      name: "batizado"
    }),
    label: "J\xE1 foi batizado?"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Grid, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.FormControlLabel, {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Checkbox, {
      checked: formData.encontro,
      onChange: handleChange,
      name: "encontro"
    }),
    label: "Participou de um Encontro?"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Grid, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.FormControlLabel, {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Checkbox, {
      checked: formData.analfabeto,
      onChange: handleChange,
      name: "analfabeto"
    }),
    label: "\xC9 analfabeto?"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.TextField, {
    fullWidth: true,
    label: "Escolas (separados por v\xEDrgula)",
    name: "escolas",
    value: formData.escolas,
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.TextField, {
    fullWidth: true,
    label: "Habilidades (separados por v\xEDrgula)",
    name: "habilidades",
    value: formData.habilidades,
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.TextField, {
    fullWidth: true,
    label: "Patologia",
    name: "patologia",
    value: formData.patologia,
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Grid, {
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.TextField, {
    fullWidth: true,
    label: "Plano de Sa\xFAde",
    name: "plano_saude",
    value: formData.plano_saude,
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Grid, {
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.TextField, {
    fullWidth: true,
    label: "Hospital de Refer\xEAncia",
    name: "hospital",
    value: formData.hospital,
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {
    variant: "h6"
  }, "Filhos"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Button, {
    onClick: handleAddChild,
    variant: "contained",
    color: "primary",
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_3__.AddCircle, null)
  }, "Adicionar Filho(a)"), formData.filhos.map((filho, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Grid, {
    container: true,
    spacing: 2,
    alignItems: "center",
    key: index,
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Grid, {
    item: true,
    xs: 5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.TextField, {
    fullWidth: true,
    label: "Nome do Filho(a)",
    name: "nome",
    value: filho.nome,
    onChange: e => handleChildChange(index, e)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Grid, {
    item: true,
    xs: 5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.TextField, {
    fullWidth: true,
    label: "Telefone",
    name: "telefone",
    value: filho.telefone,
    onChange: e => handleChildChange(index, e)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Grid, {
    item: true,
    xs: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.IconButton, {
    onClick: () => handleRemoveChild(index),
    color: "error"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_3__.RemoveCircle, {
    fontSize: "large"
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {
    variant: "h6"
  }, "Rem\xE9dios"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Button, {
    onClick: handleAddMedicine,
    variant: "contained",
    color: "primary",
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_3__.AddCircle, null)
  }, "Adicionar Rem\xE9dio"), formData.remedios.map((medicine, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Grid, {
    container: true,
    spacing: 2,
    alignItems: "center",
    key: index,
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Grid, {
    item: true,
    xs: 5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.TextField, {
    fullWidth: true,
    label: "Nome do Rem\xE9dio",
    name: "nome",
    value: medicine.nome,
    onChange: e => handleMedicineChange(index, e)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Grid, {
    item: true,
    xs: 5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.TextField, {
    fullWidth: true,
    label: "Indica\xE7\xE3o",
    name: "indicacao",
    value: medicine.indicacao,
    onChange: e => handleMedicineChange(index, e)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Grid, {
    item: true,
    xs: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.IconButton, {
    onClick: () => handleRemoveMedicine(index),
    color: "error"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_3__.RemoveCircle, {
    fontSize: "large"
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Button, {
    type: "submit",
    variant: "contained",
    color: "primary",
    fullWidth: true
  }, isEdit ? 'Atualizar Mia' : 'Cadastrar Mia'))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(dan_components__WEBPACK_IMPORTED_MODULE_2__.Notification, {
    message: notification,
    close: () => setNotification('')
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MiaPage);

/***/ }),

/***/ "./app/containers/Pages/Public/ApeloPublicPage.js":
/*!********************************************************!*\
  !*** ./app/containers/Pages/Public/ApeloPublicPage.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/node/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Templates_Outer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Templates/Outer */ "./app/containers/Templates/Outer.js");
/* harmony import */ var _utils_webhookClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/webhookClient */ "./app/utils/webhookClient.js");
/* provided dependency */ var process = __webpack_require__(/*! process/browser */ "./node_modules/process/browser.js");




const REDE_OPTIONS = ['RELEVANTE JUNIORS RAPAZES', 'RELEVANTEEN RAPAZES', 'RELEVANTEEN MOÇAS', 'JUVENTUDE RELEVANTE RAPAZES', 'MULHERES IECG', 'IECG KIDS', 'HOMENS IECG', 'JUVENTUDE RELEVANTE MOÇAS', 'RELEVANTE JUNIORS MOÇAS'];

const resolveApiUrl = () => {
  if (process.env.REACT_APP_API_URL) {
    return process.env.REACT_APP_API_URL.replace(/\/$/, '');
  }

  const {
    protocol,
    hostname,
    port
  } = window.location;

  if (port === '3005') {
    return `${protocol}//${hostname}:3005`;
  }

  return `${protocol}//${hostname}${port ? `:${port}` : ''}`;
};

const initialForm = {
  nome: '',
  decisao: '',
  whatsapp: '',
  rede: '',
  bairro_apelo: '',
  cidade_apelo: 'Campo Grande',
  estado_apelo: 'Mato Grosso do Sul',
  idade: '',
  bairro_proximo: [],
  headerImageUrl: '',
  direcionar_celula: true,
  campus_iecg: '',
  status: ''
};

const ApeloPublicPage = () => {
  const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialForm);
  const [bairroTemp, setBairroTemp] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [notification, setNotification] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [submitting, setSubmitting] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const API_URL = resolveApiUrl();

  const handleChange = e => {
    const {
      name,
      value,
      type,
      checked
    } = e.target;
    const val = type === 'checkbox' ? checked : value;
    setForm(prev => ({ ...prev,
      [name]: val
    }));
  };

  const formatWhatsapp = function () {
    let value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    const digits = value.replace(/\D/g, '').slice(0, 11);
    const part1 = digits.slice(0, 2);
    const part2 = digits.slice(2, 7);
    const part3 = digits.slice(7, 11);
    if (digits.length > 6) return `(${part1}) ${part2}-${part3}`.trim();
    if (digits.length > 2) return `(${part1}) ${part2}`.trim();
    if (digits.length > 0) return `(${part1}`;
    return '';
  };

  const handleWhatsappChange = e => {
    const masked = formatWhatsapp(e.target.value);
    setForm(prev => ({ ...prev,
      whatsapp: masked
    }));
  };

  const addBairroProximo = () => {
    const val = bairroTemp.trim();
    if (!val) return;
    setForm(prev => ({ ...prev,
      bairro_proximo: [...prev.bairro_proximo, val]
    }));
    setBairroTemp('');
  };

  const removeBairroProximo = value => {
    setForm(prev => ({ ...prev,
      bairro_proximo: prev.bairro_proximo.filter(b => b !== value)
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setNotification('');
    setSubmitting(true);
    const payload = {
      nome: form.nome,
      decisao: form.decisao,
      whatsapp: form.whatsapp.replace(/\D/g, ''),
      rede: form.rede,
      bairro_apelo: form.bairro_apelo,
      cidade_apelo: form.cidade_apelo,
      estado_apelo: form.estado_apelo,
      idade: form.idade ? Number(form.idade) : null,
      bairro_proximo: form.bairro_proximo,
      decisao: form.decisao,
      direcionar_celula: !!form.direcionar_celula,
      campus_iecg: form.campus_iecg,
      status: form.status
    };

    try {
      const res = await fetch(`${API_URL}/public/direcionamentos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error((data === null || data === void 0 ? void 0 : data.erro) || (data === null || data === void 0 ? void 0 : data.message) || 'Erro ao enviar o apelo.');
      }

      const data = await res.json().catch(() => ({}));
      (0,_utils_webhookClient__WEBPACK_IMPORTED_MODULE_2__.sendWebhookEvent)('apelo.created', { ...payload,
        id: data === null || data === void 0 ? void 0 : data.id
      });
      setNotification('Apelo enviado com sucesso! Obrigado pelo envio.');
      setForm(initialForm);
    } catch (err) {
      console.error(err);
      setNotification(err.message || 'Erro ao enviar o apelo.');
    } finally {
      setSubmitting(false);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Container, {
    maxWidth: "md",
    sx: {
      py: 4
    }
  }, form.headerImageUrl && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
    mb: 3,
    textAlign: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: form.headerImageUrl,
    alt: "Topo",
    style: {
      maxWidth: '100%',
      borderRadius: 8
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Paper, {
    sx: {
      p: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
    variant: "h5",
    gutterBottom: true
  }, "Cadastro de Novo Apelo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
    variant: "body2",
    color: "textSecondary",
    gutterBottom: true
  }, "Preencha as informa\xE7\xF5es abaixo para registrar um novo apelo direcionado."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
    mt: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {
    fullWidth: true,
    label: "URL da imagem de topo (opcional)",
    name: "headerImageUrl",
    value: form.headerImageUrl,
    onChange: handleChange,
    margin: "normal"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {
    fullWidth: true,
    label: "Nome",
    name: "nome",
    value: form.nome,
    onChange: handleChange,
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {
    select: true,
    fullWidth: true,
    label: "Decis\xE3o",
    name: "decisao",
    value: form.decisao,
    onChange: handleChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
    value: ""
  }, "Selecione"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
    value: "encaminhamento_celula"
  }, "Encaminhamento de C\xE9lula"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
    value: "apelo_volta"
  }, "Voltar para Jesus (estava afastado e estou me reconciliando)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
    value: "apelo_decisao"
  }, "Aceitar Jesus como meu Senhor e Salvador"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {
    fullWidth: true,
    label: "WhatsApp",
    name: "whatsapp",
    value: form.whatsapp,
    onChange: handleWhatsappChange,
    placeholder: "(99) 99999-9999"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {
    select: true,
    fullWidth: true,
    label: "Rede",
    name: "rede",
    value: form.rede,
    onChange: handleChange
  }, REDE_OPTIONS.map(r => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
    key: r,
    value: r
  }, r)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {
    fullWidth: true,
    label: "Idade",
    name: "idade",
    type: "number",
    value: form.idade,
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {
    fullWidth: true,
    label: "Campus IECG (opcional)",
    name: "campus_iecg",
    value: form.campus_iecg,
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.FormControlLabel, {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Checkbox, {
      checked: !!form.direcionar_celula,
      onChange: e => handleChange({
        target: {
          name: 'direcionar_celula',
          value: e.target.checked,
          type: 'checkbox',
          checked: e.target.checked
        }
      })
    }),
    label: "Desejo ser direcionado(a) para uma c\xE9lula"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {
    fullWidth: true,
    label: "Bairro",
    name: "bairro_apelo",
    value: form.bairro_apelo,
    onChange: handleChange,
    disabled: !form.direcionar_celula
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {
    fullWidth: true,
    label: "Cidade",
    name: "cidade_apelo",
    value: form.cidade_apelo,
    onChange: handleChange,
    disabled: !form.direcionar_celula
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {
    fullWidth: true,
    label: "Estado",
    name: "estado_apelo",
    value: form.estado_apelo,
    onChange: handleChange,
    disabled: !form.direcionar_celula
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
    display: "flex",
    gap: 1,
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {
    fullWidth: true,
    label: "Adicionar bairro pr\xF3ximo",
    value: bairroTemp,
    onChange: e => setBairroTemp(e.target.value),
    disabled: !form.direcionar_celula
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
    variant: "outlined",
    onClick: addBairroProximo,
    disabled: !form.direcionar_celula
  }, "Adicionar")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
    mt: 1,
    display: "flex",
    gap: 1,
    flexWrap: "wrap"
  }, form.bairro_proximo.map(b => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Chip, {
    key: b,
    label: b,
    onDelete: () => removeBairroProximo(b),
    disabled: !form.direcionar_celula
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {
    fullWidth: true,
    label: "Status (opcional)",
    name: "status",
    value: form.status,
    onChange: handleChange,
    placeholder: "Ex.: DIRECIONADO_COM_SUCESSO"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
    type: "submit",
    variant: "contained",
    color: "primary",
    fullWidth: true,
    disabled: submitting
  }, submitting ? 'Enviando...' : 'Me Inscrever')))), notification && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
    variant: "body2",
    color: "primary",
    mt: 2
  }, notification)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApeloPublicPage);

/***/ }),

/***/ "./app/containers/Pages/Standalone/LoginDedicated.js":
/*!***********************************************************!*\
  !*** ./app/containers/Pages/Standalone/LoginDedicated.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Templates_Outer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Templates/Outer */ "./app/containers/Templates/Outer.js");
/* harmony import */ var _Users_Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Users/Login */ "./app/containers/Pages/Users/Login.js");




function LoginDedicated() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Templates_Outer__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Users_Login__WEBPACK_IMPORTED_MODULE_2__["default"], null));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginDedicated);

/***/ }),

/***/ "./app/containers/Pages/StartPage/ApelosDirecionadosPage.js":
/*!******************************************************************!*\
  !*** ./app/containers/Pages/StartPage/ApelosDirecionadosPage.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/node/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/IconButton */ "./node_modules/@mui/material/node/IconButton/index.js");
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Card */ "./node_modules/@mui/material/node/Card/index.js");
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Card__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/CardContent */ "./node_modules/@mui/material/node/CardContent/index.js");
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_material_Chip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Chip */ "./node_modules/@mui/material/node/Chip/index.js");
/* harmony import */ var _mui_material_Chip__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var _mui_icons_material_SwapHoriz__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/icons-material/SwapHoriz */ "./node_modules/@mui/icons-material/SwapHoriz.js");
/* harmony import */ var _mui_icons_material_History__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/History */ "./node_modules/@mui/icons-material/History.js");
/* harmony import */ var _mui_icons_material_Autorenew__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/Autorenew */ "./node_modules/@mui/icons-material/Autorenew.js");
/* harmony import */ var _mui_icons_material_InfoOutlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/InfoOutlined */ "./node_modules/@mui/icons-material/InfoOutlined.js");
/* harmony import */ var _mui_icons_material_ArticleOutlined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/ArticleOutlined */ "./node_modules/@mui/icons-material/ArticleOutlined.js");
/* harmony import */ var dan_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dan-components */ "./app/components/index.js");
/* harmony import */ var _utils_webhookClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/webhookClient */ "./app/utils/webhookClient.js");
/* provided dependency */ var process = __webpack_require__(/*! process/browser */ "./node_modules/process/browser.js");















const resolveApiUrl = () => {
  if (process.env.REACT_APP_API_URL) {
    return process.env.REACT_APP_API_URL.replace(/\/$/, '');
  }

  const {
    protocol,
    hostname,
    port
  } = window.location;

  if (port === '3005') {
    return `${protocol}//${hostname}:3005`;
  }

  return `${protocol}//${hostname}${port ? `:${port}` : ''}`;
};

const ApelosDirecionadosPage = () => {
  var _detailApelo$celulaAt;

  const [apelos, setApelos] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [celulas, setCelulas] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [monthFilter, setMonthFilter] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [statusFilter, setStatusFilter] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [nomeFilter, setNomeFilter] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [decisaoFilter, setDecisaoFilter] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const [totalPages, setTotalPages] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const [totalRecords, setTotalRecords] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [notification, setNotification] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [moveDialogOpen, setMoveDialogOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [historicoDialogOpen, setHistoricoDialogOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [historicoList, setHistoricoList] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [apeloSelecionado, setApeloSelecionado] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [celulaDestinoId, setCelulaDestinoId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [filtroCelula, setFiltroCelula] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [motivo, setMotivo] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [loadingHistorico, setLoadingHistorico] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [celulaDialogOpen, setCelulaDialogOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [celulaDetalhe, setCelulaDetalhe] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [statusDialogOpen, setStatusDialogOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [novoStatus, setNovoStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [motivoStatus, setMotivoStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [sugestoes, setSugestoes] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [loadingSugestoes, setLoadingSugestoes] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [detailDialogOpen, setDetailDialogOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [detailApelo, setDetailApelo] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [detailForm, setDetailForm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    bairro_apelo: '',
    bairro_proximo: []
  });
  const [detailBairroTemp, setDetailBairroTemp] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [detailSaving, setDetailSaving] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const API_URL = resolveApiUrl();

  const fetchApelos = async () => {
    setLoading(true);
    const token = localStorage.getItem('token');

    try {
      const params = new URLSearchParams();
      if (monthFilter) params.append('month', monthFilter);
      if (statusFilter) params.append('status', statusFilter);
      if (nomeFilter) params.append('nome', nomeFilter);
      if (decisaoFilter) params.append('decisao', decisaoFilter);
      params.append('page', page);
      params.append('limit', 10);
      const res = await fetch(`${API_URL}/start/direcionamentos/?${params.toString()}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (!res.ok) throw new Error('Erro ao carregar apelos direcionados.');
      const data = await res.json();

      if (Array.isArray(data)) {
        setApelos(data);
        setTotalPages(1);
        setTotalRecords(data.length);
      } else {
        setApelos(Array.isArray(data.registros) ? data.registros : []);
        setTotalPages(data.totalPaginas || 1);
        setTotalRecords(data.totalRegistros || 0);
      }
    } catch (err) {
      console.error(err);
      setNotification(err.message || 'Erro ao buscar apelos direcionados.');
      setApelos([]);
      setTotalPages(1);
      setTotalRecords(0);
    } finally {
      setLoading(false);
    }
  };

  const fetchCelulas = async () => {
    const token = localStorage.getItem('token');

    try {
      const res = await fetch(`${API_URL}/start/celula/listagemgeral`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (!res.ok) throw new Error();
      const data = await res.json();
      const lista = Array.isArray(data) ? data : [];
      setCelulas(lista.filter(c => c.ativo !== false));
    } catch (err) {
      console.error('Erro ao carregar células:', err);
      setCelulas([]);
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchApelos();
    fetchCelulas();
  }, [monthFilter, statusFilter, nomeFilter, decisaoFilter, page]);

  const abrirMover = apelo => {
    setApeloSelecionado(apelo);
    setCelulaDestinoId('');
    setMotivo('');
    setFiltroCelula('');
    setMoveDialogOpen(true);
    sugerirCelulasProximas(apelo);
  };

  const moverApelo = async () => {
    var _apeloSelecionado$cel;

    if (!apeloSelecionado || !celulaDestinoId) {
      setNotification('Selecione a célula de destino.');
      return;
    }

    if ((_apeloSelecionado$cel = apeloSelecionado.celulaAtual) !== null && _apeloSelecionado$cel !== void 0 && _apeloSelecionado$cel.id && celulaDestinoId && apeloSelecionado.celulaAtual.id === celulaDestinoId) {
      setNotification('Não é possível direcionar para a mesma célula.');
      return;
    }

    const token = localStorage.getItem('token');

    try {
      const res = await fetch(`${API_URL}/start/direcionamentos/${apeloSelecionado.id}/mover`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          celulaDestinoId,
          motivo
        })
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error((data === null || data === void 0 ? void 0 : data.erro) || 'Falha ao mover apelo.');
      }

      setNotification('Apelo movido com sucesso.');
      (0,_utils_webhookClient__WEBPACK_IMPORTED_MODULE_3__.sendWebhookEvent)('apelo.moved', {
        apeloId: apeloSelecionado.id,
        destinoCelulaId: celulaDestinoId
      });
      setMoveDialogOpen(false);
      fetchApelos();
    } catch (err) {
      console.error(err);
      setNotification(err.message || 'Erro ao mover apelo.');
    }
  };

  const abrirHistorico = async apelo => {
    setApeloSelecionado(apelo);
    setHistoricoDialogOpen(true);
    setLoadingHistorico(true);
    const token = localStorage.getItem('token');

    try {
      const res = await fetch(`${API_URL}/start/direcionamentos/${apelo.id}/historico`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (!res.ok) throw new Error('Erro ao carregar histórico.');
      const data = await res.json();
      setHistoricoList(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
      setNotification(err.message || 'Erro ao carregar histórico.');
      setHistoricoList([]);
    } finally {
      setLoadingHistorico(false);
    }
  };

  const celulaAtualTexto = apelo => {
    var _apelo$celulaAtual;

    return (apelo === null || apelo === void 0 ? void 0 : (_apelo$celulaAtual = apelo.celulaAtual) === null || _apelo$celulaAtual === void 0 ? void 0 : _apelo$celulaAtual.celula) || 'Sem célula';
  };

  const celulasMesmaRede = apelo => {
    if (!(apelo !== null && apelo !== void 0 && apelo.rede)) return [];
    const rede = (apelo.rede || '').toLowerCase();
    const filtradas = celulas.filter(c => (c.rede || '').toLowerCase() === rede);
    const baseSemAtual = filtradas.filter(c => {
      var _apelo$celulaAtual2;

      return c.id !== (apelo === null || apelo === void 0 ? void 0 : (_apelo$celulaAtual2 = apelo.celulaAtual) === null || _apelo$celulaAtual2 === void 0 ? void 0 : _apelo$celulaAtual2.id);
    });
    if (!filtroCelula) return baseSemAtual;
    return baseSemAtual.filter(c => (c.celula || '').toLowerCase().includes(filtroCelula.toLowerCase()));
  };

  const formatDate = value => {
    if (!value) return '-';
    const d = new Date(value);
    if (Number.isNaN(d.getTime())) return value;
    return d.toLocaleDateString('pt-BR');
  };

  const statusConfig = {
    APELO_CADASTRADO: {
      label: 'Novo',
      color: 'default'
    },
    DIRECIONADO_COM_SUCESSO: {
      label: 'Direcionado',
      color: 'info'
    },
    ENVIO_LIDER_PENDENTE_WHATS_ERRADO: {
      label: 'Pendência de Envio para Líder',
      color: 'warning'
    },
    CONSOLIDADO_CELULA: {
      label: 'Consolidado na célula',
      color: 'success'
    },
    DIRECIONAMENTO_INCORRETO_REENVIO_PENDENTE: {
      label: 'Direcionamento incorreto',
      color: 'error'
    },
    ENVIO_LIDER_PENDENTE: {
      label: 'Líder ainda não fez contato',
      color: 'secondary'
    },
    CONTATO_LIDER_SEM_RETORNO: {
      label: 'Líder enviou mensagem, sem retorno',
      color: 'secondary'
    },
    CONSOLIDACAO_INTERROMPIDA: {
      label: 'Não Consolidado',
      color: 'error'
    },
    MOVIMENTACAO_CELULA: {
      label: 'Em movimentação de célula',
      color: 'primary'
    }
  };

  const statusLabel = status => {
    var _statusConfig$status;

    return ((_statusConfig$status = statusConfig[status]) === null || _statusConfig$status === void 0 ? void 0 : _statusConfig$status.label) || status || '-';
  };

  const DECISAO_OPTIONS = [{
    value: 'apelo_decisao',
    label: 'Aceitar Jesus como meu Senhor e Salvador',
    color: 'success'
  }, {
    value: 'apelo_volta',
    label: 'Voltar para Jesus (estava afastado e estou me reconciliando)',
    color: 'info'
  }, {
    value: 'encaminhamento_celula',
    label: 'Encaminhamento de Célula',
    color: 'warning'
  }];

  const renderDecisaoChip = decisao => {
    const opt = DECISAO_OPTIONS.find(o => o.value === decisao);
    if (!opt) return decisao || '-';
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Chip__WEBPACK_IMPORTED_MODULE_4___default()), {
      size: "small",
      label: opt.label,
      color: opt.color,
      sx: {
        fontWeight: 600
      }
    });
  };

  const renderStatusChip = status => {
    const cfg = statusConfig[status] || {
      label: statusLabel(status),
      color: 'default'
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Chip__WEBPACK_IMPORTED_MODULE_4___default()), {
      size: "small",
      label: cfg.label,
      color: cfg.color,
      sx: {
        fontWeight: 600
      }
    });
  };

  const abrirDetalheApelo = apelo => {
    if (!apelo) return;
    const proximos = Array.isArray(apelo.bairro_proximo) ? apelo.bairro_proximo : apelo.bairro_proximo ? [apelo.bairro_proximo] : [];
    setDetailForm({
      bairro_apelo: apelo.bairro_apelo || '',
      bairro_proximo: proximos
    });
    setDetailApelo(apelo);
    setDetailBairroTemp('');
    setDetailDialogOpen(true);
  };

  const handleDetailFormChange = (field, value) => {
    setDetailForm(prev => ({ ...prev,
      [field]: value
    }));
  };

  const addDetailBairroProximo = () => {
    const val = detailBairroTemp.trim();
    if (!val) return;
    setDetailForm(prev => ({ ...prev,
      bairro_proximo: prev.bairro_proximo.includes(val) ? prev.bairro_proximo : [...prev.bairro_proximo, val]
    }));
    setDetailBairroTemp('');
  };

  const removeDetailBairroProximo = value => {
    setDetailForm(prev => ({ ...prev,
      bairro_proximo: prev.bairro_proximo.filter(b => b !== value)
    }));
  };

  const fecharDetalheDialog = () => {
    setDetailDialogOpen(false);
    setDetailApelo(null);
    setDetailForm({
      bairro_apelo: '',
      bairro_proximo: []
    });
    setDetailBairroTemp('');
  };

  const salvarDetalheApelo = async () => {
    if (!detailApelo) return;
    setDetailSaving(true);

    try {
      const token = localStorage.getItem('token');
      const payload = {
        bairro_apelo: detailForm.bairro_apelo || null,
        bairro_proximo: detailForm.bairro_proximo.length ? detailForm.bairro_proximo : []
      };
      const res = await fetch(`${API_URL}/start/direcionamentos/${detailApelo.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error((data === null || data === void 0 ? void 0 : data.erro) || 'Falha ao atualizar os bairros.');
      }

      setNotification('Bairros atualizados com sucesso.');
      fetchApelos();
      fecharDetalheDialog();
    } catch (err) {
      console.error(err);
      setNotification(err.message || 'Erro ao salvar bairros.');
    } finally {
      setDetailSaving(false);
    }
  };

  const haversine = (lat1, lon1, lat2, lon2) => {
    const toRad = v => v * Math.PI / 180;

    const R = 6371; // km

    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const buscarCoordenadasApelo = async apelo => {
    const bairro = (apelo === null || apelo === void 0 ? void 0 : apelo.bairro_apelo) || '';
    const cidade = (apelo === null || apelo === void 0 ? void 0 : apelo.cidade_apelo) || 'Campo Grande';
    const estado = (apelo === null || apelo === void 0 ? void 0 : apelo.estado_apelo) || 'Mato Grosso do Sul';
    const queryParts = [bairro, cidade, estado, 'Brasil'].filter(Boolean);
    if (!queryParts.length) return null;

    try {
      const query = encodeURIComponent(queryParts.join(' '));
      const res = await fetch(`https://nominatim.openstreetmap.org/search?q=${query}&format=json&addressdetails=1`);
      if (!res.ok) return null;
      const data = await res.json();
      if (!Array.isArray(data) || !data.length) return null;
      const {
        lat,
        lon
      } = data[0];
      return {
        lat: parseFloat(lat),
        lon: parseFloat(lon)
      };
    } catch (err) {
      console.error('Erro ao buscar coordenadas do apelo:', err);
      return null;
    }
  };

  const sugerirCelulasProximas = async apelo => {
    setLoadingSugestoes(true);
    setSugestoes([]);
    const coords = await buscarCoordenadasApelo(apelo);

    if (!coords) {
      setLoadingSugestoes(false);
      return;
    }

    const celulasFiltradas = celulas.filter(c => {
      const mesmaRede = (c.rede || '').toLowerCase() === (apelo.rede || '').toLowerCase();
      return mesmaRede && c.lat && c.lon;
    });
    const calculadas = celulasFiltradas.map(c => ({ ...c,
      distancia: haversine(parseFloat(coords.lat), parseFloat(coords.lon), parseFloat(c.lat), parseFloat(c.lon))
    }));
    calculadas.sort((a, b) => a.distancia - b.distancia);
    setSugestoes(calculadas.slice(0, 5));
    setLoadingSugestoes(false);
  };

  const celulasDisponiveis = celulasMesmaRede(apeloSelecionado);
  const sugestoesFiltradas = filtroCelula ? sugestoes.filter(c => (c.celula || '').toLowerCase().includes(filtroCelula.toLowerCase())) : sugestoes;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, "Apelos Direcionados")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(dan_components__WEBPACK_IMPORTED_MODULE_2__.PapperBlock, {
    title: "Apelos Direcionados",
    desc: "Gerencie apelos direcionados e movimenta\xE7\xF5es"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
    display: "flex",
    gap: 2,
    flexWrap: "wrap",
    mb: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TextField, {
    label: "Nome do apelo",
    size: "small",
    value: nomeFilter,
    onChange: e => {
      setNomeFilter(e.target.value);
      setPage(1);
    },
    sx: {
      minWidth: 220
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TextField, {
    label: "M\xEAs do direcionamento",
    type: "month",
    size: "small",
    value: monthFilter,
    onChange: e => setMonthFilter(e.target.value)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TextField, {
    select: true,
    label: "Decis\xE3o",
    size: "small",
    value: decisaoFilter,
    onChange: e => {
      setDecisaoFilter(e.target.value);
      setPage(1);
    },
    sx: {
      minWidth: 220
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.MenuItem, {
    value: ""
  }, "Todas"), DECISAO_OPTIONS.map(opt => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.MenuItem, {
    key: opt.value,
    value: opt.value
  }, opt.label))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TextField, {
    select: true,
    label: "Status",
    size: "small",
    value: statusFilter,
    onChange: e => setStatusFilter(e.target.value),
    sx: {
      minWidth: 220
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.MenuItem, {
    value: ""
  }, "Todos"), Object.keys(statusConfig).map(key => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.MenuItem, {
    key: key,
    value: key
  }, statusConfig[key].label))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {
    variant: "outlined",
    onClick: fetchApelos,
    disabled: loading
  }, "Atualizar")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableContainer, {
    component: _mui_material__WEBPACK_IMPORTED_MODULE_5__.Paper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Table, {
    size: "small"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableHead, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, null, "Nome"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, null, "Decis\xE3o"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, null, "Data direcionamento"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, null, "C\xE9lula atual"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, null, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {
    align: "right"
  }, "A\xE7\xF5es"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableBody, null, apelos.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {
    colSpan: 6,
    align: "center"
  }, loading ? 'Carregando...' : 'Nenhum apelo encontrado.')), apelos.map(apelo => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableRow, {
    key: apelo.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
    display: "flex",
    alignItems: "center",
    gap: 0.5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, apelo.nome), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Tooltip, {
    title: "Ver informa\xE7\xF5es preenchidas"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6___default()), {
    size: "small",
    onClick: () => abrirDetalheApelo(apelo),
    sx: {
      p: 0.3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_InfoOutlined__WEBPACK_IMPORTED_MODULE_7__["default"], {
    fontSize: "small"
  }))), apelo.observacao && apelo.observacao.trim() !== '' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Tooltip, {
    title: apelo.observacao
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ArticleOutlined__WEBPACK_IMPORTED_MODULE_8__["default"], {
    fontSize: "small",
    color: "action"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, null, renderDecisaoChip(apelo.decisao)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, null, formatDate(apelo.data_direcionamento)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
    display: "flex",
    alignItems: "center",
    gap: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, celulaAtualTexto(apelo)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Tooltip, {
    title: "Detalhes da c\xE9lula"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6___default()), {
    size: "small",
    onClick: () => {
      setCelulaDetalhe(apelo.celulaAtual);
      setCelulaDialogOpen(true);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_InfoOutlined__WEBPACK_IMPORTED_MODULE_7__["default"], {
    fontSize: "small"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, null, renderStatusChip(apelo.status)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {
    align: "right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
    display: "flex",
    gap: 1,
    justifyContent: "flex-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Tooltip, {
    title: "Hist\xF3rico de movimenta\xE7\xF5es"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_History__WEBPACK_IMPORTED_MODULE_9__["default"], {
    fontSize: "small",
    style: {
      cursor: 'pointer'
    },
    onClick: () => abrirHistorico(apelo)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Tooltip, {
    title: "Alterar status"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Autorenew__WEBPACK_IMPORTED_MODULE_10__["default"], {
    fontSize: "small",
    style: {
      cursor: 'pointer'
    },
    onClick: () => {
      setApeloSelecionado(apelo);
      setNovoStatus(apelo.status || '');
      setMotivoStatus('');
      setStatusDialogOpen(true);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Tooltip, {
    title: "Mover para outra c\xE9lula"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_SwapHoriz__WEBPACK_IMPORTED_MODULE_11__["default"], {
    fontSize: "small",
    style: {
      cursor: 'pointer'
    },
    onClick: () => abrirMover(apelo)
  })))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Dialog, {
    open: moveDialogOpen,
    onClose: () => setMoveDialogOpen(false),
    fullWidth: true,
    maxWidth: "sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.DialogTitle, null, "Mover apelo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.DialogContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    variant: "body2",
    gutterBottom: true
  }, "Apelo: ", (apeloSelecionado === null || apeloSelecionado === void 0 ? void 0 : apeloSelecionado.nome) || '-'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    variant: "body2",
    gutterBottom: true
  }, "Bairro: ", (apeloSelecionado === null || apeloSelecionado === void 0 ? void 0 : apeloSelecionado.bairro_apelo) || '-'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    variant: "caption",
    color: "textSecondary",
    display: "block",
    gutterBottom: true
  }, "Rede: ", (apeloSelecionado === null || apeloSelecionado === void 0 ? void 0 : apeloSelecionado.rede) || '-', " | Cidade: Campo Grande | Estado: Mato Grosso do Sul"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TextField, {
    label: "Buscar c\xE9lula",
    fullWidth: true,
    margin: "normal",
    size: "small",
    placeholder: "Digite parte do nome para reduzir a lista",
    value: filtroCelula,
    onChange: e => setFiltroCelula(e.target.value)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TextField, {
    select: true,
    label: "C\xE9lula destino",
    fullWidth: true,
    margin: "normal",
    value: celulaDestinoId,
    onChange: e => setCelulaDestinoId(e.target.value)
  }, celulasDisponiveis.map(c => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.MenuItem, {
    key: c.id,
    value: c.id
  }, c.celula, " ", c.rede ? `- ${c.rede}` : ''))), celulasDisponiveis.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    variant: "caption",
    color: "textSecondary"
  }, "Nenhuma c\xE9lula cadastrada na mesma rede do apelo. Verifique se existe alguma c\xE9lula ativa para essa rede."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TextField, {
    label: "Motivo do direcionamento",
    fullWidth: true,
    margin: "normal",
    value: motivo,
    onChange: e => setMotivo(e.target.value),
    multiline: true,
    minRows: 2
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
    mt: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    variant: "body2",
    gutterBottom: true
  }, "Sugest\xF5es C\xE9lulas pr\xF3ximas:"), loadingSugestoes && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    variant: "caption",
    color: "textSecondary"
  }, "Buscando sugest\xF5es..."), !loadingSugestoes && sugestoesFiltradas.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    variant: "caption",
    color: "textSecondary"
  }, "Nenhuma sugest\xE3o dispon\xEDvel."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
    container: true,
    spacing: 1
  }, sugestoesFiltradas.map(c => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
    item: true,
    xs: 12,
    sm: 6,
    key: c.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Card__WEBPACK_IMPORTED_MODULE_12___default()), {
    variant: "outlined",
    sx: {
      cursor: 'pointer'
    },
    onClick: () => setCelulaDestinoId(c.id)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_13___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    variant: "subtitle2"
  }, c.celula), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    variant: "caption",
    display: "block"
  }, "Rede: ", c.rede), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    variant: "caption",
    display: "block"
  }, "Bairro: ", c.bairro || '-'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    variant: "caption",
    display: "block"
  }, "Dist\xE2ncia: ", c.distancia ? `${c.distancia.toFixed(1)} km` : '-')))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.DialogActions, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {
    onClick: () => setMoveDialogOpen(false)
  }, "Cancelar"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {
    variant: "contained",
    onClick: moverApelo
  }, "Mover"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Dialog, {
    open: detailDialogOpen,
    onClose: fecharDetalheDialog,
    fullWidth: true,
    maxWidth: "sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.DialogTitle, null, "Detalhes do apelo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.DialogContent, {
    dividers: true
  }, detailApelo ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    variant: "caption",
    color: "textSecondary"
  }, "Nome"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    variant: "body2"
  }, detailApelo.nome)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    variant: "caption",
    color: "textSecondary"
  }, "Decis\xE3o"), renderDecisaoChip(detailApelo.decisao)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    variant: "caption",
    color: "textSecondary"
  }, "WhatsApp"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    variant: "body2"
  }, detailApelo.whatsapp || '-')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    variant: "caption",
    color: "textSecondary"
  }, "Rede"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    variant: "body2"
  }, detailApelo.rede || '-')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    variant: "caption",
    color: "textSecondary"
  }, "Status"), renderStatusChip(detailApelo.status)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    variant: "caption",
    color: "textSecondary"
  }, "Data de direcionamento"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    variant: "body2"
  }, formatDate(detailApelo.data_direcionamento))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    variant: "caption",
    color: "textSecondary"
  }, "Cidade"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    variant: "body2"
  }, detailApelo.cidade_apelo || '-')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    variant: "caption",
    color: "textSecondary"
  }, "Estado"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    variant: "body2"
  }, detailApelo.estado_apelo || '-')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    variant: "caption",
    color: "textSecondary"
  }, "Observa\xE7\xE3o"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    variant: "body2"
  }, detailApelo.observacao || '-')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    variant: "caption",
    color: "textSecondary"
  }, "C\xE9lula atual"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    variant: "body2"
  }, ((_detailApelo$celulaAt = detailApelo.celulaAtual) === null || _detailApelo$celulaAt === void 0 ? void 0 : _detailApelo$celulaAt.celula) || 'Sem célula'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
    mt: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    variant: "subtitle2",
    gutterBottom: true
  }, "Editar bairro"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TextField, {
    fullWidth: true,
    label: "Bairro do apelo",
    value: detailForm.bairro_apelo,
    onChange: e => handleDetailFormChange('bairro_apelo', e.target.value)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
    mt: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    variant: "subtitle2",
    gutterBottom: true
  }, "Bairros pr\xF3ximos"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
    display: "flex",
    gap: 1,
    flexWrap: "wrap",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TextField, {
    label: "Adicionar bairro",
    value: detailBairroTemp,
    onChange: e => setDetailBairroTemp(e.target.value),
    disabled: detailSaving,
    size: "small",
    fullWidth: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {
    variant: "outlined",
    onClick: addDetailBairroProximo,
    disabled: !detailBairroTemp.trim() || detailSaving
  }, "Adicionar")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
    mt: 1,
    display: "flex",
    flexWrap: "wrap",
    gap: 1
  }, detailForm.bairro_proximo.map((bairro, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Chip__WEBPACK_IMPORTED_MODULE_4___default()), {
    key: `${bairro}-${index}`,
    label: bairro,
    onDelete: () => removeDetailBairroProximo(bairro)
  })), detailForm.bairro_proximo.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    variant: "body2",
    color: "textSecondary",
    sx: {
      mt: 0.5
    }
  }, "Nenhum bairro pr\xF3ximo registrado.")))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    variant: "body2",
    color: "textSecondary"
  }, "Dados n\xE3o dispon\xEDveis.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.DialogActions, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {
    onClick: fecharDetalheDialog,
    disabled: detailSaving
  }, "Cancelar"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {
    variant: "contained",
    onClick: salvarDetalheApelo,
    disabled: detailSaving
  }, detailSaving ? 'Salvando...' : 'Salvar'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Dialog, {
    open: historicoDialogOpen,
    onClose: () => setHistoricoDialogOpen(false),
    fullWidth: true,
    maxWidth: "sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.DialogTitle, null, "Hist\xF3rico de movimenta\xE7\xF5es"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.DialogContent, {
    dividers: true
  }, loadingHistorico ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    variant: "body2"
  }, "Carregando hist\xF3rico...") : historicoList.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    variant: "body2",
    color: "textSecondary"
  }, "Nenhuma movimenta\xE7\xE3o encontrada.") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
    position: "relative",
    pl: 3,
    py: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
    position: "absolute",
    top: 0,
    left: 10,
    bottom: 0,
    sx: {
      borderLeft: '2px solid #e0e0e0'
    }
  }), historicoList.map((item, idx) => {
    var _item$celulaOrigem, _item$celulaDestino;

    const isStatus = item.tipo_evento === 'STATUS' || item.status_anterior || item.status_novo;
    const dataFmt = item.data_movimento ? new Date(item.data_movimento).toLocaleString('pt-BR') : '-';
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
      key: item.id || idx,
      display: "flex",
      mb: 2,
      position: "relative",
      alignItems: "flex-start",
      gap: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
      minWidth: 120,
      textAlign: "right",
      pr: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
      variant: "caption",
      color: "textSecondary"
    }, dataFmt)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
      width: 14,
      height: 14,
      borderRadius: "50%",
      bgcolor: isStatus ? 'primary.main' : 'success.main',
      border: "2px solid #fff",
      boxShadow: 2,
      position: "absolute",
      left: -3,
      top: 6
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Paper, {
      variant: "outlined",
      sx: {
        p: 1.5,
        flex: 1
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
      variant: "subtitle2",
      fontWeight: 600,
      sx: {
        wordBreak: 'break-word',
        whiteSpace: 'normal'
      }
    }, isStatus ? 'Alteração de status' : 'Movimentação de célula'), isStatus ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
      mt: 0.5
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
      variant: "body2"
    }, "De: ", statusLabel(item.status_anterior)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
      variant: "body2"
    }, "Para: ", statusLabel(item.status_novo))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
      mt: 0.5
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
      variant: "body2"
    }, "Origem: ", ((_item$celulaOrigem = item.celulaOrigem) === null || _item$celulaOrigem === void 0 ? void 0 : _item$celulaOrigem.celula) || '-'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
      variant: "body2"
    }, "Destino: ", ((_item$celulaDestino = item.celulaDestino) === null || _item$celulaDestino === void 0 ? void 0 : _item$celulaDestino.celula) || '-')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
      variant: "body2",
      mt: 0.5
    }, "Motivo: ", item.motivo || '-')));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.DialogActions, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {
    onClick: () => setHistoricoDialogOpen(false)
  }, "Fechar"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Dialog, {
    open: statusDialogOpen,
    onClose: () => setStatusDialogOpen(false),
    fullWidth: true,
    maxWidth: "xs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.DialogTitle, null, "Alterar status do apelo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.DialogContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    variant: "body2",
    gutterBottom: true
  }, "Apelo: ", apeloSelecionado === null || apeloSelecionado === void 0 ? void 0 : apeloSelecionado.nome), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TextField, {
    select: true,
    fullWidth: true,
    margin: "normal",
    label: "Status",
    value: novoStatus,
    onChange: e => setNovoStatus(e.target.value)
  }, Object.keys(statusConfig).map(key => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.MenuItem, {
    key: key,
    value: key
  }, statusConfig[key].label))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TextField, {
    fullWidth: true,
    margin: "normal",
    label: "Motivo (opcional)",
    value: motivoStatus,
    onChange: e => setMotivoStatus(e.target.value),
    placeholder: "Ex.: l\xEDder n\xE3o respondeu, telefone incorreto...",
    multiline: true,
    minRows: 2
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.DialogActions, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {
    onClick: () => setStatusDialogOpen(false)
  }, "Cancelar"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {
    variant: "contained",
    onClick: async () => {
      if (!apeloSelecionado) return;
      const token = localStorage.getItem('token');

      try {
        const res = await fetch(`${API_URL}/start/direcionamentos/${apeloSelecionado.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({
            status: novoStatus,
            motivo_status: motivoStatus
          })
        });

        if (!res.ok) {
          const data = await res.json();
          throw new Error((data === null || data === void 0 ? void 0 : data.erro) || 'Falha ao atualizar status.');
        }

        setNotification('Status atualizado com sucesso.');
        (0,_utils_webhookClient__WEBPACK_IMPORTED_MODULE_3__.sendWebhookEvent)('apelo.status_changed', {
          apeloId: apeloSelecionado.id,
          status: novoStatus,
          motivo: motivoStatus
        });
        setStatusDialogOpen(false);
        setMotivoStatus('');
        fetchApelos();
      } catch (err) {
        console.error(err);
        setNotification(err.message || 'Erro ao atualizar status.');
      }
    }
  }, "Salvar"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
    mt: 2,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    variant: "body2"
  }, "Total de registros: ", totalRecords), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Pagination, {
    count: totalPages,
    page: page,
    onChange: (e, value) => setPage(value),
    color: "primary"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Dialog, {
    open: celulaDialogOpen,
    onClose: () => setCelulaDialogOpen(false),
    fullWidth: true,
    maxWidth: "sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.DialogTitle, null, "Detalhes da c\xE9lula"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.DialogContent, {
    dividers: true
  }, celulaDetalhe ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    variant: "body2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Nome:"), " ", celulaDetalhe.celula)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    variant: "body2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Rede:"), " ", celulaDetalhe.rede || '-')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    variant: "body2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "L\xEDder:"), " ", celulaDetalhe.lider || '-')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    variant: "body2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Dia:"), " ", celulaDetalhe.dia || '-')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    variant: "body2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Bairro:"), " ", celulaDetalhe.bairro || '-')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    variant: "body2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Campus:"), " ", celulaDetalhe.campus || '-'))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    variant: "body2",
    color: "textSecondary"
  }, "Dados n\xE3o dispon\xEDveis.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.DialogActions, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {
    onClick: () => setCelulaDialogOpen(false)
  }, "Fechar"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(dan_components__WEBPACK_IMPORTED_MODULE_2__.Notification, {
    message: notification,
    close: () => setNotification('')
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApelosDirecionadosPage);

/***/ }),

/***/ "./app/containers/Pages/StartPage/ChatwootPage.js":
/*!********************************************************!*\
  !*** ./app/containers/Pages/StartPage/ChatwootPage.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var dan_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dan-components */ "./app/components/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/node/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_ChatBubbleOutline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/ChatBubbleOutline */ "./node_modules/@mui/icons-material/ChatBubbleOutline.js");
/* harmony import */ var _mui_icons_material_Launch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Launch */ "./node_modules/@mui/icons-material/Launch.js");
/* provided dependency */ var process = __webpack_require__(/*! process/browser */ "./node_modules/process/browser.js");






const CHATWOOT_SCRIPT_ID = 'chatwoot-sdk-js';

const ChatwootPage = () => {
  const [notification, setNotification] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [widgetReady, setWidgetReady] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const baseUrl = (process.env.REACT_APP_CHATWOOT_BASE_URL || 'https://app.chatwoot.com').replace(/\/$/, '');
  const websiteToken = process.env.REACT_APP_CHATWOOT_WEBSITE_TOKEN || '';
  const locale = process.env.REACT_APP_CHATWOOT_LOCALE || 'pt-BR';
  const whatsappNumber = process.env.REACT_APP_CHATWOOT_WHATSAPP_NUMBER || '';
  const whatsappLink = whatsappNumber ? `https://wa.me/${whatsappNumber.replace(/\D/g, '')}` : '';
  const guideLink = 'https://www.chatwoot.com/hc/user-guide/articles/1677672686-how-to-install-live_chat-on-a-react-native-app#step-3-use-it-like-this';
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!websiteToken) {
      setWidgetReady(false);
      setNotification('Defina REACT_APP_CHATWOOT_WEBSITE_TOKEN para carregar o chat.');
      return;
    }

    setNotification('');
    const normalizedBaseUrl = baseUrl;

    if (typeof window === 'undefined') {
      return undefined;
    }

    window.chatwootSettings = {
      locale,
      position: 'right',
      hideMessageBubble: true,
      launcherTitle: 'Chat Start',
      useBrowserLanguage: false
    };

    const ensureWidget = () => {
      if (window.$chatwoot) {
        setWidgetReady(true);
        return;
      }

      if (!window.chatwootSDK) return;
      window.chatwootSDK.run({
        baseUrl: normalizedBaseUrl,
        websiteToken
      });

      if (window.$chatwoot) {
        setWidgetReady(true);
      }
    };

    if (window.$chatwoot) {
      setWidgetReady(true);
      return () => {
        delete window.chatwootSettings;
      };
    }

    let script = document.getElementById(CHATWOOT_SCRIPT_ID);

    if (script && window.chatwootSDK) {
      ensureWidget();
      return () => {
        delete window.chatwootSettings;
      };
    }

    if (!script) {
      script = document.createElement('script');
      script.id = CHATWOOT_SCRIPT_ID;
      script.async = true;
      script.src = `${normalizedBaseUrl}/packs/js/sdk.js`;
      script.onload = ensureWidget;

      script.onerror = () => {
        setNotification('Não foi possível carregar o Chatwoot. Verifique a URL base.');
      };

      document.body.appendChild(script);
    } else {
      script.addEventListener('load', ensureWidget);
    }

    return () => {
      delete window.chatwootSettings;
    };
  }, [baseUrl, locale, websiteToken]);

  const openWidget = () => {
    var _window$$chatwoot;

    if ((_window$$chatwoot = window.$chatwoot) !== null && _window$$chatwoot !== void 0 && _window$$chatwoot.toggle) {
      window.$chatwoot.toggle('open');
      return;
    }

    setNotification('Aguarde até o Chatwoot carregar para abrir o chat.');
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, "Chatwoot"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "description",
    content: "\xC1rea de chat via Chatwoot com liga\xE7\xE3o direta para o WhatsApp"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(dan_components__WEBPACK_IMPORTED_MODULE_2__.PapperBlock, {
    title: "Chatwoot + WhatsApp",
    desc: "Converse com o suporte Start pelo Chatwoot configurado para o canal do WhatsApp."
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
    display: "flex",
    flexDirection: "column",
    gap: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, null, "O Chatwoot \xE9 carregado por esta p\xE1gina e abre o m\xF3dulo configurado na sua inst\xE2ncia (baseUrl + websiteToken). A comunica\xE7\xE3o com o WhatsApp acontece nos bastidores do Chatwoot, por isso basta apontar a procura\xE7\xE3o para o n\xFAmero definido em ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "REACT_APP_CHATWOOT_WHATSAPP_NUMBER"), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
    variant: "body2",
    color: "textSecondary"
  }, "Para guiar a implementa\xE7\xE3o siga o passo 3 do guia oficial:", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Link, {
    href: guideLink,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "How to install live-chat on a React Native app?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
    display: "flex",
    flexWrap: "wrap",
    gap: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
    variant: "contained",
    color: "primary",
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ChatBubbleOutline__WEBPACK_IMPORTED_MODULE_4__["default"], null),
    onClick: openWidget,
    disabled: !widgetReady
  }, "Abrir chat Chatwoot"), whatsappLink && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
    variant: "outlined",
    color: "primary",
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Launch__WEBPACK_IMPORTED_MODULE_5__["default"], null),
    href: whatsappLink,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Abrir WhatsApp (", whatsappNumber, ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
    display: "flex",
    flexWrap: "wrap",
    gap: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
    variant: "body2"
  }, "Base URL: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, baseUrl)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
    variant: "body2"
  }, "Token do website: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, websiteToken ? 'Definido' : 'Faltando')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
    variant: "body2"
  }, "WhatsApp: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, whatsappNumber || 'Não configurado'))), !websiteToken && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Alert, {
    severity: "warning"
  }, "Configura\xE7\xF5es ausentes: defina ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "REACT_APP_CHATWOOT_WEBSITE_TOKEN"), " antes de usar o chat."), !whatsappNumber && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Alert, {
    severity: "info"
  }, "Se quiser abrir o link direto para o WhatsApp, configure ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "REACT_APP_CHATWOOT_WHATSAPP_NUMBER"), "."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(dan_components__WEBPACK_IMPORTED_MODULE_2__.Notification, {
    message: notification,
    close: () => setNotification('')
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatwootPage);

/***/ }),

/***/ "./app/containers/Pages/StartPage/FilaApelosPage.js":
/*!**********************************************************!*\
  !*** ./app/containers/Pages/StartPage/FilaApelosPage.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var dan_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dan-components */ "./app/components/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/node/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* provided dependency */ var process = __webpack_require__(/*! process/browser */ "./node_modules/process/browser.js");





const FilaApelosPage = () => {
  var _process$env$REACT_AP;

  const [logs, setLogs] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [notification, setNotification] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [autoProcess, setAutoProcess] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const API_URL = (((_process$env$REACT_AP = process.env.REACT_APP_API_URL) === null || _process$env$REACT_AP === void 0 ? void 0 : _process$env$REACT_AP.trim()) || window.location.origin).replace(/\/$/, '');

  const processar = async () => {
    setLoading(true);
    setNotification('');

    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${API_URL}/start/direcionamentos/processar-fila`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error((data === null || data === void 0 ? void 0 : data.erro) || 'Falha ao processar fila.');
      }

      const entry = `[${new Date().toLocaleTimeString()}] ${data.mensagem}${data.apeloId ? ` | Apelo: ${data.apeloId}` : ''}${data.celula ? ` | Célula: ${data.celula.nome || data.celula.id}` : ''}`;
      setLogs(prev => [entry, ...prev].slice(0, 20));
      return data;
    } catch (err) {
      setNotification(err.message || 'Erro ao processar fila.');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const scheduleNext = async () => {
    try {
      const data = await processar();

      if (autoProcess && data && data.mensagem && !/Nenhum apelo aguardando/i.test(data.mensagem)) {
        setTimeout(scheduleNext, 15000);
      } else {
        setAutoProcess(false);
      }
    } catch (err) {
      setAutoProcess(false);
    }
  };

  const startAuto = () => {
    if (autoProcess) return;
    setAutoProcess(true);
    scheduleNext();
  };

  const stopAuto = () => {
    setAutoProcess(false);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, "Fila de Apelos")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(dan_components__WEBPACK_IMPORTED_MODULE_2__.PapperBlock, {
    title: "Fila de Apelos",
    desc: "Processa a fila de apelos automaticamente para a c\xE9lula mais pr\xF3xima."
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
    display: "flex",
    gap: 2,
    mb: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
    variant: "contained",
    color: "primary",
    onClick: processar,
    disabled: loading || autoProcess
  }, loading ? 'Processando...' : 'Processar próximo apelo'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
    variant: "outlined",
    color: autoProcess ? 'secondary' : 'primary',
    onClick: autoProcess ? stopAuto : startAuto
  }, autoProcess ? 'Parar auto-processo' : 'Processar em loop (15s)'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
    variant: "body2",
    color: "textSecondary"
  }, "Regra: pula c\xE9lulas com 2 direcionamentos nos \xFAltimos 30 dias, respeita rede e proximidade geogr\xE1fica.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Paper, {
    variant: "outlined"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.List, {
    dense: true
  }, logs.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.ListItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.ListItemText, {
    primary: "Nenhuma execu\xE7\xE3o ainda."
  })), logs.map((l, idx) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.ListItem, {
    key: idx
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.ListItemText, {
    primary: l
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(dan_components__WEBPACK_IMPORTED_MODULE_2__.Notification, {
    open: !!notification,
    close: () => setNotification(''),
    message: notification,
    type: "error"
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilaApelosPage);

/***/ }),

/***/ "./app/containers/Pages/StartPage/WelcomePage.js":
/*!*******************************************************!*\
  !*** ./app/containers/Pages/StartPage/WelcomePage.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var dan_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dan-components */ "./app/components/index.js");




const WelcomePage = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, "Bem-vindo(a) ao Portal IECG"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
  name: "description",
  content: "Pagina inicial do sistema"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(dan_components__WEBPACK_IMPORTED_MODULE_2__.PapperBlock, {
  title: "Bem-vindo(a)!",
  desc: "Portal administrativo IECG"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Utilize o menu lateral para acessar as funcionalidades do sistema.")));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WelcomePage);

/***/ }),

/***/ "./app/containers/Pages/StartPage/cadastrarCelulasPage.js":
/*!****************************************************************!*\
  !*** ./app/containers/Pages/StartPage/cadastrarCelulasPage.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/node/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var dan_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dan-components */ "./app/components/index.js");
/* harmony import */ var _utils_formatPhone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/formatPhone */ "./app/utils/formatPhone.js");
/* provided dependency */ var process = __webpack_require__(/*! process/browser */ "./node_modules/process/browser.js");






const formInicial = {
  id: '',
  celula: '',
  rede: '',
  lider: '',
  email_lider: '',
  cel_lider: '',
  anfitriao: '',
  campus: '',
  numero: '',
  endereco: '',
  cep: '',
  bairro: '',
  cidade: '',
  estado: '',
  lideranca: '',
  pastor_geracao: '',
  pastor_campus: '',
  dia: '',
  lat: '',
  lon: '',
  horario: ''
};
const REDE_OPTIONS = ['RELEVANTE JUNIORS RAPAZES', 'RELEVANTEEN RAPAZES', 'RELEVANTEEN MOÇAS', 'JUVENTUDE RELEVANTE RAPAZES', 'MULHERES IECG', 'IECG KIDS', 'HOMENS IECG', 'JUVENTUDE RELEVANTE MOÇAS', 'RELEVANTE JUNIORS MOÇAS'];
const DIAS_SEMANA = [{
  value: 'Segunda',
  disabled: false
}, {
  value: 'Terça',
  disabled: false
}, {
  value: 'Quarta',
  disabled: true
}, {
  value: 'Quinta',
  disabled: false
}, {
  value: 'Sexta',
  disabled: false
}, {
  value: 'Sábado',
  disabled: false
}, {
  value: 'Domingo',
  disabled: true
}];

const resolveApiUrl = () => {
  if (process.env.REACT_APP_API_URL) {
    return process.env.REACT_APP_API_URL.replace(/\/$/, '');
  }

  const {
    protocol,
    hostname,
    port
  } = window.location;

  if (port === '3005') {
    return `${protocol}//${hostname}:3005`;
  }

  return `${protocol}//${hostname}${port ? `:${port}` : ''}`;
};

const CadastrarCelula = () => {
  var _location$state;

  const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(formInicial);
  const [notification, setNotification] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [campi, setCampi] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [diasSelecionados, setDiasSelecionados] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
  const celulaEditando = (_location$state = location.state) === null || _location$state === void 0 ? void 0 : _location$state.celula;
  const isEdit = Boolean(celulaEditando);
  const API_URL = resolveApiUrl();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isEdit && celulaEditando) {
      setFormData(prev => ({ ...prev,
        ...formInicial,
        ...celulaEditando,
        cel_lider: (0,_utils_formatPhone__WEBPACK_IMPORTED_MODULE_4__.formatPhoneNumber)(celulaEditando.cel_lider || '')
      }));
      const dias = (celulaEditando.dia || '').split(',').map(d => d.trim()).filter(Boolean);
      setDiasSelecionados(dias);
    }
  }, [isEdit, celulaEditando]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const carregarCampi = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${API_URL}/start/campus`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (!res.ok) {
          throw new Error(`Status ${res.status}`);
        }

        const data = await res.json();
        setCampi(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error('Erro ao carregar campus:', err);
        setCampi([]);
      }
    };

    carregarCampi();
  }, [API_URL]);

  const formatHorarioInput = function () {
    let valor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    const digits = valor.replace(/\\D/g, '').slice(0, 4);
    const [hh, mm] = [digits.slice(0, 2), digits.slice(2, 4)];
    if (digits.length <= 2) return hh;
    return `${hh}:${mm}`;
  };

  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    let nextValue = value;

    if (name === 'cel_lider') {
      nextValue = (0,_utils_formatPhone__WEBPACK_IMPORTED_MODULE_4__.formatPhoneNumber)(value);
    }

    if (name === 'horario') {
      nextValue = formatHorarioInput(value);
    }

    setFormData({ ...formData,
      [name]: nextValue
    });
  };

  const handleDiaToggle = dia => {
    setDiasSelecionados(prev => {
      if (prev.includes(dia)) {
        return prev.filter(d => d !== dia);
      }

      return [...prev, dia];
    });
  };

  const handleSubmit = async e => {
    e.preventDefault(); // Validação básica para campos obrigatórios

    if (!formData.celula || !formData.lider || !formData.email_lider) {
      setNotification('Preencha os campos obrigatórios: Nome da Célula, Líder e Email do Líder.');
      return;
    }

    const token = localStorage.getItem('token');
    const method = isEdit ? 'PUT' : 'POST';
    const endpoint = isEdit ? `${API_URL}/start/celula/${formData.id}` : `${API_URL}/start/celula`;
    const payload = { ...formData,
      dia: diasSelecionados.join(', '),
      lat: formData.lat ? parseFloat(formData.lat) : null,
      lon: formData.lon ? parseFloat(formData.lon) : null
    };

    if (!isEdit) {
      delete payload.id; // Remove o campo 'id' ao criar uma nova célula
    }

    try {
      const res = await fetch(endpoint, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });
      const data = await res.json();

      if (res.ok) {
        setNotification(isEdit ? 'Célula atualizada com sucesso!' : 'Célula cadastrada com sucesso!');

        if (!isEdit) {
          setFormData(formInicial);
          setDiasSelecionados([]);
        }
      } else {
        setNotification(`Erro: ${data.message || 'Falha no processamento'}`);
      }
    } catch (error) {
      console.error('Erro ao salvar célula:', error);
      setNotification('Erro na conexão com o servidor.');
    }
  };

  const buscarCoordenadas = async () => {
    const {
      endereco,
      numero,
      bairro,
      cidade,
      estado,
      cep
    } = formData;
    const queryParts = [endereco, numero, bairro, cidade, estado, cep].filter(Boolean);

    if (!queryParts.length) {
      setNotification('Informe endereço, número, bairro, cidade, estado ou CEP para buscar coordenadas.');
      return;
    }

    try {
      const query = encodeURIComponent(queryParts.join(' '));
      const res = await fetch(`https://nominatim.openstreetmap.org/search?q=${query}&format=json&addressdetails=1`);
      const data = await res.json();

      if (data.length > 0) {
        const {
          lat,
          lon,
          address = {}
        } = data[0];
        const bairro = address.suburb || address.neighbourhood || address.city_district || address.quarter || address.village || '';
        const logradouro = address.road || address.pedestrian || address.cycleway || '';
        const numeroEncontrado = address.house_number || '';
        const cidade = address.city || address.town || address.village || address.municipality || address.state_district || '';
        const estado = address.state || address.region || address.state_district || '';
        const cepEncontrado = address.postcode || '';
        setFormData(prev => ({ ...prev,
          lat,
          lon,
          endereco: logradouro || prev.endereco,
          numero: numeroEncontrado || prev.numero,
          bairro: bairro || prev.bairro,
          cidade: cidade || prev.cidade,
          estado: estado || prev.estado,
          cep: cepEncontrado || prev.cep
        }));
        setNotification('Coordenadas preenchidas com sucesso!');
      } else {
        setNotification('Nenhum resultado encontrado para esse endereço.');
      }
    } catch (error) {
      console.error('Erro ao buscar coordenadas:', error);
      setNotification('Erro ao buscar coordenadas.');
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, isEdit ? 'Editar Célula' : 'Cadastrar Célula')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(dan_components__WEBPACK_IMPORTED_MODULE_3__.PapperBlock, {
    title: isEdit ? 'Editar Célula' : 'Cadastro de Célula',
    desc: "Preencha os dados abaixo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TextField, {
    fullWidth: true,
    label: "Nome da C\xE9lula",
    name: "celula",
    value: formData.celula,
    onChange: handleChange,
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TextField, {
    select: true,
    fullWidth: true,
    label: "Rede",
    name: "rede",
    value: formData.rede,
    onChange: handleChange
  }, REDE_OPTIONS.map(opt => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.MenuItem, {
    key: opt,
    value: opt
  }, opt)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TextField, {
    fullWidth: true,
    label: "L\xEDder",
    name: "lider",
    value: formData.lider,
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TextField, {
    fullWidth: true,
    label: "Email do L\xEDder",
    name: "email_lider",
    value: formData.email_lider,
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TextField, {
    fullWidth: true,
    label: "Celular do L\xEDder",
    name: "cel_lider",
    value: formData.cel_lider,
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TextField, {
    fullWidth: true,
    label: "Anfitri\xE3o",
    name: "anfitriao",
    value: formData.anfitriao,
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TextField, {
    select: true,
    fullWidth: true,
    label: "Campus",
    name: "campus",
    value: formData.campus,
    onChange: handleChange
  }, campi.map(campus => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.MenuItem, {
    key: campus.id,
    value: campus.nome
  }, campus.nome)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
    item: true,
    xs: 12,
    container: true,
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
    item: true,
    xs: 9
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TextField, {
    fullWidth: true,
    label: "Endere\xE7o",
    name: "endereco",
    value: formData.endereco,
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {
    variant: "outlined",
    color: "primary",
    fullWidth: true,
    onClick: buscarCoordenadas,
    style: {
      height: '100%'
    }
  }, "Buscar coordenadas"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TextField, {
    fullWidth: true,
    label: "N\xFAmero da casa",
    name: "numero",
    value: formData.numero,
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TextField, {
    fullWidth: true,
    label: "CEP",
    name: "cep",
    value: formData.cep,
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TextField, {
    fullWidth: true,
    label: "Bairro",
    name: "bairro",
    value: formData.bairro,
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TextField, {
    fullWidth: true,
    label: "Cidade",
    name: "cidade",
    value: formData.cidade,
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TextField, {
    fullWidth: true,
    label: "Estado",
    name: "estado",
    value: formData.estado,
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TextField, {
    fullWidth: true,
    label: "Lideran\xE7a",
    name: "lideranca",
    value: formData.lideranca,
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TextField, {
    fullWidth: true,
    label: "Pastor de Gera\xE7\xE3o",
    name: "pastor_geracao",
    value: formData.pastor_geracao,
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TextField, {
    fullWidth: true,
    label: "Pastor do Campus",
    name: "pastor_campus",
    value: formData.pastor_campus,
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      marginBottom: 8,
      fontWeight: 600
    }
  }, "Dia da semana"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.FormGroup, {
    row: true
  }, DIAS_SEMANA.map(dia => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.FormControlLabel, {
    key: dia.value,
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Checkbox, {
      checked: diasSelecionados.includes(dia.value),
      onChange: () => !dia.disabled && handleDiaToggle(dia.value),
      disabled: dia.disabled
    }),
    label: dia.value
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TextField, {
    fullWidth: true,
    label: "Hor\xE1rio",
    name: "horario",
    value: formData.horario,
    onChange: handleChange,
    placeholder: "HH:MM",
    inputProps: {
      maxLength: 5
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
    item: true,
    xs: 6,
    md: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TextField, {
    fullWidth: true,
    label: "Latitude",
    name: "lat",
    value: formData.lat,
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
    item: true,
    xs: 6,
    md: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TextField, {
    fullWidth: true,
    label: "Longitude",
    name: "lon",
    value: formData.lon,
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {
    type: "submit",
    variant: "contained",
    color: "primary",
    fullWidth: true
  }, isEdit ? 'Atualizar Célula' : 'Cadastrar Célula'))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(dan_components__WEBPACK_IMPORTED_MODULE_3__.Notification, {
    message: notification,
    close: () => setNotification('')
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CadastrarCelula);

/***/ }),

/***/ "./app/containers/Pages/StartPage/campusPage.js":
/*!******************************************************!*\
  !*** ./app/containers/Pages/StartPage/campusPage.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/node/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Edit */ "./node_modules/@mui/icons-material/Edit.js");
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Delete */ "./node_modules/@mui/icons-material/Delete.js");
/* harmony import */ var dan_components_Tables_tableStyle_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dan-components/Tables/tableStyle-jss */ "./app/components/Tables/tableStyle-jss.js");
/* harmony import */ var dan_components_Notification_Notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dan-components/Notification/Notification */ "./app/components/Notification/Notification.js");
/* provided dependency */ var process = __webpack_require__(/*! process/browser */ "./node_modules/process/browser.js");








const resolveApiUrl = () => {
  if (process.env.REACT_APP_API_URL) {
    return process.env.REACT_APP_API_URL.replace(/\/$/, '');
  }

  const {
    protocol,
    hostname,
    port
  } = window.location;

  if (port === '3005') {
    return `${protocol}//${hostname}:3005`;
  }

  return `${protocol}//${hostname}${port ? `:${port}` : ''}`;
};

const API_URL = resolveApiUrl();

const CampusPage = () => {
  const {
    classes,
    cx
  } = (0,dan_components_Tables_tableStyle_jss__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const [campi, setCampi] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [totalRegistros, setTotalRegistros] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [notification, setNotification] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    nome: '',
    endereco: '',
    bairro: '',
    cidade: '',
    estado: '',
    pastoresResponsaveis: '',
    lat: '',
    lon: ''
  });
  const [editingId, setEditingId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const token = localStorage.getItem('token');

  const fetchCampi = async () => {
    try {
      const res = await fetch(`${API_URL}/start/campus`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      const data = await res.json();
      const lista = Array.isArray(data) ? data : [];
      setCampi(lista);
      setTotalRegistros(lista.length);
    } catch (err) {
      console.error('Erro ao carregar campus:', err);
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchCampi();
  }, []);

  const handleEdit = campus => {
    setEditingId(campus.id);
    setForm({
      nome: campus.nome || '',
      endereco: campus.endereco || '',
      bairro: campus.bairro || '',
      cidade: campus.cidade || '',
      estado: campus.estado || '',
      pastoresResponsaveis: campus.pastoresResponsaveis || '',
      lat: campus.lat || '',
      lon: campus.lon || ''
    });
    setOpen(true);
  };

  const handleDelete = async id => {
    if (!window.confirm('Tem certeza que deseja excluir este campus?')) return;

    try {
      await fetch(`${API_URL}/start/campus/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setNotification('Campus excluído com sucesso');
      fetchCampi();
    } catch (err) {
      setNotification('Erro ao excluir campus');
    }
  };

  const handleSubmit = async () => {
    if (!form.nome) {
      setNotification('Nome é obrigatório');
      return;
    }

    try {
      const method = editingId ? 'PUT' : 'POST';
      const url = editingId ? `${API_URL}/start/campus/${editingId}` : `${API_URL}/start/campus`;
      const resp = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(form)
      });

      if (!resp.ok) {
        const data = await resp.json();
        throw new Error((data === null || data === void 0 ? void 0 : data.message) || 'Erro ao salvar campus');
      }

      setNotification('Campus salvo com sucesso');
      setOpen(false);
      setEditingId(null);
      setForm({
        nome: '',
        endereco: '',
        bairro: '',
        cidade: '',
        estado: '',
        pastoresResponsaveis: '',
        lat: '',
        lon: ''
      });
      fetchCampi();
    } catch (err) {
      setNotification(err.message);
    }
  };

  const buscarCoordenadas = async () => {
    if (!form.endereco) {
      setNotification('Preencha o endereço antes de buscar coordenadas.');
      return;
    }

    try {
      const query = encodeURIComponent(`${form.endereco} ${form.bairro || ''} ${form.cidade || ''}`);
      const res = await fetch(`https://nominatim.openstreetmap.org/search?q=${query}&format=json&addressdetails=1`);
      const data = await res.json();

      if (data.length > 0) {
        setForm(prev => ({ ...prev,
          lat: data[0].lat,
          lon: data[0].lon
        }));
        setNotification('Coordenadas preenchidas com sucesso!');
      } else {
        setNotification('Nenhum resultado encontrado para esse endereço.');
      }
    } catch (error) {
      setNotification('Erro ao buscar coordenadas.');
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, "Campus")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Toolbar, {
    className: classes.toolbar,
    sx: {
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {
    variant: "contained",
    color: "primary",
    onClick: () => {
      setOpen(true);
      setEditingId(null);
      setForm({
        nome: '',
        endereco: '',
        bairro: '',
        cidade: '',
        estado: '',
        pastoresResponsaveis: '',
        lat: '',
        lon: ''
      });
    }
  }, "Novo Campus"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
    variant: "body2",
    color: "textSecondary"
  }, "Total de registros: ", totalRegistros)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableContainer, {
    component: _mui_material__WEBPACK_IMPORTED_MODULE_4__.Paper,
    className: classes.rootTable
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Table, {
    className: cx(classes.table, classes.stripped)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableHead, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, null, "Nome"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, null, "Endere\xE7o"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, null, "Pastores Respons\xE1veis"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, null, "A\xE7\xF5es"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableBody, null, campi.length > 0 ? campi.map(c => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableRow, {
    key: c.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, null, c.nome), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, null, c.endereco), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, null, c.pastoresResponsaveis), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
    display: "flex",
    gap: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Tooltip, {
    title: "Editar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.IconButton, {
    color: "primary",
    onClick: () => handleEdit(c)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_5__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Tooltip, {
    title: "Excluir"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.IconButton, {
    color: "error",
    onClick: () => handleDelete(c.id)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_6__["default"], null))))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {
    colSpan: 4,
    align: "center"
  }, "Nenhum campus cadastrado."))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Dialog, {
    open: open,
    onClose: () => setOpen(false),
    fullWidth: true,
    maxWidth: "sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.DialogTitle, null, editingId ? 'Editar Campus' : 'Novo Campus'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.DialogContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    mt: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {
    label: "Nome do campus",
    value: form.nome,
    onChange: e => setForm(prev => ({ ...prev,
      nome: e.target.value
    })),
    fullWidth: true,
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {
    label: "Endere\xE7o",
    value: form.endereco,
    onChange: e => setForm(prev => ({ ...prev,
      endereco: e.target.value
    })),
    fullWidth: true,
    multiline: true,
    minRows: 2
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {
    label: "Bairro",
    value: form.bairro,
    onChange: e => setForm(prev => ({ ...prev,
      bairro: e.target.value
    })),
    fullWidth: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {
    label: "Cidade",
    value: form.cidade,
    onChange: e => setForm(prev => ({ ...prev,
      cidade: e.target.value
    })),
    fullWidth: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {
    label: "Estado",
    value: form.estado,
    onChange: e => setForm(prev => ({ ...prev,
      estado: e.target.value
    })),
    fullWidth: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {
    variant: "outlined",
    onClick: buscarCoordenadas
  }, "Buscar coordenadas"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {
    label: "Latitude",
    value: form.lat,
    onChange: e => setForm(prev => ({ ...prev,
      lat: e.target.value
    })),
    fullWidth: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {
    label: "Longitude",
    value: form.lon,
    onChange: e => setForm(prev => ({ ...prev,
      lon: e.target.value
    })),
    fullWidth: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {
    label: "Pastores respons\xE1veis",
    value: form.pastoresResponsaveis,
    onChange: e => setForm(prev => ({ ...prev,
      pastoresResponsaveis: e.target.value
    })),
    fullWidth: true,
    multiline: true,
    minRows: 2
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.DialogActions, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {
    onClick: () => setOpen(false)
  }, "Cancelar"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {
    variant: "contained",
    onClick: handleSubmit
  }, "Salvar"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(dan_components_Notification_Notification__WEBPACK_IMPORTED_MODULE_3__["default"], {
    message: notification,
    close: () => setNotification('')
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CampusPage);

/***/ }),

/***/ "./app/containers/Pages/StartPage/celulasPage.js":
/*!*******************************************************!*\
  !*** ./app/containers/Pages/StartPage/celulasPage.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/node/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/Edit */ "./node_modules/@mui/icons-material/Edit.js");
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/Delete */ "./node_modules/@mui/icons-material/Delete.js");
/* harmony import */ var _mui_icons_material_PowerSettingsNew__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/PowerSettingsNew */ "./node_modules/@mui/icons-material/PowerSettingsNew.js");
/* harmony import */ var _mui_icons_material_ListAlt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/ListAlt */ "./node_modules/@mui/icons-material/ListAlt.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var dan_components_Tables_tableStyle_jss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dan-components/Tables/tableStyle-jss */ "./app/components/Tables/tableStyle-jss.js");
/* harmony import */ var dan_components_Notification_Notification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dan-components/Notification/Notification */ "./app/components/Notification/Notification.js");
/* provided dependency */ var process = __webpack_require__(/*! process/browser */ "./node_modules/process/browser.js");













const REDE_OPTIONS = ['RELEVANTE JUNIORS RAPAZES', 'RELEVANTEEN RAPAZES', 'RELEVANTEEN MOÇAS', 'JUVENTUDE RELEVANTE RAPAZES', 'MULHERES IECG', 'IECG KIDS', 'HOMENS IECG', 'JUVENTUDE RELEVANTE MOÇAS', 'RELEVANTE JUNIORS MOÇAS'];

const resolveApiUrl = () => {
  if (process.env.REACT_APP_API_URL) {
    return process.env.REACT_APP_API_URL.replace(/\/$/, '');
  }

  const {
    protocol,
    hostname,
    port
  } = window.location;

  if (port === '3005') {
    return `${protocol}//${hostname}:3005`;
  }

  return `${protocol}//${hostname}${port ? `:${port}` : ''}`;
};

const normalizeHeaderKey = function () {
  let header = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return header.replace(/[^a-z0-9]/gi, '').toLowerCase();
};

const CSV_HEADER_MAP = {
  celula: 'celula',
  rede: 'rede',
  lider: 'lider',
  emaillider: 'email_lider',
  cellider: 'cel_lider',
  anfitriao: 'anfitriao',
  campus: 'campusId',
  campusid: 'campusId',
  numero: 'numero',
  numerodacasa: 'numero',
  cep: 'cep',
  endereco: 'endereco',
  bairro: 'bairro',
  cidade: 'cidade',
  estado: 'estado',
  lideranca: 'lideranca',
  pastorgeracao: 'pastor_geracao',
  pastorcampus: 'pastor_campus',
  dia: 'dia',
  lat: 'lat',
  lon: 'lon'
};

const normalizeDigits = function () {
  let value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return value.replace(/\D/g, '');
};

const CSV_TEMPLATE_URL = '/templates/celulas-modelo.csv';

const ListagemCelulasPage = () => {
  const {
    classes,
    cx
  } = (0,dan_components_Tables_tableStyle_jss__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useHistory)();
  const [celulas, setCelulas] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const [totalPages, setTotalPages] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const [rowsPerPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(10);
  const [notification, setNotification] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [totalRecords, setTotalRecords] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [filterCampus, setFilterCampus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [filterRede, setFilterRede] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [filterBairro, setFilterBairro] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [campi, setCampi] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [importDialogOpen, setImportDialogOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [importFile, setImportFile] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [importing, setImporting] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [importSummary, setImportSummary] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [importProgress, setImportProgress] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [sortBy, setSortBy] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('celula');
  const [sortDirection, setSortDirection] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('asc');
  const [apeloCounts, setApeloCounts] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [apelosDialogOpen, setApelosDialogOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [apelosLoading, setApelosLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [apelosList, setApelosList] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [apelosCelula, setApelosCelula] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [statusDialogOpen, setStatusDialogOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [statusSelecionado, setStatusSelecionado] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [apeloSelecionado, setApeloSelecionado] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [motivoStatus, setMotivoStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const API_URL = resolveApiUrl();

  const parseCsvText = text => {
    const lines = text.split(/\r?\n/).filter(line => line.trim());

    if (lines.length < 2) {
      throw new Error('O arquivo CSV deve conter cabeçalho e pelo menos uma linha de dados.');
    }

    const headers = lines[0].split(',').map(header => normalizeHeaderKey(header));
    const mappedHeaders = headers.map(header => CSV_HEADER_MAP[header] || null);
    const records = [];
    lines.slice(1).forEach((line, index) => {
      if (!line.trim()) return;
      const values = line.split(',');
      const row = {};
      mappedHeaders.forEach((field, columnIndex) => {
        if (!field) return;
        row[field] = (values[columnIndex] || '').trim();
      });

      if (Object.values(row).some(value => value)) {
        records.push({
          data: row,
          lineNumber: index + 2
        });
      }
    });

    if (!records.length) {
      throw new Error('Nenhum registro válido foi encontrado no CSV.');
    }

    return records;
  };

  const geocodeAddressFromRow = async row => {
    if (!row.endereco) return {};
    const queryParts = [row.endereco, row.numero, row.bairro, row.cidade, row.estado, row.cep].filter(Boolean).join(' ');
    if (!queryParts) return {};

    try {
      const res = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(queryParts)}&format=json&addressdetails=1`);
      if (!res.ok) return {};
      const data = await res.json();
      if (!Array.isArray(data) || !data.length) return {};
      const {
        lat,
        lon,
        address = {}
      } = data[0];
      const bairro = row.bairro || address.suburb || address.neighbourhood || address.city_district || address.quarter || address.village || '';
      const cidade = row.cidade || address.city || address.town || address.village || address.municipality || address.state_district || '';
      const estado = row.estado || address.state || address.region || address.state_district || '';
      return {
        lat,
        lon,
        bairro,
        cidade,
        estado
      };
    } catch (error) {
      console.error('Erro ao buscar coordenadas durante importação:', error);
      return {};
    }
  };

  const resolveCampusFromRow = row => {
    const campusIdValue = row.campusId || row.campus;

    if (!campusIdValue) {
      return {
        campusId: '',
        campusNome: ''
      };
    }

    const campusMatch = campi.find(c => String(c.id) === String(campusIdValue));
    return {
      campusId: (campusMatch === null || campusMatch === void 0 ? void 0 : campusMatch.id) || campusIdValue,
      campusNome: (campusMatch === null || campusMatch === void 0 ? void 0 : campusMatch.nome) || ''
    };
  };

  const buildPayloadFromRow = function (row) {
    let coords = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const campusInfo = resolveCampusFromRow(row);
    return {
      celula: row.celula || '',
      rede: row.rede || '',
      lider: row.lider || '',
      email_lider: row.email_lider || '',
      cel_lider: normalizeDigits(row.cel_lider || ''),
      anfitriao: row.anfitriao || '',
      campus: campusInfo.campusNome,
      campusId: campusInfo.campusId || '',
      numero: row.numero || '',
      cep: row.cep || '',
      endereco: row.endereco || '',
      bairro: coords.bairro || row.bairro || '',
      cidade: coords.cidade || row.cidade || '',
      estado: coords.estado || row.estado || '',
      lideranca: row.lideranca || '',
      pastor_geracao: row.pastor_geracao || '',
      pastor_campus: row.pastor_campus || '',
      dia: row.dia || '',
      lat: coords.lat || row.lat || '',
      lon: coords.lon || row.lon || ''
    };
  };

  const celulaJaCadastrada = async (row, token) => {
    const searchParams = new URLSearchParams({
      celula: row.celula || '',
      rede: row.rede || '',
      lider: row.lider || '',
      limit: 1
    });

    try {
      const res = await fetch(`${API_URL}/start/celula?${searchParams.toString()}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (!res.ok) return false;
      const data = await res.json();
      const registros = data.registros || [];
      return registros.some(item => (item.celula || '').toLowerCase() === (row.celula || '').toLowerCase() && (item.rede || '').toLowerCase() === (row.rede || '').toLowerCase() && (item.lider || '').toLowerCase() === (row.lider || '').toLowerCase());
    } catch (error) {
      console.error('Falha ao verificar duplicidade da cǸlula:', error);
      return false;
    }
  };

  const importarCelulas = async records => {
    const token = localStorage.getItem('token');
    const validRecords = records.filter(record => {
      var _record$data;

      return (_record$data = record.data) === null || _record$data === void 0 ? void 0 : _record$data.celula;
    });
    let success = 0;
    let failed = 0;
    const errors = [];
    const total = validRecords.length;
    setImportProgress({
      total,
      processed: 0,
      success: 0,
      failed: 0
    });

    for (const record of validRecords) {
      try {
        const isDuplicate = await celulaJaCadastrada(record.data, token);

        if (isDuplicate) {
          failed += 1;
          errors.push(`Linha ${record.lineNumber}: Celula ja cadastrada para esta rede e lider.`);
          continue;
        }

        const coords = await geocodeAddressFromRow(record.data);
        const payload = buildPayloadFromRow(record.data, coords);
        const response = await fetch(`${API_URL}/start/celula`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(payload)
        });

        if (!response.ok) {
          let message = 'Erro ao salvar célula.';

          try {
            const body = await response.json();
            message = (body === null || body === void 0 ? void 0 : body.erro) || (body === null || body === void 0 ? void 0 : body.message) || message;
          } catch (err) {// ignore parse errors
          }

          throw new Error(message);
        }

        success += 1;
      } catch (error) {
        failed += 1;
        errors.push(`Linha ${record.lineNumber}: ${error.message}`);
      } finally {
        setImportProgress(prev => ({
          total,
          processed: ((prev === null || prev === void 0 ? void 0 : prev.processed) || 0) + 1,
          success,
          failed
        }));
      }
    }

    return {
      success,
      processed: total,
      failed,
      errors
    };
  };

  const handleImportFileChange = event => {
    var _event$target$files;

    const file = (_event$target$files = event.target.files) === null || _event$target$files === void 0 ? void 0 : _event$target$files[0];
    setImportFile(file || null);
    setImportSummary(null);
    setImportProgress(null);
  };

  const handleImportDialogClose = () => {
    if (importing) return;
    setImportDialogOpen(false);
    setImportFile(null);
    setImportSummary(null);
    setImportProgress(null);
  };

  const handleImportSubmit = () => {
    if (!importFile) {
      setNotification('Selecione um arquivo CSV para importar.');
      return;
    }

    setImporting(true);
    const reader = new FileReader();

    reader.onload = async event => {
      try {
        var _event$target;

        const text = (_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.result;
        const records = parseCsvText(typeof text === 'string' ? text : '');
        const result = await importarCelulas(records);
        setImportSummary(result);
        setNotification(`Importacao concluida: ${result.success} de ${result.processed} registros inseridos. ${result.failed} nao foram importados.`);
        fetchCelulas();
      } catch (error) {
        console.error('Erro na importação de células:', error);
        setImportSummary(null);
        setNotification(error.message || 'Erro ao importar células.');
      } finally {
        setImporting(false);
      }
    };

    reader.onerror = () => {
      setImporting(false);
      setNotification('Erro ao ler o arquivo selecionado.');
    };

    reader.readAsText(importFile);
  };

  const handleDownloadErrors = () => {
    var _importSummary$errors;

    if (!(importSummary !== null && importSummary !== void 0 && (_importSummary$errors = importSummary.errors) !== null && _importSummary$errors !== void 0 && _importSummary$errors.length)) return;
    const blob = new Blob([importSummary.errors.join('\n')], {
      type: 'text/plain;charset=utf-8'
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'erros-importacao-celulas.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const fetchApeloResumo = async () => {
    const token = localStorage.getItem('token');

    try {
      const res = await fetch(`${API_URL}/start/direcionamentos/resumo-por-celula`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (!res.ok) throw new Error('Falha ao buscar resumo de apelos.');
      const data = await res.json();
      const map = {};
      (data || []).forEach(item => {
        if (item.celula_id) {
          map[item.celula_id] = item.total || 0;
        }
      });
      setApeloCounts(map);
    } catch (err) {
      console.error('Erro ao carregar resumo de apelos:', err);
      setApeloCounts({});
    }
  };

  const fetchApelosPorCelula = async celula => {
    if (!(celula !== null && celula !== void 0 && celula.id)) return;
    setApelosCelula(celula);
    setApelosLoading(true);
    setApelosDialogOpen(true);
    const token = localStorage.getItem('token');

    try {
      const res = await fetch(`${API_URL}/start/direcionamentos/por-celula/${celula.id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (!res.ok) {
        throw new Error('Erro ao buscar apelos da célula.');
      }

      const data = await res.json();
      setApelosList(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
      setNotification(err.message || 'Erro ao carregar apelos.');
      setApelosList([]);
    } finally {
      setApelosLoading(false);
    }
  };

  const closeApelosDialog = () => {
    if (apelosLoading) return;
    setApelosDialogOpen(false);
    setApelosList([]);
    setApelosCelula(null);
  };

  const statusConfig = {
    DIRECIONADO_COM_SUCESSO: {
      label: 'Direcionado',
      color: 'info'
    },
    ENVIO_LIDER_PENDENTE_WHATS_ERRADO: {
      label: 'Pendência de Envio para Líder',
      color: 'warning'
    },
    CONSOLIDADO_CELULA: {
      label: 'Consolidado na célula',
      color: 'success'
    },
    DIRECIONAMENTO_INCORRETO_REENVIO_PENDENTE: {
      label: 'Direcionamento incorreto',
      color: 'error'
    },
    ENVIO_LIDER_PENDENTE: {
      label: 'Líder ainda não fez contato',
      color: 'secondary'
    },
    CONTATO_LIDER_SEM_RETORNO: {
      label: 'Líder enviou mensagem, sem retorno',
      color: 'secondary'
    },
    CONSOLIDACAO_INTERROMPIDA: {
      label: 'Não Consolidado',
      color: 'error'
    },
    MOVIMENTACAO_CELULA: {
      label: 'Em movimentação de célula',
      color: 'primary'
    }
  };

  const renderStatusChip = status => {
    const cfg = statusConfig[status] || {
      label: status || '-',
      color: 'default'
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Chip, {
      size: "small",
      label: cfg.label,
      color: cfg.color,
      sx: {
        fontWeight: 600
      }
    });
  };

  const DECISAO_OPTIONS = [{
    value: 'apelo_decisao',
    label: 'Aceitar Jesus como meu Senhor e Salvador',
    color: 'success'
  }, {
    value: 'apelo_volta',
    label: 'Voltar para Jesus (estava afastado e estou me reconciliando)',
    color: 'info'
  }, {
    value: 'encaminhamento_celula',
    label: 'Encaminhamento de Célula',
    color: 'warning'
  }];

  const renderDecisaoChip = decisao => {
    const opt = DECISAO_OPTIONS.find(o => o.value === decisao);
    if (!opt) return decisao || '-';
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Chip, {
      size: "small",
      label: opt.label,
      color: opt.color,
      sx: {
        fontWeight: 600
      }
    });
  };

  const renderAtivoChip = ativo => {
    const isAtivo = ativo !== false;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Chip, {
      size: "small",
      label: isAtivo ? 'Ativa' : 'Inativa',
      color: isAtivo ? 'success' : 'default',
      sx: {
        fontWeight: 600
      }
    });
  };

  const abrirStatusDialog = apelo => {
    setApeloSelecionado(apelo);
    setStatusSelecionado(apelo.status || '');
    setMotivoStatus('');
    setStatusDialogOpen(true);
  };

  const salvarStatusApelo = async () => {
    if (!apeloSelecionado) return;
    const token = localStorage.getItem('token');

    try {
      const res = await fetch(`${API_URL}/start/direcionamentos/${apeloSelecionado.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          status: statusSelecionado,
          motivo_status: motivoStatus
        })
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error((data === null || data === void 0 ? void 0 : data.erro) || 'Falha ao atualizar status.');
      }

      setNotification('Status atualizado com sucesso.');
      setStatusDialogOpen(false);
      setMotivoStatus('');
      setApelosList(prev => prev.map(item => item.id === apeloSelecionado.id ? { ...item,
        status: statusSelecionado
      } : item));
      fetchApeloResumo();
    } catch (err) {
      console.error(err);
      setNotification(err.message || 'Erro ao atualizar status.');
    }
  };

  const handleSort = column => {
    setSortBy(prev => {
      if (prev === column) {
        setSortDirection(dir => dir === 'asc' ? 'desc' : 'asc');
        return prev;
      }

      setSortDirection('asc');
      return column;
    });
  };

  const getValorOrdenacao = (celula, column) => {
    var _celula$campusRef;

    const valueMap = {
      celula: celula.celula,
      rede: celula.rede,
      lider: celula.lider,
      bairro: celula.bairro,
      campus: ((_celula$campusRef = celula.campusRef) === null || _celula$campusRef === void 0 ? void 0 : _celula$campusRef.nome) || celula.campus
    };
    return valueMap[column] || '';
  };

  const sortedCelulas = [...celulas].sort((a, b) => {
    const aVal = (getValorOrdenacao(a, sortBy) || '').toString().toLowerCase();
    const bVal = (getValorOrdenacao(b, sortBy) || '').toString().toLowerCase();
    if (aVal < bVal) return sortDirection === 'asc' ? -1 : 1;
    if (aVal > bVal) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  const fetchCelulas = async () => {
    const token = localStorage.getItem('token');

    try {
      const queryParams = new URLSearchParams({
        page,
        limit: rowsPerPage,
        celula: searchTerm || '',
        campusId: filterCampus || '',
        rede: filterRede || '',
        bairro: filterBairro || ''
      }).toString();
      const res = await fetch(`${API_URL}/start/celula?${queryParams}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const data = await res.json();
      const registros = data.registros || [];
      setCelulas(registros);
      setTotalPages(data.totalPaginas || 1);
      setTotalRecords(data.totalRegistros || registros.length);
      fetchApeloResumo();
    } catch (err) {
      console.error('Erro ao carregar células:', err);
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchCelulas();
  }, [page, searchTerm, filterCampus, filterRede, filterBairro]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const carregarCampi = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${API_URL}/start/campus`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (!res.ok) {
          throw new Error(`Status ${res.status}`);
        }

        const data = await res.json();
        setCampi(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error('Erro ao carregar campus:', err);
        setCampi([]);
      }
    };

    carregarCampi();
  }, [API_URL]);
  const pagedCelulas = sortedCelulas;

  const handleEdit = celula => {
    history.push('/app/start/celulas/cadastrar', {
      celula,
      pageTitle: 'Edição de Célula'
    });
  };

  const handleDelete = async id => {
    const confirmDelete = window.confirm('Tem certeza que deseja excluir esta célula?');
    if (!confirmDelete) return;
    const token = localStorage.getItem('token');

    try {
      const response = await fetch(`${API_URL}/start/celula/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      });

      if (!response.ok) {
        const data = await response.json();
        const errorMessage = data.erro || data.message || 'Erro ao excluir célula.';
        setNotification(`Erro: ${errorMessage}`);
        return;
      }

      fetchCelulas(); // Atualiza a lista após exclusão

      setNotification('Célula excluída com sucesso!');
    } catch (error) {
      console.error('Erro ao excluir célula:', error);
      setNotification('Erro ao conectar com o servidor. Por favor, tente novamente mais tarde.');
    }
  };

  const alternarStatusCelula = async (celula, ativo) => {
    const token = localStorage.getItem('token');

    try {
      const res = await fetch(`${API_URL}/start/celula/${celula.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          ativo
        })
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error((data === null || data === void 0 ? void 0 : data.erro) || 'Erro ao atualizar status da célula.');
      }

      setNotification(`Célula ${ativo ? 'ativada' : 'inativada'} com sucesso.`);
      fetchCelulas();
    } catch (err) {
      console.error('Erro ao alterar status da célula:', err);
      setNotification(err.message || 'Erro ao alterar status da célula.');
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, "Listagem de C\xE9lulas")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Toolbar, {
    className: classes.toolbar,
    sx: {
      flexWrap: 'wrap',
      gap: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
    display: "flex",
    flexWrap: "wrap",
    gap: 1,
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {
    variant: "contained",
    color: "primary",
    onClick: () => setImportDialogOpen(true)
  }, "Importar c\xE9lulas"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {
    variant: "outlined",
    component: "a",
    href: CSV_TEMPLATE_URL,
    download: true
  }, "Baixar modelo CSV")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
    display: "flex",
    flexWrap: "wrap",
    gap: 1,
    marginLeft: "auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TextField, {
    label: "Pesquisar por nome da c\xE9lula",
    variant: "outlined",
    size: "small",
    value: searchTerm,
    onChange: e => {
      setSearchTerm(e.target.value);
      setPage(1);
    },
    sx: {
      width: 220
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TextField, {
    select: true,
    label: "Campus",
    variant: "outlined",
    size: "small",
    value: filterCampus,
    onChange: e => {
      setFilterCampus(e.target.value);
      setPage(1);
    },
    sx: {
      minWidth: 160
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.MenuItem, {
    value: ""
  }, "Todos"), campi.map(c => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.MenuItem, {
    key: c.id,
    value: c.id
  }, c.nome))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TextField, {
    select: true,
    label: "Rede",
    variant: "outlined",
    size: "small",
    value: filterRede,
    onChange: e => {
      setFilterRede(e.target.value);
      setPage(1);
    },
    sx: {
      minWidth: 140
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.MenuItem, {
    value: ""
  }, "Todas"), REDE_OPTIONS.map(r => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.MenuItem, {
    key: r,
    value: r
  }, r))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TextField, {
    label: "Bairro",
    variant: "outlined",
    size: "small",
    value: filterBairro,
    onChange: e => {
      setFilterBairro(e.target.value);
      setPage(1);
    },
    sx: {
      minWidth: 160
    },
    placeholder: "Digite o bairro"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableContainer, {
    component: _mui_material__WEBPACK_IMPORTED_MODULE_5__.Paper,
    className: classes.rootTable
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Table, {
    className: cx(classes.table, classes.stripped)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableHead, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {
    sortDirection: sortBy === 'celula' ? sortDirection : false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableSortLabel, {
    active: sortBy === 'celula',
    direction: sortBy === 'celula' ? sortDirection : 'asc',
    onClick: () => handleSort('celula')
  }, "Nome da C\xE9lula")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {
    sortDirection: sortBy === 'rede' ? sortDirection : false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableSortLabel, {
    active: sortBy === 'rede',
    direction: sortBy === 'rede' ? sortDirection : 'asc',
    onClick: () => handleSort('rede')
  }, "Rede")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {
    sortDirection: sortBy === 'lider' ? sortDirection : false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableSortLabel, {
    active: sortBy === 'lider',
    direction: sortBy === 'lider' ? sortDirection : 'asc',
    onClick: () => handleSort('lider')
  }, "L\xEDder")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {
    sortDirection: sortBy === 'bairro' ? sortDirection : false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableSortLabel, {
    active: sortBy === 'bairro',
    direction: sortBy === 'bairro' ? sortDirection : 'asc',
    onClick: () => handleSort('bairro')
  }, "Bairro")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {
    sortDirection: sortBy === 'campus' ? sortDirection : false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableSortLabel, {
    active: sortBy === 'campus',
    direction: sortBy === 'campus' ? sortDirection : 'asc',
    onClick: () => handleSort('campus')
  }, "Campus")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, null, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, null, "A\xE7\xF5es"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableBody, null, pagedCelulas.length > 0 ? pagedCelulas.map(c => {
    var _c$campusRef;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableRow, {
      key: c.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, null, c.celula), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, null, c.rede), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, null, c.lider), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, null, c.bairro), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, null, ((_c$campusRef = c.campusRef) === null || _c$campusRef === void 0 ? void 0 : _c$campusRef.nome) || c.campus), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, null, renderAtivoChip(c.ativo)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
      display: "flex",
      gap: 1
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Tooltip, {
      title: "Apelos direcionados"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.IconButton, {
      color: "secondary",
      onClick: () => fetchApelosPorCelula(c)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Badge, {
      badgeContent: apeloCounts[c.id] || 0,
      color: "error"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ListAlt__WEBPACK_IMPORTED_MODULE_6__["default"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Tooltip, {
      title: "Editar"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.IconButton, {
      color: "primary",
      onClick: () => handleEdit(c)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_7__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Tooltip, {
      title: c.ativo === false ? 'Ativar célula' : 'Inativar célula'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.IconButton, {
      color: c.ativo === false ? 'success' : 'warning',
      onClick: () => {
        const confirma = c.ativo === false || window.confirm('Confirmar inativação desta célula?');
        if (!confirma) return;
        alternarStatusCelula(c, c.ativo === false);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_PowerSettingsNew__WEBPACK_IMPORTED_MODULE_8__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Tooltip, {
      title: "Excluir"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.IconButton, {
      color: "error",
      onClick: () => handleDelete(c.id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_9__["default"], null))))));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {
    colSpan: 7,
    align: "center"
  }, "Nenhuma c\xE9lula encontrada com esse filtro."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tableFooter", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {
    colSpan: 7,
    align: "right"
  }, "Total de registros: ", totalRecords))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
    mt: 2,
    display: "flex",
    justifyContent: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Pagination, {
    count: totalPages,
    page: page,
    onChange: (e, value) => setPage(value),
    color: "primary"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Dialog, {
    open: importDialogOpen,
    onClose: handleImportDialogClose,
    fullWidth: true,
    maxWidth: "sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.DialogTitle, null, "Importar c\u01F8lulas"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.DialogContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    variant: "body2",
    gutterBottom: true
  }, "Selecione um arquivo CSV seguindo o modelo padr\u01EDo. Cada linha corresponde a uma c\u01F8lula."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {
    variant: "text",
    size: "small",
    component: "a",
    href: CSV_TEMPLATE_URL,
    download: true,
    sx: {
      mt: 1
    }
  }, "Baixar modelo CSV"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
    mt: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "file",
    accept: ".csv,text/csv",
    onChange: handleImportFileChange
  })), importProgress && importProgress.total > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
    mt: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    variant: "body2"
  }, "Progresso: ", importProgress.processed, " / ", importProgress.total), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.LinearProgress, {
    variant: "determinate",
    value: Math.min(100, importProgress.processed / importProgress.total * 100),
    sx: {
      mt: 1
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    variant: "caption"
  }, "Importadas: ", importProgress.success, " | Nao importadas: ", importProgress.failed)), importing && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    variant: "body2",
    color: "textSecondary",
    mt: 2
  }, "Importando registros... Isso pode levar alguns instantes."), importSummary && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
    mt: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    variant: "body2"
  }, "Importacao concluida. ", importSummary.success, " de ", importSummary.processed, " registros inseridos. ", importSummary.failed, " nao foram importados."), importSummary.errors.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
    mt: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    variant: "body2",
    color: "error"
  }, "Ocorreram erros:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
    component: "ul",
    sx: {
      pl: 3,
      mb: 0
    }
  }, importSummary.errors.slice(0, 5).map(err => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    key: err
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    variant: "body2",
    color: "error"
  }, err)))), importSummary.errors.length > 5 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    variant: "caption",
    color: "textSecondary"
  }, "Mostrando os 5 primeiros erros de ", importSummary.errors.length, "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
    mt: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {
    variant: "outlined",
    size: "small",
    onClick: handleDownloadErrors
  }, "Baixar lista completa de erros"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.DialogActions, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {
    onClick: handleImportDialogClose,
    disabled: importing
  }, "Cancelar"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {
    variant: "contained",
    onClick: handleImportSubmit,
    disabled: !importFile || importing
  }, importing ? 'Importando...' : 'Importar'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Dialog, {
    open: apelosDialogOpen,
    onClose: closeApelosDialog,
    fullWidth: true,
    maxWidth: "lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.DialogTitle, null, "Apelos direcionados - ", (apelosCelula === null || apelosCelula === void 0 ? void 0 : apelosCelula.celula) || 'Célula'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.DialogContent, {
    dividers: true
  }, apelosLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    variant: "body2"
  }, "Carregando apelos..."), !apelosLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    variant: "body2",
    gutterBottom: true
  }, "Total: ", apelosList.length), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Divider, {
    sx: {
      mb: 2
    }
  }), apelosList.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    variant: "body2",
    color: "textSecondary"
  }, "Nenhum apelo direcionado para esta c\xE9lula.") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Table, {
    size: "small"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableHead, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, null, "Nome"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, null, "Decis\xE3o"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, null, "Data direcionamento"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, null, "Campus IECG"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, null, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, null, "A\xE7\xF5es"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableBody, null, apelosList.map(apelo => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableRow, {
    key: apelo.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, null, apelo.nome), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, null, renderDecisaoChip(apelo.decisao)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, null, apelo.data_direcionamento || '-'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, null, apelo.campus_iecg), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, null, renderStatusChip(apelo.status)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {
    size: "small",
    variant: "outlined",
    onClick: () => abrirStatusDialog(apelo)
  }, "Alterar status")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.DialogActions, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {
    onClick: closeApelosDialog,
    disabled: apelosLoading
  }, "Fechar"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Dialog, {
    open: statusDialogOpen,
    onClose: () => setStatusDialogOpen(false),
    fullWidth: true,
    maxWidth: "xs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.DialogTitle, null, "Alterar status do apelo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.DialogContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    variant: "body2",
    gutterBottom: true
  }, "Apelo: ", apeloSelecionado === null || apeloSelecionado === void 0 ? void 0 : apeloSelecionado.nome), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TextField, {
    select: true,
    fullWidth: true,
    margin: "normal",
    label: "Status",
    value: statusSelecionado,
    onChange: e => setStatusSelecionado(e.target.value)
  }, Object.keys(statusConfig).map(key => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.MenuItem, {
    key: key,
    value: key
  }, statusConfig[key].label))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TextField, {
    fullWidth: true,
    margin: "normal",
    label: "Motivo (opcional)",
    value: motivoStatus,
    onChange: e => setMotivoStatus(e.target.value),
    placeholder: "Ex.: l\xEDder n\xE3o respondeu, telefone incorreto...",
    multiline: true,
    minRows: 2
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.DialogActions, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {
    onClick: () => setStatusDialogOpen(false)
  }, "Cancelar"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {
    variant: "contained",
    onClick: salvarStatusApelo
  }, "Salvar"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(dan_components_Notification_Notification__WEBPACK_IMPORTED_MODULE_4__["default"], {
    message: notification,
    close: () => setNotification('')
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListagemCelulasPage);

/***/ }),

/***/ "./app/containers/Pages/Users/Login.js":
/*!*********************************************!*\
  !*** ./app/containers/Pages/Users/Login.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var dan_api_dummy_brand__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dan-api/dummy/brand */ "./app/api/dummy/brand.js");
/* harmony import */ var dan_api_dummy_brand__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dan_api_dummy_brand__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dan_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dan-components */ "./app/components/index.js");
/* harmony import */ var dan_components_Forms_user_jss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dan-components/Forms/user-jss */ "./app/components/Forms/user-jss.js");
/* harmony import */ var dan_api_dummy_dummyContents__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dan-api/dummy/dummyContents */ "./app/api/dummy/dummyContents.js");
/* provided dependency */ var process = __webpack_require__(/*! process/browser */ "./node_modules/process/browser.js");








function decodeJwt(token) {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''));
    return JSON.parse(jsonPayload);
  } catch (e) {
    console.error('Erro ao decodificar JWT:', e);
    return null;
  }
}

function Login(_ref) {
  let {
    setIsAuthenticated = () => {}
  } = _ref;
  const [valueForm, setValueForm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null); // Mantido para compatibilidade

  const {
    classes
  } = (0,dan_components_Forms_user_jss__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useHistory)();
  const fallbackHost = `${window.location.protocol}//${window.location.host}`;
  const API_URL = process.env.REACT_APP_API_URL && process.env.REACT_APP_API_URL.replace(/\/$/, '') || fallbackHost || 'https://portal.iecg.com.br';

  const submitForm = async values => {
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });

      if (!response.ok) {
        throw new Error('Falha na autenticacao');
      }

      const data = await response.json();
      const token = data.accessToken;
      localStorage.setItem('token', token);
      localStorage.setItem('isAuthenticated', 'true');
      setIsAuthenticated(true);
      const decodedToken = decodeJwt(token);
      if (!decodedToken) throw new Error('Token invalido');
      const userId = decodedToken.userId;
      let userDetails = {};
      let permissions = (data === null || data === void 0 ? void 0 : data.permissoes) || [];

      if (userId) {
        try {
          const userResponse = await fetch(`${API_URL}/users/${userId}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`
            }
          });

          if (userResponse.ok) {
            userDetails = await userResponse.json();
          } else {
            console.warn('Falha ao buscar dados do usuario, seguindo com token somente');
          }
        } catch (err) {
          console.warn('Erro ao buscar usuario, seguindo com token somente', err);
        }
      }

      if (!permissions.length) {
        var _userDetails, _userDetails$Perfil, _userDetails$Perfil$p, _userDetails2, _userDetails2$perfil, _userDetails2$perfil$;

        permissions = ((_userDetails = userDetails) === null || _userDetails === void 0 ? void 0 : (_userDetails$Perfil = _userDetails.Perfil) === null || _userDetails$Perfil === void 0 ? void 0 : (_userDetails$Perfil$p = _userDetails$Perfil.permissoes) === null || _userDetails$Perfil$p === void 0 ? void 0 : _userDetails$Perfil$p.map(p => p.nome)) || ((_userDetails2 = userDetails) === null || _userDetails2 === void 0 ? void 0 : (_userDetails2$perfil = _userDetails2.perfil) === null || _userDetails2$perfil === void 0 ? void 0 : (_userDetails2$perfil$ = _userDetails2$perfil.permissoes) === null || _userDetails2$perfil$ === void 0 ? void 0 : _userDetails2$perfil$.map(p => p.nome)) || [];
      }

      const userData = {
        name: userDetails.name || (decodedToken === null || decodedToken === void 0 ? void 0 : decodedToken.nome) || 'Usuario',
        id: userDetails.id || userId || 'user',
        perfilId: userDetails.perfilId || (decodedToken === null || decodedToken === void 0 ? void 0 : decodedToken.perfilId),
        title: 'Usuario Autenticado',
        avatar: userDetails.image || 'default-avatar.png',
        status: 'online',
        permissions
      };
      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('permissions', JSON.stringify(permissions));
      dan_api_dummy_dummyContents__WEBPACK_IMPORTED_MODULE_6__["default"].user = userData;
      history.push('/app');
    } catch (error) {
      console.error('Erro ao fazer login:', error); // Mesmo em erro, garanta que flag de auth volte para falso

      setIsAuthenticated(false);
    }
  };

  const title = (dan_api_dummy_brand__WEBPACK_IMPORTED_MODULE_3___default().name) + ' - Login';
  const description = (dan_api_dummy_brand__WEBPACK_IMPORTED_MODULE_3___default().desc);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "description",
    content: description
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classes.container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classes.userFormWrap
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(dan_components__WEBPACK_IMPORTED_MODULE_4__.LoginForm, {
    onSubmit: values => submitForm(values)
  }))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);

/***/ }),

/***/ "./app/containers/Pages/Users/Profile.js":
/*!***********************************************!*\
  !*** ./app/containers/Pages/Users/Profile.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var browser_image_compression__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! browser-image-compression */ "./node_modules/browser-image-compression/dist/browser-image-compression.mjs");
/* harmony import */ var dan_api_dummy_dummyContents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dan-api/dummy/dummyContents */ "./app/api/dummy/dummyContents.js");
/* harmony import */ var dan_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dan-components */ "./app/components/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/node/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/index.js");
/* harmony import */ var react_webcam__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-webcam */ "./node_modules/react-webcam/dist/react-webcam.js");
/* harmony import */ var react_webcam__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_webcam__WEBPACK_IMPORTED_MODULE_7__);
/* provided dependency */ var process = __webpack_require__(/*! process/browser */ "./node_modules/process/browser.js");




 // Importação correta






const ProfilePage = () => {
  var _process$env$REACT_AP, _user$Perfil;

  const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [notification, setNotification] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [showWebcam, setShowWebcam] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [capturedImage, setCapturedImage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const webcamRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useHistory)();

  const formatDate = dateString => {
    if (!dateString) return "Não informado";
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
  };

  const userStorage = JSON.parse(localStorage.getItem("user"));
  const id = userStorage === null || userStorage === void 0 ? void 0 : userStorage.id;
  const token = localStorage.getItem('token');
  const API_URL = ((_process$env$REACT_AP = process.env.REACT_APP_API_URL) === null || _process$env$REACT_AP === void 0 ? void 0 : _process$env$REACT_AP.replace(/\/$/, '')) || 'https://portal.iecg.com.br';

  const fetchUser = async () => {
    try {
      const response = await fetch(`${API_URL}/users/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      });
      if (!response.ok) throw new Error("Erro ao carregar os detalhes do usuário");
      const data = await response.json();
      setUser(data);
      setCapturedImage(data.image || '');
    } catch (error) {
      console.error("Erro ao buscar usuário:", error);
    }
  };

  const formatCPF = cpf => {
    if (!cpf) return 'Não informado';
    return cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4");
  };

  const compressImage = async file => {
    const options = {
      maxSizeMB: 0.3,
      // máximo 300KB
      maxWidthOrHeight: 500,
      // redimensiona se passar disso
      useWebWorker: true
    };

    try {
      const compressedFile = await (0,browser_image_compression__WEBPACK_IMPORTED_MODULE_3__["default"])(file, options);
      return await browser_image_compression__WEBPACK_IMPORTED_MODULE_3__["default"].getDataUrlFromFile(compressedFile);
    } catch (error) {
      console.error("Erro ao comprimir imagem:", error);
      return null;
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (id) fetchUser();
  }, [id]);

  const capturePhoto = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();

      if (imageSrc) {
        updateImage(imageSrc);
        setCapturedImage(imageSrc);
        setShowWebcam(false);
      }
    }
  };

  const resetPhoto = () => {
    updateImage('');
    setCapturedImage('');
    setShowWebcam(false);
  };

  const handleFileUpload = async e => {
    const file = e.target.files[0];

    if (file) {
      const compressedBase64 = await compressImage(file);

      if (compressedBase64) {
        setCapturedImage(compressedBase64);
        updateImage(compressedBase64);
      }
    }
  };

  const updateImage = async base64Image => {
    try {
      const response = await fetch(`${API_URL}/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          image: base64Image
        })
      });
      const data = await response.json();

      if (response.ok) {
        setNotification('Imagem atualizada com sucesso!');
        setUser(prev => ({ ...prev,
          image: base64Image
        })); // ✅ Atualiza também o avatar local

        const userStorage = JSON.parse(localStorage.getItem("user"));
        const updatedUser = { ...userStorage,
          avatar: base64Image
        };
        localStorage.setItem("user", JSON.stringify(updatedUser));
        dan_api_dummy_dummyContents__WEBPACK_IMPORTED_MODULE_4__["default"].user = updatedUser;
      } else {
        setNotification(`Erro: ${data.message || 'Não foi possível atualizar a imagem'}`);
      }
    } catch (error) {
      console.error('Erro ao atualizar imagem:', error);
      setNotification('Erro ao conectar com o servidor.');
    }
  };

  if (!user) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {
      color: "error"
    }, "Erro ao carregar os dados. Verifique a conex\xE3o.");
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, "Detalhes de ", user.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(dan_components__WEBPACK_IMPORTED_MODULE_5__.PapperBlock, {
    title: "Detalhes do Usu\xE1rio",
    desc: "Informa\xE7\xF5es completas"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Paper, {
    style: {
      padding: 20,
      marginTop: 20
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {
    display: "flex",
    alignItems: "center",
    gap: 2,
    mb: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      width: 100,
      height: 100,
      borderRadius: '50%',
      overflow: 'hidden',
      border: '2px solid #ccc',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, showWebcam ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_webcam__WEBPACK_IMPORTED_MODULE_7___default()), {
    audio: false,
    ref: webcamRef,
    screenshotFormat: "image/jpeg",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : capturedImage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: capturedImage,
    alt: "Foto do usu\xE1rio",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_6__.AccountCircle, {
    style: {
      width: '80%',
      height: '80%',
      color: '#ccc'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {
    mt: 1,
    display: "flex",
    gap: 1,
    flexWrap: "wrap"
  }, !showWebcam && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Button, {
    variant: "outlined",
    size: "small",
    onClick: () => setShowWebcam(true)
  }, "Webcam"), showWebcam && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Button, {
    variant: "contained",
    size: "small",
    onClick: capturePhoto
  }, "Capturar"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Button, {
    variant: "outlined",
    size: "small",
    component: "label"
  }, "Upload", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "file",
    hidden: true,
    accept: "image/*",
    onChange: handleFileUpload
  })), capturedImage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.IconButton, {
    onClick: resetPhoto,
    size: "small",
    color: "error"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_6__.Delete, null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {
    variant: "h5",
    fontWeight: "bold"
  }, user.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {
    variant: "body2",
    color: "textSecondary"
  }, user.username))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.List, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.ListItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.ListItemIcon, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_6__.AccountCircle, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.ListItemText, {
    primary: "Nome completo",
    secondary: user.name || 'Não informado'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.ListItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.ListItemIcon, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_6__.CalendarToday, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.ListItemText, {
    primary: "Data de nascimento",
    secondary: formatDate(user.data_nascimento)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.ListItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.ListItemIcon, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_6__.VerifiedUser, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.ListItemText, {
    primary: "CPF",
    secondary: formatCPF(user.cpf)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.ListItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.ListItemIcon, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_6__.Email, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.ListItemText, {
    primary: "Email",
    secondary: user.email || 'Não informado'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.ListItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.ListItemIcon, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_6__.VerifiedUser, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.ListItemText, {
    primary: "Ativo",
    secondary: user.active ? "Sim" : "Não"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.ListItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.ListItemIcon, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_6__.AccountCircle, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.ListItemText, {
    primary: "Perfil",
    secondary: ((_user$Perfil = user.Perfil) === null || _user$Perfil === void 0 ? void 0 : _user$Perfil.descricao) || 'N/A'
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(dan_components__WEBPACK_IMPORTED_MODULE_5__.Notification, {
    message: notification,
    close: () => setNotification('')
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfilePage);

/***/ }),

/***/ "./app/containers/Pages/Webhooks/WebhooksPage.js":
/*!*******************************************************!*\
  !*** ./app/containers/Pages/Webhooks/WebhooksPage.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/node/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var dan_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dan-components */ "./app/components/index.js");
/* harmony import */ var _utils_webhookClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/webhookClient */ "./app/utils/webhookClient.js");





const EVENTS = [{
  value: 'apelo.created',
  label: 'Apelo criado'
}, {
  value: 'apelo.moved',
  label: 'Apelo movido'
}, {
  value: 'apelo.status_changed',
  label: 'Status do apelo alterado'
}];
const WEBHOOK_BASE = 'https://portal.iecg.com.br/webhook/';

const WebhooksPage = () => {
  const [webhooks, setWebhooks] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [notification, setNotification] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [createDialogOpen, setCreateDialogOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    name: '',
    url: '',
    events: ['apelo.created'],
    secret: ''
  });

  const loadData = async () => {
    setLoading(true);

    try {
      const data = await (0,_utils_webhookClient__WEBPACK_IMPORTED_MODULE_3__.fetchWebhooks)();
      setWebhooks(data || []);
    } catch (err) {
      setNotification(err.message || 'Erro ao carregar webhooks');
    } finally {
      setLoading(false);
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    loadData();
  }, []);

  const handleToggleEvent = eventValue => {
    setForm(prev => {
      const has = prev.events.includes(eventValue);
      return { ...prev,
        events: has ? prev.events.filter(e => e !== eventValue) : [...prev.events, eventValue]
      };
    });
  };

  const handleCreate = async () => {
    if (!form.name.trim() || !form.url.trim() || !form.events.length) {
      setNotification('Preencha nome, URL e selecione ao menos um evento.');
      return;
    }

    const cleanedUrl = form.url.trim();
    const targetUrl = /^https?:\/\//i.test(cleanedUrl) ? cleanedUrl : `${WEBHOOK_BASE}${cleanedUrl.replace(/^\/+/, '')}`;

    try {
      await (0,_utils_webhookClient__WEBPACK_IMPORTED_MODULE_3__.createWebhook)({
        name: form.name.trim(),
        url: targetUrl,
        events: form.events,
        secret: form.secret.trim() || undefined
      });
      setNotification('Webhook criado com sucesso.');
      setCreateDialogOpen(false);
      setForm({
        name: '',
        url: '',
        events: ['apelo.created'],
        secret: ''
      });
      loadData();
    } catch (err) {
      setNotification(err.message || 'Erro ao criar webhook.');
    }
  };

  const handleToggleActive = async webhook => {
    try {
      await (0,_utils_webhookClient__WEBPACK_IMPORTED_MODULE_3__.toggleWebhook)(webhook.id, !webhook.active);
      setNotification(`Webhook ${!webhook.active ? 'ativado' : 'desativado'} com sucesso.`);
      loadData();
    } catch (err) {
      setNotification(err.message || 'Erro ao atualizar webhook.');
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, "Webhooks")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(dan_components__WEBPACK_IMPORTED_MODULE_2__.PapperBlock, {
    title: "Webhooks",
    desc: "Gerencie URLs que receber\xE3o eventos do portal."
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
    display: "flex",
    justifyContent: "space-between",
    mb: 2,
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
    variant: "body1"
  }, "Eventos dispon\xEDveis: Apelo criado, movido e altera\xE7\xE3o de status."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {
    variant: "contained",
    color: "primary",
    onClick: () => setCreateDialogOpen(true)
  }, "Novo webhook")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableContainer, {
    component: _mui_material__WEBPACK_IMPORTED_MODULE_4__.Paper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Table, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableHead, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, null, "Nome"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, null, "URL"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, null, "Eventos"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {
    align: "center"
  }, "Ativo"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableBody, null, (!webhooks || !webhooks.length) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {
    colSpan: 4,
    align: "center"
  }, loading ? 'Carregando...' : 'Nenhum webhook cadastrado.')), webhooks.map(hook => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableRow, {
    key: hook.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, null, hook.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, null, hook.url), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, null, (hook.events || []).map(evt => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Chip, {
    key: evt,
    label: evt,
    size: "small",
    sx: {
      mr: 1,
      mb: 0.5
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {
    align: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Switch, {
    color: "primary",
    checked: !!hook.active,
    onChange: () => handleToggleActive(hook)
  })))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Dialog, {
    open: createDialogOpen,
    onClose: () => setCreateDialogOpen(false),
    fullWidth: true,
    maxWidth: "sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.DialogTitle, null, "Novo webhook"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.DialogContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
    container: true,
    spacing: 2,
    sx: {
      mt: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {
    label: "Nome",
    fullWidth: true,
    value: form.name,
    onChange: e => setForm(prev => ({ ...prev,
      name: e.target.value
    }))
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {
    label: "URL",
    fullWidth: true,
    helperText: `Se preencher apenas o caminho, usamos ${WEBHOOK_BASE}<sua-rota>`,
    placeholder: `${WEBHOOK_BASE}meu-endpoint`,
    value: form.url,
    onChange: e => setForm(prev => ({ ...prev,
      url: e.target.value
    }))
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {
    label: "Secret (opcional, ser\xE1 enviado em header X-Webhook-Secret)",
    fullWidth: true,
    value: form.secret,
    onChange: e => setForm(prev => ({ ...prev,
      secret: e.target.value
    }))
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
    variant: "subtitle2",
    gutterBottom: true
  }, "Eventos"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
    display: "flex",
    flexWrap: "wrap",
    gap: 1
  }, EVENTS.map(evt => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Chip, {
    key: evt.value,
    label: evt.label,
    color: form.events.includes(evt.value) ? 'primary' : 'default',
    onClick: () => handleToggleEvent(evt.value),
    variant: form.events.includes(evt.value) ? 'filled' : 'outlined'
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.DialogActions, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {
    onClick: () => setCreateDialogOpen(false)
  }, "Cancelar"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {
    variant: "contained",
    onClick: handleCreate
  }, "Salvar"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(dan_components__WEBPACK_IMPORTED_MODULE_2__.Notification, {
    open: !!notification,
    close: () => setNotification(''),
    message: notification,
    type: "info"
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WebhooksPage);

/***/ }),

/***/ "./app/containers/Templates/Dashboard.js":
/*!***********************************************!*\
  !*** ./app/containers/Templates/Dashboard.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/lib/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dan_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dan-components */ "./app/components/index.js");
/* harmony import */ var dan_redux_actions_uiActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dan-redux/actions/uiActions */ "./app/redux/actions/uiActions.js");
/* harmony import */ var _config_pageTitles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config/pageTitles */ "./app/config/pageTitles.js");
/* harmony import */ var _layouts_LeftSidebarLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layouts/LeftSidebarLayout */ "./app/containers/Templates/layouts/LeftSidebarLayout.js");
/* harmony import */ var _layouts_RightSidebarLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layouts/RightSidebarLayout */ "./app/containers/Templates/layouts/RightSidebarLayout.js");
/* harmony import */ var _layouts_LeftSidebarBigLayout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layouts/LeftSidebarBigLayout */ "./app/containers/Templates/layouts/LeftSidebarBigLayout.js");
/* harmony import */ var _layouts_DropMenuLayout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layouts/DropMenuLayout */ "./app/containers/Templates/layouts/DropMenuLayout.js");
/* harmony import */ var _layouts_MegaMenuLayout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layouts/MegaMenuLayout */ "./app/containers/Templates/layouts/MegaMenuLayout.js");
/* harmony import */ var _appStyles_jss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./appStyles-jss */ "./app/containers/Templates/appStyles-jss.js");














function Dashboard(props) {
  const {
    classes,
    cx
  } = (0,_appStyles_jss__WEBPACK_IMPORTED_MODULE_12__["default"])(); // Initial header style

  const [openGuide, setOpenGuide] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [appHeight, setAppHeight] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const {
      history,
      loadTransition
    } = props; // Adjust min height

    setAppHeight(window.innerHeight + 112); // Set expanded sidebar menu

    const currentPath = history.location.pathname;
    props.initialOpen(currentPath); // Play page transition

    loadTransition(true); // Execute all arguments when page changes

    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
      setTimeout(() => {
        loadTransition(true);
      }, 500);
    });
    return () => {
      if (unlisten != null) {
        unlisten();
      }
    };
  }, []);

  const handleOpenGuide = () => {
    setOpenGuide(true);
  };

  const handleCloseGuide = () => {
    setOpenGuide(false);
  };

  const {
    children,
    toggleDrawer,
    sidebarOpen,
    loadTransition,
    pageLoaded,
    mode,
    history,
    gradient,
    deco,
    bgPosition,
    layout,
    changeMode
  } = props;
  const titleException = ['/app', '/app/crm-dashboard', '/app/crypto-dashboard'];
  const normalizedPath = history.location.pathname.replace(/^\/+/, '').replace(/\/+$/, '');
  const routeKey = normalizedPath || 'app';
  const pageTitle = (0,_config_pageTitles__WEBPACK_IMPORTED_MODULE_6__.getPageTitle)(routeKey);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      minHeight: appHeight
    },
    className: cx(classes.appFrameInner, layout === 'top-navigation' || layout === 'mega-menu' ? classes.topNav : classes.sideNav, mode === 'dark' ? 'dark-mode' : 'light-mode')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(dan_components__WEBPACK_IMPORTED_MODULE_4__.GuideSlider, {
    openGuide: openGuide,
    closeGuide: handleCloseGuide
  }),
  /* Left Sidebar Layout */
  layout === 'left-sidebar' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layouts_LeftSidebarLayout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    history: history,
    toggleDrawer: toggleDrawer,
    loadTransition: loadTransition,
    changeMode: changeMode,
    sidebarOpen: sidebarOpen,
    pageLoaded: pageLoaded,
    mode: mode,
    gradient: gradient,
    deco: deco,
    bgPosition: bgPosition,
    place: pageTitle,
    titleException: titleException,
    handleOpenGuide: handleOpenGuide
  }, children),
  /* Left Big-Sidebar Layout */
  layout === 'big-sidebar' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layouts_LeftSidebarBigLayout__WEBPACK_IMPORTED_MODULE_9__["default"], {
    history: history,
    toggleDrawer: toggleDrawer,
    loadTransition: loadTransition,
    changeMode: changeMode,
    sidebarOpen: sidebarOpen,
    pageLoaded: pageLoaded,
    gradient: gradient,
    deco: deco,
    bgPosition: bgPosition,
    mode: mode,
    place: pageTitle,
    titleException: titleException,
    handleOpenGuide: handleOpenGuide
  }, children),
  /* Right Sidebar Layout */
  layout === 'right-sidebar' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layouts_RightSidebarLayout__WEBPACK_IMPORTED_MODULE_8__["default"], {
    history: history,
    toggleDrawer: toggleDrawer,
    loadTransition: loadTransition,
    changeMode: changeMode,
    sidebarOpen: sidebarOpen,
    pageLoaded: pageLoaded,
    mode: mode,
    gradient: gradient,
    deco: deco,
    bgPosition: bgPosition,
    place: pageTitle,
    titleException: titleException,
    handleOpenGuide: handleOpenGuide
  }, children),
  /* Top Bar with Dropdown Menu */
  layout === 'top-navigation' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layouts_DropMenuLayout__WEBPACK_IMPORTED_MODULE_10__["default"], {
    history: history,
    toggleDrawer: toggleDrawer,
    loadTransition: loadTransition,
    changeMode: changeMode,
    sidebarOpen: sidebarOpen,
    pageLoaded: pageLoaded,
    mode: mode,
    gradient: gradient,
    deco: deco,
    bgPosition: bgPosition,
    place: pageTitle,
    titleException: titleException,
    handleOpenGuide: handleOpenGuide
  }, children),
  /* Top Bar with Mega Menu */
  layout === 'mega-menu' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layouts_MegaMenuLayout__WEBPACK_IMPORTED_MODULE_11__["default"], {
    history: history,
    toggleDrawer: toggleDrawer,
    loadTransition: loadTransition,
    changeMode: changeMode,
    sidebarOpen: sidebarOpen,
    pageLoaded: pageLoaded,
    mode: mode,
    gradient: gradient,
    deco: deco,
    bgPosition: bgPosition,
    place: pageTitle,
    titleException: titleException,
    handleOpenGuide: handleOpenGuide
  }, children));
}

Dashboard.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.node.isRequired,
  history: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.object.isRequired,
  initialOpen: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.func.isRequired,
  toggleDrawer: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.func.isRequired,
  loadTransition: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.func.isRequired,
  changeMode: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.func.isRequired,
  sidebarOpen: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.bool.isRequired,
  pageLoaded: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.bool.isRequired,
  mode: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.string.isRequired,
  gradient: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.bool.isRequired,
  deco: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.bool.isRequired,
  bgPosition: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.string.isRequired,
  layout: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  sidebarOpen: state.ui.sidebarOpen,
  pageLoaded: state.ui.pageLoaded,
  mode: state.ui.type,
  gradient: state.ui.gradient,
  deco: state.ui.decoration,
  layout: state.ui.layout,
  bgPosition: state.ui.bgPosition
});

const mapDispatchToProps = dispatch => ({
  toggleDrawer: () => dispatch((0,dan_redux_actions_uiActions__WEBPACK_IMPORTED_MODULE_5__.toggleAction)()),
  initialOpen: (0,redux__WEBPACK_IMPORTED_MODULE_2__.bindActionCreators)(dan_redux_actions_uiActions__WEBPACK_IMPORTED_MODULE_5__.openAction, dispatch),
  loadTransition: (0,redux__WEBPACK_IMPORTED_MODULE_2__.bindActionCreators)(dan_redux_actions_uiActions__WEBPACK_IMPORTED_MODULE_5__.playTransitionAction, dispatch)
});

const DashboardMaped = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, mapDispatchToProps)(Dashboard);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DashboardMaped);

/***/ }),

/***/ "./app/containers/Templates/Decoration.js":
/*!************************************************!*\
  !*** ./app/containers/Templates/Decoration.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dan_images_decoration_light_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dan-images/decoration_light.svg */ "./public/images/decoration_light.svg");
/* harmony import */ var dan_images_decoration_dark_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dan-images/decoration_dark.svg */ "./public/images/decoration_dark.svg");
/* harmony import */ var dan_images_petal_bg_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dan-images/petal_bg.svg */ "./public/images/petal_bg.svg");
/* harmony import */ var _appStyles_jss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./appStyles-jss */ "./app/containers/Templates/appStyles-jss.js");







function Decoration(props) {
  const {
    classes,
    cx
  } = (0,_appStyles_jss__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const {
    mode,
    gradient,
    decoration,
    bgPosition,
    horizontalMenu
  } = props;

  const getBgPosition = position => {
    if (position === 'header') {
      return classes.headerBg;
    }

    if (position === 'half') {
      return classes.halfBg;
    }

    return classes.fullBg;
  };

  const renderDecor = (type, position) => {
    const mergeDeco = type + '-' + position;

    if (mergeDeco === 'dark-half') {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
        src: dan_images_decoration_dark_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
        alt: "decoration",
        className: classes.decorationWave
      });
    }

    if (mergeDeco === 'dark-full') {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
        src: dan_images_petal_bg_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
        alt: "decoration",
        className: classes.decorationPetal
      });
    }

    if (mergeDeco === 'light-half') {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
        src: dan_images_decoration_light_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
        alt: "decoration",
        className: classes.decorationWave
      });
    }

    if (mergeDeco === 'light-full') {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
        src: dan_images_petal_bg_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
        alt: "decoration",
        className: classes.decorationPetal
      });
    }

    return false;
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classes.bgWrap
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: cx(classes.bgbar, horizontalMenu && classes.highTop, gradient ? classes.gradientBg : classes.solidBg, getBgPosition(bgPosition))
  }, decoration && renderDecor(mode, bgPosition)));
}

Decoration.propTypes = {
  mode: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.string.isRequired,
  gradient: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.bool.isRequired,
  decoration: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.bool.isRequired,
  bgPosition: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.string.isRequired,
  horizontalMenu: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.bool.isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Decoration);

/***/ }),

/***/ "./app/containers/Templates/Outer.js":
/*!*******************************************!*\
  !*** ./app/containers/Templates/Outer.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _appStyles_jss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./appStyles-jss */ "./app/containers/Templates/appStyles-jss.js");





function Outer(props) {
  const {
    classes,
    cx
  } = (0,_appStyles_jss__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const {
    children,
    gradient,
    decoration
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: cx(classes.appFrameOuter, gradient ? classes.gradientBg : classes.solidBg)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", {
    className: classes.outerContent,
    id: "mainContent"
  }, decoration && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classes.petal
  }), children));
}

Outer.propTypes = {
  gradient: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.bool.isRequired,
  decoration: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.bool.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.node.isRequired
};

const mapStateToProps = state => ({
  gradient: state.ui.gradient,
  decoration: state.ui.decoration
});

const OuterMaped = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps)(Outer);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OuterMaped);

/***/ }),

/***/ "./app/containers/Templates/appStyles-jss.js":
/*!***************************************************!*\
  !*** ./app/containers/Templates/appStyles-jss.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gradientBgLight": () => (/* binding */ gradientBgLight),
/* harmony export */   "gradientBgDark": () => (/* binding */ gradientBgDark),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tss-react/mui */ "./node_modules/tss-react/esm/mui.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/node/styles/index.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dan_images_petal_bg_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dan-images/petal_bg.svg */ "./public/images/petal_bg.svg");



const gradientBgLight = theme => `linear-gradient(-45deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.main} 33%, ${theme.palette.secondary.main} 100%);`;
const gradientBgDark = theme => `linear-gradient(-45deg, ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.darken)(theme.palette.primary.main, 0.4)} 0%, ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.darken)(theme.palette.primary.main, 0.4)} 33%, ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.darken)(theme.palette.secondary.main, 0.4)} 100%);`;
const appFrame = {
  display: 'flex',
  width: '100%',
  minHeight: '100%',
  zIndex: 1
};
const useStyles = (0,tss_react_mui__WEBPACK_IMPORTED_MODULE_0__.makeStyles)()((theme, _params, classes) => ({
  root: {
    width: '100%',
    marginTop: 0,
    zIndex: 1,
    overflow: 'auto'
  },
  blogWrap: {
    color: theme.palette.text.primary,
    position: 'relative'
  },
  appFrameInner: {
    color: theme.palette.text.primary,
    ...appFrame
  },
  appFrameOuter: {
    color: theme.palette.text.primary,
    ...appFrame
  },
  appFrameLanding: {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.default,
    minHeight: 1000
  },
  appFrameSlider: {
    display: 'flex',
    width: '100%',
    height: '100%',
    color: theme.palette.text.primary,
    [theme.breakpoints.up('lg')]: {
      position: 'absolute',
      overflow: 'hidden'
    },
    backgroundColor: theme.palette.background.default
  },
  topNav: {
    flexDirection: 'column'
  },
  sideNav: {
    flexDirection: 'row'
  },
  content: {
    width: '100%',
    padding: theme.spacing(2),
    minHeight: '100%',
    overflow: 'hidden',
    [theme.breakpoints.down('lg')]: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1)
    }
  },
  petal: {
    background: `url(${dan_images_petal_bg_svg__WEBPACK_IMPORTED_MODULE_1__["default"]}) no-repeat`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    width: '100%',
    height: '100%',
    position: 'fixed'
  },
  outerContent: {
    width: '100%',
    backgroundSize: 'cover',
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bgWrap: {
    position: 'fixed',
    background: theme.palette.background.default,
    width: '100%',
    height: '100%',
    top: 0,
    left: 0
  },
  headerBg: {},
  halfBg: {},
  fullBg: {},
  bgbar: {
    backgroundAttachment: 'fixed',
    width: '100%',
    top: 0,
    left: 0,
    position: 'absolute',
    [`&.${classes.headerBg}`]: {
      height: 64
    },
    [`&.${classes.halfBg}`]: {
      height: 400
    },
    [`&.${classes.fullBg}`]: {
      height: '100%'
    }
  },
  gradientBg: {
    backgroundImage: theme.palette.mode === 'dark' ? gradientBgDark(theme) : gradientBgLight(theme),
    backgroundAttachment: 'fixed'
  },
  solidBg: {
    backgroundColor: theme.palette.mode === 'dark' ? (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.darken)(theme.palette.primary.main, 0.4) : theme.palette.primary.main
  },
  decorationWave: {
    width: '100%',
    height: 'auto',
    position: 'absolute',
    left: -2,
    bottom: -32,
    transform: 'scale(1.1,0.8)',
    transformOrigin: 'bottom',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  decorationPetal: {
    width: '100%',
    height: 'auto',
    position: 'absolute',
    left: 0,
    top: 0
  },
  sidebarLayout: {},
  topbarLayout: {},
  mainWrap: {
    height: '100%',
    position: 'relative',
    '& > div': {
      willChange: 'inherit !important' // hack for floating form issue when expaded

    },
    [`&.${classes.sidebarLayout}`]: {
      paddingTop: theme.spacing(8)
    },
    [`&.${classes.topbarLayout}`]: {
      width: '100%',
      marginTop: theme.spacing(3)
    }
  },
  preloader: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1000,
    background: 'transparent',
    height: 3
  },
  materialBg: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    opacity: 0.5
  },
  contentPaddingLeft: {
    paddingLeft: theme.spacing(10)
  },
  contentPaddingLeftBig: {
    paddingLeft: theme.spacing(2)
  },
  contentPaddingRight: {
    paddingRight: theme.spacing(10)
  },
  hideApp: {
    display: 'none'
  },
  circularProgress: {
    position: 'fixed',
    top: 'calc(50% - 45px)',
    left: 'calc(50% - 45px)'
  },
  brand: {
    height: 54,
    display: 'flex',
    padding: '10px 10px 5px',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    '& img': {
      width: 20
    },
    '& h3': {
      margin: 0,
      fontSize: 16,
      fontWeight: 500,
      paddingLeft: 10,
      color: theme.palette.common.white
    }
  },
  light: {},
  pageTitle: {
    padding: theme.spacing(1),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end'
    },
    '& h4': {
      fontWeight: 700,
      textTransform: 'capitalize',
      [theme.breakpoints.down('lg')]: {
        marginBottom: theme.spacing(3)
      }
    }
  },
  darkTitle: {
    color: theme.palette.mode === 'dark' ? theme.palette.primary.main : theme.palette.primary.dark
  },
  lightTitle: {
    color: theme.palette.common.white
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStyles);

/***/ }),

/***/ "./app/containers/Templates/layouts/DropMenuLayout.js":
/*!************************************************************!*\
  !*** ./app/containers/Templates/layouts/DropMenuLayout.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Fade__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Fade */ "./node_modules/@mui/material/node/Fade/index.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/node/Typography/index.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var dan_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dan-components */ "./app/components/index.js");
/* harmony import */ var dan_api_ui_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dan-api/ui/menu */ "./app/api/ui/menu.js");
/* harmony import */ var dan_api_ui_menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dan_api_ui_menu__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_permissions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/permissions.js */ "./app/utils/permissions.js");
/* harmony import */ var _Decoration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Decoration */ "./app/containers/Templates/Decoration.js");
/* harmony import */ var _appStyles_jss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../appStyles-jss */ "./app/containers/Templates/appStyles-jss.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }











function DropMenuLayout(props) {
  const {
    classes,
    cx
  } = (0,_appStyles_jss__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const {
    children,
    pageLoaded,
    mode,
    gradient,
    deco,
    bgPosition,
    changeMode,
    place,
    history,
    titleException,
    handleOpenGuide,
    toggleDrawer,
    sidebarOpen,
    loadTransition
  } = props;
  const permissions = (0,_utils_permissions_js__WEBPACK_IMPORTED_MODULE_4__.getStoredPermissions)();
  const filteredMenu = (0,_utils_permissions_js__WEBPACK_IMPORTED_MODULE_4__.filterMenuByPermissions)((dan_api_ui_menu__WEBPACK_IMPORTED_MODULE_3___default()), permissions);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(dan_components__WEBPACK_IMPORTED_MODULE_2__.HeaderMenu, {
    type: "top-navigation",
    dataMenu: filteredMenu,
    changeMode: changeMode,
    mode: mode,
    history: history,
    openGuide: handleOpenGuide,
    toggleDrawerOpen: toggleDrawer,
    openMobileNav: sidebarOpen,
    loadTransition: loadTransition,
    logoLink: "/app"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", {
    className: cx(classes.content, classes.highMargin),
    id: "mainContent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Decoration__WEBPACK_IMPORTED_MODULE_5__["default"], {
    mode: mode,
    gradient: gradient,
    decoration: deco,
    bgPosition: bgPosition,
    horizontalMenu: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: cx(classes.mainWrap, classes.topbarLayout)
  }, titleException.indexOf(history.location.pathname) < 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classes.pageTitle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default()), {
    component: "h4",
    className: bgPosition === 'header' ? classes.darkTitle : classes.lightTitle,
    variant: "h4"
  }, place), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(dan_components__WEBPACK_IMPORTED_MODULE_2__.BreadCrumb, {
    separator: " / ",
    theme: bgPosition === 'header' ? 'dark' : 'light',
    location: history.location
  })), !pageLoaded && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/images/spinner.gif",
    alt: "spinner",
    className: classes.circularProgress
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Fade__WEBPACK_IMPORTED_MODULE_8__["default"], _extends({
    in: pageLoaded
  }, pageLoaded ? {
    timeout: 700
  } : {}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: !pageLoaded ? classes.hideApp : ''
  }, children)))));
}

DropMenuLayout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.node.isRequired,
  history: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.object.isRequired,
  changeMode: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.func.isRequired,
  toggleDrawer: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.func.isRequired,
  loadTransition: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.func.isRequired,
  sidebarOpen: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.bool.isRequired,
  pageLoaded: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.bool.isRequired,
  mode: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.string.isRequired,
  gradient: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.bool.isRequired,
  deco: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.bool.isRequired,
  bgPosition: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.string.isRequired,
  place: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.string.isRequired,
  titleException: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.array.isRequired,
  handleOpenGuide: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.func.isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropMenuLayout);

/***/ }),

/***/ "./app/containers/Templates/layouts/LeftSidebarBigLayout.js":
/*!******************************************************************!*\
  !*** ./app/containers/Templates/layouts/LeftSidebarBigLayout.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Fade__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Fade */ "./node_modules/@mui/material/node/Fade/index.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/node/Typography/index.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var dan_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dan-components */ "./app/components/index.js");
/* harmony import */ var dan_api_ui_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dan-api/ui/menu */ "./app/api/ui/menu.js");
/* harmony import */ var dan_api_ui_menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dan_api_ui_menu__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_permissions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/permissions.js */ "./app/utils/permissions.js");
/* harmony import */ var _Decoration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Decoration */ "./app/containers/Templates/Decoration.js");
/* harmony import */ var _appStyles_jss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../appStyles-jss */ "./app/containers/Templates/appStyles-jss.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }











function LeftSidebarBigLayout(props) {
  const {
    classes,
    cx
  } = (0,_appStyles_jss__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const {
    children,
    toggleDrawer,
    sidebarOpen,
    loadTransition,
    pageLoaded,
    mode,
    gradient,
    deco,
    history,
    bgPosition,
    changeMode,
    place,
    titleException,
    handleOpenGuide
  } = props;
  const permissions = (0,_utils_permissions_js__WEBPACK_IMPORTED_MODULE_4__.getStoredPermissions)();
  const filteredMenu = (0,_utils_permissions_js__WEBPACK_IMPORTED_MODULE_4__.filterMenuByPermissions)((dan_api_ui_menu__WEBPACK_IMPORTED_MODULE_3___default()), permissions);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(dan_components__WEBPACK_IMPORTED_MODULE_2__.Header, {
    toggleDrawerOpen: toggleDrawer,
    margin: sidebarOpen,
    gradient: gradient,
    position: "left-sidebar-big",
    changeMode: changeMode,
    mode: mode,
    title: place,
    history: history,
    openGuide: handleOpenGuide
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(dan_components__WEBPACK_IMPORTED_MODULE_2__.SidebarBig, {
    dataMenu: filteredMenu,
    loadTransition: loadTransition,
    open: sidebarOpen,
    toggleDrawerOpen: toggleDrawer
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", {
    className: cx(classes.content, !sidebarOpen ? classes.contentPaddingLeftBig : ''),
    id: "mainContent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Decoration__WEBPACK_IMPORTED_MODULE_5__["default"], {
    mode: mode,
    gradient: gradient,
    decoration: deco,
    bgPosition: bgPosition,
    horizontalMenu: false
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: cx(classes.mainWrap, classes.sidebarLayout)
  }, titleException.indexOf(history.location.pathname) < 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classes.pageTitle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default()), {
    component: "h4",
    className: bgPosition === 'header' ? classes.darkTitle : classes.lightTitle,
    variant: "h4"
  }, place), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(dan_components__WEBPACK_IMPORTED_MODULE_2__.BreadCrumb, {
    separator: " / ",
    theme: bgPosition === 'header' ? 'dark' : 'light',
    location: history.location
  })), !pageLoaded && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/images/spinner.gif",
    alt: "spinner",
    className: classes.circularProgress
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Fade__WEBPACK_IMPORTED_MODULE_8__["default"], _extends({
    in: pageLoaded
  }, pageLoaded ? {
    timeout: 700
  } : {}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: !pageLoaded ? classes.hideApp : ''
  }, children)))));
}

LeftSidebarBigLayout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.node.isRequired,
  history: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.object.isRequired,
  toggleDrawer: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.func.isRequired,
  loadTransition: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.func.isRequired,
  changeMode: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.func.isRequired,
  sidebarOpen: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.bool.isRequired,
  pageLoaded: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.bool.isRequired,
  mode: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.string.isRequired,
  gradient: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.bool.isRequired,
  deco: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.bool.isRequired,
  bgPosition: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.string.isRequired,
  place: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.string.isRequired,
  titleException: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.array.isRequired,
  handleOpenGuide: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.func.isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LeftSidebarBigLayout);

/***/ }),

/***/ "./app/containers/Templates/layouts/LeftSidebarLayout.js":
/*!***************************************************************!*\
  !*** ./app/containers/Templates/layouts/LeftSidebarLayout.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Fade__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Fade */ "./node_modules/@mui/material/node/Fade/index.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/node/Typography/index.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var dan_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dan-components */ "./app/components/index.js");
/* harmony import */ var dan_api_ui_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dan-api/ui/menu */ "./app/api/ui/menu.js");
/* harmony import */ var dan_api_ui_menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dan_api_ui_menu__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Decoration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Decoration */ "./app/containers/Templates/Decoration.js");
/* harmony import */ var _utils_permissions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/permissions.js */ "./app/utils/permissions.js");
/* harmony import */ var _appStyles_jss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../appStyles-jss */ "./app/containers/Templates/appStyles-jss.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }











function LeftSidebarLayout(props) {
  const {
    classes,
    cx
  } = (0,_appStyles_jss__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const {
    children,
    toggleDrawer,
    sidebarOpen,
    loadTransition,
    pageLoaded,
    mode,
    gradient,
    deco,
    history,
    bgPosition,
    changeMode,
    place,
    titleException,
    handleOpenGuide
  } = props;
  const permissions = (0,_utils_permissions_js__WEBPACK_IMPORTED_MODULE_5__.getStoredPermissions)();
  const filteredMenu = (0,_utils_permissions_js__WEBPACK_IMPORTED_MODULE_5__.filterMenuByPermissions)((dan_api_ui_menu__WEBPACK_IMPORTED_MODULE_3___default()), permissions);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(dan_components__WEBPACK_IMPORTED_MODULE_2__.Header, {
    toggleDrawerOpen: toggleDrawer,
    margin: sidebarOpen,
    gradient: gradient,
    position: "left-sidebar",
    changeMode: changeMode,
    mode: mode,
    title: place,
    history: history,
    openGuide: handleOpenGuide
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(dan_components__WEBPACK_IMPORTED_MODULE_2__.Sidebar, {
    open: sidebarOpen,
    toggleDrawerOpen: toggleDrawer,
    loadTransition: loadTransition,
    dataMenu: filteredMenu,
    leftSidebar: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", {
    className: cx(classes.content, !sidebarOpen ? classes.contentPaddingLeft : ''),
    id: "mainContent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Decoration__WEBPACK_IMPORTED_MODULE_4__["default"], {
    mode: mode,
    gradient: gradient,
    decoration: deco,
    bgPosition: bgPosition,
    horizontalMenu: false
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: cx(classes.mainWrap, classes.sidebarLayout)
  }, titleException.indexOf(history.location.pathname) < 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classes.pageTitle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default()), {
    component: "h4",
    className: bgPosition === 'header' ? classes.darkTitle : classes.lightTitle,
    variant: "h4"
  }, place), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(dan_components__WEBPACK_IMPORTED_MODULE_2__.BreadCrumb, {
    separator: " / ",
    theme: bgPosition === 'header' ? 'dark' : 'light',
    location: history.location
  })), !pageLoaded && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/images/spinner.gif",
    alt: "spinner",
    className: classes.circularProgress
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Fade__WEBPACK_IMPORTED_MODULE_8__["default"], _extends({
    in: pageLoaded
  }, pageLoaded ? {
    timeout: 700
  } : {}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: !pageLoaded ? classes.hideApp : ''
  }, children)))));
}

LeftSidebarLayout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.node.isRequired,
  history: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.object.isRequired,
  toggleDrawer: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.func.isRequired,
  loadTransition: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.func.isRequired,
  changeMode: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.func.isRequired,
  sidebarOpen: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.bool.isRequired,
  pageLoaded: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.bool.isRequired,
  mode: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.string.isRequired,
  gradient: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.bool.isRequired,
  deco: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.bool.isRequired,
  bgPosition: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.string.isRequired,
  place: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.string.isRequired,
  titleException: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.array.isRequired,
  handleOpenGuide: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.func.isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LeftSidebarLayout);

/***/ }),

/***/ "./app/containers/Templates/layouts/MegaMenuLayout.js":
/*!************************************************************!*\
  !*** ./app/containers/Templates/layouts/MegaMenuLayout.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Fade__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Fade */ "./node_modules/@mui/material/node/Fade/index.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/node/Typography/index.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var dan_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dan-components */ "./app/components/index.js");
/* harmony import */ var dan_api_ui_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dan-api/ui/menu */ "./app/api/ui/menu.js");
/* harmony import */ var dan_api_ui_menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dan_api_ui_menu__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_permissions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/permissions.js */ "./app/utils/permissions.js");
/* harmony import */ var _Decoration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Decoration */ "./app/containers/Templates/Decoration.js");
/* harmony import */ var _appStyles_jss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../appStyles-jss */ "./app/containers/Templates/appStyles-jss.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }











function DropMenuLayout(props) {
  const {
    classes,
    cx
  } = (0,_appStyles_jss__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const {
    children,
    pageLoaded,
    mode,
    gradient,
    deco,
    history,
    bgPosition,
    changeMode,
    place,
    titleException,
    handleOpenGuide,
    toggleDrawer,
    sidebarOpen,
    loadTransition
  } = props;
  const permissions = (0,_utils_permissions_js__WEBPACK_IMPORTED_MODULE_4__.getStoredPermissions)();
  const filteredMenu = (0,_utils_permissions_js__WEBPACK_IMPORTED_MODULE_4__.filterMenuByPermissions)((dan_api_ui_menu__WEBPACK_IMPORTED_MODULE_3___default()), permissions);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(dan_components__WEBPACK_IMPORTED_MODULE_2__.HeaderMenu, {
    type: "mega-menu",
    dataMenu: filteredMenu,
    changeMode: changeMode,
    mode: mode,
    history: history,
    openGuide: handleOpenGuide,
    toggleDrawerOpen: toggleDrawer,
    openMobileNav: sidebarOpen,
    loadTransition: loadTransition,
    logoLink: "/app"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", {
    className: cx(classes.content, classes.highMargin),
    id: "mainContent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Decoration__WEBPACK_IMPORTED_MODULE_5__["default"], {
    mode: mode,
    gradient: gradient,
    decoration: deco,
    bgPosition: bgPosition,
    horizontalMenu: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: cx(classes.mainWrap, classes.topbarLayout)
  }, titleException.indexOf(history.location.pathname) < 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classes.pageTitle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default()), {
    component: "h4",
    className: bgPosition === 'header' ? classes.darkTitle : classes.lightTitle,
    variant: "h4"
  }, place), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(dan_components__WEBPACK_IMPORTED_MODULE_2__.BreadCrumb, {
    separator: " / ",
    theme: bgPosition === 'header' ? 'dark' : 'light',
    location: history.location
  })), !pageLoaded && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/images/spinner.gif",
    alt: "spinner",
    className: classes.circularProgress
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Fade__WEBPACK_IMPORTED_MODULE_8__["default"], _extends({
    in: pageLoaded
  }, pageLoaded ? {
    timeout: 700
  } : {}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: !pageLoaded ? classes.hideApp : ''
  }, children)))));
}

DropMenuLayout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.node.isRequired,
  history: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.object.isRequired,
  changeMode: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.func.isRequired,
  toggleDrawer: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.func.isRequired,
  loadTransition: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.func.isRequired,
  sidebarOpen: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.bool.isRequired,
  pageLoaded: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.bool.isRequired,
  mode: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.string.isRequired,
  gradient: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.bool.isRequired,
  deco: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.bool.isRequired,
  bgPosition: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.string.isRequired,
  place: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.string.isRequired,
  titleException: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.array.isRequired,
  handleOpenGuide: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.func.isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropMenuLayout);

/***/ }),

/***/ "./app/containers/Templates/layouts/RightSidebarLayout.js":
/*!****************************************************************!*\
  !*** ./app/containers/Templates/layouts/RightSidebarLayout.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Fade__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Fade */ "./node_modules/@mui/material/node/Fade/index.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/node/Typography/index.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var dan_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dan-components */ "./app/components/index.js");
/* harmony import */ var dan_api_ui_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dan-api/ui/menu */ "./app/api/ui/menu.js");
/* harmony import */ var dan_api_ui_menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dan_api_ui_menu__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_permissions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/permissions.js */ "./app/utils/permissions.js");
/* harmony import */ var _Decoration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Decoration */ "./app/containers/Templates/Decoration.js");
/* harmony import */ var _appStyles_jss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../appStyles-jss */ "./app/containers/Templates/appStyles-jss.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }











function RightSidebarLayout(props) {
  const {
    classes,
    cx
  } = (0,_appStyles_jss__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const {
    children,
    toggleDrawer,
    sidebarOpen,
    history,
    loadTransition,
    pageLoaded,
    mode,
    gradient,
    deco,
    bgPosition,
    changeMode,
    place,
    titleException,
    handleOpenGuide
  } = props;
  const permissions = (0,_utils_permissions_js__WEBPACK_IMPORTED_MODULE_4__.getStoredPermissions)();
  const filteredMenu = (0,_utils_permissions_js__WEBPACK_IMPORTED_MODULE_4__.filterMenuByPermissions)((dan_api_ui_menu__WEBPACK_IMPORTED_MODULE_3___default()), permissions);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(dan_components__WEBPACK_IMPORTED_MODULE_2__.Header, {
    toggleDrawerOpen: toggleDrawer,
    margin: sidebarOpen,
    gradient: gradient,
    position: "right-sidebar",
    changeMode: changeMode,
    mode: mode,
    title: place,
    history: history,
    openGuide: handleOpenGuide
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", {
    className: cx(classes.content, !sidebarOpen ? classes.contentPaddingRight : ''),
    id: "mainContent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Decoration__WEBPACK_IMPORTED_MODULE_5__["default"], {
    mode: mode,
    gradient: gradient,
    decoration: deco,
    bgPosition: bgPosition,
    horizontalMenu: false
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: cx(classes.mainWrap, classes.sidebarLayout)
  }, titleException.indexOf(history.location.pathname) < 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classes.pageTitle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default()), {
    component: "h4",
    className: bgPosition === 'header' ? classes.darkTitle : classes.lightTitle,
    variant: "h4"
  }, place), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(dan_components__WEBPACK_IMPORTED_MODULE_2__.BreadCrumb, {
    separator: " / ",
    theme: bgPosition === 'header' ? 'dark' : 'light',
    location: history.location
  })), !pageLoaded && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/images/spinner.gif",
    alt: "spinner",
    className: classes.circularProgress
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Fade__WEBPACK_IMPORTED_MODULE_8__["default"], _extends({
    in: pageLoaded
  }, pageLoaded ? {
    timeout: 700
  } : {}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: !pageLoaded ? classes.hideApp : ''
  }, children)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(dan_components__WEBPACK_IMPORTED_MODULE_2__.Sidebar, {
    open: sidebarOpen,
    toggleDrawerOpen: toggleDrawer,
    loadTransition: loadTransition,
    dataMenu: filteredMenu,
    leftSidebar: false
  }));
}

RightSidebarLayout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.node.isRequired,
  history: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.object.isRequired,
  toggleDrawer: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.func.isRequired,
  loadTransition: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.func.isRequired,
  changeMode: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.func.isRequired,
  sidebarOpen: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.bool.isRequired,
  pageLoaded: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.bool.isRequired,
  mode: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.string.isRequired,
  gradient: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.bool.isRequired,
  deco: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.bool.isRequired,
  bgPosition: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.string.isRequired,
  place: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.string.isRequired,
  titleException: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.array.isRequired,
  handleOpenGuide: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.func.isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RightSidebarLayout);

/***/ }),

/***/ "./app/containers/pageListAsync.js":
/*!*****************************************!*\
  !*** ./app/containers/pageListAsync.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlankPage": () => (/* binding */ BlankPage),
/* harmony export */   "DashboardPage": () => (/* binding */ DashboardPage),
/* harmony export */   "Form": () => (/* binding */ Form),
/* harmony export */   "Table": () => (/* binding */ Table),
/* harmony export */   "Login": () => (/* binding */ Login),
/* harmony export */   "LoginDedicated": () => (/* binding */ LoginDedicated),
/* harmony export */   "ResetPassword": () => (/* binding */ ResetPassword),
/* harmony export */   "NotFound": () => (/* binding */ NotFound),
/* harmony export */   "NotFoundDedicated": () => (/* binding */ NotFoundDedicated),
/* harmony export */   "Error": () => (/* binding */ Error),
/* harmony export */   "Maintenance": () => (/* binding */ Maintenance),
/* harmony export */   "Parent": () => (/* binding */ Parent),
/* harmony export */   "Mia": () => (/* binding */ Mia)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dan_components_Loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dan-components/Loading */ "./app/components/Loading/index.js");
/* harmony import */ var _utils_loadable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/loadable */ "./app/utils/loadable.js");
/* eslint-disable */



const BlankPage = (0,_utils_loadable__WEBPACK_IMPORTED_MODULE_2__["default"])(() => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./Pages/BlankPage */ "./app/containers/Pages/BlankPage/index.js")), {
  fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(dan_components_Loading__WEBPACK_IMPORTED_MODULE_1__["default"], null)
});
const DashboardPage = (0,_utils_loadable__WEBPACK_IMPORTED_MODULE_2__["default"])(() => __webpack_require__.e(/*! import() */ "app_containers_Pages_Dashboard_index_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Pages/Dashboard */ "./app/containers/Pages/Dashboard/index.js")), {
  fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(dan_components_Loading__WEBPACK_IMPORTED_MODULE_1__["default"], null)
});
const Form = (0,_utils_loadable__WEBPACK_IMPORTED_MODULE_2__["default"])(() => __webpack_require__.e(/*! import() */ "app_containers_Pages_Forms_ReduxForm_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Pages/Forms/ReduxForm */ "./app/containers/Pages/Forms/ReduxForm.js")), {
  fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(dan_components_Loading__WEBPACK_IMPORTED_MODULE_1__["default"], null)
});
const Table = (0,_utils_loadable__WEBPACK_IMPORTED_MODULE_2__["default"])(() => __webpack_require__.e(/*! import() */ "app_containers_Pages_Table_BasicTable_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Pages/Table/BasicTable */ "./app/containers/Pages/Table/BasicTable.js")), {
  fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(dan_components_Loading__WEBPACK_IMPORTED_MODULE_1__["default"], null)
});
const Login = (0,_utils_loadable__WEBPACK_IMPORTED_MODULE_2__["default"])(() => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./Pages/Users/Login */ "./app/containers/Pages/Users/Login.js")), {
  fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(dan_components_Loading__WEBPACK_IMPORTED_MODULE_1__["default"], null)
});
const LoginDedicated = (0,_utils_loadable__WEBPACK_IMPORTED_MODULE_2__["default"])(() => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./Pages/Standalone/LoginDedicated */ "./app/containers/Pages/Standalone/LoginDedicated.js")), {
  fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(dan_components_Loading__WEBPACK_IMPORTED_MODULE_1__["default"], null)
});
const ResetPassword = (0,_utils_loadable__WEBPACK_IMPORTED_MODULE_2__["default"])(() => __webpack_require__.e(/*! import() */ "app_containers_Pages_Users_ResetPassword_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Pages/Users/ResetPassword */ "./app/containers/Pages/Users/ResetPassword.js")), {
  fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(dan_components_Loading__WEBPACK_IMPORTED_MODULE_1__["default"], null)
});
const NotFound = (0,_utils_loadable__WEBPACK_IMPORTED_MODULE_2__["default"])(() => __webpack_require__.e(/*! import() */ "app_containers_NotFound_NotFound_js").then(__webpack_require__.bind(__webpack_require__, /*! ./NotFound/NotFound */ "./app/containers/NotFound/NotFound.js")), {
  fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(dan_components_Loading__WEBPACK_IMPORTED_MODULE_1__["default"], null)
});
const NotFoundDedicated = (0,_utils_loadable__WEBPACK_IMPORTED_MODULE_2__["default"])(() => __webpack_require__.e(/*! import() */ "app_containers_Pages_Standalone_NotFoundDedicated_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Pages/Standalone/NotFoundDedicated */ "./app/containers/Pages/Standalone/NotFoundDedicated.js")), {
  fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(dan_components_Loading__WEBPACK_IMPORTED_MODULE_1__["default"], null)
});
const Error = (0,_utils_loadable__WEBPACK_IMPORTED_MODULE_2__["default"])(() => __webpack_require__.e(/*! import() */ "app_containers_Pages_Error_index_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Pages/Error */ "./app/containers/Pages/Error/index.js")), {
  fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(dan_components_Loading__WEBPACK_IMPORTED_MODULE_1__["default"], null)
});
const Maintenance = (0,_utils_loadable__WEBPACK_IMPORTED_MODULE_2__["default"])(() => __webpack_require__.e(/*! import() */ "app_containers_Pages_Maintenance_index_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Pages/Maintenance */ "./app/containers/Pages/Maintenance/index.js")), {
  fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(dan_components_Loading__WEBPACK_IMPORTED_MODULE_1__["default"], null)
});
const Parent = (0,_utils_loadable__WEBPACK_IMPORTED_MODULE_2__["default"])(() => __webpack_require__.e(/*! import() */ "app_containers_Parent_index_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Parent */ "./app/containers/Parent/index.js")), {
  fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(dan_components_Loading__WEBPACK_IMPORTED_MODULE_1__["default"], null)
});
const Mia = (0,_utils_loadable__WEBPACK_IMPORTED_MODULE_2__["default"])(() => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./Pages/MiaPage */ "./app/containers/Pages/MiaPage/index.js")), {
  fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(dan_components_Loading__WEBPACK_IMPORTED_MODULE_1__["default"], null)
});

/***/ }),

/***/ "./app/i18n.js":
/*!*********************!*\
  !*** ./app/i18n.js ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 *   IMPORTANT: This file is used by the internal build
 *   script `extract-intl`, and must use CommonJS module syntax
 *   You CANNOT use import/export in this file.
 */
const enTranslationMessages = __webpack_require__(/*! ./translations/en.json */ "./app/translations/en.json");

const deTranslationMessages = __webpack_require__(/*! ./translations/de.json */ "./app/translations/de.json");

const DEFAULT_LOCALE = 'en'; // prettier-ignore

const appLocales = ['en', 'de'];

const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages = locale !== DEFAULT_LOCALE ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages) : {};

  const flattenFormattedMessages = (formattedMessages, key) => {
    const formattedMessage = !messages[key] && locale !== DEFAULT_LOCALE ? defaultFormattedMessages[key] : messages[key];
    return Object.assign(formattedMessages, {
      [key]: formattedMessage
    });
  };

  return Object.keys(messages).reduce(flattenFormattedMessages, {});
};

const translationMessages = {
  en: formatTranslationMessages('en', enTranslationMessages),
  de: formatTranslationMessages('de', deTranslationMessages)
};
exports.appLocales = appLocales;
exports.formatTranslationMessages = formatTranslationMessages;
exports.translationMessages = translationMessages;
exports.DEFAULT_LOCALE = DEFAULT_LOCALE;

/***/ }),

/***/ "./app/redux/actions/uiActions.js":
/*!****************************************!*\
  !*** ./app/redux/actions/uiActions.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toggleAction": () => (/* binding */ toggleAction),
/* harmony export */   "openMenuAction": () => (/* binding */ openMenuAction),
/* harmony export */   "closeMenuAction": () => (/* binding */ closeMenuAction),
/* harmony export */   "openAction": () => (/* binding */ openAction),
/* harmony export */   "changeThemeAction": () => (/* binding */ changeThemeAction),
/* harmony export */   "changeRandomThemeAction": () => (/* binding */ changeRandomThemeAction),
/* harmony export */   "changeModeAction": () => (/* binding */ changeModeAction),
/* harmony export */   "changeGradientAction": () => (/* binding */ changeGradientAction),
/* harmony export */   "changeDecoAction": () => (/* binding */ changeDecoAction),
/* harmony export */   "changeLayoutAction": () => (/* binding */ changeLayoutAction),
/* harmony export */   "changeBgPositionAction": () => (/* binding */ changeBgPositionAction),
/* harmony export */   "changeDirectionAction": () => (/* binding */ changeDirectionAction),
/* harmony export */   "playTransitionAction": () => (/* binding */ playTransitionAction)
/* harmony export */ });
/* harmony import */ var _constants_uiConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/uiConstants */ "./app/redux/constants/uiConstants.js");

const toggleAction = {
  type: _constants_uiConstants__WEBPACK_IMPORTED_MODULE_0__.TOGGLE_SIDEBAR
};
const openMenuAction = {
  type: _constants_uiConstants__WEBPACK_IMPORTED_MODULE_0__.OPEN_MENU
};
const closeMenuAction = {
  type: _constants_uiConstants__WEBPACK_IMPORTED_MODULE_0__.CLOSE_MENU
};
const openAction = initialLocation => ({
  type: _constants_uiConstants__WEBPACK_IMPORTED_MODULE_0__.OPEN_SUBMENU,
  initialLocation
});
const changeThemeAction = theme => ({
  type: _constants_uiConstants__WEBPACK_IMPORTED_MODULE_0__.CHANGE_THEME,
  theme
});
const changeRandomThemeAction = {
  type: _constants_uiConstants__WEBPACK_IMPORTED_MODULE_0__.CHANGE_RANDOM_THEME
};
const changeModeAction = mode => ({
  type: _constants_uiConstants__WEBPACK_IMPORTED_MODULE_0__.CHANGE_MODE,
  mode
});
const changeGradientAction = gradient => ({
  type: _constants_uiConstants__WEBPACK_IMPORTED_MODULE_0__.CHANGE_GRADIENT,
  gradient
});
const changeDecoAction = deco => ({
  type: _constants_uiConstants__WEBPACK_IMPORTED_MODULE_0__.CHANGE_DECO,
  deco
});
const changeLayoutAction = layout => ({
  type: _constants_uiConstants__WEBPACK_IMPORTED_MODULE_0__.CHANGE_LAYOUT,
  layout
});
const changeBgPositionAction = position => ({
  type: _constants_uiConstants__WEBPACK_IMPORTED_MODULE_0__.CHANGE_BG_POSITION,
  position
});
const changeDirectionAction = direction => ({
  type: _constants_uiConstants__WEBPACK_IMPORTED_MODULE_0__.CHANGE_DIRECTION,
  direction
});
const playTransitionAction = isLoaded => ({
  type: _constants_uiConstants__WEBPACK_IMPORTED_MODULE_0__.LOAD_PAGE,
  isLoaded
});

/***/ }),

/***/ "./app/redux/configureStore.js":
/*!*************************************!*\
  !*** ./app/redux/configureStore.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ configureStore)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/lib/redux.js");
/* harmony import */ var connected_react18_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! connected-react18-router */ "./node_modules/connected-react18-router/lib/index.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.cjs.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-persist */ "./node_modules/redux-persist/lib/index.js");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-persist/lib/storage */ "./node_modules/redux-persist/lib/storage/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducers */ "./app/redux/reducers.js");
/**
 * Create the store with dynamic reducers
 */






const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_2___default()();
const persistConfig = {
  key: 'dandelion',
  storage: redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_4__["default"],
  whitelist: ['ui']
};
const persistedReducer = (0,redux_persist__WEBPACK_IMPORTED_MODULE_3__.persistReducer)(persistConfig, (0,_reducers__WEBPACK_IMPORTED_MODULE_5__["default"])());
function configureStore() {
  let initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let history = arguments.length > 1 ? arguments[1] : undefined;
  // eslint-disable-line
  // Create the store with two middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. routerMiddleware: Syncs the location/URL path to the state
  const middlewares = [sagaMiddleware, (0,connected_react18_router__WEBPACK_IMPORTED_MODULE_1__.routerMiddleware)(history)];
  const enhancers = [(0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)(...middlewares)];
  const composeEnhancers =  true && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Prevent recomputing reducers for `replaceReducer`
    shouldHotReload: false
  }) : redux__WEBPACK_IMPORTED_MODULE_0__.compose;
  /* eslint-enable */

  const store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(persistedReducer, initialState, composeEnhancers(...enhancers));
  const persistor = (0,redux_persist__WEBPACK_IMPORTED_MODULE_3__.persistStore)(store); // Extensions

  store.runSaga = sagaMiddleware.run;
  store.injectedReducers = {}; // Reducer registry

  store.injectedSagas = {}; // Saga registry
  // Make reducers hot reloadable, see http://mxs.is/googmo

  /* istanbul ignore next */

  if (true) {
    module.hot.accept(/*! ./reducers */ "./app/redux/reducers.js", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducers */ "./app/redux/reducers.js");
(() => {
      store.replaceReducer((0,_reducers__WEBPACK_IMPORTED_MODULE_5__["default"])(store.injectedReducers));
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); });
  }

  return {
    store,
    persistor
  };
}

/***/ }),

/***/ "./app/redux/constants/reduxFormConstants.js":
/*!***************************************************!*\
  !*** ./app/redux/constants/reduxFormConstants.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "INIT": () => (/* binding */ INIT),
/* harmony export */   "CLEAR": () => (/* binding */ CLEAR)
/* harmony export */ });
// Redux Form
const INIT = 'INIT';
const CLEAR = 'CLEAR';

/***/ }),

/***/ "./app/redux/constants/uiConstants.js":
/*!********************************************!*\
  !*** ./app/redux/constants/uiConstants.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TOGGLE_SIDEBAR": () => (/* binding */ TOGGLE_SIDEBAR),
/* harmony export */   "OPEN_MENU": () => (/* binding */ OPEN_MENU),
/* harmony export */   "CLOSE_MENU": () => (/* binding */ CLOSE_MENU),
/* harmony export */   "OPEN_SUBMENU": () => (/* binding */ OPEN_SUBMENU),
/* harmony export */   "CHANGE_THEME": () => (/* binding */ CHANGE_THEME),
/* harmony export */   "CHANGE_RANDOM_THEME": () => (/* binding */ CHANGE_RANDOM_THEME),
/* harmony export */   "CHANGE_MODE": () => (/* binding */ CHANGE_MODE),
/* harmony export */   "CHANGE_GRADIENT": () => (/* binding */ CHANGE_GRADIENT),
/* harmony export */   "CHANGE_DECO": () => (/* binding */ CHANGE_DECO),
/* harmony export */   "CHANGE_BG_POSITION": () => (/* binding */ CHANGE_BG_POSITION),
/* harmony export */   "CHANGE_LAYOUT": () => (/* binding */ CHANGE_LAYOUT),
/* harmony export */   "CHANGE_DIRECTION": () => (/* binding */ CHANGE_DIRECTION),
/* harmony export */   "LOAD_PAGE": () => (/* binding */ LOAD_PAGE)
/* harmony export */ });
// Global UI Action
const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
const OPEN_MENU = 'OPEN_MENU';
const CLOSE_MENU = 'CLOSE_MENU';
const OPEN_SUBMENU = 'OPEN_SUBMENU';
const CHANGE_THEME = 'CHANGE_THEME';
const CHANGE_RANDOM_THEME = 'CHANGE_RANDOM_THEME';
const CHANGE_MODE = 'CHANGE_MODE';
const CHANGE_GRADIENT = 'CHANGE_GRADIENT';
const CHANGE_DECO = 'CHANGE_DECO';
const CHANGE_BG_POSITION = 'CHANGE_BG_POSITION';
const CHANGE_LAYOUT = 'CHANGE_LAYOUT';
const CHANGE_DIRECTION = 'CHANGE_DIRECTION';
const LOAD_PAGE = 'LOAD_PAGE';

/***/ }),

/***/ "./app/redux/modules/initForm.js":
/*!***************************************!*\
  !*** ./app/redux/modules/initForm.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");
/* harmony import */ var _constants_reduxFormConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/reduxFormConstants */ "./app/redux/constants/reduxFormConstants.js");


const initialState = {
  formValues: {}
};
/* eslint-disable default-case, no-param-reassign */

const initFormReducer = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  let action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (0,immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, draft => {
    switch (action.type) {
      case _constants_reduxFormConstants__WEBPACK_IMPORTED_MODULE_1__.INIT:
        draft.formValues = action.data;
        break;

      case _constants_reduxFormConstants__WEBPACK_IMPORTED_MODULE_1__.CLEAR:
        draft.formValues = {};
        break;

      default:
        break;
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initFormReducer);

/***/ }),

/***/ "./app/redux/modules/login.js":
/*!************************************!*\
  !*** ./app/redux/modules/login.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");
/* harmony import */ var _constants_reduxFormConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/reduxFormConstants */ "./app/redux/constants/reduxFormConstants.js");


const initialState = {
  usersLogin: {
    email: '',
    password: '',
    remember: false
  }
};
/* eslint-disable default-case, no-param-reassign */

const loginReducer = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  let action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (0,immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, draft => {
    switch (action.type) {
      case _constants_reduxFormConstants__WEBPACK_IMPORTED_MODULE_1__.INIT:
        draft.userLogin = state;
        break;

      default:
        break;
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loginReducer);

/***/ }),

/***/ "./app/redux/modules/ui.js":
/*!*********************************!*\
  !*** ./app/redux/modules/ui.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");
/* harmony import */ var dan_api_ui_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dan-api/ui/menu */ "./app/api/ui/menu.js");
/* harmony import */ var dan_api_ui_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dan_api_ui_menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_uiConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/uiConstants */ "./app/redux/constants/uiConstants.js");



const initialState = {
  /* Settings for Themes and layout */
  theme: 'blueCyanTheme',
  direction: 'ltr',
  type: 'light',
  // light or dark
  gradient: true,
  // true or false
  decoration: true,
  // true or false
  bgPosition: 'full',
  // half, header, full
  layout: 'left-sidebar',
  // big-sidebar, left-sidebar, top-navigation, mega-menu

  /* End settings */
  palette: [{
    name: 'Mint',
    value: 'blueCyanTheme'
  }, {
    name: 'Monochrome',
    value: 'greyTheme'
  }],
  sidebarOpen: true,
  pageLoaded: false,
  subMenuOpen: []
};

const getMenus = menuArray => menuArray.map(item => {
  if (item.child) {
    return item.child;
  }

  return false;
});

const setNavCollapse = (arr, curRoute) => {
  let headMenu = 'not found';

  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr[i].length; j += 1) {
      if (arr[i][j].link === curRoute) {
        headMenu = (dan_api_ui_menu__WEBPACK_IMPORTED_MODULE_1___default())[i].key;
      }
    }
  }

  return headMenu;
};
/* eslint-disable default-case, no-param-reassign */


const uiReducer = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  let action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (0,immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, draft => {
    switch (action.type) {
      case _constants_uiConstants__WEBPACK_IMPORTED_MODULE_2__.TOGGLE_SIDEBAR:
        draft.sidebarOpen = !state.sidebarOpen;
        break;

      case _constants_uiConstants__WEBPACK_IMPORTED_MODULE_2__.OPEN_MENU:
        draft.sidebarOpen = true;
        break;

      case _constants_uiConstants__WEBPACK_IMPORTED_MODULE_2__.CLOSE_MENU:
        draft.sidebarOpen = false;
        draft.subMenuOpen = [];
        break;

      case _constants_uiConstants__WEBPACK_IMPORTED_MODULE_2__.OPEN_SUBMENU:
        {
          // Set initial open parent menu
          const activeParent = setNavCollapse(getMenus((dan_api_ui_menu__WEBPACK_IMPORTED_MODULE_1___default())), action.initialLocation); // Once page loaded will expand the parent menu

          if (action.initialLocation) {
            draft.subMenuOpen = [activeParent];
            const path = action.initialLocation.split('/');

            if (path.length <= 3 && action.initialLocation !== '/app') {
              draft.sidebarOpen = false;
            }

            return;
          } // Expand / Collapse parent menu


          const menuList = state.subMenuOpen;

          if (menuList.indexOf(action.key) > -1) {
            const index = draft.subMenuOpen.findIndex(obj => obj === action.key);
            draft.subMenuOpen.splice(index, 1);
          } else {
            draft.subMenuOpen.push(action.key);
          }

          break;
        }

      case _constants_uiConstants__WEBPACK_IMPORTED_MODULE_2__.CHANGE_RANDOM_THEME:
        {
          const paletteArray = state.palette;
          const random = paletteArray[Math.floor(Math.random() * paletteArray.length)];
          draft.theme = random.value;
          break;
        }

      case _constants_uiConstants__WEBPACK_IMPORTED_MODULE_2__.CHANGE_THEME:
        draft.theme = action.theme;
        break;

      case _constants_uiConstants__WEBPACK_IMPORTED_MODULE_2__.CHANGE_MODE:
        draft.type = action.mode;
        break;

      case _constants_uiConstants__WEBPACK_IMPORTED_MODULE_2__.CHANGE_GRADIENT:
        draft.gradient = action.gradient;
        break;

      case _constants_uiConstants__WEBPACK_IMPORTED_MODULE_2__.CHANGE_DECO:
        draft.decoration = action.deco;
        break;

      case _constants_uiConstants__WEBPACK_IMPORTED_MODULE_2__.CHANGE_BG_POSITION:
        draft.bgPosition = action.position;
        break;

      case _constants_uiConstants__WEBPACK_IMPORTED_MODULE_2__.CHANGE_LAYOUT:
        draft.layout = action.layout;
        break;

      case _constants_uiConstants__WEBPACK_IMPORTED_MODULE_2__.CHANGE_DIRECTION:
        draft.direction = action.direction;
        break;

      case _constants_uiConstants__WEBPACK_IMPORTED_MODULE_2__.LOAD_PAGE:
        draft.pageLoaded = action.isLoaded;
        break;

      default:
        break;
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (uiReducer);

/***/ }),

/***/ "./app/redux/reducers.js":
/*!*******************************!*\
  !*** ./app/redux/reducers.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createReducer)
/* harmony export */ });
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/lib/redux.js");
/* harmony import */ var connected_react18_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! connected-react18-router */ "./node_modules/connected-react18-router/lib/index.js");
/* harmony import */ var containers_LanguageProvider_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! containers/LanguageProvider/reducer */ "./app/containers/LanguageProvider/reducer.js");
/* harmony import */ var _utils_history__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/history */ "./app/utils/history.js");
/* harmony import */ var _modules_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/login */ "./app/redux/modules/login.js");
/* harmony import */ var _modules_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/ui */ "./app/redux/modules/ui.js");
/* harmony import */ var _modules_initForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/initForm */ "./app/redux/modules/initForm.js");
/**
 * Combine all reducers in this file and export the combined reducers.
 */








/**
 * Creates the main reducer with the dynamically injected ones
 */

function createReducer() {
  let injectedReducers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
    form: redux_form__WEBPACK_IMPORTED_MODULE_0__.reducer,
    login: _modules_login__WEBPACK_IMPORTED_MODULE_5__["default"],
    ui: _modules_ui__WEBPACK_IMPORTED_MODULE_6__["default"],
    initval: _modules_initForm__WEBPACK_IMPORTED_MODULE_7__["default"],
    language: containers_LanguageProvider_reducer__WEBPACK_IMPORTED_MODULE_3__["default"],
    router: (0,connected_react18_router__WEBPACK_IMPORTED_MODULE_2__.connectRouter)(_utils_history__WEBPACK_IMPORTED_MODULE_4__["default"]),
    ...injectedReducers
  }); // Wrap the root reducer and return a new root reducer with router state

  const mergeWithRouterState = (0,connected_react18_router__WEBPACK_IMPORTED_MODULE_2__.connectRouter)(_utils_history__WEBPACK_IMPORTED_MODULE_4__["default"]);
  return mergeWithRouterState(rootReducer);
}

/***/ }),

/***/ "./app/routes/ProtectedRoute.js":
/*!**************************************!*\
  !*** ./app/routes/ProtectedRoute.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/build/esm/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const ProtectedRoute = _ref => {
  let {
    component: Component,
    isAuthenticated,
    requiredPermission,
    ...rest
  } = _ref;
  const token = localStorage.getItem('token');

  const storedPermissions = (() => {
    try {
      const raw = localStorage.getItem('permissions');
      return raw ? JSON.parse(raw) : [];
    } catch (err) {
      console.error('Erro ao ler permissoes:', err);
      return [];
    }
  })(); // Validação de token


  const isTokenValid = () => {
    if (!token) return false;

    try {
      const decoded = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_2__.jwtDecode)(token);
      const now = Date.now() / 1000;
      return decoded.exp && decoded.exp > now;
    } catch (err) {
      console.error('Erro ao decodificar o token:', err);
      return false;
    }
  };

  const hasPermission = () => {
    if (!requiredPermission) return true; // Se permissão ADMIN_FULL_ACCESS presente, libera tudo

    if (storedPermissions.includes('ADMIN_FULL_ACCESS')) return true; // Sem permissões carregadas ainda, não bloqueia

    if (!storedPermissions.length) return true;
    return storedPermissions.includes(requiredPermission);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, _extends({}, rest, {
    render: props => isAuthenticated && isTokenValid() && hasPermission() ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, props) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Redirect, {
      to: "/login"
    })
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProtectedRoute);

/***/ }),

/***/ "./app/styles/theme/applicationTheme.js":
/*!**********************************************!*\
  !*** ./app/styles/theme/applicationTheme.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var dan_api_palette_themePaletteMode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dan-api/palette/themePaletteMode */ "./app/api/palette/themePaletteMode.js");


const applicationTheme = (color, mode, direction) => ({
  direction,
  palette: {
    mode,
    primary: (0,dan_api_palette_themePaletteMode__WEBPACK_IMPORTED_MODULE_0__["default"])(color, mode).palette.primary,
    secondary: (0,dan_api_palette_themePaletteMode__WEBPACK_IMPORTED_MODULE_0__["default"])(color, mode).palette.secondary,
    action: {
      hover: mode === 'dark' ? 'rgba(80,80,80, 0.9)' : 'rgba(80,80,80, 0.05)',
      hoverOpacity: 0.05
    },
    background: {
      paper: mode === 'dark' ? '#424242' : '#FFFFFF',
      default: mode === 'dark' ? '#303030' : '#FAFAFA'
    }
  },
  typography: {
    useNextVariants: true,
    fontFamily: ['Open Sans', 'sans-serif'].join(','),
    title: {
      fontWeight: 600
    },
    body2: {
      fontWeight: 500
    },
    fontWeightMedium: 600
  },
  shade: {
    light: '0 10px 15px -5px rgba(62, 57, 107, .07)'
  },
  glow: {
    light: `0 2px 20px -5px ${(0,dan_api_palette_themePaletteMode__WEBPACK_IMPORTED_MODULE_0__["default"])(color, mode).palette.primary.main}`,
    medium: `0 2px 40px -5px ${(0,dan_api_palette_themePaletteMode__WEBPACK_IMPORTED_MODULE_0__["default"])(color, mode).palette.primary.main}`,
    dark: `0 2px 40px 0px ${(0,dan_api_palette_themePaletteMode__WEBPACK_IMPORTED_MODULE_0__["default"])(color, mode).palette.primary.main}`
  },
  rounded: {
    small: '8px',
    medium: '12px',
    big: '20px'
  },
  shadows: mode === 'dark' ? ['none', '0px 1px 3px 0px rgba(50,50,50, 0.2),0px 1px 1px 0px rgba(50,50,50, 0.14),0px 2px 1px -1px rgba(50,50,50, 0.12)', '0px 1px 5px 0px rgba(50,50,50, 0.2),0px 2px 2px 0px rgba(50,50,50, 0.14),0px 3px 1px -2px rgba(50,50,50, 0.12)', '0px 1px 8px 0px rgba(50,50,50, 0.2),0px 3px 4px 0px rgba(50,50,50, 0.14),0px 3px 3px -2px rgba(50,50,50, 0.12)', '0px 2px 4px -1px rgba(50,50,50, 0.2),0px 4px 5px 0px rgba(50,50,50, 0.14),0px 1px 10px 0px rgba(50,50,50, 0.12)', '0px 3px 5px -1px rgba(50,50,50, 0.2),0px 5px 8px 0px rgba(50,50,50, 0.14),0px 1px 14px 0px rgba(50,50,50, 0.12)', '0px 3px 5px -1px rgba(50,50,50, 0.2),0px 6px 10px 0px rgba(50,50,50, 0.14),0px 1px 18px 0px rgba(50,50,50, 0.12)', '0px 4px 5px -2px rgba(50,50,50, 0.2),0px 7px 10px 1px rgba(50,50,50, 0.14),0px 2px 16px 1px rgba(50,50,50, 0.12)', '0px 5px 5px -3px rgba(50,50,50, 0.2),0px 8px 10px 1px rgba(50,50,50, 0.14),0px 3px 14px 2px rgba(50,50,50, 0.12)', '0px 5px 6px -3px rgba(50,50,50, 0.2),0px 9px 12px 1px rgba(50,50,50, 0.14),0px 3px 16px 2px rgba(50,50,50, 0.12)', '0px 6px 6px -3px rgba(50,50,50, 0.2),0px 10px 14px 1px rgba(50,50,50, 0.14),0px 4px 18px 3px rgba(50,50,50, 0.12)', '0px 6px 7px -4px rgba(50,50,50, 0.2),0px 11px 15px 1px rgba(50,50,50, 0.14),0px 4px 20px 3px rgba(50,50,50, 0.12)', '0px 7px 8px -4px rgba(50,50,50, 0.2),0px 12px 17px 2px rgba(50,50,50, 0.14),0px 5px 22px 4px rgba(50,50,50, 0.12)', '0px 7px 8px -4px rgba(50,50,50, 0.2),0px 13px 19px 2px rgba(50,50,50, 0.14),0px 5px 24px 4px rgba(50,50,50, 0.12)', '0px 7px 9px -4px rgba(50,50,50, 0.2),0px 14px 21px 2px rgba(50,50,50, 0.14),0px 5px 26px 4px rgba(50,50,50, 0.12)', '0px 8px 9px -5px rgba(50,50,50, 0.2),0px 15px 22px 2px rgba(50,50,50, 0.14),0px 6px 28px 5px rgba(50,50,50, 0.12)', '0px 8px 10px -5px rgba(50,50,50, 0.2),0px 16px 24px 2px rgba(50,50,50, 0.14),0px 6px 30px 5px rgba(50,50,50, 0.12)', '0px 8px 11px -5px rgba(50,50,50, 0.2),0px 17px 26px 2px rgba(50,50,50, 0.14),0px 6px 32px 5px rgba(50,50,50, 0.12)', '0px 9px 11px -5px rgba(50,50,50, 0.2),0px 18px 28px 2px rgba(50,50,50, 0.14),0px 7px 34px 6px rgba(50,50,50, 0.12)', '0px 9px 12px -6px rgba(50,50,50, 0.2),0px 19px 29px 2px rgba(50,50,50, 0.14),0px 7px 36px 6px rgba(50,50,50, 0.12)', '0px 10px 13px -6px rgba(50,50,50, 0.2),0px 20px 31px 3px rgba(50,50,50, 0.14),0px 8px 38px 7px rgba(50,50,50, 0.12)', '0px 10px 13px -6px rgba(50,50,50, 0.2),0px 21px 33px 3px rgba(50,50,50, 0.14),0px 8px 40px 7px rgba(50,50,50, 0.12)', '0px 10px 14px -6px rgba(50,50,50, 0.2),0px 22px 35px 3px rgba(50,50,50, 0.14),0px 8px 42px 7px rgba(50,50,50, 0.12)', '0px 11px 14px -7px rgba(50,50,50, 0.2),0px 23px 36px 3px rgba(50,50,50, 0.14),0px 9px 44px 8px rgba(50,50,50, 0.12)', '0px 11px 15px -7px rgba(50,50,50, 0.2),0px 24px 38px 3px rgba(850,50,50 0.14),0px 9px 46px 8px rgba(50,50,50, 0.12)'] : ['none', '0px 1px 3px 0px rgba(80,80,80, 0.2),0px 1px 1px 0px rgba(80,80,80, 0.14),0px 2px 1px -1px rgba(80,80,80, 0.12)', '0px 1px 5px 0px rgba(80,80,80, 0.2),0px 2px 2px 0px rgba(80,80,80, 0.14),0px 3px 1px -2px rgba(80,80,80, 0.12)', '0px 1px 8px 0px rgba(80,80,80, 0.2),0px 3px 4px 0px rgba(80,80,80, 0.14),0px 3px 3px -2px rgba(80,80,80, 0.12)', '0px 2px 4px -1px rgba(80,80,80, 0.2),0px 4px 5px 0px rgba(80,80,80, 0.14),0px 1px 10px 0px rgba(80,80,80, 0.12)', '0px 3px 5px -1px rgba(80,80,80, 0.2),0px 5px 8px 0px rgba(80,80,80, 0.14),0px 1px 14px 0px rgba(80,80,80, 0.12)', '0px 3px 5px -1px rgba(80,80,80, 0.2),0px 6px 10px 0px rgba(80,80,80, 0.14),0px 1px 18px 0px rgba(80,80,80, 0.12)', '0px 4px 5px -2px rgba(80,80,80, 0.2),0px 7px 10px 1px rgba(80,80,80, 0.14),0px 2px 16px 1px rgba(80,80,80, 0.12)', '0px 5px 5px -3px rgba(80,80,80, 0.2),0px 8px 10px 1px rgba(80,80,80, 0.14),0px 3px 14px 2px rgba(80,80,80, 0.12)', '0px 5px 6px -3px rgba(80,80,80, 0.2),0px 9px 12px 1px rgba(80,80,80, 0.14),0px 3px 16px 2px rgba(80,80,80, 0.12)', '0px 6px 6px -3px rgba(80,80,80, 0.2),0px 10px 14px 1px rgba(80,80,80, 0.14),0px 4px 18px 3px rgba(80,80,80, 0.12)', '0px 6px 7px -4px rgba(80,80,80, 0.2),0px 11px 15px 1px rgba(80,80,80, 0.14),0px 4px 20px 3px rgba(80,80,80, 0.12)', '0px 7px 8px -4px rgba(80,80,80, 0.2),0px 12px 17px 2px rgba(80,80,80, 0.14),0px 5px 22px 4px rgba(80,80,80, 0.12)', '0px 7px 8px -4px rgba(80,80,80, 0.2),0px 13px 19px 2px rgba(80,80,80, 0.14),0px 5px 24px 4px rgba(80,80,80, 0.12)', '0px 7px 9px -4px rgba(80,80,80, 0.2),0px 14px 21px 2px rgba(80,80,80, 0.14),0px 5px 26px 4px rgba(80,80,80, 0.12)', '0px 8px 9px -5px rgba(80,80,80, 0.2),0px 15px 22px 2px rgba(80,80,80, 0.14),0px 6px 28px 5px rgba(80,80,80, 0.12)', '0px 8px 10px -5px rgba(80,80,80, 0.2),0px 16px 24px 2px rgba(80,80,80, 0.14),0px 6px 30px 5px rgba(80,80,80, 0.12)', '0px 8px 11px -5px rgba(80,80,80, 0.2),0px 17px 26px 2px rgba(80,80,80, 0.14),0px 6px 32px 5px rgba(80,80,80, 0.12)', '0px 9px 11px -5px rgba(80,80,80, 0.2),0px 18px 28px 2px rgba(80,80,80, 0.14),0px 7px 34px 6px rgba(80,80,80, 0.12)', '0px 9px 12px -6px rgba(80,80,80, 0.2),0px 19px 29px 2px rgba(80,80,80, 0.14),0px 7px 36px 6px rgba(80,80,80, 0.12)', '0px 10px 13px -6px rgba(80,80,80, 0.2),0px 20px 31px 3px rgba(80,80,80, 0.14),0px 8px 38px 7px rgba(80,80,80, 0.12)', '0px 10px 13px -6px rgba(80,80,80, 0.2),0px 21px 33px 3px rgba(80,80,80, 0.14),0px 8px 40px 7px rgba(80,80,80, 0.12)', '0px 10px 14px -6px rgba(80,80,80, 0.2),0px 22px 35px 3px rgba(80,80,80, 0.14),0px 8px 42px 7px rgba(80,80,80, 0.12)', '0px 11px 14px -7px rgba(80,80,80, 0.2),0px 23px 36px 3px rgba(80,80,80, 0.14),0px 9px 44px 8px rgba(80,80,80, 0.12)', '0px 11px 15px -7px rgba(80,80,80, 0.2),0px 24px 38px 3px rgba(80,80,80, 0.14),0px 9px 46px 8px rgba(80,80,80, 0.12)'],
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: mode === 'dark' ? '#292929' : '#FFFFFF'
        },
        rounded: {
          borderRadius: 8
        },
        elevation1: {
          boxShadow: mode === 'dark' ? '0px 1px 3px 0px rgba(64, 64, 64, 1), 0px 1px 1px 0px rgba(42, 42, 42, 1), 0px 2px 1px -1px rgba(20, 20, 20, 1)' : '0px 1px 3px 0px rgba(142, 142, 142, 0.2), 0px 1px 1px 0px rgba(243, 243, 243, 0.14), 0px 2px 1px -1px rgba(204, 204, 204, 0.12)'
        },
        elevation4: {
          boxShadow: mode === 'dark' ? '0px 2px 4px -1px rgba(64, 64, 64, 0.46), 0px 4px 5px 0px rgba(42, 42, 42, 0.32), 0px 1px 10px 0px rgba(20, 20, 20, 0.12)' : '0px 2px 4px -1px rgba(142, 142, 142, 0.2), 0px 4px 5px 0px rgba(243, 243, 243, 0.14), 0px 1px 10px 0px rgba(204, 204, 204, 0.12)'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          boxShadow: 'none'
        },
        root: {
          borderRadius: 20,
          fontWeight: 600
        },
        sizeSmall: {
          padding: '7px 12px'
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        button: {
          fontWeight: 600
        }
      }
    },
    MuiInput: {
      styleOverrides: {
        root: {
          overflow: 'hidden',
          border: mode === 'dark' ? '1px solid rgba(255,255,255,0.32)' : '1px solid rgba(0,0,0,0.32)',
          borderRadius: 8,
          alignItems: 'center',
          transition: 'border 0.3s ease'
        },
        underline: {
          '&[role="radiogroup"]': {
            alignItems: 'flex-start'
          },
          '&:after': {
            height: 'calc(100% + 1px)',
            borderRadius: 8,
            bottom: -1,
            boxShadow: `0 0 1px ${(0,dan_api_palette_themePaletteMode__WEBPACK_IMPORTED_MODULE_0__["default"])(color, mode).palette.primary.main}`
          },
          '&:before': {
            display: 'none'
          }
        },
        input: {
          padding: 10,
          fontSize: 14
        },
        multiline: {
          paddingTop: 24
        }
      }
    },
    MuiAutocomplete: {
      styleOverrides: {
        inputRoot: {
          padding: '24px 8px 0',
          top: -3,
          '& $endAdornment': {
            paddingTop: 0
          }
        },
        tag: {
          padding: '0 !important'
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        standard: {
          top: 10,
          left: 10,
          transform: 'translate(0, 22px) scale(1)',
          '&.MuiInputLabel-shrink': {
            transform: 'translate(0, 13px) scale(0.7)',
            zIndex: 1
          },
          '& + div': {
            paddingBottom: 4,
            '& input, > .MuiInputAdornment-positionStart, > select': {
              padding: '24px 8px 0'
            },
            '& .MuiSelect-select': {
              paddingBottom: 0,
              paddingTop: '24px'
            }
          }
        },
        outlined: {
          transform: 'translate(14px, 10px) scale(1)',
          '&.MuiInputLabel-shrink': {
            transform: 'translate(14px, -9px) scale(0.75)',
            zIndex: 1
          }
        }
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: 14
        }
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        contained: {
          marginLeft: 4
        }
      }
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: 8
        },
        icon: {
          top: 'calc(50% - 10px)',
          right: 0
        },
        selectMenu: {
          paddingRight: '24px'
        }
      }
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: '1.2rem'
        }
      }
    },
    MuiIcon: {
      styleOverrides: {
        root: {
          fontSize: '1.2rem'
        }
      }
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          alignItems: 'flex-end',
          height: 'auto !important',
          width: 32,
          '& button': {
            width: 32,
            height: 32,
            padding: 0
          },
          '& p': {
            minWidth: 24,
            lineHeight: '16px'
          },
          '& svg': {
            position: 'relative',
            top: 4
          },
          '& .MuiAvatar-root': {
            marginRight: 12
          }
        },
        positionStart: {
          marginLeft: 0,
          marginRight: 0,
          '& + *': {
            paddingLeft: '0 !important'
          }
        },
        positionEnd: {
          marginRight: 0,
          marginLeft: 0
        }
      }
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          borderRadius: 8
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: mode === 'dark' ? '1px solid #636363' : `1px solid ${(0,dan_api_palette_themePaletteMode__WEBPACK_IMPORTED_MODULE_0__["default"])(color, mode).palette.primary.light}`
        },
        head: {
          fontWeight: 600
        }
      }
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          whiteSpace: 'nowrap'
        }
      }
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 16
        },
        bar: {
          borderRadius: 16
        },
        colorPrimary: {
          backgroundColor: mode === 'dark' ? '#616161' : '#ededed'
        }
      }
    },
    MuiPickersToolbar: {
      styleOverrides: {
        toolbar: {
          borderRadius: 0,
          boxShadow: 'inset 0 -30px 120px -30px rgba(0, 0, 0, 0.3)'
        }
      }
    },
    MuiPickersClock: {
      styleOverrides: {
        clock: {
          backgroundColor: 'none',
          border: `1px solid ${(0,dan_api_palette_themePaletteMode__WEBPACK_IMPORTED_MODULE_0__["default"])(color, mode).palette.primary.main}`
        }
      }
    },
    MuiPickersClockPointer: {
      styleOverrides: {
        thumb: {
          boxShadow: `0 1px 10px 0px ${(0,dan_api_palette_themePaletteMode__WEBPACK_IMPORTED_MODULE_0__["default"])(color, mode).palette.primary.main}`
        }
      }
    },
    MuiPickerDTTabs: {
      styleOverrides: {
        tabs: {
          backgroundColor: 'transparent',
          color: (0,dan_api_palette_themePaletteMode__WEBPACK_IMPORTED_MODULE_0__["default"])(color, mode).palette.primary.main
        }
      }
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          '&:first-of-type': {
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16
          },
          '&:last-child': {
            borderBottomLeftRadius: 16,
            borderBottomRightRadius: 16
          },
          '&$expanded': {
            borderRadius: 16,
            boxShadow: `0px 0px 0px 1px ${(0,dan_api_palette_themePaletteMode__WEBPACK_IMPORTED_MODULE_0__["default"])(color, mode).palette.primary.main}`,
            '& + div': {
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16
            }
          }
        }
      }
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          position: 'relative',
          marginBottom: 32,
          '&:after': {
            content: '""',
            position: 'absolute',
            width: 60,
            height: 4,
            background: (0,dan_api_palette_themePaletteMode__WEBPACK_IMPORTED_MODULE_0__["default"])(color, mode).palette.primary.main,
            bottom: 0,
            left: 26
          },
          '& h2': {
            color: mode === 'dark' ? (0,dan_api_palette_themePaletteMode__WEBPACK_IMPORTED_MODULE_0__["default"])(color, mode).palette.primary.light : (0,dan_api_palette_themePaletteMode__WEBPACK_IMPORTED_MODULE_0__["default"])(color, mode).palette.primary.dark
          }
        }
      }
    },
    MuiSnackbarContent: {
      styleOverrides: {
        root: {
          '@media (min-width: 960px)': {
            borderRadius: 8
          }
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none'
        },
        colorPrimary: {
          backgroundColor: mode === 'dark' ? (0,dan_api_palette_themePaletteMode__WEBPACK_IMPORTED_MODULE_0__["default"])(color, mode).palette.primary.dark : (0,dan_api_palette_themePaletteMode__WEBPACK_IMPORTED_MODULE_0__["default"])(color, mode).palette.primary.main
        }
      }
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          borderRadius: 10
        },
        indicator: {
          borderRadius: '10px 10px 0 0',
          height: 4
        }
      }
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          overflow: 'hidden',
          borderRadius: 8,
          boxShadow: 'none',
          border: `1px solid ${(0,dan_api_palette_themePaletteMode__WEBPACK_IMPORTED_MODULE_0__["default"])(color, mode).palette.secondary.main}`
        }
      }
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          height: 32,
          boxShadow: 'none !important',
          '&$selected': {
            color: (0,dan_api_palette_themePaletteMode__WEBPACK_IMPORTED_MODULE_0__["default"])(color, mode).palette.secondary.main,
            backgroundColor: (0,dan_api_palette_themePaletteMode__WEBPACK_IMPORTED_MODULE_0__["default"])(color, mode).palette.secondary.light
          }
        }
      }
    },
    MUIDataTableToolbar: {
      styleOverrides: {
        filterPaper: {
          maxWidth: 'none'
        }
      }
    },
    MUIDataTableToolbarSelect: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          backgroundColor: mode === 'dark' ? (0,dan_api_palette_themePaletteMode__WEBPACK_IMPORTED_MODULE_0__["default"])(color, mode).palette.secondary.dark : (0,dan_api_palette_themePaletteMode__WEBPACK_IMPORTED_MODULE_0__["default"])(color, mode).palette.secondary.light
        },
        title: {
          padding: direction === 'rtl' ? '0 26px 0 0' : '0 0 0 26px'
        },
        deleteIcon: {
          color: mode === 'dark' ? '#FFF' : '#000'
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        deleteIcon: {
          margin: direction === 'rtl' ? '0 -8px 0 4px' : '0 4px 0 -8px'
        }
      }
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          direction: 'ltr'
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          padding: '8px 0 8px 8px'
        },
        root: {
          paddingRight: 0
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          flex: 1
        },
        root: {
          MuiTablePagination: {
            input: {
              marginRight: 32,
              marginLeft: 8
            },
            selectRoot: {
              marginLeft: 0,
              marginRight: 0
            },
            select: {
              paddingRight: 24
            },
            selectIcon: {
              top: 4
            },
            '& p': {
              marginBottom: 0
            }
          }
        }
      }
    },
    MuiTablePagination: {
      styleOverrides: {
        displayedRows: {
          marginBottom: 0
        },
        selectLabel: {
          marginBottom: 0
        }
      }
    },
    MUIDataTable: {
      styleOverrides: {
        responsiveStacked: {
          overflow: 'auto !important',
          overflowX: 'auto !important'
        },
        tableRoot: {
          minWidth: 360
        }
      }
    },
    MUIDataTablePagination: {
      styleOverrides: {
        toolbar: {
          padding: 0,
          '& > p': {
            marginBottom: 0,
            '@media (max-width: 400px)': {
              display: 'none'
            }
          }
        },
        root: {
          padding: 0
        }
      }
    }
  }
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (applicationTheme);

/***/ }),

/***/ "./app/utils/formatCpf.js":
/*!********************************!*\
  !*** ./app/utils/formatCpf.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatCpf": () => (/* binding */ formatCpf)
/* harmony export */ });
const formatCpf = function () {
  let value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  if (!value) return '';
  const digits = value.replace(/\D/g, '').slice(0, 11);
  let formatted = digits;

  if (digits.length > 3 && digits.length <= 6) {
    formatted = `${digits.slice(0, 3)}.${digits.slice(3)}`;
  } else if (digits.length > 6 && digits.length <= 9) {
    formatted = `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6)}`;
  } else if (digits.length > 9) {
    formatted = `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9)}`;
  }

  return formatted;
};

/***/ }),

/***/ "./app/utils/formatPhone.js":
/*!**********************************!*\
  !*** ./app/utils/formatPhone.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatPhoneNumber": () => (/* binding */ formatPhoneNumber)
/* harmony export */ });
// eslint-disable-next-line import/prefer-default-export
const formatPhoneNumber = function () {
  let value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  if (!value) return '';
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (!digits) return '';

  if (digits.length < 3) {
    return digits.length === 2 ? `(${digits}) ` : `(${digits}`;
  }

  if (digits.length < 7) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  }

  if (digits.length < 11) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }

  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
};

/***/ }),

/***/ "./app/utils/history.js":
/*!******************************!*\
  !*** ./app/utils/history.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! history */ "./node_modules/history/index.js");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(history__WEBPACK_IMPORTED_MODULE_0__);

const history = (0,history__WEBPACK_IMPORTED_MODULE_0__.createBrowserHistory)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (history);

/***/ }),

/***/ "./app/utils/loadable.js":
/*!*******************************!*\
  !*** ./app/utils/loadable.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const loadable = function (importFunc) {
  let {
    fallback = null
  } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    fallback: null
  };
  const LazyComponent = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(importFunc);
  return props =>
  /*#__PURE__*/
  // eslint-disable-line
  react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: fallback
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LazyComponent, props));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadable);

/***/ }),

/***/ "./app/utils/permissions.js":
/*!**********************************!*\
  !*** ./app/utils/permissions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStoredPermissions": () => (/* binding */ getStoredPermissions),
/* harmony export */   "filterMenuByPermissions": () => (/* binding */ filterMenuByPermissions)
/* harmony export */ });
const getStoredPermissions = () => {
  if (typeof window === 'undefined') return [];

  try {
    const stored = localStorage.getItem('permissions');
    return stored ? JSON.parse(stored) : [];
  } catch (err) {
    console.error('Erro ao ler permissoes do localStorage', err);
    return [];
  }
};
const filterMenuByPermissions = function () {
  let menu = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  let permissions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  if (!Array.isArray(menu)) return [];
  const allowed = new Set(permissions || []); // Sem permissões ou acesso total: não filtra o menu

  if (!allowed.size) {
    return menu;
  }

  if (allowed.has('ADMIN_FULL_ACCESS')) {
    return menu;
  }

  const filterItems = items => items.reduce((acc, item) => {
    const children = item.child ? filterItems(item.child) : undefined;
    const requiresPermission = Boolean(item.permission);
    const isAllowed = !requiresPermission || allowed.has(item.permission);
    if (!isAllowed) return acc;
    const nextItem = { ...item
    };

    if (children) {
      nextItem.child = children;

      if (children.length === 0 && !item.link) {
        return acc;
      }
    }

    acc.push(nextItem);
    return acc;
  }, []);

  return filterItems(menu);
};

/***/ }),

/***/ "./app/utils/webhookClient.js":
/*!************************************!*\
  !*** ./app/utils/webhookClient.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchWebhooks": () => (/* binding */ fetchWebhooks),
/* harmony export */   "createWebhook": () => (/* binding */ createWebhook),
/* harmony export */   "toggleWebhook": () => (/* binding */ toggleWebhook),
/* harmony export */   "sendWebhookEvent": () => (/* binding */ sendWebhookEvent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* provided dependency */ var process = __webpack_require__(/*! process/browser */ "./node_modules/process/browser.js");
// Utilitário centralizado para gerenciar webhooks via API
const resolveApiUrl = () => {
  if (process.env.REACT_APP_API_URL) {
    return process.env.REACT_APP_API_URL.replace(/\/$/, '');
  }

  const {
    protocol,
    hostname,
    port
  } = window.location;

  if (port === '3005') {
    return `${protocol}//${hostname}:3005`;
  }

  return `${protocol}//${hostname}${port ? `:${port}` : ''}`;
};

const API_URL = resolveApiUrl();

const authHeaders = () => {
  const token = localStorage.getItem('token');
  return token ? {
    Authorization: `Bearer ${token}`
  } : {};
};

const fetchWebhooks = async () => {
  const res = await fetch(`${API_URL}/webhooks`, {
    headers: {
      'Content-Type': 'application/json',
      ...authHeaders()
    }
  });
  if (!res.ok) throw new Error('Falha ao carregar webhooks');
  return res.json();
};
const createWebhook = async webhook => {
  const res = await fetch(`${API_URL}/webhooks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...authHeaders()
    },
    body: JSON.stringify(webhook)
  });

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error((data === null || data === void 0 ? void 0 : data.erro) || 'Não foi possível criar o webhook');
  }

  return res.json();
};
const toggleWebhook = async (id, active) => {
  const res = await fetch(`${API_URL}/webhooks/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      ...authHeaders()
    },
    body: JSON.stringify({
      active
    })
  });
  if (!res.ok) throw new Error('Falha ao atualizar o webhook');
  return res.json();
};
const sendWebhookEvent = async (event, payload) => {
  try {
    await fetch(`${API_URL}/webhooks/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...authHeaders()
      },
      body: JSON.stringify({
        event,
        payload,
        source: 'portal-iecg'
      })
    });
  } catch (err) {
    console.warn('Falha ao disparar webhook', err);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  fetchWebhooks,
  createWebhook,
  toggleWebhook,
  sendWebhookEvent
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].use[3]!./app/styles/layout/base.scss":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].use[3]!./app/styles/layout/base.scss ***!
  \************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "button, input[type=button], input[type=submit] {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  border: 0;\n  border-radius: 3px;\n  color: contrast-switch(#E0E0E0);\n  cursor: pointer;\n  display: inline-block;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 16px;\n  -webkit-font-smoothing: antialiased;\n  font-weight: 600;\n  line-height: 1;\n  padding: 0.75em 1.5em;\n  text-align: center;\n  text-decoration: none;\n  -webkit-transition: background-color 150ms ease;\n  transition: background-color 150ms ease;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  vertical-align: middle;\n  white-space: nowrap;\n}\nbutton:focus, input[type=button]:focus, input[type=submit]:focus {\n  outline: none;\n  outline-offset: inherit;\n}\nbutton:disabled, input[type=button]:disabled, input[type=submit]:disabled {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\nbutton:disabled:hover, input[type=button]:disabled:hover, input[type=submit]:disabled:hover {\n  background-color: #E0E0E0;\n}\n\nfieldset {\n  background-color: transparent;\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  font-weight: 600;\n  margin-bottom: 0.375em;\n  padding: 0;\n}\n\ntextarea {\n  resize: vertical;\n}\n\n[type=checkbox],\n[type=radio] {\n  display: inline;\n  margin-right: 0.375em;\n}\n\n[type=file] {\n  margin-bottom: 0.75em;\n  width: 100%;\n}\n\nselect {\n  margin-bottom: 0.75em;\n  width: 100%;\n}\n\n[type=checkbox]:focus,\n[type=radio]:focus,\n[type=file]:focus,\nselect:focus {\n  outline: 3px solid rgba(224, 224, 224, 0.6);\n  outline-offset: 2px;\n}\n\ninput[type=text],\ninput[type=email],\ninput[type=search],\ninput[type=url],\ninput[type=number] {\n  word-break: normal;\n}\n\nhtml {\n  background-color: #fff;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n*,\n*::before,\n*::after {\n  -webkit-box-sizing: inherit;\n          box-sizing: inherit;\n}\n\n*:focus {\n  outline: none;\n}\n\nhtml,\nbody {\n  height: 100%;\n}\n\nbody {\n  margin: 0;\n}\n\nul,\nol {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\ndl {\n  margin: 0;\n}\n\ndt {\n  font-weight: 600;\n  margin: 0;\n}\n\ndd {\n  margin: 0;\n}\n\nfigure {\n  margin: 0;\n}\n\nimg,\npicture {\n  margin: 0;\n  max-width: 100%;\n}\n\ntable {\n  border-collapse: collapse;\n  margin: 1.5em 0;\n  text-align: left;\n  width: 100%;\n}\n\nthead {\n  line-height: 1.2;\n  vertical-align: bottom;\n}\n\ntbody {\n  vertical-align: top;\n}\n\ntr {\n  border-bottom: 1px solid #E0E0E0;\n}\n\nth {\n  font-weight: 600;\n}\n\nth,\ntd {\n  padding: 0.75em 1.5em;\n}\n@media screen and (max-width: 1400px) {\n  th,\ntd {\n    padding: 0.75em;\n    padding-left: 1.5em;\n  }\n}\n\n/**\n * Retrieves a color value from the $material-colors Sass map\n * Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette/\n *\n * @function\n * @param {string} color-name             - quoted, lower-case, dasherized color\n *                                          name (e.g. 'pink', 'amber')\n * @param {string} [color-variant='500']  - quoted, lowercase color variant (e.g.\n *                                          '200', 'a100')\n */\nhtml {\n  color: #424242;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 100%;\n  line-height: 1.5;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 1.25em;\n  line-height: 1.2;\n  margin: 0 0 0.75em;\n}\n\np {\n  margin: 0 0 0.75em;\n}\n\na {\n  color: #2196f3;\n  -webkit-text-decoration-skip: ink;\n          text-decoration-skip-ink: auto;\n  -webkit-transition: color 150ms ease;\n  transition: color 150ms ease;\n}\na:focus {\n  outline: none;\n  outline-offset: none;\n}\n\nhr {\n  border-bottom: 1px solid #E0E0E0;\n  border-left: 0;\n  border-right: 0;\n  border-top: 0;\n  margin: 1.5em 0;\n}\n\n[textalign=center] {\n  text-align: center !important;\n}\n\n[textalign=left] {\n  text-align: left;\n}\n\n[textalign=right] {\n  text-align: right;\n}\n\n[textalign=justify] {\n  text-align: justify;\n}\n\nsvg {\n  fill: currentColor;\n}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=.htaccess!./app/.htaccess":
/*!*****************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=.htaccess!./app/.htaccess ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + ".htaccess");

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./public/favicons/favicon.ico":
/*!**********************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./public/favicons/favicon.ico ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "favicon.ico");

/***/ }),

/***/ "./app/styles/layout/base.scss":
/*!*************************************!*\
  !*** ./app/styles/layout/base.scss ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].use[2]!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].use[3]!./base.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].use[3]!./app/styles/layout/base.scss");

if(typeof content === 'string') content = [[module.id, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! !../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].use[2]!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].use[3]!./base.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].use[3]!./app/styles/layout/base.scss", function() {
		var newContent = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].use[2]!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].use[3]!./base.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].use[3]!./app/styles/layout/base.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./public/images/decoration_dark.svg":
/*!*******************************************!*\
  !*** ./public/images/decoration_dark.svg ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzMDAgNDcuMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzAwIDQ3LjE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojMzAzMDMxO30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTMwMCw0Ni45TDAsNDcuMVY4LjljMCwwLDIxLjEsMTQuMyw2NS4yLDE0LjFjNDAuNi0wLjIsNzYuNC0yMywxMjgtMjNDMjQzLjMsMCwzMDAsMTYuNCwzMDAsMTYuNFY0Ni45eiIvPgo8L3N2Zz4K");

/***/ }),

/***/ "./public/images/decoration_light.svg":
/*!********************************************!*\
  !*** ./public/images/decoration_light.svg ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzMDAgNDcuMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzAwIDQ3LjE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkFGQUZBO30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTMwMCw0Ni45TDAsNDcuMVY4LjljMCwwLDIxLjEsMTQuMyw2NS4yLDE0LjFjNDAuNi0wLjIsNzYuNC0yMywxMjgtMjNDMjQzLjMsMCwzMDAsMTYuNCwzMDAsMTYuNFY0Ni45eiIvPgo8L3N2Zz4K");

/***/ }),

/***/ "./public/images/logo.png":
/*!********************************!*\
  !*** ./public/images/logo.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "f0e58b0feed5f68cd79864e5aca5259a.png");

/***/ }),

/***/ "./public/images/petal_bg.svg":
/*!************************************!*\
  !*** ./public/images/petal_bg.svg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxNDQwIDgzMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTQ0MCA4MzI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7b3BhY2l0eTowLjI7fQoJLnN0MXtmaWx0ZXI6dXJsKCNBZG9iZV9PcGFjaXR5TWFza0ZpbHRlcik7fQoJLnN0MntmaWxsOiNGRkZGRkY7fQoJLnN0M3ttYXNrOnVybCgjbWFzay0yXzFfKTtmaWxsOiNGRkZGRkY7fQoJLnN0NHtmaWx0ZXI6dXJsKCNBZG9iZV9PcGFjaXR5TWFza0ZpbHRlcl8xXyk7fQoJLnN0NXttYXNrOnVybCgjbWFzay00XzFfKTtmaWxsOiNGRkZGRkY7fQoJLnN0NntvcGFjaXR5OjAuNDt9Cgkuc3Q3e29wYWNpdHk6NS4wMDAwMDBlLTAyO30KCS5zdDh7ZmlsdGVyOnVybCgjQWRvYmVfT3BhY2l0eU1hc2tGaWx0ZXJfMl8pO30KCS5zdDl7bWFzazp1cmwoI21hc2stNl8xXyk7ZmlsbDojRkZGRkZGO30KCS5zdDEwe29wYWNpdHk6MC4xO30KCS5zdDExe2ZpbHRlcjp1cmwoI0Fkb2JlX09wYWNpdHlNYXNrRmlsdGVyXzNfKTt9Cgkuc3QxMnttYXNrOnVybCgjbWFzay04XzFfKTtmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPgo8dGl0bGU+R3JvdXA8L3RpdGxlPgo8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KPGcgaWQ9IldlbGNvbWUiPgoJPGcgaWQ9IkRlc2t0b3AtSEQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAtNzYuMDAwMDAwKSI+CgkJPGcgaWQ9Ikdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTA5LjAwMDAwMCwgNzYuMDAwMDAwKSI+CgkJCTxnIGlkPSJMaW5lIiBjbGFzcz0ic3QwIj4KCQkJCQoJCQkJCTxnIGlkPSJHcm91cC0zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3OTYuNTAwMDAwLCAxMzkuMTg2MTA5KSBzY2FsZSgtMSwgLTEpIHRyYW5zbGF0ZSgtNzk2LjUwMDAwMCwgLTEzOS4xODYxMDkpIHRyYW5zbGF0ZSgwLjAwMDAwMCwgMC4xODYxMDkpIj4KCQkJCQk8ZyBpZD0iQ2xpcC0yIj4KCQkJCQk8L2c+CgkJCQkJPGRlZnM+CgkJCQkJCTxmaWx0ZXIgaWQ9IkFkb2JlX09wYWNpdHlNYXNrRmlsdGVyIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiPgoJCQkJCQkJPGZlQ29sb3JNYXRyaXggIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIxIDAgMCAwIDAgIDAgMSAwIDAgMCAgMCAwIDEgMCAwICAwIDAgMCAxIDAiLz4KCQkJCQkJPC9maWx0ZXI+CgkJCQkJPC9kZWZzPgoJCQkJCTxtYXNrIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJtYXNrLTJfMV8iPgoJCQkJCQk8ZyBjbGFzcz0ic3QxIj4KCQkJCQkJCTxwb2x5Z29uIGlkPSJwYXRoLTFfMV8iIGNsYXNzPSJzdDIiIHBvaW50cz0iLTEwLDAgMTU4MywwIDE1ODMsMjc3LjMgLTEwLDI3Ny4zIAkJCQkJCQkiLz4KCQkJCQkJPC9nPgoJCQkJCTwvbWFzaz4KCQkJCQk8cGF0aCBpZD0iRmlsbC0xIiBjbGFzcz0ic3QzIiBkPSJNLTksMjMxLjd2LTI0LjFjLTAuMS0wLjEtMC4zLTAuMS0wLjQtMC4xQy0xMC45LDIwNy41LTksMjE0LjItOSwyMzEuN3ogTTEyMzEsMC4yCgkJCQkJCUM5OTIuNCw3LDQ5My40LDIyMi45LDI1MC45LDIyNC40Yy0xNjYsMC0yNjAtOTguMy0yNjAtOTguM3Y4MS40YzYsMi43LDQ0LjksNjEuNSwyNTMuNyw2OS4yYzguNiwwLjMsMTcuNCwwLjUsMjYuMywwLjUKCQkJCQkJYzI3MC4zLDAsNjg5LjktMTQwLjYsOTI4LjktMTQwLjZjNi44LDAsMTMuNSwwLjEsMjAsMC4zYzMyMC41LDExLjUsMzYzLjIsNTkuNywzNjMuMiw1OS43di03MC42YzAsMC0xMTMuNy0xMjYuMS0zMzUuNC0xMjYuMQoJCQkJCQlDMTI0Mi4yLDAsMTIzNi42LDAuMSwxMjMxLDAuMnogTTEzOTMsMjAuNGMzNi45LDEwLjQsNzIuMSwyNSwxMDQuNSw0My4yYzUzLjQsMzAsODIsNjAuMyw4NC4yLDYyLjh2NjgKCQkJCQkJYy01LjMtNC0yMC44LTEzLjUtNTkuNy0yMy44Yy0yOS41LTcuOC02Ni42LTE0LjYtMTEwLjEtMjBjLTU0LjMtNi44LTExOS0xMS42LTE5Mi4xLTE0LjJjLTYuNC0wLjItMTMuMi0wLjMtMjAtMC4zCgkJCQkJCWMtMTE2LDAtMjcyLjIsMzIuNi00MzcuNSw2Ny4xYy0xNzMuMSwzNi4xLTM1Mi4yLDczLjUtNDkxLjMsNzMuNWMtOSwwLTE3LjgtMC4yLTI2LjItMC41Yy03OC43LTIuOS0xNDIuNC0xMy40LTE4OS40LTMxLjEKCQkJCQkJYy0zNy41LTE0LjEtNTMuMy0yOC44LTYwLjEtMzVjLTEuNi0xLjQtMi40LTIuMi0zLjEtMi43di03OC41YzcsNi43LDI5LjUsMjcsNjUuMyw0N2MyNS42LDE0LjMsNTIuOSwyNS43LDgxLjIsMzMuOQoJCQkJCQljMzUuMywxMC4yLDcyLjMsMTUuNCwxMDkuOCwxNS40YzMyLjQtMC4yLDY2LjctMy41LDEwNy40LTEwLjJjMzYuMi02LDc2LjYtMTQuNSwxMjMuNS0yNmM4Ny4xLTIxLjQsMTgzLjYtNTAuMSwyNzYuOS03Ny45CgkJCQkJCWM4OC40LTI2LjMsMTc5LjktNTMuNiwyNjEuNi03My45QzExMDkuMiwxNC4yLDExNzksMi40LDEyMzEuMSwxYzUuNS0wLjIsMTEuMS0wLjIsMTYuNi0wLjJDMTI5OCwwLjcsMTM0Ni45LDcuMywxMzkzLDIwLjR6Ii8+CgkJCQk8L2c+CgkJCQkKCQkJCQk8ZyBpZD0iR3JvdXAtMy1Db3B5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3OTMuNDk0OTk3LCA2OTMuMDAwMDAwKSBzY2FsZSgtMSwgLTEpIHRyYW5zbGF0ZSgtNzkzLjQ5NDk5NywgLTY5My4wMDAwMDApIHRyYW5zbGF0ZSgxOS40OTQ5OTcsIDU1NC4wMDAwMDApIj4KCQkJCQk8ZyBpZD0iQ2xpcC0yXzFfIj4KCQkJCQk8L2c+CgkJCQkJPGRlZnM+CgkJCQkJCTxmaWx0ZXIgaWQ9IkFkb2JlX09wYWNpdHlNYXNrRmlsdGVyXzFfIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiPgoJCQkJCQkJPGZlQ29sb3JNYXRyaXggIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIxIDAgMCAwIDAgIDAgMSAwIDAgMCAgMCAwIDEgMCAwICAwIDAgMCAxIDAiLz4KCQkJCQkJPC9maWx0ZXI+CgkJCQkJPC9kZWZzPgoJCQkJCTxtYXNrIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJtYXNrLTRfMV8iPgoJCQkJCQk8ZyBjbGFzcz0ic3Q0Ij4KCQkJCQkJCTxwb2x5Z29uIGlkPSJwYXRoLTNfMV8iIGNsYXNzPSJzdDIiIHBvaW50cz0iLTEwLDAgMTUzNy4zLDAgMTUzNy4zLDI3Ny4zIC0xMCwyNzcuMyAJCQkJCQkJIi8+CgkJCQkJCTwvZz4KCQkJCQk8L21hc2s+CgkJCQkJPHBhdGggaWQ9IkZpbGwtMV8xXyIgY2xhc3M9InN0NSIgZD0iTS05LjQsMjA3LjVjLTEuNSwwLDAuNCw2LjcsMC40LDI0LjJ2LTI0LjFDLTkuMiwyMDcuNS05LjMsMjA3LjUtOS40LDIwNy41IE0xMjExLjYsMAoJCQkJCQljLTUuMywwLTEwLjcsMC4xLTE2LjIsMC4yQzk2My43LDcsNDc5LDIyMi45LDI0My40LDIyNC40Yy0wLjgsMC0xLjYsMC0yLjQsMGMtMTU4LjgsMC0yNTAuMS05OC4zLTI1MC4xLTk4LjN2ODEuNAoJCQkJCQljNS44LDIuNyw0My42LDYxLjUsMjQ2LjUsNjkuMmM4LjQsMC4zLDE2LjksMC41LDI1LjYsMC41YzI2Mi42LDAsNjcwLjEtMTQwLjYsOTAyLjItMTQwLjZjNi42LDAsMTMuMSwwLjEsMTkuNCwwLjMKCQkJCQkJYzMxMS4zLDExLjUsMzUyLjgsNTkuNywzNTIuOCw1OS43di03MC42QzE1MzcuMywxMjYuMSwxNDI2LjksMCwxMjExLjYsMCBNMTIxMS42LDAuN2M0OC45LDAsOTYuNCw2LjYsMTQxLjEsMTkuNgoJCQkJCQljMzUuOCwxMC40LDcwLDI1LDEwMS41LDQzLjJjNTEuOCwzMCw3OS42LDYwLjMsODEuOCw2Mi44djY4Yy01LjEtNC0yMC4yLTEzLjUtNTcuOS0yMy44Yy0yOC43LTcuOC02NC43LTE0LjYtMTA2LjktMjAKCQkJCQkJYy01Mi44LTYuOC0xMTUuNi0xMS42LTE4Ni42LTE0LjJjLTYuMi0wLjItMTIuOC0wLjMtMTkuNS0wLjNjLTExMi43LDAtMjY0LjQsMzIuNi00MjUsNjcuMWMtMTY4LjIsMzYuMS0zNDIuMSw3My41LTQ3Ny4yLDczLjUKCQkJCQkJYy04LjcsMC0xNy4zLTAuMi0yNS41LTAuNWMtNzYuNC0yLjktMTM4LjMtMTMuNC0xODMuOS0zMS4xYy0zNi40LTE0LjEtNTEuOC0yOC44LTU4LjMtMzVjLTEuNS0xLjQtMi40LTIuMi0zLjEtMi43di03OC41CgkJCQkJCWM2LjgsNi43LDI4LjYsMjcsNjMuNSw0N2MyNC45LDE0LjMsNTEuNCwyNS43LDc4LjgsMzMuOWMzNC4zLDEwLjIsNzAuMiwxNS40LDEwNi42LDE1LjRjMC44LDAsMS42LDAsMi40LDAKCQkJCQkJYzI5LjEtMC4yLDYyLjQtMy41LDEwMi0xMC4yYzM1LjEtNiw3NC40LTE0LjUsMTE5LjktMjZjODQuNi0yMS40LDE3OC4zLTUwLjEsMjY4LjktNzcuOUM4MjAuMiw4NC43LDkwOSw1Ny40LDk4OC4zLDM3LjEKCQkJCQkJYzg4LjgtMjIuOCwxNTYuNS0zNC42LDIwNy4xLTM2LjFDMTIwMC44LDAuOCwxMjA2LjIsMC43LDEyMTEuNiwwLjdMMTIxMS42LDAuNyIvPgoJCQkJPC9nPgoJCQk8L2c+CgkJCTxnIGlkPSJXaW5nIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyOC4wMDAwMDAsIDUwNC4wMDAwMDApIiBjbGFzcz0ic3Q2Ij4KCQkJCTxnIGlkPSJHcm91cC0zXzFfIiBjbGFzcz0ic3Q3Ij4KCQkJCQk8ZyBpZD0iQ2xpcC0yXzJfIj4KCQkJCQk8L2c+CgkJCQkJPGRlZnM+CgkJCQkJCTxmaWx0ZXIgaWQ9IkFkb2JlX09wYWNpdHlNYXNrRmlsdGVyXzJfIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjEwIiB5PSIwIiB3aWR0aD0iMTUzOSIgaGVpZ2h0PSIyNzciPgoJCQkJCQkJPGZlQ29sb3JNYXRyaXggIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIxIDAgMCAwIDAgIDAgMSAwIDAgMCAgMCAwIDEgMCAwICAwIDAgMCAxIDAiLz4KCQkJCQkJPC9maWx0ZXI+CgkJCQkJPC9kZWZzPgoJCQkJCTxtYXNrIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjEwIiB5PSIwIiB3aWR0aD0iMTUzOSIgaGVpZ2h0PSIyNzciIGlkPSJtYXNrLTZfMV8iPgoJCQkJCQk8ZyBjbGFzcz0ic3Q4Ij4KCQkJCQkJCTxwb2x5Z29uIGlkPSJwYXRoLTVfMV8iIGNsYXNzPSJzdDIiIHBvaW50cz0iMTAsMCAxNTQ5LDAgMTU0OSwyNzcgMTAsMjc3IAkJCQkJCQkiLz4KCQkJCQkJPC9nPgoJCQkJCTwvbWFzaz4KCQkJCQk8cGF0aCBpZD0iRmlsbC0xXzJfIiBjbGFzcz0ic3Q5IiBkPSJNMTU0OSwxOTYuNWMwLDAtNDEuMy00OC4xLTM1MC45LTU5LjZjLTIzNC4zLTguNy02NzUuMywxNDkuOC05NDIuMSwxMzkuNgoJCQkJCQlDLTE4LjYsMjY2LjEsMTAuOSwxNjAuOSwxMC45LDIzMS40VjEyNmMwLDAsOTEuNyw5OS4xLDI1MS4xLDk4LjJDNDk2LjQsMjIyLjcsOTc4LjUsNi45LDEyMDguOSwwLjIKCQkJCQkJQzE0MzMuNi02LjMsMTU0OSwxMjYsMTU0OSwxMjZWMTk2LjV6Ii8+CgkJCQk8L2c+CgkJCQk8ZyBpZD0iR3JvdXAtM18yXyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDQ2LjUzMDE4NCkiIGNsYXNzPSJzdDEwIj4KCQkJCQk8ZyBpZD0iQ2xpcC0yXzNfIj4KCQkJCQk8L2c+CgkJCQkJPGRlZnM+CgkJCQkJCTxmaWx0ZXIgaWQ9IkFkb2JlX09wYWNpdHlNYXNrRmlsdGVyXzNfIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjEwIiB5PSIwIiB3aWR0aD0iMTUzOSIgaGVpZ2h0PSIyMjMuMiI+CgkJCQkJCQk8ZmVDb2xvck1hdHJpeCAgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjEgMCAwIDAgMCAgMCAxIDAgMCAwICAwIDAgMSAwIDAgIDAgMCAwIDEgMCIvPgoJCQkJCQk8L2ZpbHRlcj4KCQkJCQk8L2RlZnM+CgkJCQkJPG1hc2sgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMTAiIHk9IjAiIHdpZHRoPSIxNTM5IiBoZWlnaHQ9IjIyMy4yIiBpZD0ibWFzay04XzFfIj4KCQkJCQkJPGcgY2xhc3M9InN0MTEiPgoJCQkJCQkJPHBvbHlnb24gaWQ9InBhdGgtN18xXyIgY2xhc3M9InN0MiIgcG9pbnRzPSIxMCwwIDE1NDksMCAxNTQ5LDIyMy4yIDEwLDIyMy4yIAkJCQkJCQkiLz4KCQkJCQkJPC9nPgoJCQkJCTwvbWFzaz4KCQkJCQk8cGF0aCBpZD0iRmlsbC0xXzNfIiBjbGFzcz0ic3QxMiIgZD0iTTE1NDksMTYyLjdjMCwwLTQxLjMtNTQuMi0zNTAuOS02Ny4yQzk2My44LDg1LjcsNTIyLjgsMjM0LDI1Ni4xLDIyMi42CgkJCQkJCWMtMjc0LjYtMTEuOC0yNDUuMS0xMDAtMjQ1LjEtMjAuNVY4My4yYzAsMCw4NS43LDE0MC41LDI0NS4xLDEzOS4zQzQ5MC40LDIyMC45LDk5Mi45LDgsMTIyMy40LDAuNAoJCQkJCQlDMTQ0OC4xLTYuOSwxNTQ5LDgzLjIsMTU0OSw4My4yVjE2Mi43eiIvPgoJCQkJPC9nPgoJCQk8L2c+CgkJPC9nPgoJPC9nPgo8L2c+Cjwvc3ZnPgo=");

/***/ }),

/***/ "./public/images/petal_grey_bg.svg":
/*!*****************************************!*\
  !*** ./public/images/petal_grey_bg.svg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTQ0MHB4IiBoZWlnaHQ9IjgzMnB4IiB2aWV3Qm94PSIwIDAgMTQ0MCA4MzIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjEgKDU3NTAxKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Hcm91cDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxwb2x5Z29uIGlkPSJwYXRoLTEiIHBvaW50cz0iMCAwIDE1OTMgMCAxNTkzIDI3Ny4yNzA4MTggMCAyNzcuMjcwODE4Ij48L3BvbHlnb24+CiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMyIgcG9pbnRzPSIwIDAgMTU0Ny4zMDM1NCAwIDE1NDcuMzAzNTQgMjc3LjI3MDgxOCAwIDI3Ny4yNzA4MTgiPjwvcG9seWdvbj4KICAgICAgICA8cG9seWdvbiBpZD0icGF0aC01IiBwb2ludHM9IjAgMCAxNTM5IDAgMTUzOSAyNzcgMCAyNzciPjwvcG9seWdvbj4KICAgICAgICA8cG9seWdvbiBpZD0icGF0aC03IiBwb2ludHM9IjAgMCAxNTM5IDAgMTUzOSAyMjMuMTk5NDc1IDAgMjIzLjE5OTQ3NSI+PC9wb2x5Z29uPgogICAgPC9kZWZzPgogICAgPGcgaWQ9IldlbGNvbWUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9IjAuMjQiPgogICAgICAgIDxnIGlkPSJEZXNrdG9wLUhELUNvcHkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAtNzYuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEwOS4wMDAwMDAsIDc2LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IkxpbmUiIG9wYWNpdHk9IjAuNzAzNzM4ODM5Ij4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzk2LjUwMDAwMCwgMTM5LjE4NjEwOSkgc2NhbGUoLTEsIC0xKSB0cmFuc2xhdGUoLTc5Ni41MDAwMDAsIC0xMzkuMTg2MTA5KSB0cmFuc2xhdGUoMC4wMDAwMDAsIDAuMTg2MTA5KSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IkNsaXAtMiI+PC9nPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMC45NTU3ODg4MjgsMjMxLjY3NjMxMSBMMC45NTU3ODg4MjgsMjA3LjU2MjEwMyBDMC44MTY0ODQ5NiwyMDcuNDk4Nzg0IDAuNjk1ODM3ODYsMjA3LjQ2NzQ4OSAwLjU5MTM1OTk1OCwyMDcuNDY3NDg5IEMtMC45MjYwNTcxODEsMjA3LjQ2NTMwNSAwLjk1NTc4ODgyOCwyMTQuMTU1OTc0IDAuOTU1Nzg4ODI4LDIzMS42NzYzMTEgWiBNMTI0MS4wMDg5OCwwLjIzNTgwNzMwNSBDMTAwMi40MzI0NCw2Ljk1NDg1OTkxIDUwMy40NDQ3NDMsMjIyLjk0MjcwNyAyNjAuOTA2NzU4LDIyNC4zOTgzMDggQzk0LjkzODYzNjIsMjI0LjQwNTU4NiAwLjk1NTc4ODgyOCwxMjYuMTQ1MjY0IDAuOTU1Nzg4ODI4LDEyNi4xNDUyNjQgTDAuOTU1Nzg4ODI4LDIwNy41NjIxMDMgQzYuOTExMDI5MjEsMjEwLjI0OTE0MSA0NS44NDAyNDE1LDI2OS4wOTMyNTMgMjU0LjY4NzgzNSwyNzYuNzk5OTMxIEMyNjMuMjk5Nzk5LDI3Ny4xMTcyNTIgMjcyLjA0MzYwNCwyNzcuMjcwODE4IDI4MC45OTM4NzgsMjc3LjI3MDgxOCBDNTUxLjM0MDM5OCwyNzcuMjcwODE4IDk3MC44NDY1MzUsMTM2LjcxMDAxMyAxMjA5Ljg1NDY2LDEzNi43MTQzOCBDMTIxNi42NTMxOSwxMzYuNzE0MzggMTIyMy4zMTYxNCwxMzYuODI3OTE3IDEyMjkuODE0OTEsMTM3LjA2MjI2OCBDMTU1MC4yODg0NCwxNDguNjAyMjcgMTU5MywxOTYuNzQxODk1IDE1OTMsMTk2Ljc0MTg5NSBMMTU5MywxMjYuMTQ1MjY0IEMxNTkzLDEyNi4xNDUyNjQgMTQ3OS4yOTgxOSwtMC4wMDQzNjY4MDE5NSAxMjU3LjY0NzA4LDAgQzEyNTIuMTcxOTQsMC4wMDA3Mjc4MDAzMjUgMTI0Ni42MTcyLDAuMDc3ODc0NjM0OCAxMjQxLjAwODk4LDAuMjM1ODA3MzA1IFogTTE0MDIuOTcyMTEsMjAuMzUzNjYzOSBDMTQzOS44NTI4MSwzMC43Nzc5NDggMTQ3NS4wMjcwNCw0NS4zMTY0ODczIDE1MDcuNTE5NjYsNjMuNTY1MzUyNiBDMTU2MC44NzE4LDkzLjUyOTYxOTggMTU4OS40OTEyOCwxMjMuODc4MTY2IDE1OTEuNzU2MjIsMTI2LjMyNzk0MSBMMTU5MS43NTYyMiwxOTQuMzYxMjYgQzE1ODYuNDgwMDgsMTkwLjMzMjg4NiAxNTcwLjk5MzcyLDE4MC44OTg0MSAxNTMyLjA5OTMzLDE3MC41NjY1NTYgQzE1MDIuNTU5NDUsMTYyLjcyMDE0MSAxNDY1LjUyNDUyLDE1NS45ODM2MjEgMTQyMi4wMjE5MSwxNTAuNTQ0MDQyIEMxMzY3LjY5MzQxLDE0My43NTAwMjYgMTMwMy4wNTE0NCwxMzguOTY5ODMzIDEyMjkuODkwNzksMTM2LjMzNTkyNCBDMTIyMy40NTY2OSwxMzYuMTAzNzU1IDEyMTYuNzE1MzgsMTM1Ljk4NjU4IDEyMDkuODU0NjYsMTM1Ljk4NjU4IEMxMDkzLjgxMzI5LDEzNS45ODQzOTYgOTM3LjY0MzcwNywxNjguNTY2NTYxIDc3Mi4zMDQ5NCwyMDMuMDYyMTEzIEM1OTkuMTU1MjA3LDIzOS4xODcyMSA0MjAuMTExMTc5LDI3Ni41NDMwMTcgMjgwLjk5Mzg3OCwyNzYuNTQzMDE3IEMyNzIuMDMxMTY3LDI3Ni41NDMwMTcgMjYzLjIwNzc1OSwyNzYuMzg1MDg1IDI1NC43NjYxOTMsMjc2LjA3MzU4NiBDMTc2LjExNDIzNCwyNzMuMTcxMTE5IDExMi40MDEzNzEsMjYyLjcwNDYyMiA2NS4zOTc1MDk2LDI0NC45NjQ0ODkgQzI3LjkyMTAzNzcsMjMwLjgxODk2MiAxMi4wOTc2MTA3LDIxNi4xOTE2MzEgNS4zNDEzNzMxMiwyMDkuOTQ1NjQ5IEMzLjc4MDQyMzUyLDIwOC41MDI0MjEgMi44OTczMzY1LDIwNy42OTc0NzMgMi4xOTk1NzMzNywyMDcuMjUxMzMyIEwyLjE5OTU3MzM3LDEyOC43OTczNjggQzkuMTgwOTM1OTksMTM1LjQ5MDIyIDMxLjY4MzQ4NTksMTU1Ljc2MDE4NyA2Ny41MjY4Njg4LDE3NS44MDE2MjQgQzkzLjEyNzY4NTksMTkwLjExNTI3MyAxMjAuNDMyNDg4LDIwMS41MjIwODggMTQ4LjY4NTA1NCwyMDkuNzA0NzQ3IEMxODQuMDMyMTY3LDIxOS45NDI3MTQgMjIwLjk2Mzg2MSwyMjUuMTMzMzg2IDI1OC40NTI3NzEsMjI1LjEzMzM4NiBDMjkwLjg1OTU3NywyMjQuOTQ2MzQxIDMyNS4xOTMwMDUsMjIxLjU5NzAwNCAzNjUuODg0NjYsMjE0Ljg4NTk1NyBDNDAyLjA1ODg5LDIwOC45MjA5MDYgNDQyLjQ1MDc5MywyMDAuNDE3Mjg3IDQ4OS4zNzI1NjUsMTg4Ljg5MTExMyBDNTc2LjQzMjUwNywxNjcuNTAzOTczIDY3Mi45MjY1NTYsMTM4Ljc3OTE0OSA3NjYuMjQzOTc4LDExMC45OTk3MzkgQzg1NC42ODMyNzgsODQuNjcyMjg5OSA5NDYuMTM1MDI0LDU3LjQ0ODE5MDkgMTAyNy44MjMwNiwzNy4wNTIzMTQ2IEMxMTE5LjIwNjQsMTQuMjM1MDQ2NiAxMTg4Ljk1OTA4LDIuNDMwMTI1MjkgMTI0MS4wNjg2OCwwLjk2Mjg3OTgzMSBDMTI0Ni41ODYxMSwwLjgwNzEzMDU2MSAxMjUyLjE2NDQ4LDAuNzI3ODAwMzI1IDEyNTcuNjU0NTQsMC43Mjc4MDAzMjUgQzEzMDguMDA3OTIsMC43Mjc4MDAzMjUgMTM1Ni44OTczNiw3LjMzMTEzMjY4IDE0MDIuOTcyMTEsMjAuMzUzNjYzOSBaIiBpZD0iRmlsbC0xIiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbD0iIzAwMDAwMCIgbWFzaz0idXJsKCNtYXNrLTIpIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC0zLUNvcHkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDc5My40OTQ5OTcsIDY5My4wMDAwMDApIHNjYWxlKC0xLCAtMSkgdHJhbnNsYXRlKC03OTMuNDk0OTk3LCAtNjkzLjAwMDAwMCkgdHJhbnNsYXRlKDE5LjQ5NDk5NywgNTU0LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8bWFzayBpZD0ibWFzay00IiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTMiPjwvdXNlPgogICAgICAgICAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJDbGlwLTIiPjwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTAuNTc0Mzk2MzMsMjA3LjQ2NzQ4OSBDLTAuODk5NDkyNDk4LDIwNy40NjUzMDUgMC45MjgzNzEyNywyMTQuMTU1OTc0IDAuOTI4MzcxMjcsMjMxLjY3NjMxMSBMMC45MjgzNzEyNywyMDcuNTYyMTAzIEMwLjc5MzA2MzQ0MywyMDcuNDk4Nzg0IDAuNjc1ODc3MjAxLDIwNy40Njc0ODkgMC41NzQzOTYzMywyMDcuNDY3NDg5IE0xMjIxLjU3MDQ4LDAgQzEyMTYuMjUyNCwwLjAwMDcyNzgwMDMyNSAxMjEwLjg1NywwLjA3Nzg3NDYzNDggMTIwNS40MDk2NSwwLjIzNTgwNzMwNSBDOTczLjY3Njg3Nyw2Ljk1NDg1OTkxIDQ4OS4wMDMwMzMsMjIyLjk0MjcwNyAyNTMuNDIyNDQxLDIyNC4zOTgzMDggQzI1Mi42MjAyNTksMjI0LjQwMzQwMiAyNTEuODM4NjE1LDIyNC40MDU1ODYgMjUxLjAzODg0OSwyMjQuNDA1NTg2IEM5Mi4yMTUyNDY0LDIyNC40MDU1ODYgMC45MjgzNzEyNywxMjYuMTQ1MjY0IDAuOTI4MzcxMjcsMTI2LjE0NTI2NCBMMC45MjgzNzEyNywyMDcuNTYyMTAzIEM2LjcxMjc4MDg3LDIxMC4yNDkxNDEgNDQuNTI1Mjc4LDI2OS4wOTMyNTMgMjQ3LjM4MTkxMywyNzYuNzk5OTMxIEMyNTUuNzQ2ODM2LDI3Ny4xMTcyNTIgMjY0LjIzOTgxOSwyNzcuMjcwODE4IDI3Mi45MzMzNDYsMjc3LjI3MDgxOCBDNTM1LjUyNDc2MywyNzcuMjcwODE4IDk0Mi45OTcwMzUsMTM2LjcxMDAxMyAxMTc1LjE0OTAyLDEzNi43MTQzOCBDMTE4MS43NTI1MywxMzYuNzE0MzggMTE4OC4yMjQzNSwxMzYuODI3OTE3IDExOTQuNTM2NywxMzcuMDYyMjY4IEMxNTA1LjgxNzE5LDE0OC42MDIyNyAxNTQ3LjMwMzU0LDE5Ni43NDE4OTUgMTU0Ny4zMDM1NCwxOTYuNzQxODk1IEwxNTQ3LjMwMzU0LDEyNi4xNDUyNjQgQzE1NDcuMzAzNTQsMTI2LjE0NTI2NCAxNDM2Ljg2MzM1LC0wLjAwNDM2NjgwMTk1IDEyMjEuNTcwNDgsMCBNMTIyMS41ODM3NywwLjcyNzgwMDMyNSBDMTI3MC40ODY2OCwwLjcyNzgwMDMyNSAxMzE3Ljk3MzY4LDcuMzMxMTMyNjggMTM2Mi43MjY3NSwyMC4zNTM2NjM5IEMxMzk4LjU0OTQ5LDMwLjc3Nzk0OCAxNDMyLjcxNDcyLDQ1LjMxNjQ4NzMgMTQ2NC4yNzUyNyw2My41NjUzNTI2IEMxNTE2LjA5Njk2LDkzLjUyOTYxOTggMTU0My44OTU0NywxMjMuODc4MTY2IDE1NDYuMDk1NDMsMTI2LjMyNzk0MSBMMTU0Ni4wOTU0MywxOTQuMzYxMjYgQzE1NDAuOTcwNjUsMTkwLjMzMjg4NiAxNTI1LjkyODUyLDE4MC44OTg0MSAxNDg4LjE0OTg1LDE3MC41NjY1NTYgQzE0NTkuNDU3MzUsMTYyLjcyMDE0MSAxNDIzLjQ4NDc5LDE1NS45ODM2MjEgMTM4MS4yMzAwOSwxNTAuNTQ0MDQyIEMxMzI4LjQ2MDA0LDE0My43NTAwMjYgMTI2NS42NzIzOCwxMzguOTY5ODMzIDExOTQuNjEwNCwxMzYuMzM1OTI0IEMxMTg4LjM2MDg3LDEzNi4xMDM3NTUgMTE4MS44MTI5MywxMzUuOTg2NTggMTE3NS4xNDkwMiwxMzUuOTg2NTggQzEwNjIuNDM2MzksMTM1Ljk4NDM5NiA5MTAuNzQ2NjU2LDE2OC41NjY1NjEgNzUwLjE1MDc2MywyMDMuMDYyMTEzIEM1ODEuOTY3OTY2LDIzOS4xODcyMSA0MDguMDU5OTU4LDI3Ni41NDMwMTcgMjcyLjkzMzM0NiwyNzYuNTQzMDE3IEMyNjQuMjI3NzM4LDI3Ni41NDMwMTcgMjU1LjY1NzQzNiwyNzYuMzg1MDg1IDI0Ny40NTgwMjQsMjc2LjA3MzU4NiBDMTcxLjA2MjI1OCwyNzMuMTcxMTE5IDEwOS4xNzcwNDksMjYyLjcwNDYyMiA2My41MjE1MzA0LDI0NC45NjQ0ODkgQzI3LjEyMDEwMDYsMjMwLjgxODk2MiAxMS43NTA1ODEyLDIxNi4xOTE2MzEgNS4xODgxNTE2MSwyMDkuOTQ1NjQ5IEMzLjY3MTk3OTA4LDIwOC41MDI0MjEgMi44MTQyMjQxMSwyMDcuNjk3NDczIDIuMTM2NDc2ODcsMjA3LjI1MTMzMiBMMi4xMzY0NzY4NywxMjguNzk3MzY4IEM4LjkxNzU3MzU4LDEzNS40OTAyMiAzMC43NzQ2MiwxNTUuNzYwMTg3IDY1LjU4OTgwNzEsMTc1LjgwMTYyNCBDOTAuNDU2MjQ0NywxOTAuMTE1MjczIDExNi45Nzc3ODcsMjAxLjUyMjA4OCAxNDQuNDE5OTA1LDIwOS43MDQ3NDcgQzE3OC43NTMwNTgsMjE5Ljk0MjcxNCAyMTQuNjI1MzM4LDIyNS4xMzMzODYgMjUxLjAzODg0OSwyMjUuMTMzMzg2IEMyNTEuODQyMjM5LDIyNS4xMzMzODYgMjUyLjYyODcxNiwyMjUuMTMxMjAyIDI1My40MzQ1MjIsMjI1LjEyNjEwOCBDMjgyLjUxNjA0LDIyNC45NDYzNDEgMzE1Ljg2NDU4NywyMjEuNTk3MDA0IDM1NS4zODg5NywyMTQuODg1OTU3IEMzOTAuNTI1NTEzLDIwOC45MjA5MDYgNDI5Ljc1ODc0MiwyMDAuNDE3Mjg3IDQ3NS4zMzQ1MjYsMTg4Ljg5MTExMyBDNTU5Ljg5NzA4NSwxNjcuNTAzOTczIDY1My42MjMxMjYsMTM4Ljc3OTE0OSA3NDQuMjYzNjY0LDExMC45OTk3MzkgQzgzMC4xNjYwMTMsODQuNjcyMjg5OSA5MTguOTk0MzkzLDU3LjQ0ODE5MDkgOTk4LjMzOTE0NCwzNy4wNTIzMTQ2IEMxMDg3LjEwMTA4LDE0LjIzNTA0NjYgMTE1NC44NTI4NSwyLjQzMDEyNTI5IDEyMDUuNDY3NjQsMC45NjI4Nzk4MzEgQzEyMTAuODI2OCwwLjgwNzEzMDU2MSAxMjE2LjI0NTE1LDAuNzI3ODAwMzI1IDEyMjEuNTc3NzMsMC43Mjc4MDAzMjUgTDEyMjEuNTgzNzcsMC43Mjc4MDAzMjUiIGlkPSJGaWxsLTEiIGZpbGwtb3BhY2l0eT0iMC40IiBmaWxsPSIjNEE0QTRBIiBtYXNrPSJ1cmwoI21hc2stNCkiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8ZyBpZD0iV2luZyIgb3BhY2l0eT0iMC43IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyOC4wMDAwMDAsIDUwNC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMyIgb3BhY2l0eT0iMC4xIj4KICAgICAgICAgICAgICAgICAgICAgICAgPG1hc2sgaWQ9Im1hc2stNiIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC01Ij48L3VzZT4KICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXNrPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iQ2xpcC0yIj48L2c+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNTM5LDE5Ni41NDk1ODcgQzE1MzksMTk2LjU0OTU4NyAxNDk3LjczNjI3LDE0OC40NTY4NiAxMTg4LjEyNjEyLDEzNi45MjgxIEM5NTMuODA5NjY0LDEyOC4yMDMwMDUgNTEyLjgxNDA3MSwyODYuNzA4OTA4IDI0Ni4wNTM3OTUsMjc2LjUyOTYzIEMtMjguNTc5NTE0NiwyNjYuMDUwMDYzIDAuOTIyNzMwMDc2LDE2MC45MjIxMTMgMC45MjI3MzAwNzYsMjMxLjQ0OTk3IEwwLjkyMjczMDA3NiwxMjYuMDIxNzMxIEMwLjkyMjczMDA3NiwxMjYuMDIxNzMxIDkyLjYxNjE2NzgsMjI1LjE2ODYyOCAyNTIuMDYxOTA5LDIyNC4xNzkwNTcgQzQ4Ni4zNzgzNjgsMjIyLjcyNDg3NCA5NjguNDUxNDM4LDYuOTQ3NDQyNzQgMTE5OC45NDA3MywwLjIzNDkzNTg0NyBDMTQyMy42NDQyLC02LjMwODg4NTg2IDE1MzksMTI2LjAyMTczMSAxNTM5LDEyNi4wMjE3MzEgTDE1MzksMTk2LjU0OTU4NyBaIiBpZD0iRmlsbC0xIiBmaWxsPSIjMDAwMDAwIiBtYXNrPSJ1cmwoI21hc2stNikiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTMiIG9wYWNpdHk9IjAuMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDQ2LjUzMDE4NCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8bWFzayBpZD0ibWFzay04IiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTciPjwvdXNlPgogICAgICAgICAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJDbGlwLTIiPjwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE1MzksMTYyLjcyODQwNyBDMTUzOSwxNjIuNzI4NDA3IDE0OTcuNzM2MjcsMTA4LjUxMDYzNyAxMTg4LjEyNjEyLDk1LjUxMzU4NTggQzk1My44MDk2NjQsODUuNjc3MjcwNiA1MTIuODE0MDcxLDIzNC4wNDE2OTIgMjQ2LjA1Mzc5NSwyMjIuNTY1OTkxIEMtMjguNTc5NTE0NiwyMTAuNzUxNzU3IDAuOTIyNzMwMDc2LDEyMi41NjM0NTMgMC45MjI3MzAwNzYsMjAyLjA3MzY2OCBMMC45MjI3MzAwNzYsODMuMjE4MTkxOCBDMC45MjI3MzAwNzYsODMuMjE4MTkxOCA4Ni42MDgwNTM1LDIyMy42ODE1OTMgMjQ2LjA1Mzc5NSwyMjIuNTY1OTkxIEM0ODAuMzcwMjU0LDIyMC45MjY2MDUgOTgyLjg3MDkxMyw3Ljk5NjYxMDM2IDEyMTMuMzYwMiwwLjQyOTIwNTE3MSBDMTQzOC4wNjM2OCwtNi45NDgwMzEyNiAxNTM5LDgzLjIxODE5MTggMTUzOSw4My4yMTgxOTE4IEwxNTM5LDE2Mi43Mjg0MDcgWiIgaWQ9IkZpbGwtMSIgZmlsbD0iIzAwMDAwMCIgbWFzaz0idXJsKCNtYXNrLTgpIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=");

/***/ }),

/***/ "./node_modules/@mui/icons-material/index.js":
/*!*****************************************************************************************************!*\
  !*** delegated ./node_modules/@mui/icons-material/index.js from dll-reference reactBoilerplateDeps ***!
  \*****************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__(/*! dll-reference reactBoilerplateDeps */ "dll-reference reactBoilerplateDeps"))("./node_modules/@mui/icons-material/index.js");

/***/ }),

/***/ "./node_modules/@popperjs/core/dist/cjs/popper.js":
/*!**********************************************************************************************************!*\
  !*** delegated ./node_modules/@popperjs/core/dist/cjs/popper.js from dll-reference reactBoilerplateDeps ***!
  \**********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__(/*! dll-reference reactBoilerplateDeps */ "dll-reference reactBoilerplateDeps"))("./node_modules/@popperjs/core/dist/cjs/popper.js");

/***/ }),

/***/ "./node_modules/axios/index.js":
/*!***************************************************************************************!*\
  !*** delegated ./node_modules/axios/index.js from dll-reference reactBoilerplateDeps ***!
  \***************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__(/*! dll-reference reactBoilerplateDeps */ "dll-reference reactBoilerplateDeps"))("./node_modules/axios/index.js");

/***/ }),

/***/ "./node_modules/browser-image-compression/dist/browser-image-compression.mjs":
/*!*************************************************************************************************************************************!*\
  !*** delegated ./node_modules/browser-image-compression/dist/browser-image-compression.mjs from dll-reference reactBoilerplateDeps ***!
  \*************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__(/*! dll-reference reactBoilerplateDeps */ "dll-reference reactBoilerplateDeps"))("./node_modules/browser-image-compression/dist/browser-image-compression.mjs");

/***/ }),

/***/ "./node_modules/clsx/dist/clsx.js":
/*!******************************************************************************************!*\
  !*** delegated ./node_modules/clsx/dist/clsx.js from dll-reference reactBoilerplateDeps ***!
  \******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__(/*! dll-reference reactBoilerplateDeps */ "dll-reference reactBoilerplateDeps"))("./node_modules/clsx/dist/clsx.js");

/***/ }),

/***/ "./node_modules/connected-react18-router/lib/index.js":
/*!**************************************************************************************************************!*\
  !*** delegated ./node_modules/connected-react18-router/lib/index.js from dll-reference reactBoilerplateDeps ***!
  \**************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__(/*! dll-reference reactBoilerplateDeps */ "dll-reference reactBoilerplateDeps"))("./node_modules/connected-react18-router/lib/index.js");

/***/ }),

/***/ "./node_modules/fontfaceobserver/fontfaceobserver.standalone.js":
/*!************************************************************************************************************************!*\
  !*** delegated ./node_modules/fontfaceobserver/fontfaceobserver.standalone.js from dll-reference reactBoilerplateDeps ***!
  \************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__(/*! dll-reference reactBoilerplateDeps */ "dll-reference reactBoilerplateDeps"))("./node_modules/fontfaceobserver/fontfaceobserver.standalone.js");

/***/ }),

/***/ "./node_modules/history/index.js":
/*!*****************************************************************************************!*\
  !*** delegated ./node_modules/history/index.js from dll-reference reactBoilerplateDeps ***!
  \*****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__(/*! dll-reference reactBoilerplateDeps */ "dll-reference reactBoilerplateDeps"))("./node_modules/history/index.js");

/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!************************************************************************************************************************************!*\
  !*** delegated ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js from dll-reference reactBoilerplateDeps ***!
  \************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__(/*! dll-reference reactBoilerplateDeps */ "dll-reference reactBoilerplateDeps"))("./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");

/***/ }),

/***/ "./node_modules/immer/dist/immer.esm.js":
/*!************************************************************************************************!*\
  !*** delegated ./node_modules/immer/dist/immer.esm.js from dll-reference reactBoilerplateDeps ***!
  \************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__(/*! dll-reference reactBoilerplateDeps */ "dll-reference reactBoilerplateDeps"))("./node_modules/immer/dist/immer.esm.js");

/***/ }),

/***/ "./node_modules/jspdf/dist/jspdf.es.min.js":
/*!***************************************************************************************************!*\
  !*** delegated ./node_modules/jspdf/dist/jspdf.es.min.js from dll-reference reactBoilerplateDeps ***!
  \***************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__(/*! dll-reference reactBoilerplateDeps */ "dll-reference reactBoilerplateDeps"))("./node_modules/jspdf/dist/jspdf.es.min.js");

/***/ }),

/***/ "./node_modules/jwt-decode/build/esm/index.js":
/*!******************************************************************************************************!*\
  !*** delegated ./node_modules/jwt-decode/build/esm/index.js from dll-reference reactBoilerplateDeps ***!
  \******************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__(/*! dll-reference reactBoilerplateDeps */ "dll-reference reactBoilerplateDeps"))("./node_modules/jwt-decode/build/esm/index.js");

/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!********************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/index.js from dll-reference reactBoilerplateDeps ***!
  \********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__(/*! dll-reference reactBoilerplateDeps */ "dll-reference reactBoilerplateDeps"))("./node_modules/prop-types/index.js");

/***/ }),

/***/ "./node_modules/react-autosuggest/dist/index.js":
/*!********************************************************************************************************!*\
  !*** delegated ./node_modules/react-autosuggest/dist/index.js from dll-reference reactBoilerplateDeps ***!
  \********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__(/*! dll-reference reactBoilerplateDeps */ "dll-reference reactBoilerplateDeps"))("./node_modules/react-autosuggest/dist/index.js");

/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react-dom/index.js from dll-reference reactBoilerplateDeps ***!
  \*******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__(/*! dll-reference reactBoilerplateDeps */ "dll-reference reactBoilerplateDeps"))("./node_modules/react-dom/index.js");

/***/ }),

/***/ "./node_modules/react-helmet/lib/Helmet.js":
/*!***************************************************************************************************!*\
  !*** delegated ./node_modules/react-helmet/lib/Helmet.js from dll-reference reactBoilerplateDeps ***!
  \***************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__(/*! dll-reference reactBoilerplateDeps */ "dll-reference reactBoilerplateDeps"))("./node_modules/react-helmet/lib/Helmet.js");

/***/ }),

/***/ "./node_modules/react-intl/index.js":
/*!********************************************************************************************!*\
  !*** delegated ./node_modules/react-intl/index.js from dll-reference reactBoilerplateDeps ***!
  \********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__(/*! dll-reference reactBoilerplateDeps */ "dll-reference reactBoilerplateDeps"))("./node_modules/react-intl/index.js");

/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!******************************************************************************************!*\
  !*** delegated ./node_modules/react-is/index.js from dll-reference reactBoilerplateDeps ***!
  \******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__(/*! dll-reference reactBoilerplateDeps */ "dll-reference reactBoilerplateDeps"))("./node_modules/react-is/index.js");

/***/ }),

/***/ "./node_modules/react-redux/lib/index.js":
/*!*************************************************************************************************!*\
  !*** delegated ./node_modules/react-redux/lib/index.js from dll-reference reactBoilerplateDeps ***!
  \*************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__(/*! dll-reference reactBoilerplateDeps */ "dll-reference reactBoilerplateDeps"))("./node_modules/react-redux/lib/index.js");

/***/ }),

/***/ "./node_modules/react-router-dom/index.js":
/*!**************************************************************************************************!*\
  !*** delegated ./node_modules/react-router-dom/index.js from dll-reference reactBoilerplateDeps ***!
  \**************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__(/*! dll-reference reactBoilerplateDeps */ "dll-reference reactBoilerplateDeps"))("./node_modules/react-router-dom/index.js");

/***/ }),

/***/ "./node_modules/react-webcam/dist/react-webcam.js":
/*!**********************************************************************************************************!*\
  !*** delegated ./node_modules/react-webcam/dist/react-webcam.js from dll-reference reactBoilerplateDeps ***!
  \**********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__(/*! dll-reference reactBoilerplateDeps */ "dll-reference reactBoilerplateDeps"))("./node_modules/react-webcam/dist/react-webcam.js");

/***/ }),

/***/ "./node_modules/react/index.js":
/*!***************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference reactBoilerplateDeps ***!
  \***************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__(/*! dll-reference reactBoilerplateDeps */ "dll-reference reactBoilerplateDeps"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/react18-swipeable-views/lib/index.js":
/*!*************************************************************************************************************!*\
  !*** delegated ./node_modules/react18-swipeable-views/lib/index.js from dll-reference reactBoilerplateDeps ***!
  \*************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__(/*! dll-reference reactBoilerplateDeps */ "dll-reference reactBoilerplateDeps"))("./node_modules/react18-swipeable-views/lib/index.js");

/***/ }),

/***/ "./node_modules/redux-form/es/index.js":
/*!***********************************************************************************************!*\
  !*** delegated ./node_modules/redux-form/es/index.js from dll-reference reactBoilerplateDeps ***!
  \***********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__(/*! dll-reference reactBoilerplateDeps */ "dll-reference reactBoilerplateDeps"))("./node_modules/redux-form/es/index.js");

/***/ }),

/***/ "./node_modules/redux-persist/lib/index.js":
/*!***************************************************************************************************!*\
  !*** delegated ./node_modules/redux-persist/lib/index.js from dll-reference reactBoilerplateDeps ***!
  \***************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__(/*! dll-reference reactBoilerplateDeps */ "dll-reference reactBoilerplateDeps"))("./node_modules/redux-persist/lib/index.js");

/***/ }),

/***/ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.cjs.js":
/*!*************************************************************************************************************************!*\
  !*** delegated ./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.cjs.js from dll-reference reactBoilerplateDeps ***!
  \*************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__(/*! dll-reference reactBoilerplateDeps */ "dll-reference reactBoilerplateDeps"))("./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.cjs.js");

/***/ }),

/***/ "./node_modules/redux/lib/redux.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/redux/lib/redux.js from dll-reference reactBoilerplateDeps ***!
  \*******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__(/*! dll-reference reactBoilerplateDeps */ "dll-reference reactBoilerplateDeps"))("./node_modules/redux/lib/redux.js");

/***/ }),

/***/ "./node_modules/reselect/es/index.js":
/*!*********************************************************************************************!*\
  !*** delegated ./node_modules/reselect/es/index.js from dll-reference reactBoilerplateDeps ***!
  \*********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__(/*! dll-reference reactBoilerplateDeps */ "dll-reference reactBoilerplateDeps"))("./node_modules/reselect/es/index.js");

/***/ }),

/***/ "dll-reference reactBoilerplateDeps":
/*!***************************************!*\
  !*** external "reactBoilerplateDeps" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = reactBoilerplateDeps;

/***/ }),

/***/ "./app/translations/de.json":
/*!**********************************!*\
  !*** ./app/translations/de.json ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = {};

/***/ }),

/***/ "./app/translations/en.json":
/*!**********************************!*\
  !*** ./app/translations/en.json ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = [];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".chunk.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("62657ecce4a584942054")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "iecg_app:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						return setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						blockingPromises = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId) {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdateiecg_app"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkiecg_app"] = self["webpackChunkiecg_app"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_mui_icons-material_AccountCircle_js-node_modules_mui_icons-material_AllI-827b41"], () => (__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")))
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_mui_icons-material_AccountCircle_js-node_modules_mui_icons-material_AllI-827b41"], () => (__webpack_require__("./node_modules/webpack-hot-middleware/client.js?reload=true")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_mui_icons-material_AccountCircle_js-node_modules_mui_icons-material_AllI-827b41"], () => (__webpack_require__("./app/app.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map