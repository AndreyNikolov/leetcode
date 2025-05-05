function countStudents(students: number[], sandwiches: number[]): number {
  let copyStudents = [...students];
  let hungryStudents = copyStudents.length;
  let actionsCount = 0;

  while (actionsCount < hungryStudents) {
    let currentStudent = copyStudents[0];
    let currentSandwivh = sandwiches[0];

    if (currentStudent === currentSandwivh) {
      copyStudents.shift();
      sandwiches.shift();

      hungryStudents = copyStudents.length;
      actionsCount = 0;
    } else {
      let firstStudent = copyStudents.shift()!;
      copyStudents = [...copyStudents, firstStudent];
      actionsCount++;
    }
  }

  return hungryStudents;
}
