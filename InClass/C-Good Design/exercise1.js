

/*Task. go through all of these issues and make appropriate improvements to the code.

1. Naming: the function has a bad name, myFunction() tells you nothing about
   what the function does. It's also considered bad practice to name variables
   vaguely by separating them through numbers (incomeTax1, incomeTax2, etc). If
   you find yourself doing this then you should either use an array (such as
   incomeTax[]).

2. Commenting: the function isn't documented at all. It's very difficult to
   understand what the function's purpose is and how each part of the code
   contributes to it. By writing comments, the coder communicates their
   reasoning and helps the function be human readable.

3. Layout/formatting: unnecessary spacing between the if and else statement.

4. Single responsibility: the function doesn't have a single purpose. It
   calculates national insurance and salary deductions. Maybe the national
   insurance calculation could be moved to a separate function.

5. Input variable being overwritten: the function requires gross salary (before
   deductions) and net salary (after deductions) the `salary` input variable is
   therefore copied into an `originalSalary` variable so that it can be changed.
   It would be much clearer to create a new `netSalary` variable and leave
   `salary` unmodified.

6. DRY principle: the function validates the DRY (Don't Repeat Yourself) rule.
   The line where a deduction is taken from the salary is repeated 3 times with
   different indices. This can be replaced with a `for` loop.

7. Magic numbers. The code contains a lot of magic numbers, including `17775`,
   `0.09` and `0.1`.

8. Useless parameters: the code contains a variable which isn't used. They
   should be removed because they are confusing. It is tempting when you're
   starting to code a function to add more parameters thinking that you might
   need them, but it's important to remove them if you don't end up using them.
   
   */

function nationalInsurance(salary,taxCode,resultSalary){
// declared variables
   let multipleTo1150L = 0.1;
   let multipleToST = 0.05;
   let multipleToNothingElse = 0.08;
   let nationalInsurance = null;
// operator to ranges of insurance multiple    
   if (taxCode === "1150L") {
      nationalInsurance = resultSalary * multipleTo1150L;
   } else if (taxCode === "ST") {
      nationalInsurance = resultSalary * multipleToST;
   } else {
      nationalInsurance = resultSalary * multipleToNothingElse;
   }
   return (`Your gross income is $${salary.toString()} and your net income is $${resultSalary.toString()}`);
}



function salaryDeductions(salary, taxCode, taxIVA, taxIRPF) {
// variable declarations
   let studentRestCoeficient = 17775;
   let steudentMultiplyCoeficient = 0.09;
   let studentLoan = (salary - studentRestCoeficient) * steudentMultiplyCoeficient;
   let totalIncomeTax = taxIVA + taxIRPF;
   const deductions = [totalIncomeTax, studentLoan]; 
// operation to final salary    
   resultSalary = salary-deductions[0]-deductions[1];
// nationalInsurance function callback
   return nationalInsurance(salary,taxCode,resultSalary);
};

console.log(salaryDeductions(28000, "1150L", 1000, 580)); // print example with values 