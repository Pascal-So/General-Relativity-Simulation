var DT = 0.01;

function rungeKutta(pos, vel, f){ 
	// it is assumed that: acceleration = f(pos, vel)

	// the variables pos and vel must be of some type that provides a .add and .scale
	// function. Variables are assumed to be immutable.

	var kv_1 = f(pos, vel);
	var kr_1 = vel;

	var kr_2 = vel.add(kv_1.scale(DT/2));
	var kv_2 = f(pos.add(kr_1.scale(DT/2)), kr_2);

	var kr_3 = vel.add(kv_2.scale(DT/2));
	var kv_3 = f(pos.add(kr_2.scale(DT/2)), kr_3);

	var kr_4 = vel.add(kv_3.scale(DT));	
	var kv_4 = f(pos.add(kr_3.scale(DT)), kr_4);

	var velSum = kv_1
				.add(kv_2.scale(2))
				.add(kv_3.scale(2))
				.add(kv_4);

	var newVel = vel.add(velSum.scale(DT/6));

	var posSum = kr_1
				.add(kr_2.scale(2))
				.add(kr_3.scale(2))
				.add(kr_4);

	// console.log(kv_1, "kv_1");
	// console.log(kv_2, "kv_2");
	// console.log(kv_3, "kv_3");
	// console.log(kv_4, "kv_4");
	// console.log(posSum);

	var newPos = pos.add(posSum.scale(DT/6));

	return {pos: newPos, vel: newVel};
}


var GM = 1; // solar mass times gravitational constant

function Newton_acc(pos, vel){
	var a0 = - pos.r * GM;
	var a1 = pos.t;

	return new Point(a0, a1);
}



function init(){
	var c = document.getElementById("canvas");
	var ctx = c.getContext("2d");

	ctx.width = 500;
	ctx.height = 500;

	gr_sim(ctx, 500, 500, 20000);
}