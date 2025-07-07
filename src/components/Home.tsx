import { Typewriter } from "react-simple-typewriter";

const Home = () => (
  <section
    id="home"
    className="relative h-screen bg-cover bg-center bg-no-repeat bg-fixed"
    style={{
      backgroundImage:
        "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/homeback.jpg')",
    }}
  >
    <div className="relative z-10 container mx-auto h-full flex">
      <div className="w-1/2"></div>

      <div className="w-full md:w-1/2 mx-auto md:ml-auto flex flex-col justify-center text-white pr-12 space-y-4 select-none text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide">
          HI, I AM GAURAV SUBEDI
        </h1>

        <h2 className="h-12 text-3xl text-orange-400 font-semibold my-10">
          <Typewriter
            words={[
              "Aspiring Software Engineer",
              "AI/ML Enthusiast",
              "Computer Science Student",
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </h2>

        <p className="text-2xl font-medium">Who loves learning by doing</p>

        <a
          href="#contact"
          className="px-4 py-2 bg-orange-600 hover:bg-orange-400 transition rounded-full font-bold w-34 text-lg"
        >
          Contact Me
        </a>
      </div>
    </div>
  </section>
);

export default Home;
