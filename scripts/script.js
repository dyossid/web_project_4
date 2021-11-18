const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseButton = editProfileModal.querySelector(
  ".modal__close-button"
);
const openFormButton = document.querySelector(".profile__edit-button");
const editProfileForm = document.querySelector("#edit-profile-form");
const nameInput = editProfileForm.name;
const descriptionInput = editProfileForm.description;
const editProfileSubmit = editProfileForm.querySelector("button[type=submit]");
const profileName = document.querySelector("#profile-name");
const profileDescription = document.querySelector("#profile-description");

editProfileCloseButton.addEventListener("click", () => {
  editProfileModal.classList.remove("modal_open");
});

openFormButton.addEventListener("click", () => {
  editProfileModal.classList.add("modal_open");
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
});

editProfileModal.addEventListener("click", (e) => {
  if (e.target === editProfileModal) {
    editProfileModal.classList.remove("modal_open");
  }
});

editProfileForm.addEventListener("submit", (e) => {
  e.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  editProfileModal.classList.remove("modal_open");
  editProfileForm.reset();
});
