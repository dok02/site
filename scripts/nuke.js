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
