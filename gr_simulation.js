function gr_sim(ctx, width, height, steps){
	var pos = new GRCoords(10, 0, 0);
	var vel = new GRCoords(0, 10, 1);

	var show_scale = 20;
	
	for(var i = 0; i < steps; i ++){
		console.log(pos);

		draw_point(ctx, width, height, show_scale, pos.p);

		var new_state = rungeKutta(pos, vel, GR_acc);
		pos = new_state.pos;
		vel = new_state.vel;


	}
}