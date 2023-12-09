<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  @viteReactRefresh
  @vite("resources/js/app.jsx")
</head>
<body>
    <div id="app"></div>
    <script src="{{ mix('js/app.jsx') }}"></script>
</body>
</html>
