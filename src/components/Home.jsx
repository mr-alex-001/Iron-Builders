import './Home.css'
function Home() {
    return (

      <section>
        <div className="video-background">
          <video autoPlay loop muted playsInline>
            <source
              src="https://assets.mixkit.co/videos/27543/27543-720.mp4"
            //   type="video/webm"
            />
          </video>
          <div className="content">
            <h1 id="content">IRON BUILDERS</h1>
            <p>Make your family safe with Iron Builders</p>
          </div>
        </div>
        <button class="btn">Get Started</button>
      </section>
    );
  }
  
  export default Home;
  