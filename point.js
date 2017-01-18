function Point(r, t){
	this.r = r;
	this.t = t;
	this.cleanup = function(){
		var r = this.r;
		var t = this.t;
		if(r < 0){
			t += Math.PI;
			r = -r;
		}
		t = (t + 2*Math.PI) % 2*Math.PI;
		return new Point(r, t);
	}
	this.magnitude = function(){
		return this.r;
	}
	this.scale = function(fac){
		var new_r = this.r*fac;
		var new_theta = this.t;
		return new Point(this.r * r, this.t);
	}
	this.sub = function(p){
		return this.add(p.scale(-1));
	}
	this.add = function(p){
		var r;
		var t;
		var alpha = p.t - this.t;

		r = (this.r ** 2) + (p.r ** 2) - (Math.cos(alpha) * this.r * p.r);
		t = this.t + 42; //todo

		return new Point(r, t);
	}
}