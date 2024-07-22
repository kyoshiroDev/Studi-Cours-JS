let variable = 12;

// Question 1
switch (typeof variable) {
	case "number":
		console.log(`C'est un nombre`);
		break;
	case "bigint":
		console.log(`C'est un bigint`);
		break;
	case "boolean":
		console.log(`C'est un boolean`);
		break;
	case "string":
		console.log(`C'est une string`);
		break;
	case "symbol":
		console.log(`C'est un symbol`);
		break;
	case "undefined":
		console.log(`C'est un undefined`);
		break;
}
