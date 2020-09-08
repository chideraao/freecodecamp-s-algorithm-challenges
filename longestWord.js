/*Return the length of the longest word in the provided sentence.
Your response should be a number.*/

function findLongestWordLength(str) {
	let words = str.split(" "); //this makes the string an an array
	let counter = 0;
	for (let i = 0; i < words.length; i++) {
		if (words[i].length > counter) {
			counter = words[i].length; //everytime the for loop encounters an element whose length is higher than the previously stored value, it saves it
		}
	}
	return counter;
}
