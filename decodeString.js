//function to decode unicode strings. keeping for posterity sake

const decodeString = (str) => {
	const textArea = document.createElement("textarea");
	textArea.innerHTML = str;
	return textArea.value;
};

//the str parameter can be data gotten from an API during development!
