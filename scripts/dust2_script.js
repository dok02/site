btn_smoke.onclick = function () {
  show("s");
};

btn_molotov.onclick = function () {
  show("m");
};

btn_flash.onclick = function () {
  show("f");
};

const show = function (letter) {
  const elements = document.querySelectorAll(".container > a");
  for (let el of elements) {
    console.log(el);
    if (el.id[0] == letter) {
      console.log(el);
      el.style.display = "block";
    } else {
      el.style.display = "none";
    }
  }
};
