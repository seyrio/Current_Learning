class Password {
  constructor() {
    this.pass = "";
    this.char = "abcdefghijklmnopqrstuvwxyz";
    this.numbers = "1234567890";
    this.specialChars = '!@#$%^&*()_-=+|}]{[";:/?.>,<';
    this.funny = [
      "incorrect",
      "myonlypassword",
      "iamforgetful",
      "youmoron",
      "memorysucks",
      "TopSecretNetwork",
    ];
  }

  strongPassword() {
    for (let i = 0; i < 4; i++) {
      this.pass += this.char[Math.floor(Math.random() * this.char.length)];
      this.pass +=
        this.numbers[Math.floor(Math.random() * this.numbers.length)];
      this.pass +=
        this.specialChars[Math.floor(Math.random() * this.specialChars.length)];
    }
  }
  funnyPassword() {
    this.pass = this.funny[Math.floor(Math.random() * this.funny.length)];
  }
  weakPassword() {
    for (let i = 0; i < 12; i++)
      this.pass += this.char[Math.floor(Math.random() * this.char.length)];
  }
  mediumPassword() {
    for (let i = 0; i < 6; i++) {
      this.pass += this.char[Math.floor(Math.random() * this.char.length)];
      this.pass +=
        this.numbers[Math.floor(Math.random() * this.numbers.length)];
    }
  }
}

const generate = (e) => {
  const isButton = e.target.nodeName == "BUTTON";
  if (isButton) {
    const id = e.target.id;
    let password = new Password();
    if (id == "funny") password.funnyPassword();
    else if (id == "weak") password.weakPassword();
    else if (id == "medium") password.mediumPassword();
    else password.strongPassword();
    const passwordText = document.getElementById("passwordText");
    passwordText.textContent = password.pass;
    document.getElementById("passwordCard").classList.remove("visually-hidden");
  }
};

const chosen = document.getElementById("list");
chosen.addEventListener("click", generate);
