<!doctype html>
<html class="no-js">
<head>
 <meta charset="utf-8" name="viewport" content="width=550, initial-scale=1">

<script defer src="https://use.fontawesome.com/releases/v5.0.9/js/all.js" integrity="sha384-8iPTk2s/jMVj81dnzb/iFR2sdA7u06vHJyyLlAd4snFpCl/SnyUjRrbdJsw1pGIl" crossorigin="anonymous"></script>
<link href="https://fonts.googleapis.com/css?family=Yeon+Sung" rel="stylesheet">

<link href="../css/estilosQ.css" rel="stylesheet" type="text/css" >
<link rel="stylesheet"  type="text/css" href="../bootstrap/dist/css/bootstrap.min.css">
<link rel="stylesheet" href="../css/jquery.flipster.min.css">
<script src="../js/jquery.min.js"></script>
<script src="../bootstrap/dist/js/bootstrap.js"></script>
<script src="../js/jquery.flipster.min.js"></script>


<link rel="stylesheet" href="../css/visuallightbox.css" type="text/css" />
<link rel="stylesheet" href="../css/vlightbox.css" type="text/css" />

<title>QATAR</title>
  

</head>
<body class="clQatar">

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style="background-color: rgba(62,2,82,0.8) !important;">

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
  
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="../index.html">Inicio <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="clHistoriaQ.php">Historia</a>
      <a class="nav-item nav-link" href="clGeografiaQ.php">Geografia</a>
      <a class="nav-item nav-link" href="clPoliticaQ.php">Politica</a>
      <a class="nav-item nav-link" href="clGastronomiaQ.php">Gastronomia</a>
      <a class="nav-item nav-link" href="clEducacionQ.php">Educación</a>
      <a class="nav-item nav-link" href="clCulturaQ.php">Cultura</a>
      <a class="nav-item nav-link" href="clTestQ.php">Test</a>
    </div>
  </div>
</nav>

<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel"  style="width: 700px; margin: 0 auto">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">

    <div class="carousel-item active">
      <img class="d-block w-100" src="../imagenes/Qatar/paisajeQ2.jpg" alt="First slide">
        <div class="carousel-caption">
          <h3>Doha</h3>
        </div>
    </div>

    <div class="carousel-item">
      <img class="d-block w-100" src="../imagenes/Qatar/paisajeQ7.jpg" alt="Second slide">
      <div class="carousel-caption">
          <h3>Chapman Taylor</h3>
      </div>
      
    </div>

    <div class="carousel-item">
      <img class="d-block w-100" src="../imagenes/Qatar/paisajeQ8.jpg" alt="Third slide">
        <div class="carousel-caption">
          <h3>Qatar's sea</h3>
        </div>
    </div>

  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</section>

<div id="con">
  <section id="sobreHistoriaQ">
    <h1>Historia</h1>
    <p>Qatar ha sido habitado desde el paleolítico. Los primeros habitantes conocidos fueron los cananeos. Más tarde el país estuvo bajo el poder de varios gobernantes, como Sargón I ....</p>

    <div id="slider">
      <div class="mySlides">
        <img src="../imagenes/Qatar/historiaQ/arquitectura.jpg">      
      </div>

      <div class="mySlides">
        <img src="../imagenes/Qatar/historiaQ/babilonia.jpg">   
      </div>

      <div class="mySlides">
        <img src="../imagenes/Qatar/historiaQ/cairo.jpg">
      </div>

      <div class="mySlides">
        <img src="../imagenes/Qatar/historiaQ/senefa.jpg">
      </div>

  </div>

  <script>
    var myIndex = 0;
    carousel();
    

    function carousel() {
   

      var i=0;
      var x = document.getElementsByClassName("mySlides");
      for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";  
      }
      myIndex++;
      if (myIndex > x.length) {myIndex = 1}    
      x[myIndex-1].style.display = "block";  
      setTimeout(carousel, 5000); 
  }
  </script>

  <a href="clHistoriaQ.php"><button>Saber más</button></a>
</section>

<section id="sobreHistoriaQ">
    <h1>Geografia</h1>
    <p>La península catarí se adentra 150 km en el golfo Pérsico desde Arabia Saudita. Gran parte del país es una planicie baja y estéril, cubierta de arena. Al sureste está el Khor al Adaid o "mar...</p>

    <div id="slider1">
      <div class="mySlides1">
        <img src="../imagenes/Qatar/geografiaQ/place3.jpg">      
      </div>

      <div class="mySlides1">
        <img src="../imagenes/Qatar/geografiaQ/place.png">   
      </div>

      <div class="mySlides1">
        <img src="../imagenes/Qatar/geografiaQ/desert.png">
      </div>

      <div class="mySlides1">
        <img src="../imagenes/Qatar/geografiaQ/mount.jpg">
      </div>

  </div>

  <script>
    var myIndex1 = 0;
    carousel1();
    

    function carousel1() {
   

      var i=0;
      var x = document.getElementsByClassName("mySlides1");
      for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";  
      }
      myIndex1++;
      if (myIndex1 > x.length) {myIndex1 = 1}    
      x[myIndex1-1].style.display = "block";  
      setTimeout(carousel1, 1000); 
  }
  </script>

  <a href="clGeografiaQ.php"><button>Saber más</button></a>
</section>
</div>
  



</body>
</html>
