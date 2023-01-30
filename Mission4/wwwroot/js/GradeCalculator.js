$("#calculate").click(function () {
    var assignments = ($("#assignmentsID").val()) * 0.5;
    var groupProjects = ($("#gpID").val()) * 0.1;
    var quizzes = ($("#quizzesID").val()) * 0.1;
    var midterm = ($("#midtermID").val()) * 0.1;
    var final = ($("#finalID").val()) * 0.1;
    var intex = ($("#intexID").val()) * 0.1;

    var totalGrade = assignments + groupProjects + quizzes + midterm + final + intex;

    if (totalGrade >= 0.94) {
        $("#letterGrade").text("Your letter grade is: A");
    } else if (totalGrade >= 0.9) {
        $("#letterGrade").text("Your letter grade is: A-");
    } else if (totalGrade >= 0.87) {
        $("#letterGrade").text("Your letter grade is: B+");
    } else if (totalGrade >= 0.84) {
        $("#letterGrade").text("Your letter grade is: B");
    } else if (totalGrade >= 0.8) {
        $("#letterGrade").text("Your letter grade is: B-");
    } else if (totalGrade >= 0.77) {
        $("#letterGrade").text("Your letter grade is: C+");
    } else if (totalGrade >= 0.74) {
        $("#letterGrade").text("Your letter grade is: C");
    } else if (totalGrade >= 0.7) {
        $("#letterGrade").text("Your letter grade is: C-");
    } else if (totalGrade >= 0.67) {
        $("#letterGrade").text("Your letter grade is: D+");
    } else if (totalGrade >= 0.64) {
        $("#letterGrade").text("Your letter grade is: D");
    } else if (totalGrade >= 0.6) {
        $("#letterGrade").text("Your letter grade is: D-");
    } else {
        $("#letterGrade").text("Your letter grade is: E");
    }
});
