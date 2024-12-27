import Image from "next/image";
import classes from "./hero.module.css";
function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src={"/images/site/fdc.png"}
          alt="FDC image icon"
          width={300}
          height={300}
        />
      </div>
      <h1> FDC Dental Clinic</h1>
      <p> Be The Reason Someone Smile!</p>
    </section>
  );
}

export default Hero;
