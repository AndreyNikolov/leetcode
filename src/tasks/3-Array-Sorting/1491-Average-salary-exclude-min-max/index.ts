function average(salary: number[]): number {
  let minSalary = salary[0];
  let maxSalary = salary[0];
  let salarySum = salary[0];

  for (let i = 1; i < salary.length; i++) {
    const currSalary = salary[i];

    minSalary = Math.min(minSalary, currSalary);
    maxSalary = Math.max(maxSalary, currSalary);
    salarySum += currSalary;
  }

  return (salarySum - (minSalary + maxSalary)) / (salary.length - 2);
}
