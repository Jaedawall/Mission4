$("#calculate").click(function () {
    //Asign all the variables and multiply them by their weight
    var assignments = ($("#assignmentsID").val()) * 0.5;
    var groupProjects = ($("#gpID").val()) * 0.1;
    var quizzes = ($("#quizzesID").val()) * 0.1;
    var midterm = ($("#midtermID").val()) * 0.1;
    var final = ($("#finalID").val()) * 0.1;
    var intex = ($("#intexID").val()) * 0.1;

    //Calculate the totalGrade and the percentage
    var totalGrade = assignments + groupProjects + quizzes + midterm + final + intex;
    var percentage = totalGrade * 100

    //Create an if statement to determine what the letter grade is
    if (totalGrade >= 0.94) {
        //Print the letter grade and the final percentage to the html page
        $("#letterGrade").text("Your letter grade is: A and your final percentage is: " + percentage);
    } else if (totalGrade >= 0.9) {
        $("#letterGrade").text("Your letter grade is: A- and your final percentage is: " + percentage);
    } else if (totalGrade >= 0.87) {
        $("#letterGrade").text("Your letter grade is: B+ and your final percentage is: " + percentage);
    } else if (totalGrade >= 0.84) {
        $("#letterGrade").text("Your letter grade is: B and your final percentage is: " + percentage);
    } else if (totalGrade >= 0.8) {
        $("#letterGrade").text("Your letter grade is: B- and your final percentage is: " + percentage);
    } else if (totalGrade >= 0.77) {
        $("#letterGrade").text("Your letter grade is: C+ and your final percentage is: " + percentage);
    } else if (totalGrade >= 0.74) {
        $("#letterGrade").text("Your letter grade is: C and your final percentage is: " + percentage);
    } else if (totalGrade >= 0.7) {
        $("#letterGrade").text("Your letter grade is: C- and your final percentage is: " + percentage);
    } else if (totalGrade >= 0.67) {
        $("#letterGrade").text("Your letter grade is: D+ and your final percentage is: " + percentage);
    } else if (totalGrade >= 0.64) {
        $("#letterGrade").text("Your letter grade is: D and your final percentage is: " + percentage);
    } else if (totalGrade >= 0.6) {
        $("#letterGrade").text("Your letter grade is: D- and your final percentage is: " + percentage);
    } else {
        $("#letterGrade").text("Your letter grade is: E and your final percentage is: " + percentage);
    }
});
