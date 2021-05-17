(function (window, document) {
  "use stric";
  const toggles = document.querySelectorAll(".toggle"); // NodeList
  const toggleBtn = document.querySelector(".toggle-btn");

  toggleBtn.addEventListener("click", function () {
    toggleElements();
  });
  console.log(toggleBtn);
  function toggleElements() {
    [].forEach.call(toggles, function (toggle) {
      toggle.classList.toggle("on");
      // toggle이라는 클래스를 가지고 있는 요소에 'on'이라는 클래스를 지속적으로 토글(보였다가, 사라졌다가)하겠다. 언제? toggleElements 함수가 실행될 때
    });
  }
})(window, document);
