Fx.Base.implement({
	
	custom: function(from, to){
		return this.start(from, to);
	},
	
	clearTimer: function(){
		return this.stop();
	}
	
});