// This script populates the "Photos" section of the mobile view with image galleries.
const photoScreen = document.querySelector(".photoscreen");
photoScreen.innerHTML = `
 <div class="sectionbody">
    <div class="sectionimgcover">
      <img
      src="./clancircle/one.jpg"
      class="sectionimg"
      alt="welcome art image"
    />
    </div>
   
    <div class="column">
      <div class="namecover">
        <div class="sectinname">Clan Circle</div>
        <div class="sectionusername">@Topking</div>
        <div class="date">12/8/2025</div>
      </div>
      <div class="sectiontext">
       
      </div>
     
  <div class="imgebody">
    <img class="thumbnail" src="/clancircle/clanthirteen.jpg" data-full="/clancircle/clanthirteen.jpg" alt="13">
  <img class="thumbnail" src="/clancircle/clannine.jpg" data-full="/clancircle/clannine.jpg" alt="9">
  <img class="thumbnail" src="/clancircle/clanone.jpg" data-full="/clancircle/clanone.jpg" alt="1">
  <img class="thumbnail" src="/clancircle/clantwo.jpg" data-full="/clancircle/clantwo.jpg" alt="2">
  <img class="thumbnail" src="./clancircle/clanthree.jpg" data-full="clancircle/clanthree.jpg" alt="3">
  <img class="thumbnail" src="./clancircle/clanfour.jpg" data-full="clancircle/clanfour.jpg" alt="4">
  <img class="thumbnail" src="./clancircle/clanfive.jpg" data-full="clancircle/clanfive.jpg" alt="5">
  <img class="thumbnail" src="./clancircle/clansix.jpg" data-full="clancircle/clansix.jpg" alt="6">
  <img class="thumbnail" src="./clancircle/clanseven.jpg" data-full="clancircle/clanseven.jpg" alt="7">
  <img class="thumbnail" src="./clancircle/claneight.jpg" data-full="clancircle/claneight.jpg" alt="8">
  </div>
    </div>
  </div>
  <hr class="divider"/>

  <div class="sectionbody">
    <div class="sectionimgcover">
      <img
      src="./bitmoji.jpg"
      class="sectionimg"
      alt="welcome art image"
    />
    </div>
   
    <div class="column">
      <div class="namecover">
        <div class="sectinname">Others</div>
        <div class="sectionusername">@Topking</div>
        <div class="date">12/8/2025</div>
      </div>
      <div class="sectiontext">
       
      </div>
     
  <div class="imgebody">
  <img class="thumbnail" src="/others/clanone.png" data-full= "/others/clanone.png" alt="13">
  <img class="thumbnail" src="/others/clantwo.png" data-full= "/others/clantwo.png"  alt="9">
  <img class="thumbnail" src="/others/clanthree.png" data-full="/others/clanthree.png" alt="1">
  <img class="thumbnail" src="/others/clanfour.png"  data-full="/others/clanfour.png"   alt="2">
  <img class="thumbnail" src="/others/clanfive.png" data-full="/others/clanfive.png" alt="3">
  <img class="thumbnail" src="/others/clansix.png" data-full="/others/clansix.png" alt="4">
  <img class="thumbnail" src="/others/fashion.png" data-full= "/others/fashion.png" alt="5">
  <img class="thumbnail" src="/others/welcome.png" data-full= "/others/welcome.png"  alt="6">
  <img class="thumbnail" src="/others/blogit.png" data-full= "/others/blogit.png" alt="7">
  <img class="thumbnail" src="/img/cleaning.jpeg" data-full= "/img/cleaning.jpeg" alt="8">
  </div>
    </div>
  </div>
  <hr class="divider"/>
`;
