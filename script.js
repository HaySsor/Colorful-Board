const boxWithSquers = document.querySelector(".box");
const speedBtns = document.querySelectorAll('[data-setting="speed"]');
const colorBtns = document.querySelectorAll('[data-setting="color"]');
const slider = document.querySelector("#slider");
const sliderInfo = document.querySelector(".slider-info");

const squers = 570;
let rage = 360;

function setColor(square) {
	let h;
	rage === 360
		? (h = Math.floor(Math.random() * 360))
		: (h = Math.floor(Math.random() * 60) + rage);

	const s = slider.value + "%";
	const l = "50%";

	square.style.backgroundColor = `hsl(${h},${s},${l})`;
}

function deleteColor(square) {
	square.style.backgroundColor = `transparent`;
}

function handleSpeed() {
	const newSpeed = this.dataset.speed + "s";
	createSquares(newSpeed);
}
function handleColorRage() {
	rage = parseInt(this.dataset.colorRage);
}
function showSliderInfo() {
	sliderInfo.textContent = slider.value;
}

function createSquares(speed) {
	boxWithSquers.innerHTML = "";
	for (let i = 0; i < squers; i++) {
		const square = document.createElement("div");
		square.classList.add("square");

		square.style.transitionDuration = speed;

		square.addEventListener("mouseover", () => {
			setColor(square);
		});
		square.addEventListener("mouseleave", () => {
			deleteColor(square);
		});

		boxWithSquers.appendChild(square);
	}
}

createSquares();

speedBtns.forEach(btn => {
	btn.addEventListener("click", handleSpeed);
});
colorBtns.forEach(btn => {
	btn.addEventListener("click", handleColorRage);
});
slider.addEventListener("mousemove", showSliderInfo);
