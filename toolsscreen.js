// This script populates the "Tools" section of the mobile view with a categorized list of skills and technologies.
const toolsScreen = document.querySelector(".toolsscreen");
toolsScreen.innerHTML = `
<div>
    <div class="pin">
      <div><img src="/img/pin.png"/></div>
      <div>I've used all the tools listed below in a project</div>
    </div>
    
      <div class="title">Frontend:</div>
      <div class="stack">
          <div>
            <span>React (Next.js, React Native, Expo)</span>
            <span>
            <img
            src="./cancel.png"
            class="cancel"
            alt="x"
          />
        </span>
        </div>
          <div><span>jQuery</span><span> <img
            src="./cancel.png"
            class="cancel"
            alt="x"
          /></span></div>

          <div><span>Bootstrap</span><span> <img
            src="./cancel.png"
            class="cancel"
            alt="x"
          /></span></div>
          <div><span>Vue.js</span><span> <img
            src="./cancel.png"
            class="cancel"
            alt="x"
          /></span></div>
          <div><span>TypeScript</span><span> <img
            src="./cancel.png"
            class="cancel"
            alt="x"
          /></span></div>
          <div><span>Expo Router</span><span> <img
            src="./cancel.png"
            class="cancel"
            alt="x"
          /></span></div>

          <div><span>vite</span><span> <img
            src="./cancel.png"
            class="cancel"
            alt="x"
          /></span></div>
          <div><span>Sass</span><span> <img
            src="./cancel.png"
            class="cancel"
            alt="x"
          /></span></div>
      </div>
     <hr/>

      <div class="title">Backend & APIs:</div>
      <div class="stack">
        <div>
          <span>Express.js</span>
          <span>
          <img
          src="./cancel.png"
          class="cancel"
          alt="x"
        />
      </span>
      </div>

      <div>
        <span>Firebase (Realtime Database, Authentication)</span>
        <span>
        <img
        src="./cancel.png"
        class="cancel"
        alt="x"
      />
    </span>
    </div>

    
    <div>
      <span>Auth.js (for authentication in Next.js)</span>
      <span>
      <img
      src="./cancel.png"
      class="cancel"
      alt="x"
    />
  </span>
  </div>
  <div>
    <span>nodejs</span>
    <span>
    <img
    src="./cancel.png"
    class="cancel"
    alt="x"
  />
</span>
</div>
 </div>
<hr/>
      
      
      <div class="title">Database:</div>

      <div class="stack">
        <div>
      <div>PostgreSQL (Vercel Postgres, @vercel/postgres)</div>
      <span></span>
          <span>
          <img
          src="./cancel.png"
          class="cancel"
          alt="x"
        />
      </span>
      </div>

      <div>
        <span>MongoDB</span>
        <span>
        <img
        src="./cancel.png"
        class="cancel"
        alt="x"
      />
    </span>
    </div>
    <div>
      <span>SQL</span>
      <span>
      <img
      src="./cancel.png"
      class="cancel"
      alt="x"
    />
  </span>
  </div>
 </div>
<hr/>
      
      <div class="title">Mobile Development:</div>
      <div class="stack">
        <div>
      <div>React Native (Expo, Expo Go)</div>
      <span></span>
          <span>
          <img
          src="./cancel.png"
          class="cancel"
          alt="x"
        />
      </span>
      </div>

      <div>
        <span>Kotlin</span>
        <span>
        <img
        src="./cancel.png"
        class="cancel"
        alt="x"
      />
    </span>
    </div>
 </div>
<hr/>



      <div class="title">DevOps & Hosting:</div>

      <div class="stack">
        <div>
      <div>Vercel (for deploying Next.js & other projects)</div>
      <span></span>
          <span>
          <img
          src="./cancel.png"
          class="cancel"
          alt="x"
        />
      </span>
      </div>

      <div>
        <span>Ubuntu Server (on VirtualBox)</span>
        <span>
        <img
        src="./cancel.png"
        class="cancel"
        alt="x"
      />
    </span>
    </div>

    <div>
      <span>WireGuard (self-hosted)</span>
      <span>
      <img
      src="./cancel.png"
      class="cancel"
      alt="x"
    />
  </span>
  </div>
  <div>
    <span>Apache (experimenting with local hosting on WSL)</span>
    <span>
    <img
    src="./cancel.png"
    class="cancel"
    alt="x"
  />
</span>
</div>
<div>
  <span>DigitalOcean </span>
  <span>
  <img
  src="./cancel.png"
  class="cancel"
  alt="x"
/>
</span>
</div>
 </div>
<hr/>

      
      <div class="title">Other Tools & Languages:</div>
      <div class="stack">
        <div>
      <div>Rust (learning)</div>
      <span></span>
          <span>
          <img
          src="./cancel.png"
          class="cancel"
          alt="x"
        />
      </span>
      </div>

      <div>
        <span>Inkscape (for creating icons)</span>
        <span>
        <img
        src="./cancel.png"
        class="cancel"
        alt="x"
      />
    </span>
    </div>
 </div>
  </div>
`;
