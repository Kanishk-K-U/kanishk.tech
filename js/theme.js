var breakPoint1, breakPoint2, breakPoint3, breakPoint4;
const letterSpacingValue = -40;
const lineHeightValue = 1.8;
let currentTheme = 'stock'

const whiteImg = '/resources/logo/logo-white.svg'
const blckImg = '/resources/logo/logo-blck.svg'

const Themes = {
	stock: {
		appBackground: '#000',
		foregroundHigh: '#FFFFFF',
		foregroundMed: '#A1A1A6',
		foregroundLow: '#4C4C4E',
		backgroundHigh: '#4C4C4E',
		backgroundMed: '#1D1D1F',
		backgroundLow: ' #000000',
		toneForeground: '#6E6E73',
		toneBackground: '#7A849D',
	},
	gotham: {
		appBackground: '#0A0F14',
		foregroundHigh: '#98D1CE',
		foregroundMed: '#EDB54B',
		foregroundLow: '#C33027',
		foregroundInverted: '#000D18',
		backgroundHigh: '#093748',
		backgroundMed: '#081F2D',
		backgroundLow: ' #10151B',
		backgroundInverted: '#8FAF9F',
	},
	warmSnow: {
		appBackground: '#FFFDFA',
		foregroundHigh: '#2A2826',
		foregroundMed: '#54504C',
		foregroundLow: '#BDB8B8',
		foregroundInverted: '#000D18',
		backgroundHigh: '#093748',
		backgroundMed: '#081F2D',
		backgroundLow: '#fff',
		backgroundInverted: '#8FAF9F',
	},
};

window.applyColourTheme = function (themeName) {
	document.documentElement.style.setProperty('--a-b', Themes[themeName].appBackground);
	document.documentElement.style.setProperty('--f-h', Themes[themeName].foregroundHigh);
	document.documentElement.style.setProperty('--f-m', Themes[themeName].foregroundMed);
	document.documentElement.style.setProperty('--f-l', Themes[themeName].foregroundLow);
	document.documentElement.style.setProperty('--b-h', Themes[themeName].backgroundHigh);
	document.documentElement.style.setProperty('--b-m', Themes[themeName].backgroundMed);
	document.documentElement.style.setProperty('--b-l', Themes[themeName].backgroundLow);
	document.documentElement.style.setProperty('--t-f', Themes[themeName].toneForeground);
	document.documentElement.style.setProperty('--t-b', Themes[themeName].toneBackground);
};

function declareBreakpoints(xl, l, m, s) {
	breakPoint1 = xl;
	breakPoint2 = l;
	breakPoint3 = m;
	breakPoint4 = s;
}

function declareFontInBreakpoints(fontType, fontSize1, fontSize2, fontSize3, fontSize4, fontSize5) {
	var lineHeight;
	var letterSpacing;
	function manipluateAttributes() {
		document.documentElement.style.setProperty(`--l-s-${fontType}`, letterSpacing);
		document.documentElement.style.setProperty(`--l-h-${fontType}`, lineHeight);
	}
	function declatreAttributes(fontSize) {
		lineHeight = `${Math.round(parseInt(fontSize, 10) * lineHeightValue)}px`;
		letterSpacing = `${(parseInt(fontSize, 10) / letterSpacingValue).toFixed(1)}px`;
	}
	if (screen.width >= breakPoint1) {
		document.documentElement.style.setProperty(`--f-t-${fontType}`, fontSize1);
		declatreAttributes(fontSize1);
		manipluateAttributes();
	} else if (screen.width < breakPoint1 && screen.width > breakPoint2) {
		document.documentElement.style.setProperty(`--f-t-${fontType}`, fontSize2);
		declatreAttributes(fontSize2);
		manipluateAttributes();
	} else if (screen.width < breakPoint2 && screen.width > breakPoint3) {
		document.documentElement.style.setProperty(`--f-t-${fontType}`, fontSize3);
		declatreAttributes(fontSize3);
		manipluateAttributes();
	} else if (screen.width < breakPoint3 && screen.width > breakPoint4) {
		document.documentElement.style.setProperty(`--f-t-${fontType}`, fontSize4);
		declatreAttributes(fontSize4);
		manipluateAttributes();
	} else if (screen.width < breakPoint4) {
		document.documentElement.style.setProperty(`--f-t-${fontType}`, fontSize5);
		declatreAttributes(fontSize5);
		manipluateAttributes();
	}
}

