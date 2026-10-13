```javascript
const form = document.getElementById("applicationForm");
const result = document.getElementById("result");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    const studentName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const course = document.getElementById("course").value;
    const year = document.getElementById("year").value;

    result.innerHTML = "";

    const message = document.createElement("div");
    message.className = "success";

    const heading = document.createElement("h2");
    heading.textContent = "Application Submitted Successfully!";

    const name = document.createElement("p");
    name.textContent = "Student Name: " + studentName;

    const emailInfo = document.createElement("p");
    emailInfo.textContent = "Email: " + email;

    const courseInfo = document.createElement("p");
    courseInfo.textContent = "Selected Course: " + course;

    const yearInfo = document.createElement("p");
    yearInfo.textContent = "Admission Year: " + year;

    const note = document.createElement("p");
    note.textContent =
        "Demo only: Your application has not been sent to a college.";

    message.append(heading, name, emailInfo, courseInfo, yearInfo, note);
    result.appendChild(message);

    result.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

form.addEventListener("reset", function () {
    result.innerHTML = "";
});
```
