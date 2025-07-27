<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rock Paper Scissor</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
  <link href="./style.css" rel="stylesheet">
  <script src="./index.js"></script>
</head>
<body>
  <div class="pixel-text" >
    <h6>ROCK PAPER SCISSORS ?</h6>
  </div>
   <img class="cloud cloud-big cloud1" src="cloud1.png" alt="Cloud">
  <img class="cloud cloud-small cloud2" src="cloud2.png" alt="Cloud">
  <img class="cloud cloud-big cloud3" src="cloud1.png" alt="Cloud">
  <img class="cloud cloud-small cloud4" src="cloud2.png" alt="Cloud">
  <img class="cloud cloud-big cloud1" src="cloud1.png" alt="Cloud">
  <img class="cloud cloud-small cloud2" src="cloud2.png" alt="Cloud">
  <img class="cloud cloud-big cloud3" src="cloud1.png" alt="Cloud">
  <img class="cloud cloud-small cloud4" src="cloud2.png" alt="Cloud">
  <img class="cloud cloud-big cloud1" src="cloud1.png" alt="Cloud">
  <img class="cloud cloud-small cloud2" src="cloud2.png" alt="Cloud">
  <img class="cloud cloud-big cloud3" src="cloud1.png" alt="Cloud">
  <img class="cloud cloud-small cloud4" src="cloud2.png" alt="Cloud">
  <div class="button-row">
    <button class="img-button" onclick="rock()">
      <img src="./rock.png" alt="Rock">
    </button>
    <button class="img-button" onclick="paper()">
      <img src="./paper.png" alt="Paper">
    </button>
    <button class="img-button" onclick="scissors()">
      <img src="./scissors.png" alt="Scissors">
    </button>
    <button style="background-color: pink;border-radius: 10%; width: 1.6in; height: 1.1in; opacity: 80%;;" class="img-button" onclick="
    score.wins = 0;
    score.loses = 0;
    score.ties = 0;
    ">
      Reset Score
    </button>
  </div>
  <audio autoplay loop hidden id="bgMusic">
    <source src="./audio.mp3" type="audio/mpeg">
  </audio>
<script>
  document.addEventListener('click', () => {
    const audio = document.getElementById('bgMusic');
    audio.muted = false;
  });
</script>
</body>
</html>
