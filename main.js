var form = document.getElementById(`form`);

var formName = document.querySelector("#name");
var formEmail = document.querySelector("#email");
var errorListContainer = document.querySelector("#error-list-container");

var consent1 = document.querySelector("#consent-1");
var consent2 = document.querySelector("#consent-2");
var consentAll = document.querySelector("#consent-all");
var submit = document.querySelector("#submit");

var errorList = document.createElement("ul");
var count = 0;

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
    if ((formName.value == "") || (formEmail.value == "") || (!formEmail.value.includes("@")) || (consent1.checked == false) && (count === 0)) {
        event.preventDefault();
        errorListContainer.appendChild(errorList);
        count = 1;
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
console.log(count);