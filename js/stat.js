'use strict';

//Функция отрисовки прямоугольника
var drawRect = function(x, y, rectWidth, rectHeight, rectStyle, strStyle, ctx) {
  ctx.fillStyle = rectStyle;
  ctx.fillRect(x, y, rectWidth, rectHeight);
  ctx.strokeStyle = strStyle;
  ctx.strokeRect(x, y, rectWidth, rectHeight);
};

//Функция отрисовки текста
var drawText = function(text, x, y, textStyle, testFont, ctx) {
  ctx.fillStyle = textStyle;
  ctx.font = testFont;
  ctx.fillText(text, x, y);
};

//Функция выбора цвета столбца в зависимости от имени
var columnColor = function(name, myColumnColor, otherColumnColor) {
  if (name === 'Вы') {
      return myColumnColor;
  } else {
      return otherColumnColor;
  }
};

//Функция отрисовки одного столбца с подписями
var drawColumn = function(i, name, time, height, ctx, histoX, histoHeight, columnWidth, columnIndent, marginTop, myColumnColor, otherColumnColor) {
  ctx.fillStyle = columnColor(name, myColumnColor, otherColumnColor);
  ctx.fillRect(histoX + columnIndent * i, marginTop + histoHeight - height, columnWidth, height);
  ctx.textAlign = 'center';
  ctx.fillText(name, histoX + columnIndent * i + columnWidth / 2, marginTop + histoHeight + 20);
  ctx.fillText(time.toFixed(0), histoX + columnIndent * i + columnWidth / 2, marginTop + histoHeight - height - 5);
};

//Основная функция вывода результатов
window.renderStatistics = function(ctx, names, times) {

  //Отрисовка облака и тени
  drawRect(110, 20, 420, 270, 'rgba((0, 0, 0, 0.7)', 'rgba((0, 0, 0, 0.7)', ctx);
  drawRect(100, 10, 420, 270, 'white', 'gray', ctx);

  //Выод текста
  drawText('Ура, вы победили!', 130, 50, 'black', '16px PT Mono', ctx);
  drawText('Список результатов:', 130, 70, 'black', '16px PT Mono', ctx);

  //Определение максимального времени
  var maxTime = -1;
  for (var i = 0 ; i < times.length; i++ ) {
    var time = times[i];
    if (time > maxTime) {
      maxTime = time;
    }
  };

  //Константы для гистограммы
  var histoX = 140;
  var marginTop = 100;
  var histoHeight = 150;
  var columnWidth = 40;
  var columnIndent = 50 + columnWidth;
  var myColumnColor = 'rgba(255, 0, 0, 1)';
  var step = histoHeight / maxTime;

  //Отрисовка столбца для каждого игрока
  for (var i = 0; i < times.length; i++) {
    var name = names[i];
    var time = times[i];
    var height = step * time;
    var otherColumnColor = 'rgba(0, 0,' + (Math.random() * 255).toFixed(0) +', 1)';
    drawColumn(i, name, time, height, ctx, histoX, histoHeight, columnWidth, columnIndent, marginTop, myColumnColor, otherColumnColor);
    }
};
