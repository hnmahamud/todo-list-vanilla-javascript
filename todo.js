let val = 0;
const contentContainer = document.getElementById("content-container");
const tBodyLength = contentContainer.childNodes.length;

const inputBtn = document.getElementById("input-btn");
inputBtn.addEventListener("click", function () {
  val++;
  const inputField = document.getElementById("input-field");

  const newTr = document.createElement("tr");
  newTr.innerHTML = `
    <td>${val}</td>
    <td>${inputField.value}</td>
    <td>
    <button id="delete-btn" class='btn btn-danger'>Delete</button>
    <button id="done-btn" class='btn btn-primary'>Done</button>
    </td>
  `;

  contentContainer.appendChild(newTr);
  inputField.value = "";
});

contentContainer.addEventListener("click", function (event) {
  if (event.target.innerText === "Delete") {
    event.target.parentNode.parentNode.parentNode.removeChild(
      event.target.parentNode.parentNode
    );
  }
  if (event.target.innerText === "Done") {
    event.target.parentNode.parentNode.style.backgroundColor = "gray";
  }
});

const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", function (event) {
  event.target.previousSibling.previousSibling.remove();
  clearBtn.setAttribute("disabled", true);
  inputBtn.setAttribute("disabled", true);
});
