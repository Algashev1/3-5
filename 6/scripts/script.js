function clickAction1() {
  alert("Вы нажали на кнопку");
}

function clickAction2() {
  alert("Вы нажали на кнопку с котёнком");
}

function clickAction3() {
  alert("Вы нажали на красную круглую  кнопку");
}

function clickAction4() {
  alert("АААААААААААААА!!!!!!!");
}

function clickAction5() {
  // .prop() - возвращает / изменяет значение свойств выбранных элементов.
  const status = $("#disabled-btn").prop("disabled");
  $("#disabled-btn").prop("disabled", status ? false : true);
}
