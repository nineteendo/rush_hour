window.onload = function(){
	let time = document.getElementById('time');
	let start = document.getElementById('start');
	let stop = document.getElementById('stop');
	
	let count = 0;
	let delta = 0.1; // Remove

	let timer_loop = null;
	start.addEventListener(
		'click',
		function () {
			delta *= 10; // Remove
			timer_loop = setInterval(stopwatch, 100);
		}
	);
	
	stop.addEventListener(
		'click', function () {
			delta = 0.1; // Remove
			clearInterval(timer_loop);
		}
	);

	function stopwatch() {
		count += delta; // Remove
		time.textContent = duration(count); // Remove
		//time.textContent = duration(++count); // Uncomment
	}
}

function duration(tenths_of_a_second){
	let ss = tenths_of_a_second / 10;
	if (ss >= 60480000) // 100 weken
		ss = nearest_multiple(ss, 604800) // 1 week
	else if (ss >= 6048000) // 10 weken
		ss = nearest_multiple(ss, 60480) // 0.1 week
	else if (ss >= 604800) // 1 week
		ss = nearest_multiple(ss, 6048) // 0.01 week
	else if (ss >= 86400) // 1 dag
		ss = nearest_multiple(ss, 864) // 0.01 dag
	else if (ss >= 3600) // 1 uur
		ss = Math.round(ss); // 1 seconde
	else
		ss = nearest_multiple(ss, .1); // 0.1 seconden
	
	if (ss >= 604800){ // 1 week
		let ww = ss / 604800;
		if (ww >= 10000)
			return `9999+wks` // 10,000 weken
		else if (ww >= 100)
			return `${pad(ww, 4)} wks` // 1 week
		else if (ww >= 10)
			return `${pad(ww.toFixed(1), 4)} wks` // 0.1 week
		else
			return `${ww.toFixed(2)} wks` // 0.01 week
	} else if (ss >= 86400){ // 1 dag
		let dd = ss / 86400;
		return `${dd.toFixed(2)} dys` // 0.01 dag
	}
	else if (ss >= 3600){ // 1 uur
		let mm = Math.floor(ss / 60);
		ss %= 60;
		let hh = Math.floor(mm / 60);
		mm %= 60;
		return `${pad(hh, 2)}:${pad(mm, 2)}:${pad(ss, 2)}`; // 1 seconde
	}
	else{
		let mm = Math.floor(ss/60);
		ss %= 60;
		return `${pad(mm, 2)}:${pad(ss.toFixed(2), 5)}`; //0.1 seconden
	}
}

function nearest_multiple(num, div){
	return Math.round(num / div) * div;
}

function pad(num, size) {
	return String(num).padStart(size, '0');
}