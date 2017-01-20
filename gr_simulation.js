function gr_sim(ctx, width, height, steps, init_t){
	var pos = new GRCoords(new Point(10, 0), 0);
	var vel = new GRCoords(new Point(0, 0), init_t);

	var show_scale = 20;
	
	for(var i = 0; i < steps; i ++){

		draw_point(ctx, width, height, show_scale, pos.p);
		//console.log(pos.p.r, pos.p.t);

		var new_state = rungeKutta(pos, vel, GR_acc);
		pos = new_state.pos;
		vel = new_state.vel;



	}
}