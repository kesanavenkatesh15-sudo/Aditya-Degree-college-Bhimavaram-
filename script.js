// ==========================================
// STUDENT DATABASE
// ==========================================

let students = [

  {
    name: "Venkatesh",
    sus: "2603000346",
    course: "B.Sc AI",
    year: "1st Year",
    section: "A",
    roll: "2"
  },

  {
    name: "Ravi Teja",
    sus: "2603000375",
    course: "B.Sc AI",
    year: "1st Year",
    section: "A",
    roll: "6"
  },

  {
    name: "Uday",
    sus: "2603004952",
    course: "B.Sc AI",
    year: "1st Year",
    section: "A",
    roll: "20"
  },

  {
    name: "Chandu",
    sus: "26030055452",
    course: "B.Sc AI",
    year: "1st Year",
    section: "A",
    roll: "19"
  },

  {
    name: "Karthik",
    sus: "2603000195",
    course: "B.Sc AI",
    year: "1st Year",
    section: "A",
    roll: "4"
  }

];


// ==========================================
// DISPLAY STUDENTS
// ==========================================

function displayStudents(data = students) {

  const table =
    document.getElementById("studentTable");

  table.innerHTML = "";

  data.forEach((student, index) => {

    const row = document.createElement("tr");

    row.innerHTML = `

      <td>${index + 1}</td>

      <td>${student.name}</td>

      <td>${student.sus}</td>

      <td>${student.course}</td>

      <td>${student.year}</td>

      <td>${student.section}</td>

      <td>${student.roll}</td>

      <td>

        <button
          class="action-btn view-btn"
          onclick="viewStudent(${index})">
          View
        </button>

        <button
          class="action-btn edit-btn"
          onclick="editStudent(${index})">
          Edit
        </button>

        <button
          class="action-btn delete-btn"
          onclick="deleteStudent(${index})">
          Delete
        </button>

      </td>

    `;

    table.appendChild(row);

  });

}


// ==========================================
// ADD STUDENT
// ==========================================

function addStudent() {

  const name =
    document.getElementById("studentName").value.trim();

  const sus =
    document.getElementById("studentSUS").value.trim();

  const course =
    document.getElementById("studentCourse").value.trim();

  const year =
    document.getElementById("studentYear").value.trim();

  const section =
    document.getElementById("studentSection").value.trim();

  const roll =
    document.getElementById("studentRoll").value.trim();


  if (
    !name ||
    !sus ||
    !course ||
    !year ||
    !section ||
    !roll
  ) {

    alert("⚠️ Please fill all student details.");

    return;
  }


  students.push({

    name: name,
    sus: sus,
    course: course,
    year: year,
    section: section,
    roll: roll

  });


  clearForm();

  displayStudents();

  alert("✅ Student added successfully!");

}


// ==========================================
// CLEAR FORM
// ==========================================

function clearForm() {

  document.getElementById("studentName").value = "";

  document.getElementById("studentSUS").value = "";

  document.getElementById("studentCourse").value = "";

  document.getElementById("studentYear").value = "";

  document.getElementById("studentSection").value = "";

  document.getElementById("studentRoll").value = "";

}


// ==========================================
// SEARCH
// ==========================================

function searchStudent() {

  const search =
    document
      .getElementById("studentSearch")
      .value
      .toLowerCase()
      .trim();


  const filtered =
    students.filter(student =>

      student.name.toLowerCase().includes(search) ||

      student.sus.toLowerCase().includes(search) ||

      student.course.toLowerCase().includes(search) ||

      student.year.toLowerCase().includes(search) ||

      student.section.toLowerCase().includes(search) ||

      student.roll.toLowerCase().includes(search)

    );


  displayStudents(filtered);

}


// ==========================================
// VIEW STUDENT
// ==========================================

function viewStudent(index) {

  const student = students[index];

  alert(

    "🎓 STUDENT DETAILS\n\n" +

    "Name: " + student.name + "\n" +

    "SUS Number: " + student.sus + "\n" +

    "Course: " + student.course + "\n" +

    "Year: " + student.year + "\n" +

    "Section: " + student.section + "\n" +

    "Roll Number: " + student.roll

  );

}


// ==========================================
// EDIT STUDENT
// ==========================================

function editStudent(index) {

  const student = students[index];


  const newName =
    prompt("Enter Student Name:", student.name);

  if (newName === null) return;


  const newSUS =
    prompt("Enter SUS Number:", student.sus);

  if (newSUS === null) return;


  const newCourse =
    prompt("Enter Course:", student.course);

  if (newCourse === null) return;


  const newYear =
    prompt("Enter Year:", student.year);

  if (newYear === null) return;


  const newSection =
    prompt("Enter Section:", student.section);

  if (newSection === null) return;


  const newRoll =
    prompt("Enter Roll Number:", student.roll);

  if (newRoll === null) return;


  students[index] = {

    name: newName,
    sus: newSUS,
    course: newCourse,
    year: newYear,
    section: newSection,
    roll: newRoll

  };


  displayStudents();

  alert("✅ Student details updated!");

}


// ==========================================
// DELETE STUDENT
// ==========================================

function deleteStudent(index) {

  const student = students[index];


  const confirmDelete =
    confirm(
      "Delete " + student.name + " from student database?"
    );


  if (!confirmDelete) return;


  students.splice(index, 1);

  displayStudents();

  alert("🗑️ Student deleted successfully!");

}


// ==========================================
// COURSE DETAILS
// ==========================================

function showCourse(course) {

  const details = {

    "B.Sc AI":
      "🤖 B.Sc Artificial Intelligence\n\n" +
      "Group: Artificial Intelligence\n\n" +
      "Subjects:\n" +
      "• Artificial Intelligence\n" +
      "• CFOT\n" +
      "• Mathematics\n" +
      "• English\n" +
      "• Telugu",

    "B.Sc CS":
      "💻 B.Sc Computer Science\n\n" +
      "Group: Computer Science\n\n" +
      "Subjects:\n" +
      "• Computer Science\n" +
      "• Programming\n" +
      "• Mathematics\n" +
      "• English\n" +
      "• Telugu",

    "B.Sc DS":
      "📊 B.Sc Data Science\n\n" +
      "Group: Data Science\n\n" +
      "Subjects:\n" +
      "• Data Science\n" +
      "• Statistics\n" +
      "• Programming\n" +
      "• Mathematics\n" +
      "• English",

    "BCA CS":
      "🖥️ BCA Computer Science\n\n" +
      "Group: Computer Applications\n\n" +
      "Subjects:\n" +
      "• Computer Applications\n" +
      "• Programming\n" +
      "• Database\n" +
      "• Mathematics\n" +
      "• English",

    "BBA":
      "📈 BBA\n\n" +
      "Group: Business Administration\n\n" +
      "Subjects:\n" +
      "• Business Management\n" +
      "• Accounting\n" +
      "• Economics\n" +
      "• English\n" +
      "• Business Communication"

  };


  alert(details[course]);

}


// ==========================================
// SMOOTH SCROLL
// ==========================================

function scrollToSection(id) {

  document
    .getElementById(id)
    .scrollIntoView({
      behavior: "smooth"
    });

}


// ==========================================
// LOAD STUDENTS
// ==========================================

displayStudents();
