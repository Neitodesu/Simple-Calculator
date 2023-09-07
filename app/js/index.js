const mainDisplay = document.querySelector("#text-field");
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

num_01.onclick = function () {
	if (mainDisplay.textContent == "") {
		mainDisplay.textContent = 1;
	} else {
		mainDisplay.textContent = mainDisplay.textContent + 1;
	}
};

num_02.onclick = function () {
	if (mainDisplay.textContent == "") {
		mainDisplay.textContent = 2;
	} else {
		mainDisplay.textContent = mainDisplay.textContent + 2;
	}
};

num_03.onclick = function () {
	if (mainDisplay.textContent == "") {
		mainDisplay.textContent = 3;
	} else {
		mainDisplay.textContent = mainDisplay.textContent + 3;
	}
};

num_04.onclick = function () {
	if (mainDisplay.textContent == "") {
		mainDisplay.textContent = 4;
	} else {
		mainDisplay.textContent = mainDisplay.textContent + 4;
	}
};

num_05.onclick = function () {
	if (mainDisplay.textContent == "") {
		mainDisplay.textContent = 5;
	} else {
		mainDisplay.textContent = mainDisplay.textContent + 5;
	}
};

num_06.onclick = function () {
	if (mainDisplay.textContent == "") {
		mainDisplay.textContent = 6;
	} else {
		mainDisplay.textContent = mainDisplay.textContent + 6;
	}
};

num_07.onclick = function () {
	if (mainDisplay.textContent == "") {
		mainDisplay.textContent = 7;
	} else {
		mainDisplay.textContent = mainDisplay.textContent + 7;
	}
};

num_08.onclick = function () {
	if (mainDisplay.textContent == "") {
		mainDisplay.textContent = 8;
	} else {
		mainDisplay.textContent = mainDisplay.textContent + 8;
	}
};

num_09.onclick = function () {
	if (mainDisplay.textContent == "") {
		mainDisplay.textContent = 9;
	} else {
		mainDisplay.textContent = mainDisplay.textContent + 9;
	}
};

num_0.onclick = function () {
	if (mainDisplay.textContent == "") {
		mainDisplay.textContent = 0;
	} else {
		mainDisplay.textContent = mainDisplay.textContent + 0;
	}
};

sum.onclick = function () {
	if (mainDisplay.textContent == "") {
		return;
	} else {
		userInput01 = mainDisplay.textContent;
		isAdding = true;
		mainDisplay.textContent = "";
	}
};

subtract.onclick = function () {
	if (mainDisplay.textContent == "") {
		return;
	} else {
		userInput01 = mainDisplay.textContent;
		isSubtract = true;
		mainDisplay.textContent = "";
	}
};

multiply.onclick = function () {
	if (mainDisplay.textContent == "") {
		return;
	} else {
		userInput01 = mainDisplay.textContent;
		isMultiply = true;
		mainDisplay.textContent = "";
	}
};

divide.onclick = function () {
	if (mainDisplay.textContent == "") {
		return;
	} else {
		userInput01 = mainDisplay.textContent;
		isDivide = true;
		mainDisplay.textContent = "";
	}
};

clear.onclick = function () {
	if (mainDisplay.textContent != "") {
		mainDisplay.textContent = "";
	}
};

equals.onclick = function () {
	userInput02 = mainDisplay.textContent;

	if (isAdding) {
		answer = Number(userInput01) + Number(userInput02);
		mainDisplay.textContent = answer;
		isAdding = false;
	} else if (isSubtract) {
		answer = Number(userInput01) - Number(userInput02);
		mainDisplay.textContent = answer;
		isSubtract = false;
	} else if (isMultiply) {
		answer = Number(userInput01) * Number(userInput02);
		mainDisplay.textContent = answer;
		isMultiply = false;
	} else if (isDivide) {
		answer = Number(userInput01) / Number(userInput02);
		mainDisplay.textContent = answer;
		isDivide = false;
	}
};
