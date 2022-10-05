Array.prototype.myMap = function (callBack) {
	const result = [];
	this.forEach((el, index, arr) => result.push(callBack(el, index, arr)));
	return result;
};
