$(document).ready(function () {

    //Firebase reference and config.
    var config = {
        apiKey: "AIzaSyCTL8uiFhDgt-Wqw4mmOiYgIKWV7GdgD50",
        authDomain: "coder-bay-b347f.firebaseapp.com",
        databaseURL: "https://coder-bay-b347f.firebaseio.com",
        projectId: "coder-bay-b347f",
        storageBucket: "coder-bay-b347f.appspot.com",
        messagingSenderId: "393532759900"
    };
    firebase.initializeApp(config);

    // Assign the reference to the database to a variable named 'database'
    var database = firebase.database();

    //Variables
    var trainName = "";
    var destination = "";
    var firstTime = null;
    var frequency = null;

    $("#saveButton").on("click", function () {
        event.preventDefault();

        //Gets user input
        trainName = $("#train-name").val().trim();
        detination = $("#destination").val().trim();
        fristTime = $("#first-time").val().trim();
        frequency = $("#frequency").val().trim();

        //variable to connect to firebase
        var trainData = {
            trainName = trainName,
            destination = destination,
            fristTime = firstTime,
            frequency = frequency
        }

        database.ref().push(trainData);

        clearInputFields();

        database.ref().on("child_added", function () {
            var newRow = $("<tr>").append(
                $("<td>").text(snapshot.val().trainName),
                $("<td>").text(snapshot.val().destination),
                $("<td>").text(snapshot.val().firstTime),
                $("<td>").text(snapshot.val().frequency))
            $("#train-info > tbody").append(newRow);
            console.log(newRow);
        },
            function (errorObject) {
                console.log("Errors handled: " + errorObject.code);
            });
    });

    database.ref("trainData").on("value", function (snapshot) {
        //store data into variables
        trainName = snapshot.val("#train-name");
        destination = snapshot.val().destination;
        firstTime = snapshot.val().firstTime;
        frequency = snapshot.val().frequency;

        console.log(trainName);
        console.log(destination);
        console.log(fristTime);
        console.log(frequency);

        firstTimeCalc = moment(firstTime, "HH:mm").subtract(1, "years");
        console.log("FIRST CONVERTED TIME: " + firstTimeCalc);

        var currentTime = moment();
        console.log("CURRENT TIME: " + MOMENT(currentTime).format("HH:mm"));
    })






});
