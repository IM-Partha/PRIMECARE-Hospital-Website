if( document.getElementById('slider') ){
	var slider = new Splide( '#slider', {
		type: 'loop',
		perPage: 3,
		gap: 20,
		speed: 1200,
		rewind: true,
		pagination: true,
		focus: 'center',
		breakpoints: {
			960: {
				perPage: 1,
				gap: 5,
			},
		},
	} );
	slider.mount();
}

if( document.getElementById('slider2') ){
	var slider = new Splide( '#slider2', {
		type: 'loop',
		perPage: 4,
		gap: 20,
		speed: 1200,
		rewind: true,
		pagination: true,
		focus: 'center',
		breakpoints: {
			960: {
				perPage: 1,
				gap: 5,
			},
		},
	} );
	slider.mount();
}