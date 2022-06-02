window.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tabheader__item");
  const tabsContent = document.querySelectorAll(".tabcontent");
  const tabsParent = document.querySelector(".tabheader__items");

  function hideTibeContent() {
    tabsContent.forEach((item) => {
      item.style.display = "none";
    });
    tabs.forEach((item) => {
      item.classList.remove("tabheader__item_active");
    });
  }
  function ShowTabContent(i = 0) {
    tabsContent[i].style.display = "block";
    tabs[i].classList.add("tabheader__item_active");
  }
  hideTibeContent();
  ShowTabContent();

  tabsParent.addEventListener("click", (e) => {
    const target = e.target;
    if (target && target.classList.contains("tabheader__item")) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTibeContent();
          ShowTabContent(i);
        }
      });
    }
  });

  // timer
  const dedline = "2022-01-13";

  function getTimeRemaining(endTime) {
    const t = Date.parse(endTime) - Date.parse(new Date()); 
    const days = Math.floor(t / (1000 * 60 * 60 * 24)); 
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const seconds = Math.floor((t / 1000) %60);
  }