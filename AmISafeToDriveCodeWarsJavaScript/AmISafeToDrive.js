function drive(drinks, finished, drive_time) {

    // On average it takes a person 1 hour for their body to remove 1 unit of alcohol.

    // Data passed will be in the format ([[strength,volume]], finished, drive_time). Where finished is the time you stopped drinking and drive_time is the time you would like to drive.
    // Return total units to 2 decimal places rounded. For example 1.10 => 1.1 and 1.236 => 1.24
    const units = ((drinks[0][0] * drinks[0][1]) / 1000).toFixed(2); // Going through the drinks array to calculate the strength. Units of alcohol are calculated by strength (ABV) x volume (ml) / 1000 = units.

    // console.log(units.toPrecision(3));

    // converting the time string into total minutes as an integer.
    const timeArray = [];
    function timeStringToMinutesInteger(time) {
        var firstVaribale = time.split(':');
        const totalMinutes = parseInt(firstVaribale[0]) * 60 + parseInt(firstVaribale[1]);
        timeArray.push(totalMinutes);
    }
    timeStringToMinutesInteger(finished);
    timeStringToMinutesInteger(drive_time);
    console.log("the time array: ", timeArray); // <------- Not needed.

    // If the finished >= drive_time then you can assume that it is the next day.
    if (timeArray[0] > timeArray[1]) {
        console.log("it's the next day"); // <------- Not needed.
        timeArray[0] = 24 * 60 - timeArray[0];
        console.log(timeArray); // <------- Not needed.

        // elapsedTime is the time difference in minutes between when the person stops drinking and when they want to start driving.
        var elapsedTime = timeArray[1] + timeArray[0];
    } else {
        var elapsedTime = timeArray[1] - timeArray[0];
    }

    // Return true if you are able to drive and false if you are not.
    console.log("the elapsed time is: ", elapsedTime); // <------- Not needed.
    console.log("the units is: ", units); // <------- Not needed.
    const expectedArray = [];
    // expectedArray.push(elapsedTime);
    expectedArray.push(units);
    
    // console.log(typeof(units)); // <------- Not needed.
    if (elapsedTime <= 60 * units) {
        console.log("Not enought time has passed");
        expectedArray.push(false);
    } else {
        console.log("Enought time has passed");
        expectedArray.push(true);
    }
    console.log(expectedArray); // <------- Not needed.
    
    
    


}

// You will need to return the total units (to 2 decimal places) of the alcoholic drinks and a boolean value true if you are able to drive or false if you are still unable to drive.

drive([[10.0, 100]], "20:00", "21:00"); // drive([[strength, volume]], "time when you finished drinking", "time when you would like to drive");
// expected: [1.0, false]

// alcohol = [[5.2,568],[5.2,568],[5.2,568],[12.0,175],[12.0,175],[12.0,175]];
// Input: drive(alcohol, "23:00", "08:15");

// alcohol = [[5.2,568],[12.0,175]];
// Test.assertDeepEquals(drive(alcohol, "16:00", "23:00"), [5.05, true], "Expected '[5.05, true]'");

// alcohol = [[5.2,568],[5.2,568],[5.2,568],[12.0,175],[12.0,175],[12.0,175]];
// Test.assertDeepEquals(drive(alcohol, "23:00", "08:15"), [15.16, false], "Expected '[15.16, false]'")

// alcohol = [[15.5,568]];
// Test.assertDeepEquals(drive(alcohol, "23:00", "06:45"), [8.8, false], "Expected '[8.8, false]'");

// alcohol = [[10.0,100]];
// Test.assertDeepEquals(drive(alcohol, "20:00", "21:00"), [1.0, false], "Expected '[1.0, false]'");

// alcohol = [[10.0,100]];
// Test.assertDeepEquals(drive(alcohol, "20:00", "21:01"), [1.0, true], "Expected '[1.0, true]'");