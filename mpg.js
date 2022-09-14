var intMiles, floatGallons, floatMpg
intMiles = parseInt(prompt("Enter miles driven"));
floatGallons = parseFloat(prompt("Enter gallons of gas used"));
floatMpg = parseFloat(intMiles/floatGallons);
alert("Miles per gallon = " + floatMpg);