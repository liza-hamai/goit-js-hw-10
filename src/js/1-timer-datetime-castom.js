const input = document.querySelector("#datetime-picker");

flatpickr(input, {
  enableTime: true,
  dateFormat: "Y-m-d H:i",
  onOpen() {
    input.classList.add("active");
    input.classList.remove("running");
  },
  onClose() {
    input.classList.remove("active");
  }
});

const startButton = document.querySelector("[data-start]");
startButton.addEventListener("click", () => {
  input.classList.add("running");
});
