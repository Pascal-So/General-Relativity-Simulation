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
		return new Point(new_r, new_theta);
	}
	this.sub = function(p){
		return this.add(p.scale(-1));
	}
	this.add = function(p){
		var sq_r, r;
		var t;
		var alpha = Math.PI - (p.t - this.t);

		var sq_tr, sq_pr;

		sq_tr = this.r * this.r;
		sq_pr = p.r * p.r;

		sq_r = sq_tr + sq_pr - 2*Math.cos(alpha)*this.r*p.r;

		r = Math.sqrt(sq_r);
		t = this.t + Math.acos((sq_r + sq_tr - sq_pr)/(2*r*this.r));

		if (t!==t){ // t is NaN, silly JS...
			t = 0;
		}

		return new Point(r, t);
	}
	this.to_cartesian = function(){
		var x = this.r * Math.cos(this.t);
		var y = this.r * Math.sin(this.t);
		return {x: x, y: y};
	}
}

function draw_point(ctx, width, height, scale, pos){
	var xy = pos.to_cartesian();
	var x = xy.x;
	var y = xy.y;

	var fac = Math.min(width/height)/scale;

	x = x * fac + width/2;
	y = y * fac + height/2;

	ctx.fillRect(x,height-y,1,1);
}