function countStudents2(students: number[], sandwiches: number[]): number {
  let counter = 0;

  while (counter < students.length) {
    const student = students[0];
    const sandwich = sandwiches[0];

    if (student === sandwich) {
      counter = 0;
      students.shift();
      sandwiches.shift();
    } else {
      counter++;
      let first = students.shift()!;
      students = [...students, first];
    }
  }

  return students.length;
}
