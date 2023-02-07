using Microsoft.AspNetCore.Mvc;
using Mission4.Models;

namespace Mission4.Controllers
{
    public class BlahController : Controller
    {
        //Create the action for the Index view
        public IActionResult Index()
        {
            return View();
        }
        
        //Create the Action for the get method of the GradeCalculator view
        [HttpGet]
        public IActionResult GradeCalculator()
        {
            return View();
        }

        //Create the Action for the post method of the GradeCalculator view
        [HttpPost]
        public IActionResult GradeCalculator(GradeCalculatorModel model)
        {
            return View();
        }
    }
}
