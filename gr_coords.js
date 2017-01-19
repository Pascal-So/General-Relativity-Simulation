function GRCoords(r, theta, time){
	this.p = new Point(r, theta);
	this.t = time;

	this.add = function(other){
		var new_p = this.p.add(other.p);
		var new_t = this.t + other.t;
		return new GRCoords(new_p.r, new_p.t, new_t);
	}

	this.scale = function(factor){
		var new_p = this.p.scale(factor);
		var new_t = this.t * factor;
		return new GRCoords(new_p.r, new_p.t, new_t);
	}
}