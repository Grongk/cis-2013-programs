var floatMiles = prompt("Enter miles driven");
var floatGallons = prompt("Enter gallons of gas used");
var floatMpg = (floatMiles/floatGallons).toFixed(2);
miles = parseFloat(floatMiles);
gallons = parseFloat(floatGallons);
alert("Miles per gallon = " + floatMpg);