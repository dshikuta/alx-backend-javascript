interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// student 

const student1: Student = {
    firstName: "Beth",
    lastName: "Ciru",
    age: 20,
    location: "Ruaka"
};

const student2: student = {
firstName: "Evans",
lastName:  "Mboya",
age: 18,
location: "Roysambu"
};

// studentlist array

const studentsList: Student[] = [student1, student2];

export const renderTable = (studentsList: Array<Student>): void =>  {
  // create table tag
  const table = document.createElement('table');
  const headRow = document.createElement('tr');
  table.insertAdjacentElement('beforeend', headRow);

  // insert headers into the table
  headRow.insertAdjacentHTML('beforeend', '<th>FirstName</th>');
  headRow.insertAdjacentHTML('beforeend', '<th>Location</th>');

  for (const student of studentsList) {
    const studentRow = document.createElement('tr')
    studentRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
    studentRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
    table.insertAdjacentElement('beforeend', studentRow);
  }

  document.body.insertAdjacentElement('beforeend', table);
}

renderTable(studentsList);
