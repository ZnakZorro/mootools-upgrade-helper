if (Browser.__defineGetter__) {
	Browser.__defineGetter__('hasGetter',function(){
		return true;
	});
}

if(Browser.hasGetter){ // webkit, gecko, opera support
	
	window.__defineGetter__('ie',function(){
		MooTools.upgradeLog('1.1 > 1.2: window.ie is deprecated. Use Browser.Engine.trident');
		return (Browser.Engine.name == 'trident') ? true : false;
	});
	window.__defineGetter__('ie6',function(){
		MooTools.upgradeLog('1.1 > 1.2: window.ie6 is deprecated. Use Browser.Engine.trident and Browser.Engine.version');
		return (Browser.Engine.name == 'trident' && Browser.Engine.version == 4) ? true : false;
	});
	window.__defineGetter__('ie7',function(){
		MooTools.upgradeLog('1.1 > 1.2: window.ie7 is deprecated. Use Browser.Engine.trident and Browser.Engine.version');
		return (Browser.Engine.name == 'trident' && Browser.Engine.version == 5) ? true : false;
	});
	window.__defineGetter__('gecko',function(){
		MooTools.upgradeLog('1.1 > 1.2: window.gecko is deprecated. Use Browser.Engine.gecko');
		return (Browser.Engine.name == 'gecko') ? true : false;
	});
	window.__defineGetter__('webkit',function(){
		MooTools.upgradeLog('1.1 > 1.2: window.webkit is deprecated. Use Browser.Engine.webkit');
		return (Browser.Engine.name == 'webkit') ? true : false;
	});
	window.__defineGetter__('webkit419',function(){
		MooTools.upgradeLog('1.1 > 1.2: window.webkit is deprecated. Use Browser.Engine.webkit and Browser.Engine.version');
		return (Browser.Engine.name == 'webkit' && Browser.Engine.version == 419) ? true : false;
	});
	window.__defineGetter__('webkit420',function(){
		MooTools.upgradeLog('1.1 > 1.2: window.webkit is deprecated. Use Browser.Engine.webkit and Browser.Engine.version');
		return (Browser.Engine.name == 'webkit' && Browser.Engine.version == 420) ? true : false;
	});
	window.__defineGetter__('opera',function(){
		MooTools.upgradeLog('1.1 > 1.2: window.opera is deprecated. Use Browser.Engine.presto');
		return (Browser.Engine.name == 'presto') ? true : false;
	});
} else {
	window[Browser.Engine.name] = window[Browser.Engine.name + Browser.Engine.version] = true;
	window.ie = window.trident;
	window.ie6 = window.trident4;
	window.ie7 = window.trident5;	
}
