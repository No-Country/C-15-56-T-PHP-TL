<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <title>Login</title>
  <style>
    body {
      background-color: #f8f9fa;
    }

    .login-container {
      max-width: 400px;
      margin: auto;
      margin-top: 100px;
    }
    body {
      background-color: #f8f9fa;
    }

    .welcome-container {
      text-align: center;
      margin-top: 100px;
    }
  </style>
</head>
<body>

<div class="container login-container">
<div class="container welcome-container">
  <h1><i class="fas fa-store"></i> Bienvenido a MERKATODO</h1>
</div>
  <h2 class="text-center mb-4">Inicio de Sesión</h2>
  <form>
    <div class="form-group">
      <label for="username">Usuario:</label>
      <input type="text" class="form-control" id="username" placeholder="Ingrese su usuario" required>
    </div>
    <div class="form-group">
      <label for="password">Contraseña:</label>
      <input type="password" class="form-control" id="password" placeholder="Ingrese su contraseña" required>
    </div>
    <button type="submit" class="btn btn-primary btn-block">Iniciar Sesión</button>
  </form>
</div>

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.0.8/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

</body>
</html>
