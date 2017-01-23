'use strict';

window.renderStatistics = function(ctx, names, times) {
  //Отрисовка облака и тени
  ctx.fillStyle = 'rgba((0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270);
  ctx.strokeStyle = 'gray';
  ctx.strokeRect(100, 10, 420, 270);

  //Выод текста
  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'black';
  ctx.fillText('Ура, вы победили!', 130, 50);
  ctx.fillText('Список результатов:', 130, 70);

  //Определение максимального времени
  var maxTime = 0;
  for(var i = 0 ; i < times.length; i++ ) {
    var time = times[i];
    if (time > maxTime) {
      maxTime = time;
    }
  }

  //Данные в задании константы для гистограммы
  var histoHeight = 150;
  var columnWidth = 40;
  var columnIndent = 50 + columnWidth;
  var myColumnColor = 'rgba(255, 0, 0, 1)';

  //Другие константы
  var histoX = 140;
  var step = histoHeight / maxTime;
  var marginTop = 100;

  //Отрисовка столбца для каждого игрока
  for (var i = 0; i < times.length; i++) {
    var name = names[i];
    var time = times[i];
    var height = step * time;

    //Цвет столбца в зависимости от имени
    var columnColor = function(name) {
      var otherColumnColor = 'rgba(0, 0,' + (Math.random() * 255).toFixed(0) +', 1)';
      if (name === 'Вы') {
          return myColumnColor;
          }
      else {
          return otherColumnColor;
          }
      };

    ctx.fillStyle = columnColor(name);
    ctx.fillRect(histoX + columnIndent * i, marginTop + histoHeight - height, columnWidth, height);
    ctx.textAlign = 'center';
    ctx.fillText(name, histoX + columnIndent * i + columnWidth / 2, marginTop + histoHeight + 20);
    ctx.fillText(time.toFixed(0), histoX + columnIndent * i + columnWidth / 2, marginTop + histoHeight - height - 5);
    };
};
