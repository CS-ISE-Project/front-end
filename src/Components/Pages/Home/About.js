function About() {
  return (
    <div>
      <h1 className="font-regular text-Typo font-Natasha md:text-[4rem] text-[2rem] text-center mb-[5vw]">

      About
      </h1>
      <div className="flex w-full px-[8vw] flex-col gap-8 max-md:text-center lg:text-[1.6rem] md:text-[1.4rem] text-[1.1rem] font-Gilroy text-[Typo] md:bg-About-image  lg:bg-[length:50vh_50vh] md:bg-[length:38vh_38vh] bg-no-repeat md:bg-center">
        <div>
          <p className="text-center">

          Welcome to 'Article Harbor' your platform dedicated to cutting-edge scientific research.
           We created 'Article Harbor' with the aim of providing a welcoming and intuitive environment,
            allowing researchers from around the world to discover, explore, and save high-quality scientific articles.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:gap-[12vw]">
          <div className="flex flex-col md:gap-[25vh] lg:gap-[9vw] xl:gap-[8vw] text-center md:text-left">
            <p className="lg:pr-[12vw]">
            At 'Article Harbor' we place scientific credibility at the heart of our mission. Our editorial processes are 
            rigorous, ensuring the accuracy of information.
            </p>
            <p>
              Furthermore, our moderators are empowered to correct any potential
              errors, ensuring a reliable and accurate database. Enjoy advanced
              features, including targeted search, easy article saving, and
              collaborative tools.
            </p>
          </div>
          <div className="flex flex-col md:gap-[8vw] lg:gap-[5vw] xl:gap-[6vw] text-center md:text-right">
            <p>
              Our vision extends beyond a simple platform. We aspire to play a
              significant role within the scientific community by fostering
              dynamic knowledge exchange.
            </p>
            <p className="xl:pl-[5vw] lg:pl-[7vw] md:pl-[10vw]">
            'Article Harbor' also strives to ensure transparent access to a diverse database, 
            covering a wide range of scientific fields.
            </p>
          </div>
        </div>

        <div>
          <p className="text-center">
            We invite you to join us in this exciting adventure. Together, let's
            push the boundaries of scientific research and create a
            collaborative environment conducive to innovation and discovery..
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
