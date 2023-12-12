<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  @viteReactRefresh
  @vite("resources/js/app.jsx")

  <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet">
</head>
<body>
    <div id="app"></div>
    <script src="{{ mix('js/app.jsx') }}"></script>
</body>
</html>
