// Functions for each action-command.

function help(){
  return "<h2><span style=\"color:#eb926d;\">Help:</span></h2><table>\
  <tr>\
    <td>all</td>\
    <td>Get all datas</td>\
  </tr>\
  <tr>\
    <td>about</td>\
    <td>Inspecting Alexis Parent</td>\
  </tr>\
  <tr>\
    <td>contact</td>\
    <td>How to get in touch with Alexis Parent</td>\
  </tr>\
  <tr>\
    <td>projects</td>\
    <td>See the projects list</td>\
  </tr>\
  </table>";
}

function contact(){
  return "<h2><span style=\"color:#cc6666;\">Contact:</span></h2><table>\
  <tr>\
    <td>Email</td>\
    <td><a href=\"mailto:parentalexis62@gmail.com\">parentalexis62@gmail.com</a></td>\
  </tr>\
  <tr>\
    <td>Telephone</td>\
    <td><a href=\"tel:0629104705\">0629104705</a></td>\
  </tr>\
  <tr>\
    <td>LinkedIn</td>\
    <td><a href=\"https://www.linkedin.com/in/alexis-parent-74505120b/\" target=\"_blank\">https://www.linkedin.com/in/alexis-parent-74505120b/</a></td>\
  </tr>\
  </table>";
}

function about(){
  return "<p>Je suis étudiant à l'Université de Paris 8 en Arts et Technologies de l'Image, cherchant à me spécialiser dans mon domaine qu'est la programmation et la création de jeux vidéo / expériences immersives (Réalité Virtuelle, Augmentée et Mixte) - tout en améliorant mes compétences graphiques et artistiques. \n\nAyant toujours été attiré par ces domaines, j'ai commencé par apprendre la programmation et ses fondements en autodidacte avant d'en faire mon sujet d'études. J'ai donc depuis fait plusieurs projets personnels et scolaires se basant principalement sur Unity ou Python, comme des jeux vidéo et expérimentations sous Unity, des programmes d'automatisation de tâches sous Python, ou encore plus récemment des expériences immersives sous Unity et Python chez Small by Mac Guff.</p>";
}

function projects(){
  return "<span style=\"color: #b5bd68;\"><h2>Projects:</h2></span><ul>\
  <li><a href=\"https://www.youtube.com/watch?v=GzUb9cOxbaw&ab_channel=AlexisParent\" target=\"_blank\" style=\"color: #8c8cde;\"> 00_Helrom.mp4</a></li>\
  <li><a href=\"https://www.youtube.com/watch?v=ldkfhMViWW0&ab_channel=AlexisParent\" target=\"_blank\" style=\"color: #8c8cde;\"> 01_Universim_Tycoon.mp4</a></li>\
  <li><a href=\"https://www.youtube.com/watch?v=VXdOvupJQsw&ab_channel=AlexisParent\" target=\"_blank\" style=\"color: #8c8cde;\"> 02_Inverse_Kinematic.mp4</a></li>\
  <li><a href=\"https://www.youtube.com/watch?v=ETHyrzOOgKQ&ab_channel=AlexisParent\" target=\"_blank\" style=\"color: #8c8cde;\"> 03_Procedural_Generation.mp4</a></li>\
  <li><a href=\"https://www.youtube.com/watch?v=5JTDmDNGiBc&ab_channel=AlexisParent\" target=\"_blank\" style=\"color: #8c8cde;\"> 04_Fibonnaci_Generation.mp4</a></li>\
  <li><a href=\"https://www.youtube.com/watch?v=M1o3Z3TP20c&ab_channel=AlexisParent\" target=\"_blank\" style=\"color: #8c8cde;\"> 05_Shader_Water.mp4</a></li>\
  <li><a href=\"src/06_UnrealVideur_Build.zip\" target=\"_blank\" style=\"color: #8c8cde;\"> 06_UnrealVideur.zip</a></li>\
  <li><a href=\"https://www.youtube.com/watch?v=C2xAV9Pygsw&ab_channel=AlexisParent\" target=\"_blank\" style=\"color: #8c8cde;\"> 07_Animation_Chainee.mp4</a></li>\
  <li><a href=\"src/09_Dragon_Photogrammetrie.png\" target=\"_blank\" style=\"color: #8c8cde;\"> 08_Dragon_Photogrammetrie.png</a></li>\
  <li><a href=\"https://www.instagram.com/astropodis/\" target=\"_blank\" style=\"color: #8c8cde;\"> 09_astropodis.html - A Python Instagram Bot</a></li>\
  <li><a href=\"https://www.youtube.com/watch?v=dd6TIQ-NIbg&ab_channel=Alexis\" target=\"_blank\" style=\"color: #8c8cde;\"> 10_Machine_Learning_Unity.mp4</a></li>\
  <li><a href=\"https://www.youtube.com/watch?v=8tp_rQvIplI&ab_channel=AlexisParent\" target=\"_blank\" style=\"color: #8c8cde;\"> 11_CubeLand_Minecraft_Like.mp4</a></li>\
  <li><a href=\"https://www.youtube.com/watch?v=tsJbtTMlOqI&ab_channel=AlexisParent\" target=\"_blank\" style=\"color: #8c8cde;\"> 12_Le_Souffle_Emporte.mp4</a></li>\
  <li><a href=\"https://www.youtube.com/watch?v=lTvr4SeCQsg&ab_channel=AlexisParent\" target=\"_blank\" style=\"color: #8c8cde;\"> 13_Kingdom_Hearts_Sound_Design_Rework.mp4</a></li>\
  </ul>";
}

// Main Function
function commandProcessor(e){

  //Check if the enter key is pressed
  if(e.keyCode == 13){

    //Clear the area where info will be printed
    document.getElementById('injected').innerHTML= "";

    //Get user input
    var txtInput = document.getElementById('txtBox').value;

    //Select what info to print according to command
    if(txtInput == "help"){
      document.getElementById('injected').innerHTML=help();
    }else if (txtInput=="all") {
      document.getElementById('injected').innerHTML=about() + "\n\n\n" + projects() + "\n\n\n" + contact();
    }else if (txtInput == "about") {
      document.getElementById('injected').innerHTML=about();
    }else if (txtInput == "contact") {
      document.getElementById('injected').innerHTML=contact();
    }else if (txtInput=="projects") {
      document.getElementById('injected').innerHTML=projects();
    }else{
      document.getElementById('injected').innerHTML = help();
    }

    //Clear input text box
    document.getElementById('txtBox').value= "";
  }
}
