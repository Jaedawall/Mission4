$("#calculate").click(function () {
    //Assign all the variables and multiply them by their weight
    var assignments = ($("#assignmentsID").val()) * 0.5;
    var groupProjects = ($("#gpID").val()) * 0.1;
    var quizzes = ($("#quizzesID").val()) * 0.1;
    var midterm = ($("#midtermID").val()) * 0.1;
    var final = ($("#finalID").val()) * 0.1;
    var intex = ($("#intexID").val()) * 0.1;

    //Calculate the totalGrade
    var totalGrade = assignments + groupProjects + quizzes + midterm + final + intex;

    //Create an if statement to determine what the letter grade is
    if (totalGrade >= 94) {
        //Print the letter grade and the final percentage to the html page
        $("#letterGrade").text("Your letter grade is: A and your final percentage is: " + totalGrade);
    } else if (totalGrade >= 90) {
        $("#letterGrade").text("Your letter grade is: A- and your final percentage is: " + totalGrade);
    } else if (totalGrade >= 87) {
        $("#letterGrade").text("Your letter grade is: B+ and your final percentage is: " + totalGrade);
    } else if (totalGrade >= 84) {
        $("#letterGrade").text("Your letter grade is: B and your final percentage is: " + totalGrade);
    } else if (totalGrade >= 80) {
        $("#letterGrade").text("Your letter grade is: B- and your final percentage is: " + totalGrade);
    } else if (totalGrade >= 77) {
        $("#letterGrade").text("Your letter grade is: C+ and your final percentage is: " + totalGrade);
    } else if (totalGrade >= 74) {
        $("#letterGrade").text("Your letter grade is: C and your final percentage is: " + totalGrade);
    } else if (totalGrade >= 70) {
        $("#letterGrade").text("Your letter grade is: C- and your final percentage is: " + totalGrade);
    } else if (totalGrade >= 67) {
        $("#letterGrade").text("Your letter grade is: D+ and your final percentage is: " + totalGrade);
    } else if (totalGrade >= 64) {
        $("#letterGrade").text("Your letter grade is: D and your final percentage is: " + totalGrade);
    } else if (totalGrade >= 60) {
        $("#letterGrade").text("Your letter grade is: D- and your final percentage is: " + totalGrade);
    } else {
        $("#letterGrade").text("Your letter grade is: E and your final percentage is: " + totalGrade);
    }
});
