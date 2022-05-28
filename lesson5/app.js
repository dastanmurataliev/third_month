const som = document.querySelector("#som");
const euro = document.querySelector("#euro");
const usd = document.querySelector("#usd");

const convert = (elem, target, isTrue, isTrue2)=> {
	elem.addEventListener("input", ()=> {
		const reqest = new XMLHttpRequest();
	reqest.open("GET", "data.json");
	reqest.setRequestHeader("Content-type", "application/json");
	reqest.send();
	reqest.addEventListener("load", ()=> {
		const response = JSON.parse(reqest.response);
		if(isTrue){
			target.value = (elem.value / response.euro).toFixed(2);
		}else {
			target.value = (elem.value * response.euro).toFixed(2);
		};
		elem.value === "" ? (target.value = "") : null;
	});
	elem.addEventListener("input", ()=> {
		const gun = new XMLHttpRequest();
		gun.open("GET", "date.json");
		gun.setRequestHeader("Content-type", "application/json");
		gun.send();
		gun.addEventListener("load", ()=> {
			const form = JSON.parse(gun.form);
			if(isTrue2){
				target.value = (elem.value / form.usd).toFixed(2);
			}else {
				target.value = (elem.value * form.usd).toFixed(2);
			}
			elem.value === "" ? (target.value = "") : null;
		});
	});
	});
};

convert(som, euro, 12);
convert(euro, som);
convert(som, usd, 15);
convert(usd, som)
convert(usd, euro, 12);
consert(euro, usd)
