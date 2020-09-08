function repeatStringNumTimes(str, num) {
	let val = Array(num).fill(str).join("");
	if (num > 0) {
		return val;
	}
	return "";
}
