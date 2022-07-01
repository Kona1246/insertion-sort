const container =
document.querySelector(".data-container");
function generatebars(num = 20) {
for (let i = 0; i < num; i += 1) {
	const value = Math.floor(Math.random() * 100) + 1;
	const bar = document.createElement("div");
	bar.classList.add("bar");
	bar.style.height = `${value * 3}px`;
	bar.style.transform = `translateX(${i * 30}px)`;
	const barLabel = document.createElement("label");
	barLabel.classList.add("bar__id");
	barLabel.innerHTML = value;
	bar.appendChild(barLabel);
	container.appendChild(bar);
}
}
async function InsertionSort(delay = 600) {
let bars = document.querySelectorAll(".bar");
bars[0].style.backgroundColor = " rgb(49, 226, 13)";
for (var i = 1; i < bars.length; i += 1) {
	var j = i - 1;
	var key =
	parseInt(bars[i].childNodes[0].innerHTML);
	var height = bars[i].style.height;
	var barval=document.getElementById("ele")
	barval.innerHTML=
	`<h3>Element Selected is :${key}</h3>`;
	bars[i].style.backgroundColor = "darkblue";
	await new Promise((resolve) =>
	setTimeout(() => {
	resolve();
	}, 600)
);

	while (j >= 0 && parseInt(bars[j].childNodes[0].innerHTML) > key) {
	bars[j].style.backgroundColor = "darkblue";
	bars[j + 1].style.height = bars[j].style.height;
	bars[j + 1].childNodes[0].innerText =
	bars[j].childNodes[0].innerText;
	j = j - 1;
	await new Promise((resolve) =>
		setTimeout(() => {
		resolve();
		}, 600)
	);
	for(var k=i;k>=0;k--){
		bars[k].style.backgroundColor = " rgb(49, 226, 13)";
	}
	}
	bars[j + 1].style.height = height;
	bars[j + 1].childNodes[0].innerHTML = key;
	await new Promise((resolve) =>
	setTimeout(() => {
		resolve();
	}, 600)
	);
	bars[i].style.backgroundColor = " rgb(49, 226, 13)";
}

barval.innerHTML="<h3>Sorted!!!</h3>";
document.getElementById("Button1")
.disabled = false;
document.getElementById("Button1")
.style.backgroundColor = "#6f459e";
document.getElementById("Button2")
.disabled = false;
document.getElementById("Button2")
.style.backgroundColor = "#6f459e";
}
generatebars();
function generate()
{
window.location.reload();
}
function disable()
{
document.getElementById("Button1")
.disabled = true;
document.getElementById("Button1")
.style.backgroundColor = "#d8b6ff";
document.getElementById("Button2")
.disabled = true;
document.getElementById("Button2")
.style.backgroundColor = "#d8b6ff";
}
