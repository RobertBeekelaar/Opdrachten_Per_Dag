
const assignGrade = (grade) => {
  if (grade > 90) {
    return 'A';
  } else if (grade > 80) {
    return 'B';
  } else if (grade > 70) {
    return 'C';
  } else if (grade > 65) {
    return 'D';
  } else {
    return 'F';
  }
}

for (var i = 60; i <= 100; i++) {
  console.log('For ' + i + ', you got a ' + assignGrade(i));
}