// Récupération des références des éléments de formulaire
const form = document.querySelector("form");
const name = document.getElementById("name");
const firstname = document.getElementById("firstname");
const age = document.getElementById("age");
const email = document.getElementById("email");
const emailConfirm = document.getElementById("emailConfirm");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("passwordConfirm");
const cgu = document.getElementById("cgu");

// Validation du formulaire lors de la soumission
form.addEventListener("submit", e => {
  e.preventDefault();
  
  // Initialisation des erreurs à false
  let errors = false;

  // Vérification des champs vides
  if (!name.value) {
    displayError(name, "Le nom ne peut pas être vide");
    errors = true;
  }
  if (!firstname.value) {
    displayError(firstname, "Le prénom ne peut pas être vide");
    errors = true;
  }
  // Vérification de la longueur du prénom
  if (firstname.value.length < 3) {
    displayError(firstname, "Le prénom doit faire au moins 3 lettres");
    errors = true;
  }
  if (!age.value) {
    displayError(age, "L'âge ne peut pas être vide");
    errors = true;
  }
  // Vérification de l'âge
  if (age.value < 18) {
    displayError(age, "L'âge doit être supérieur à 18 ans");
    errors = true;
  }
  if (!email.value) {
    displayError(email, "L'email ne peut pas être vide");
    errors = true;
  }
  if (!emailConfirm.value) {
    displayError(emailConfirm, "La confirmation de l'email ne peut pas être vide");
    errors = true;
  }
  // Vérification que les emails correspondent
  if (email.value !== emailConfirm.value) {
    displayError(emailConfirm, "Les emails ne correspondent pas");
    errors = true;
  }
  // Vérification du format de l'email
  if (!validateEmail(email.value)) {
    displayError(email, "L'email doit avoir un format valide");
    errors = true;
  }
  if (!password.value) {
    displayError(password, "Le mot de passe ne peut pas être vide");
    errors = true;
  }
  if (!passwordConfirm.value) {
    displayError(passwordConfirm, "La confirmation du mot de passe ne peut pas être vide");
    errors = true;
  }
  // Vérification que les mots de passe correspondent
  if (password.value !== passwordConfirm.value) {
    displayError(passwordConfirm, "Les mots de passe ne correspondent pas");
    errors = true;
    }
    // Vérification de la longueur du mot de passe
    if (password.value.length < 8) {
    displayError(password, "Le mot de passe doit faire au moins 8 caractères");
    errors = true;
    }
    // Vérification de la condition d'utilisation des CGU
    if (!cgu.checked) {
    displayError(cgu, "Vous devez accepter les conditions d'utilisation");
    errors = true;
    }
    // Si il n'y a pas d'erreurs, on soumet le formulaire
    if (!errors) {
    form.submit();
    }
    });
    
    // Fonction pour afficher les erreurs
    function displayError(input, message) {
    // Ajout de la classe error sur le champ de formulaire
    input.classList.add("error");
    // Récupération de la référence de la div d'erreur
    const error = input.nextElementSibling;
    // Ajout du message d'erreur
    error.innerText = message;
    }
    
    // Fonction pour valider le format de l'email
    function validateEmail(email) {
    const re = /^(([^<>()[]\.,;:\s@"]+(.[^<>()[]\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
    }
