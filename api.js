// ================== COMMON ==================
const apiUrl = "http://localhost:5126/api/Student";

// ================== LIST PAGE ==================
const tbody = document.getElementById("tblBody");

function loadStudents() {
  fetch(apiUrl)
    .then(res => res.json())
    .then(data => renderTable(data));
}

function renderTable(data) {
  if (!tbody) return;

  tbody.innerHTML = "";
  data.forEach(s => {
    tbody.innerHTML += `
      <tr>
        <td>${s.id}</td>
        <td>${s.name}</td>
        <td>${s.age}</td>
        <td>${s.city}</td>
        <td>
          <button class="btn btn-danger btn-sm"
            onclick="deleteStudent(${s.id})">Delete</button>

          <a href="StdDetail.html?id=${s.id}"
             class="btn btn-warning btn-sm">Detail</a>

          <a href="EditStudent.html?id=${s.id}"
             class="btn btn-primary btn-sm">Edit</a>
        </td>
      </tr>
    `;
  });
}

if (tbody) loadStudents();

// ================== DELETE ==================
function deleteStudent(id) {
  if (!confirm("Are you sure?")) return;

  fetch(`${apiUrl}/${id}`, { method: "DELETE" })
    .then(res => {
      if (res.ok) {
        alert("Deleted");
        loadStudents();
      }
    });
}

// ================== DETAIL PAGE ==================
const detailBody = document.getElementById("detailstd");

if (detailBody) {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  fetch(`${apiUrl}/${id}`)
    .then(res => res.json())
    .then(s => {
      detailBody.innerHTML = `
        <tr>
          <td>${s.id}</td>
          <td>${s.name}</td>
          <td>${s.age}</td>
          <td>${s.city}</td>
        </tr>`;
    });
}

// ================== CREATE + EDIT ==================
const form = document.getElementById("studentForm");

if (form) {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  // ===== EDIT MODE =====
  if (id) {
    fetch(`http://localhost:5126/api/Student/id?id=${id}`)
      .then(res => res.json())
      .then(std => {
        name.value = std.name;
        age.value = std.age;
        city.value = std.city;
      });
  }

  form.addEventListener("submit", e => {
    e.preventDefault();

    const std = {
      name: name.value,
      age: Number(age.value),
      city: city.value
    };

    // EDIT
    if (id) {
      std.id = id;
      fetch(`${apiUrl}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(std)
      })
      .then(res => {
        if (res.ok) alert("Updated Successfully");
      });
    }
    // CREATE
    else {
      fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(std)
      })
      .then(res => {
        if (res.ok) {
          alert("Created Successfully");
          form.reset();
        }
      });
    }
  });
}
