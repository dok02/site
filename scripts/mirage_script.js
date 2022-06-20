btn_smoke.onclick = function () {
  alert("Smoke");
};

btn_molotov.onclick = function () {
  alert("Molotov");
  document.getElementById("smoke-1").style.display = "none";
};

btn_flash.onclick = function () {
  alert("Flash");
};
