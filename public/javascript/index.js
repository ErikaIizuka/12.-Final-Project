  document.addEventListener('DOMContentLoaded', function() 
  {
    document.getElementById('btn').addEventListener('click', function() 
    {
      var result = document.getElementById('result');
      var xhr = new XMLHttpRequest();

      //Get the chosen prefecture
      var obj = document.getElementById('city');
      var idx = obj.selectedIndex;
      var prefecture = obj.options[idx].text;
      console.log(prefecture);

      xhr.addEventListener('loadstart', function() 
      {
        result.textContent = 'Loading';
      }, false);

      xhr.addEventListener('load', function() 
      {
        result.textContent = xhr.responseText;
      }, false);

      xhr.addEventListener('error', function() 
      {
        result.textContent = 'Server Error occured';
      }, false);

      xhr.open('POST', '/ajax', true);
      xhr.setRequestHeader('content-type',
        'application/x-www-form-urlencoded;charset=UTF-8');
      xhr.send('city=' +
        encodeURIComponent(document.getElementById('city').value) +
        '&prefecture=' +
        encodeURIComponent(prefecture));
    }, false);
  }, false);