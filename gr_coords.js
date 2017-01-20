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

var R_s = 1; // radius of Schwarzschild black hole

function GR_acc(pos, vel){
	var r = pos.p.r;
	
	var v0 = vel.p.r;
	var v1 = vel.p.t;
	var v2 = vel.t;

	var a0 = - (R_s / (2 * r * (r - R_s)) * v0 * v1) * 2;
	var a1 = - (R_s * (r - R_s) / (2 * r * r * r) * v0 * v0) 
			 - (R_s / (2 * r * (R_s - r)) * v1 * v1) 
			 - ((R_s - r) * v2 * v2);
	var a2 = - ((1 / r) * v1 * v2) * 2

	console.log(a0, a1, a2);

	return new GRCoords(new Point(a0, a1), a2);
}