function drive(drinks, finished, drive_time) {
    // On average it takes a person 1 hour for their body to remove 1 unit of alcohol.
    
    // Data passed will be in the format ([[strength,volume]], finished, drive_time). Where finished is the time you stopped drinking and drive_time is the time you would like to drive.
    const units = drinks[0][0] * drinks[0][1] / 1000; // Going through the drinks array to calculate the strength. Units of alcohol are calculated by strength (ABV) x volume (ml) / 1000 = units.

    // If the finished >= drive_time then you can assume that it is the next day. <======== Revisit this.
    

    // const diff = 9 - 8;
    // const diff = drive_time - finished;
    const diff = [parseFloat(drive_time) - parseFloat(finished) ] * 1.00;
    console.log("diff: ",diff);
    var elapsed_time = 0;
    elapsed_time = diff.toFixed(2); // Need to parse the two amounts into an integer. More solutions: https://stackoverflow.com/questions/6134039/format-number-to-always-show-2-decimal-places
    console.log("diff with 2 dec. places: ",elapsed_time);
    

    console.log(typeof true);
    console.log(typeof elapsed_time); // Elapsed time need to be a number, not a string.

    var myNewNumber = Number(elapsed_time);
    console.log("my new number: ",typeof myNewNumber, myNewNumber); // Need to convert to two decipmal places.

    parseFloat(myNewNumber);
    console.log("my new number: ",typeof myNewNumber, myNewNumber); // Need to convert to two decipmal places.

    // Return total units to 2 decimal places rounded. For example 1.10 => 1.1 and 1.236 => 1.24
    // Return true if you are able to drive and false if you are not.
    const myArray =[];
    const myNumber = 1.25;
    myArray.push(myNumber);
    myArray.push(elapsed_time);
    console.log("my array :", myArray);

    if (elapsed_time > units) {
        console.log([elapsed_time, true]);
        return [elapsed_time, true];
    }

    console.log([elapsed_time, false]);
    return [elapsed_time, false];
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