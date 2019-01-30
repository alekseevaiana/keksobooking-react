var XHR_TIMEOUT = 10 * 1000;

var getDataUrl = 'https://js.dump.academy/keksobooking/data';
var SUCCESS_CODE = 200;

export const getData = (onLoad, onError) => {
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.open('GET', getDataUrl + '?' + Math.random());
  xhr.addEventListener('load', function () {
    if (xhr.status === SUCCESS_CODE) {
      onLoad(xhr.response);
    } else {
      onError('Ошибка');
    }
  });

  xhr.send();

  xhr.addEventListener('error', function () {
    onError('Произошла ошибка соединения');
  });
  xhr.addEventListener('timeout', function () {
    onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
  });

  xhr.timeout = XHR_TIMEOUT;
};

