var update_time = new Date();

function update() {
	var new_update_time = new Date();
	var delta_ms = new_update_time.getTime() - update_time.getTime();
	update_time.setTime(new_update_time.getTime());

	basedata.update(delta_ms);

	React.render(
		<GoomyClickerApp
			data={basedata}
			generators={generators}
			onUpdate={onUpdate}
		/>
	, document.getElementById("gamebox"));

	setTimeout(update, 20);
}

update();
