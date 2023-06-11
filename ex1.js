class Employee {
  constructor(name, companyName, jobPosition, salary) {
    this.name = name;
    this.companyName = companyName;
    this.jobPosition = jobPosition;
    this.salary = salary;
  }
  getEmployeeData() {
    return `<ul>
              <li>Name: ${this.name}</li>
              <li>Company Name: ${this.companyName}</li>
              <li>Job Position: ${this.jobPosition}</li>
              <li>Salary: ${this.salary}</li>
              <br>
            </ul>`;
  }
}

function setEmployeeData() {
  const employees = [];

  for (let i = 1; i <= 3; i++) {
    const name = prompt(`Enter name for Employee ${i}`);
    const companyName = prompt(`Enter company name for Employee ${i}`);
    const jobPosition = prompt(`Enter job position for Employee ${i}`);
    const salary = +prompt(`Enter salary for Employee ${i}`);

    const employee = new Employee(name,companyName, jobPosition, salary);
    employees.push(employee);
  }

  const ul = document.createElement("ul");
  const container = document.getElementById("ex1");

  employees.forEach((employee) => {
    const li = document.createElement("li");
    li.innerHTML = employee.getEmployeeData();
    ul.appendChild(li);
  });
  container.appendChild(ul);
}

const employeeBtn = document.getElementById("employee-btn");
employeeBtn.addEventListener("click", setEmployeeData);