// function callFooter() {
// 	function addNavItems(target, link) {
// 		var anchorItems = document.createElement('a');
// 		anchorItems.classList.add('nav-text');
// 		anchorItems.innerHTML = target;
// 		anchorItems.href = link;
// 		anchorItems.target = 'blank';
// 		document.querySelector('.footer-nav').appendChild(anchorItems);
// 	}

// 	addNavItems('information as on 11-Jan-2022', '');
// 	addNavItems('GitHub', 'https://github.com/rtrikha');
// 	addNavItems('Medium', 'https://medium.com/@rtrikha');

// 	document.querySelector('.footer-nav').id = 'footer-nav';

// 	function idSelector(idName) {
// 		return document.getElementById(idName);
// 	}

// 	idSelector('footer-nav').style.background = 'var(--a-b)';
// 	idSelector('footer-nav').style.display = 'flex';
// 	idSelector('footer-nav').style.position = 'fixed';
// 	idSelector('footer-nav').style.bottom = '0vh';
// 	idSelector('footer-nav').style.marginRight = '0';
// 	idSelector('footer-nav').style.justifyContent = 'flex-end';
// }

function callHeader() {
	document.querySelector('.header-nav').id = 'header-nav';

	var logo = document.createElement('img');
	logo.classList.add('logo');
	logo.id = 'logo';
	logo.src = whiteImg;

	var logoWrapper = document.createElement('div');
	logoWrapper.classList.add('logo-wrapper');
	logoWrapper.id = 'logo-wrapper';

	document.getElementById('header-nav').appendChild(logoWrapper);
	document.getElementById('logo-wrapper').appendChild(logo);

	function addNavItems(target, link) {
		var anchorItems = document.createElement('a');
		anchorItems.classList.add('nav-text');
		anchorItems.innerHTML = target;
		anchorItems.href = link;
		anchorItems.target = 'blank';
		document.querySelector('.header-nav').appendChild(anchorItems);
	}

	function idSelector(idName) {
		return document.getElementById(idName);
	}

	idSelector('header-nav').style.background = 'var(--a-b)';
	idSelector('header-nav').style.display = 'flex';
	idSelector('header-nav').style.position = 'relative';
	idSelector('header-nav').style.alignItems = 'center';
	idSelector('header-nav').style.paddingTop = '8vh';
	idSelector('header-nav').style.marginRight = 0;
	idSelector('header-nav').style.textDecoration = 'none';
	idSelector('header-nav').style.justifyContent = 'space-between';
	idSelector('logo-wrapper').style.padding = '20px';
	idSelector('logo-wrapper').style.cursor = 'pointer';
	idSelector('logo-wrapper').onclick = function () {
		changeTheme();
	};
	idSelector('logo-wrapper').style.paddingLeft = '0px';

	function changeTheme() {
		if (currentTheme === 'stock') {
			currentTheme = 'warmSnow';
			applyColourTheme('warmSnow');
			idSelector('logo').src = blckImg;
		} else if (currentTheme === 'warmSnow') {
			currentTheme = 'stock';
			applyColourTheme('stock');
			idSelector('logo').src = whiteImg;
		}
	}
}

// define the theme here

applyColourTheme(currentTheme);

declareBreakpoints(1440, 900, 720, 560);

declareFontInBreakpoints('cta', '16px', '16px', '14px', '14px', '14px');
declareFontInBreakpoints('h', '24px', '24px', '22px', '20px', '20px');
declareFontInBreakpoints('sh', '14px', '14px', '14px', '13px', '13px');
declareFontInBreakpoints('nt', '12px', '12px', '12px', '11px', '11px');
declareFontInBreakpoints('body-1', '14px', '14px', '14px', '13px', '13px');
declareFontInBreakpoints('body-2', '13px', '13px', '13px', '12px', '12px');

callHeader();
//callFooter();

const globalColours = {
	grey: {
		g100: 'fafafa',
	},
};

const applicationColours = {
	text: {
		textDiabled: globalColours.grey.g100,
	},
	accent: {
		applicationSecondary: globalColours.grey.g100,
	},
};
