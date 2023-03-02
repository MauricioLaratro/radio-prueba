let b = document.body;
let radio = document.querySelector("#radio");
let shadow = document.querySelector("#shadow");
let buttonCta = document.querySelector("#button-cta");
let cover = document.querySelector("#cover");
let circles = document.querySelector("#circles");

let a = document.querySelector("#audio");
let son = document.querySelector("#son");
let soff = document.querySelector("#soff");

/*******************/
let radioPlaying = () => {
	radio.classList.add("is-radio-active");
	shadow.classList.add("is-shadow-active");
	buttonCta.classList.add("is-button-active");
	cover.classList.add("is-cover-active");
	circles.classList.add('is-circle-active')

	a.loop = true;

	if (a.paused) a.play();
	// else {
	// 	a.pause();
	// 	a.currentTime = 0;
	// };

	son.classList.remove("s");
	soff.classList.add("s");
};

const radioStoping = () => {
	radio.classList.remove("is-radio-active");
	shadow.classList.remove("is-shadow-active");
	buttonCta.classList.remove("is-button-active");
	cover.classList.remove("is-cover-active");
	circles.classList.remove('is-circle-active')

	// a.loop = true;

	if (a.play) a.pause();
	// else {
		// a.play();
		// a.currentTime = 6399;
	// }

	son.classList.add("s");
	soff.classList.remove("s");
};

function timer() {
	if (a.play){
		setTimeout(radioStoping, 6422)
	}
}


/*******************/
buttonCta.addEventListener("click", radioPlaying);
buttonCta.addEventListener("click", timer);
soff.addEventListener("click", radioPlaying);
soff.addEventListener("click", timer);
son.addEventListener("click", radioPlaying);
son.addEventListener("click", timer);


