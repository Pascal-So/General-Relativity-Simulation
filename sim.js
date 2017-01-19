function rungeKutta(pos, vel, f){ // x'' = f(x, x')
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
				
	var newPos = pos.add(posSum.scale(DT/6));

	return {pos: newPos, vel: newVel};
}