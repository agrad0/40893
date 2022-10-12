let form = document.getElementById(`form`);

let formName = document.querySelector("#name");
let formEmail = document.querySelector("#email");
let errorListContainer = document.querySelector("#error-list-container");

let consent1 = document.querySelector("#consent-1");
let consent2 = document.querySelector("#consent-2");
let consentAll = document.querySelector("#consent-all");
let submit = document.querySelector("#submit");

let errorList = document.createElement("ul");
errorListContainer.appendChild(errorList);
consentAll.addEventListener("change", (e) => {
    if (e.target.checked) {
      consent1.checked = true;
      consent2.checked = true;
      consent1.disabled = true;
      consent2.disabled = true;
    } else {
      consent1.checked = false;
      consent2.checked = false;
      consent1.disabled = false;
      consent2.disabled = false;
    }
});

// form.setAttribute("onsubmit", "return validate()")

function validate(event) {
    errorList.innerHTML = "";
    if ((formName.value == "") || (formEmail.value == "") || (!formEmail.value.includes("@")) || (consent1.checked == false)) {
        event.preventDefault();
    }
    if (formName.value.trim() === "") {
        let listItem = document.createElement("li");
        listItem.innerText = 'Wpisz Imie i nazwisko!';
        errorList.appendChild(listItem);
    }

    if (formEmail.value.trim() === "" ) {
        let listItem = document.createElement("li");
        listItem.innerText = 'Wpisz Adres e-mail!';
        errorList.appendChild(listItem);
    }

    if (!formEmail.value.includes("@")) {
        let listItem = document.createElement("li");
        listItem.innerText = 'Adres e-mail musi zawierać @';
        errorList.appendChild(listItem);
    }

    if (consent1.checked === false) {
        let listItem = document.createElement("li");
        listItem.innerText = 'Nie wyraziłeś Zgody 1!';
        errorList.appendChild(listItem);
    }
}

form.addEventListener('submit', validate);
