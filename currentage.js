var floatAge, floatDays, intWeeks, floatMonths, intFortnights
floatAge = parseFloat(prompt("Enter Age"));
floatDays = parseFloat(floatAge*365.25);
floatMonths = parseFloat(floatAge*12);
intWeeks = parseInt(floatDays/7);
intFortnights = parseInt(floatDays/14);
alert("Your age is: " + floatAge + "\n" + "Your age in Days: " + floatDays + "\n" + "Your age in Weeks: " + intWeeks + "\n" + "Your age in Fortnights: " + intFortnights + "\n" + "Your age in Months: " + floatMonths)
