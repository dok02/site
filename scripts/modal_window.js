const popupLinks = document.querySelectorAll(".popup-link");
const body = document.querySelector("body");

/*призначення функції відкривання popup*/
for (let index = 0; index < popupLinks.length; index++) {
  const popupLink = popupLinks[index];
  popupLink.addEventListener("click", function (e) {
    const popupName = popupLink.getAttribute("href").replace("#", "");
    let curPopup = document.getElementById(popupName);
    console.log(popupName);
    curPopup = fillContent(curPopup, popupLink.id);
    popupOpen(curPopup);
    e.preventDefault();
  });
}

function pp() {
  /*призначення функції відкривання popup*/
  for (let index = 0; index < popupLinks.length; index++) {
    const popupLink = popupLinks[index];
    popupLink.addEventListener("click", function (e) {
      const popupName = popupLink.getAttribute("href").replace("#", "");
      let curPopup = document.getElementById(popupName);
      console.log(popupName);
      curPopup = fillContent(curPopup, popupLink.id);
      popupOpen(curPopup);
      e.preventDefault();
    });
  }
}

/*призначення функції закривання popup з класом*/
const popupCloseIcon = document.querySelectorAll(".close-popup");
for (let index = 0; index < popupCloseIcon.length; index++) {
  const el = popupCloseIcon[index];
  el.addEventListener("click", function (e) {
    popupClose(el.closest(".popup"));
    e.preventDefault();
  });
}

function popupOpen(curentPopup) {
  if (curentPopup) {
    curentPopup.classList.add("open");

    curentPopup.addEventListener("click", function (e) {
      if (!e.target.closest(".popup_content")) {
        popupClose(e.target.closest(".popup"));
      }
    });
  }
}

function popupClose(popupActive) {
  const elements = document.querySelectorAll(".card-block > a");
  elements.forEach((el) => {
    el.remove();
  });

  popupActive.classList.remove("open");
}

function fillContent(divPopup, id) {
  const content = divPopup.querySelector(".card-block");
  console.log("ID =" + id);

  let number = parseInt(id.slice(id.indexOf("-") + 1));

  let newElement = document.createElement("a");

  switch (id[0]) {
    case "s":
      break;
    case "m":
      switch (number) {
        case 1:
          newElement.insertAdjacentHTML(
            "beforeend",
            `<div class="card-content">
            <img src="/res/grenades/molotovs/m_1-2.jpg" alt="">

            <div class="card-text">
              <h3>Catwalk Molotov</h3>
              <p>Молотов на шорт</p>
              <a target="_blank"
              href="https://www.youtube.com/watch?v=l2owrLeCB5w&list=PLWdS7h_tsqN79rP3qaZ72hkdLf24-mxPE&index=2&ab_channel=BeaverUA"
              class="popup-link"> <button>Дивитися туторіал</button></a>
            </div>
          </div>`
          );
          content.append(newElement);
          newElement = document.createElement("a");

          break;
        case 2:
          newElement.insertAdjacentHTML(
            "beforeend",
            `<div class="card-content">
            <img src="/res/grenades/molotovs/m_1-2.jpg" alt="">

            <div class="card-text">
              <h3>Catwalk Molotov</h3>
              <p>Молотов 2</p>
              <a target="_blank"
              href=""
              class="popup-link"> <button>Дивитися туторіал</button></a>
            </div>
          </div>`
          );
          content.append(newElement);
          break;
        case 3:
          newElement.insertAdjacentHTML(
            "beforeend",
            `<div class="card-content">
              <img src="/res/grenades/molotovs/m_1-2.jpg" alt="">
  
              <div class="card-text">
                <h3>Catwalk Molotov</h3>
                <p>Молотов 2</p>
                <a target="_blank"
                href=""
                class="popup-link"> <button>Дивитися туторіал</button></a>
              </div>
            </div>`
          );
          content.append(newElement);
          break;
      }
      break;
    case "f":
      break;
  }

  return divPopup;
}
