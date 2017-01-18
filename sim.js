

function rungeKutta(pos, vel, f){ // x'' = f(x)
	var kv_1 = f(pos);
	var kr_1 = vel;

	var kv_2 = f(mAdd(pos, mScale(kr_1, DT/2)));
	var kr_2 = mAdd(vel, mScale(kv_1, DT/2));

	var kv_3 = f(mAdd(pos, mScale(kr_2, DT/2)));
	var kr_3 = mAdd(vel, mScale(kv_2, DT/2));

	var kv_4 = f(mAdd(pos, mScale(kr_3, DT)));
	var kr_4 = mAdd(vel, mScale(kv_3, DT));

	var velSum = mAdd(kv_1, mAdd(mScale(kv_2, 2), mAdd(mScale(kv_3, 2), kv_4)));
	var newVel = mAdd(vel, mScale(velSum, DT/6));

	var posSum = mAdd(kr_1, mAdd(mScale(kr_2, 2), mAdd(mScale(kr_3, 2), kr_4)));
	var newPos = mAdd(pos, mScale(posSum, DT/6));

	return {pos: newPos, vel: newVel};
}