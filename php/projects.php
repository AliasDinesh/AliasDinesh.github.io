<!DOCTYPE html>
    <head>
      <meta charset= 'UTF-8'>
      <meta name='viewport' content= 'width=device-width, initial-scale=1.0, shrink-to-fit=no'>
      <link rel= 'stylesheet ' href= '../bootstrap/css/bootstrap.min.css'>
      <link rel= 'stylesheet ' href= '../css/portfolio.css'>
      <script src= 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js '></script>
      <title>Dineshs Portfolio</title>
    </head>
    <body>
      <header>
        <div class='container-fluid '>
          <nav class='navbar navbar-expand-md bg-dark navbar-dark rounded '>
            <a class='navbar-brand' href='projects.php'>Projects</a>
            <button class= 'navbar-toggler ' type= 'button ' data-toggle='collapse' data-target= '#collapsibleNavbar '>
              <span class= 'navbar-toggler-icon'></span>
            </button>
            <div class='collapse navbar-collapse' id='collapsibleNavbar '>
              <ul class= 'navbar-nav '>
                <li class= 'nav-item '>
                  <a class='nav-link' href='../index.html'>Home</a>
                </li>
                <li class= 'nav-item '>
                  <a class='nav-link' href='../skills.html '>Skills</a>
                </li>
                <li class= 'nav-item '>
                  <a class='nav-link' href='projects.php'>Projects</a>
                </li>
                <li class= 'nav-item '>
                  <a class='nav-link' href='../contact.html'>Contact</a>
                </li>
                <li class= 'nav-item '>
                  <a class='nav-link' href='../calculator.html '>Calculator</a>
                </li>
                <li class= 'nav-item '>
                  <a class='nav-link' href='../professional-profile.html '>Professional Profile</a>
                </li>
                <li class= 'nav-item '>
                  <a class='nav-link' href='../tictactoe.html'>Tic Tac Toe</a>
                </li>
                <li class= 'nav-item '>
                  <a class='nav-link theme-button '>Theme: Light</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <main>
        <div class='container projects'>
          <div class='row '>
          <?php
          try {
            $db = new PDO("mysql:host=localhost;dbname=portfolio", "root", "");
            $query = $db->prepare("SELECT * FROM projects");
            $query->execute();
            $projects = $query->fetchAll(PDO::FETCH_ASSOC);
          foreach ($projects as $project) : ?>
          <div class='col-md-4'>
            <div class='card text-center card-theme '>
              <div class='card-header '>
              <?= $project["title"]?>
              </div>
              <div class='card-body '>
                <a href='<?= $project["link"]?>' target= '_blank '><img class='card-img' height='300px' src='../img/<?= $project["img"]?>' alt='project'></a>
                <p class='card-text'><?= $project["description"]?><br>
              </div>
              <div class='card-footer text-muted'>
                <?= $project["date"]?>
              </div>
            </div>
          </div>
        <?php endforeach; ?>
        <?php  
          } catch (PDOException $e) {
            die("Error! :" . $e->getMessage());
          }
        ?>
          </div>
        </div>
      </main>
      <footer>
        <div class='container-fluid '>
          <div id= 'footer '>
            <div class='row '>
              <div class='col-12 text-light text-center '>
                @2021 Dinesh Alias
              </div>
            </div>
          </div>
        </div>
      </footer>
      <script src= '../bootstrap/js/jquery-3.5.1.min.js '></script>
      <script src= '../bootstrap/js/bootstrap.min.js'></script>
      <script src= '../js/main.js '></script>
    <!-- Code injected by live-server -->
    </html'





