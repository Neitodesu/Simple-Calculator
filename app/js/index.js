const textDisplay = document.querySelector("#text-field");
const clear = document.querySelector("#clear");
const num_01 = document.querySelector("#num-01");
const num_02 = document.querySelector("#num-02");
const num_03 = document.querySelector("#num-03");
const sum = document.querySelector("#sum");
const num_04 = document.querySelector("#num-04");
const num_05 = document.querySelector("#num-05");
const num_06 = document.querySelector("#num-06");
const subtract = document.querySelector("#subtract");
const num_07 = document.querySelector("#num-07");
const num_08 = document.querySelector("#num-08");
const num_09 = document.querySelector("#num-09");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");
const num_0 = document.querySelector("#num-0");
const equals = document.querySelector("#equals");

let isAdding = false;
let isMultiply = false;
let isDivide = false;
let isSubtract = false;

let userInput01;
let userInput02;
let answer;

num_01.onclick = function displayNum01() {
	if (textDisplay.innerHTML == "") {
		textDisplay.innerHTML = 1;
	} else {
		textDisplay.innerHTML = textDisplay.innerHTML + 1;
	}
};

num_02.onclick = function displayNum02() {
	if (textDisplay.innerHTML == "") {
		textDisplay.innerHTML = 2;
	} else {
		textDisplay.innerHTML = textDisplay.innerHTML + 2;
	}
};

num_03.onclick = function displayNum03() {
	if (textDisplay.innerHTML == "") {
		textDisplay.innerHTML = 3;
	} else {
		textDisplay.innerHTML = textDisplay.innerHTML + 3;
	}
};

num_04.onclick = function displayNum04() {
	if (textDisplay.innerHTML == "") {
		textDisplay.innerHTML = 4;
	} else {
		textDisplay.innerHTML = textDisplay.innerHTML + 4;
	}
};

num_05.onclick = function displayNum05() {
	if (textDisplay.innerHTML == "") {
		textDisplay.innerHTML = 5;
	} else {
		textDisplay.innerHTML = textDisplay.innerHTML + 5;
	}
};

num_06.onclick = function displayNum06() {
	if (textDisplay.innerHTML == "") {
		textDisplay.innerHTML = 6;
	} else {
		textDisplay.innerHTML = textDisplay.innerHTML + 6;
	}
};

num_07.onclick = function displayNum07() {
	if (textDisplay.innerHTML == "") {
		textDisplay.innerHTML = 7;
	} else {
		textDisplay.innerHTML = textDisplay.innerHTML + 7;
	}
};

num_08.onclick = function displayNum08() {
	if (textDisplay.innerHTML == "") {
		textDisplay.innerHTML = 8;
	} else {
		textDisplay.innerHTML = textDisplay.innerHTML + 8;
	}
};

num_09.onclick = function displayNum09() {
	if (textDisplay.innerHTML == "") {
		textDisplay.innerHTML = 9;
	} else {
		textDisplay.innerHTML = textDisplay.innerHTML + 9;
	}
};

num_0.onclick = function displayNum0() {
	if (textDisplay.innerHTML == "") {
		textDisplay.innerHTML = 0;
	} else {
		textDisplay.innerHTML = textDisplay.innerHTML + 0;
	}
};

sum.onclick = function () {
	if (textDisplay.innerHTML == "") {
		return;
	} else {
		userInput01 = textDisplay.innerHTML;
		isAdding = true;
		textDisplay.innerHTML = "";
	}
};

subtract.onclick = function () {
	if (textDisplay.innerHTML == "") {
		return;
	} else {
		userInput01 = textDisplay.innerHTML;
		isSubtract = true;
		textDisplay.innerHTML = "";
	}
};

multiply.onclick = function () {
	if (textDisplay.innerHTML == "") {
		return;
	} else {
		userInput01 = textDisplay.innerHTML;
		isMultiply = true;
		textDisplay.innerHTML = "";
	}
};

divide.onclick = function () {
	if (textDisplay.innerHTML == "") {
		return;
	} else {
		userInput01 = textDisplay.innerHTML;
		isDivide = true;
		textDisplay.innerHTML = "";
	}
};

equals.onclick = function () {
	userInput02 = textDisplay.innerHTML;

	if (isAdding) {
		answer = Number(userInput01) + Number(userInput02);
		textDisplay.innerHTML = answer;
		isAdding = false;
	} else if (isSubtract) {
		answer = Number(userInput01) - Number(userInput02);
		textDisplay.innerHTML = answer;
		isSubtract = false;
	} else if (isMultiply) {
		answer = Number(userInput01) * Number(userInput02);
		textDisplay.innerHTML = answer;
		isMultiply = false;
	} else if (isDivide) {
		answer = Number(userInput01) / Number(userInput02);
		textDisplay.innerHTML = answer;
		isDivide = false;
	}
};

clear.onclick = function () {
	if (textDisplay.innerHTML != "") {
		textDisplay.innerHTML = "";
	}
};
