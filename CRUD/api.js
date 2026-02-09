const API_URL = "http://localhost:5126/api/Student";

/* ================= READ ALL (Index) ================= */
async function getStudents() {
  try {
    const res = await axios.get(API_URL);
    const tbody = document.querySelector("#StudentReadTbl");
    if (!tbody) return;

    tbody.innerHTML = "";

    res.data.forEach((s) => {
      tbody.innerHTML += `
        <tr>
          <td>${s.id}</td>
          <td>${s.name}</td>
          <td>${s.age}</td>
          <td>${s.city}</td>
          <td>
            <a href="detail.html?id=${s.id}" class="btn btn-warning btn-sm">Detail</a>
            <a href="edit.html?id=${s.id}" class="btn btn-success btn-sm">Edit</a>
            <button class="btn btn-danger btn-sm" onclick="deleteStudent(${s.id})">Delete</button>
          </td>
        </tr>`;
    });
  } catch (err) {
    console.log(err);
  }
}
getStudents();


/* ================= CREATE ================= */
const createform = document.querySelector("#Createform");
if (createform) {
  createform.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nameInput = document.querySelector("#createname").value;
    const ageInput = document.querySelector("#createage").value;
    const cityInput = document.querySelector("#createcity").value;

    if(!nameInput){
        alert("name requird");
        return;
    }
    if(!ageInput){
        alert("age requird");
        return;
    }
    if(!cityInput){
        alert("city requird");
        return;
    }

    let std = {
      name: nameInput,
      age: ageInput,
      city: cityInput,
    };

    await axios.post(API_URL, std);
    window.location.href = "index.html";
  });
}

/* ================= DETAIL ================= */
async function getDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  if (!id) return;

  const tbl = document.querySelector("#StudentDetail");
  if (!tbl) return;

  const res = await axios.get(`http://localhost:5126/api/Student/id?id=${id}`);
  tbl.innerHTML = `
    <tr><th>Name</th><td>${res.data.name}</td></tr>
    <tr><th>Age</th><td>${res.data.age}</td></tr>
    <tr><th>City</th><td>${res.data.city}</td></tr>
    `;
}

/* ================= EDIT ================= */
async function loadEdit() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  if (!id) return;

  const res = await axios.get(`http://localhost:5126/api/Student/id?id=${id}`);

  editname.value = res.data.name;
  editage.value = res.data.age;
  editcity.value = res.data.city;

  EditForm.addEventListener("submit", async e => {
    e.preventDefault();

    const std = {
      id: id,
      name: editname.value,
      age: editage.value,
      city: editcity.value
    }

    await axios.put(`${API_URL}/${id}`, std);

    window.location.href = "index.html";
  });
}
loadEdit();

/* ================= DELETE ================= */
async function deleteStudent(id) {
  if (!confirm("are you sure")) return;
  await axios.delete(`http://localhost:5126/api/Student/id?id=${id}`);
  getStudents();
}
