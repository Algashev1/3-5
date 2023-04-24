$(document).ready(function () {
  // добавление события "нажатие на элемент с id 'first-text'"
  $("#first-text").click(
    // тут должна быть функция, которая будет обрабатывать нажатие на элемент
  );

  $("#first-text").click(function () {
    const htmlElement = '<p class="log-text">Вы нажали на красный текст</p>';
    $("#log-container").append(htmlElement);
  });

  $("#second-text").click(function () {
    const htmlElement = '<p class="log-text">Вы нажали на зелёный текст</p>';
    $("#log-container").append(htmlElement);
  });

  $("#block-1").click(function () {
    const htmlElement = '<p class="log-text">Вы нажали на красный квадрат</p>';
    $("#log-container").append(htmlElement);
  });

  $("#cat-image").click(function () {
    const htmlElement = '<p class="log-text">Вы нажали на котика</p>';
    $("#log-container").append(htmlElement);
  });
});
