// This script generates the HTML for the "Projects" section in the mobile view, showcasing various projects with details and links.
const projectScreen = document.querySelector(".projectscreen");
projectScreen.innerHTML = `
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
          Clan Circle is a Mobile app. A community-driven platform that 
          helps users increase engagement on
          their posts and maximize their
          earnings <span id="clanseemore" class="seemore">see more</span>
        </div>
        <div class="stack">
          <div><span>React Native</span><span> <img
            src="./cancel.png"
            class="cancel"
            alt="x"
          /></span></div>
          <div><span>Firebase</span><span> <img
            src="./cancel.png"
            class="cancel"
            alt="x"
          /></span></div>
          <div><span>Expo</span><span> <img
            src="./cancel.png"
            class="cancel"
            alt="x"
          /></span></div>
          <div><span>Android Studio</span><span> <img
            src="./cancel.png"
            class="cancel"
            alt="x"
          /></span></div>
        </div>
        <div>
        <img
        src="./clancircle/one.jpg"
        class="sectionimage"
        alt="welcome art image"
      />
      <div class="bottom">
        <a class="bottomlink" href="https://clancircle.mutalibb.xyz" target="_blank">
         <div class="bottomchild">
          <div>
            <img
            src="./eye.png"
            class="bottomimage"
            alt="welcome art image"
          />
         </div>
          <div class="bottomtext"> see live</div>
        </div>
      </a>
        
      <div id="clancirclebtn" class="bottomlink" href="https://clancircle.mutalibb.xyz" target="_blank">
        <div class="bottomchild">
          <div>
           <img
            src="./retweet.png"
            class="bottomimage"
            alt="welcome art image"
          />
        </div>
          <div class="bottomtext">details</div>
         
        </div>
      </div>
       
       
        <div class="bottomchild">
          <div>
            <img
            src="./share.png"
            class="bottomimage"
            alt="welcome art image"
          />
        </div>
          <div class="bottomtext">share</div>
        </div>
      </div>
    </div>
      </div>
    </div>
    <hr class="divider"/>
    
    <!--for blogit-->
    <div class="sectionbody">
      <div class="sectionimgcover">
        <img
        src="./blogit/one.jpg"
        class="sectionimg"
        alt="welcome art image"
      />
      </div>
     
      <div class="column">
        <div class="namecover">
          <div class="sectinname">BlogIt</div>
          <div class="sectionusername">@Topking</div>
          <div class="date">12/8/2020</div>
        </div>
        <div class="sectiontext">
         A  web blog app that allow users to post anonymously and still
         have control over their contents. 
         Readers and writers dont have to register 
         before using it, making accessibility 
         faster.  <span id="blogitseemore" class="seemore">see more</span>
        </div>
        <div class="stack">
          <div><span>reactjs</span><span> <img
            src="./cancel.png"
            class="cancel"
            alt="x"
          /></span></div>
          <div><span>nodejs</span><span> <img
            src="./cancel.png"
            class="cancel"
            alt="x"
          /></span></div>
          <div><span>expressJs</span><span> <img
            src="./cancel.png"
            class="cancel"
            alt="x"
          /></span></div>
          <div><span>Axios</span><span> <img
            src="./cancel.png"
            class="cancel"
            alt="x"
          /></span>
        </div>
        <div><span>Vercel</span><span> <img
          src="./cancel.png"
          class="cancel"
          alt="x"
        /></span>
      </div>
        </div>
        <div>
        <img
        src="./blogit/one.jpg"
        class="sectionimage"
        alt="welcome art image"
      />
      <div class="bottom">
        <a class="bottomlink" href="https://blogit.mutalibb.xyz" target="_blank">
        <div class="bottomchild">
          <div><img
            src="./eye.png"
            class="bottomimage"
            alt="welcome art image"
          /></div>
          <div class="bottomtext"> see live</div>
         
        </div>
        </a>

        <div id="bloginbtn" class="bottomlink" href="https://clancircle.mutalibb.xyz" target="_blank">
        <div class="bottomchild">
          <div><img
            src="./retweet.png"
            class="bottomimage"
            alt="welcome art image"
          /></div>
          <div class="bottomtext">details</div>
         
        </div>
        </div>
       
        <div class="bottomchild">
          <div>
            <img
            src="./share.png"
            class="bottomimage"
            alt="welcome art image"
          />
        </div>
          <div class="bottomtext">share</div>
        </div>
      </div>
    </div> 
      </div>
    </div>
    <hr class="divider"/>
    
     <!--for roko-->

    <div class="sectionbody">
      <div class="sectionimgcover">
        <img
        src="./roko/one.png"
        class="sectionimg"
        alt="welcome art image"
      />
      </div>
     
      <div class="column">
        <div class="namecover">
          <div class="sectinname">Roko Note</div>
          <div class="sectionusername">@Topking</div>
          <div class="date">12/8/2020</div>
        </div>
        <div class="sectiontext">
         A Note taking web app, It's Designed to be both handy and user-friendly, it’s
         perfect for capturing and organizing your thoughts on
         the go. <span id="rokoseemore" class="seemore">see more</span>
        </div>
        <div class="stack">
          <div><span>React Native</span><span> <img
            src="./cancel.png"
            class="cancel"
            alt="x"
          /></span></div>
          <div><span>MongoDb</span><span> <img
            src="./cancel.png"
            class="cancel"
            alt="x"
          /></span></div>
          <div><span>expressjs</span><span> <img
            src="./cancel.png"
            class="cancel"
            alt="x"
          /></span></div>
          <div><span>React</span><span> <img
            src="./cancel.png"
            class="cancel"
            alt="x"
          /></span></div>
          <div><span>nodejs</span><span> <img
            src="./cancel.png"
            class="cancel"
            alt="x"
          /></span></div><div><span>mui</span><span> <img
            src="./cancel.png"
            class="cancel"
            alt="x"
          /></span></div>
        </div>
        <div>
        <img
        src="./roko/three.png"
        class="sectionimage"
        alt="welcome art image"
      />
      <div class="bottom">
        <a class="bottomlink" href="https://roko.mutalibb.xyz" target="_blank" >
        <div class="bottomchild">
          <div><img
            src="./eye.png"
            class="bottomimage"
            alt="welcome art image"
          /></div>
          <div class="bottomtext"> see live</div>
         
        </div>
        </a>

        <div id="rokonotebtn" class="bottomlink"  target="_blank">
        <div class="bottomchild">
          <div><img
            src="./retweet.png"
            class="bottomimage"
            alt="welcome art image"
          /></div>
          <div class="bottomtext">details</div>
         
        </div>
        </div>
        
        <div class="bottomchild">
          <div><img
            src="./share.png"
            class="bottomimage"
            alt="welcome art image"
          /></div>
          <div class="bottomtext">share</div>
         
        </div>
       
      </div>
    </div>
   
        
      </div>
      
    </div>
    <hr class="divider"/>

     <!--for domostore-->
    <div class="sectionbody">
      <div class="sectionimgcover">
        <img
      src="./img/demostore.jpeg"
      class="sectionimg"
      alt="welcome art image"
    />
      </div>
      
      <div class="column">
        <div class="namecover">
          <div class="sectinname">Demo Store</div>
          <div class="sectionusername">@Topking</div>
          <div class="date">12/8/2020</div>
        </div>
        <div class="sectiontext">
          Developed a clothing store web app. I made the UI interactive
          and provided a good user experience. Users can view a lot of
          options without having to navigate through multiple routes.
          The colors are well-chosen, complementing the beautiful
          clothing and making the site vibrant and colorful.
          <span id="demoseemore" class="seemore">see more</span>
        </div>
        <div class="stack">
          <div><span>React</span><span> <img
            src="./cancel.png"
            class="cancel"
            alt="x"
          /></span></div>
          <div><span>CSS</span><span> <img
            src="./cancel.png"
            class="cancel"
            alt="x"
          /></span></div>
          <div><span>Vite</span><span> <img
            src="./cancel.png"
            class="cancel"
            alt="x"
          /></span></div>
          <div><span>Vercel</span><span> <img
            src="./cancel.png"
            class="cancel"
            alt="x"
          /></span></div>
        </div>
        <div>
        <img
        src="./img/demostore.jpeg"
        class="sectionimage"
        alt="welcome art image"
      />
      <div class="bottom">
        <a class="bottomlink" href="https://demostore-delta.vercel.app/" target="_blank">
        <div class="bottomchild">
          <div><img
            src="./eye.png"
            class="bottomimage"
            alt="welcome art image"
          /></div>
          <div class="bottomtext"> see live</div>
         
        </div>
        </a>
       
        <div id="demostorebtn" class="bottomlink"  target="_blank" class="btn btn-secondary">
        <div class="bottomchild">
          <div><img
            src="./retweet.png"
            class="bottomimage"
            alt="welcome art image"
          /></div>
          <div class="bottomtext">details</div>
         
        </div>
        </div>
       
        <div class="bottomchild">
          <div><img
            src="./share.png"
            class="bottomimage"
            alt="welcome art image"
          /></div>
          <div class="bottomtext">share</div>
         
        </div>
       
      </div>
    </div>  
      </div>  
    </div>
    <hr class="divider"/>
    
      <!--wii App-->
    <div class="sectionbody">
      <div class="sectionimgcover">
        <img
        src="./img/wiiapp.png"
        class="sectionimg"
        alt="welcome art image"
      />
      </div>
    
      <div class="column">
        <div class="namecover">
          <div class="sectinname">Wii App</div>
          <div class="sectionusername">@Topking</div>
          <div class="date">12/8/2020</div>
        </div>
        <div class="sectiontext">
          This is a demo project I developed to showcase my
          Next.js skills. It’s a full-stack messaging app
          designed for chatting, offering a smooth and
          user-friendly experience <span id="wiiseemore" class="seemore">see more</span>
        </div>
        <div class="stack">
          <div><span>Nextjs</span><span> <img
            src="./cancel.png"
            class="cancel"
            alt="x"
          /></span></div>
          <div><span>Tailwind</span><span> <img
            src="./cancel.png"
            class="cancel"
            alt="x"
          /></span></div>
          <div><span>PostgreSQL</span><span> <img
            src="./cancel.png"
            class="cancel"
            alt="x"
          /></span></div>
          <div><span>Typescript</span><span> <img
            src="./cancel.png"
            class="cancel"
            alt="x"
          /></span></div>
        </div>
        <div>
        <img
        src= "./img/wiiapp.png"
        class="sectionimage"
        alt="welcome art image"
      />
      <div class="bottom">
        <a class="bottomlink"  href="https://wii-app.vercel.app/" target="_blank">
        <div class="bottomchild">
          <div><img
            src="./eye.png"
            class="bottomimage"
            alt="welcome art image"
          /></div>
          <div class="bottomtext"> see live</div>
         
        </div>
        </a>

        <div id="wiibtn" class="bottomlink" target="_blank" class="btn btn-secondary"> 
        <div class="bottomchild">
          <div><img
            src="./retweet.png"
            class="bottomimage"
            alt="welcome art image"
          /></div>
          <div class="bottomtext">details</div>
         
        </div>
        </div>
       
        <div class="bottomchild">
          <div><img
            src="./share.png"
            class="bottomimage"
            alt="welcome art image"
          /></div>
          <div class="bottomtext">share</div>
        </div>
      </div>
    </div>
      </div>
      
    </div>
    <hr class="divider"/>
    

      <!--my profile-->
    <div class="sectionbody">
      <div class="sectionimgcover">
        <img
        src="./myprofile.png"
        class="sectionimg"
        alt="welcome art image"
      />
      </div>
    
      <div class="column">
        <div class="namecover">
          <div class="sectinname">Portfolio mobile view</div>
          <div class="sectionusername">@Topking</div>
          <div class="date">12/8/2020</div>
        </div>
        <div class="sectiontext">
         This is the mobile view of my Portfolio, it has three view based on the 
         screen size. <span id="profileseemore" class="seemore">see more</span>
        </div>
        <div class="stack">
          <div><span>HTML</span><span> <img
            src="./cancel.png"
            class="cancel"
            alt="x"
          /></span></div>
          <div><span>CSS</span><span> <img
            src="./cancel.png"
            class="cancel"
            alt="x"
          /></span></div>
          <div><span>Bootstrap</span><span> <img
            src="./cancel.png"
            class="cancel"
            alt="x"
          /></span></div>
          <div><span>javaScript</span><span> <img
            src="./cancel.png"
            class="cancel"
            alt="x"
          /></span></div>
          <div><span>jquery</span><span> <img
            src="./cancel.png"
            class="cancel"
            alt="x"
          /></span></div>
        </div>
        <div>
        <img
        src= "./myprofile.png"
        class="sectionimage"
        alt="welcome art image"
      />
      <div class="bottom">
        <a class="bottomlink" href="/" target="_blank">
        <div class="bottomchild">
          <div><img
            src="./eye.png"
            class="bottomimage"
            alt="welcome art image"
          /></div>
          <div class="bottomtext"> see live</div>
         
        </div>
        </a>
        <div id="profilebtn" class="bottomlink" href="https://clancircle.mutalibb.xyz" target="_blank">
        <div class="bottomchild">
          <div><img
            src="./retweet.png"
            class="bottomimage"
            alt="welcome art image"
          /></div>
          <div class="bottomtext">details</div>
         
        </div>
        </div>
        <div class="bottomchild">
          <div><img
            src="./share.png"
            class="bottomimage"
            alt="welcome art image"
          /></div>
          <div class="bottomtext">share</div>
        </div> 
      </div>
    </div>
  </div>  
</div>
    <hr class="divider"/>
`;
