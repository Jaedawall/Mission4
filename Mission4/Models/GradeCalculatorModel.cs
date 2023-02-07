using System.ComponentModel.DataAnnotations;

namespace Mission4.Models
{
    public class GradeCalculatorModel
    {
        //Create a validation to make sure the input is between 0 and 100
        //Create getters and setters
        [Range(0, 100)]
        public int assignments { get; set; }

        [Range(0, 100)]
        public int groupprojects { get; set; }

        [Range(0, 100)]
        public int quizzes { get; set; }

        [Range(0, 100)]
        public int midterm { get; set; }

        [Range(0, 100)]
        public int final { get; set; }

        [Range(0, 100)]
        public int intex { get; set; }
    }
}
