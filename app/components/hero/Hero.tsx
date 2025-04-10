import { Button } from "@/components/ui/button";
import { contents } from "./contents";
import Image from "next/image";
import { Ratings } from "./components/ratings";
import styles from "./hero.module.css";
import portfolio from "./assets/portfolio.jpg";
import mudah from "./assets/mudah.png";
import slimming from "./assets/slimming.jpg";
import westwing from "./assets/westwing.jpg";
import tayara from "./assets/tayara.jpg";
import kritzer from "./assets/kritzer.jpg";

const Hero = ({ id }: { id: string }) => {
  return (
    <section className="mb-32" id={id}>
      <div className="container">
        <div className={`grid items-center gap-8 lg:grid-cols-1`}>
          <div className="mx-auto text-center flex max-w-screen-lg flex-col gap-6">
            <h1 className="text-3xl font-extrabold lg:text-6xl mb-5 text-center">{contents.heading}</h1>
            {
              contents.descs.map((content, index) => (
                <p key={index} className="text-balance text-muted-foreground lg:text-lg">{content}</p>
              ))
            }
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
            <Button asChild size="lg" className="bg-slate-700 hover:bg-slate-500 shadow-lg">
              <a href={contents.button.url}>{contents.button.text}</a>
            </Button>
            </div>
          </div>
          <Ratings />
          <div className={`${styles.container} hidden lg:block xlg:block`}>
            <div className={`${styles.row} ${styles.row_one} ${styles.scale} ${styles.animate_left} ${styles.timeline}`}>
              <Image priority src={portfolio} width={250} height={150} alt="portfolio" className={styles.item} />
              <Image priority src={mudah} width={250} height={150} alt="mudah" className={styles.item} />
              <Image priority src={slimming} width={250} height={150} alt="slimming world" className={styles.item} />
              <Image priority src={tayara} width={250} height={150} alt="tayara" className={styles.item} />
              <Image priority src={kritzer} width={250} height={150} alt="kritzer" className={styles.item} />
              <Image priority src={westwing} width={250} height={150} alt="westwing" className={styles.item} />
              <Image priority src={mudah} width={250} height={150} alt="mudah" className={styles.item} />
              <Image priority src={slimming} width={250} height={150} alt="slimming" className={styles.item} />
              <Image priority src={tayara} width={250} height={150} alt="tayara" className={styles.item} />
              <Image priority src={kritzer} width={250} height={150} alt="kritzer" className={styles.item} />
              <Image priority src={westwing} width={250} height={150} alt="westwing" className={styles.item} />
            </div>
            <div className={`${styles.row} ${styles.row_two} ${styles.scale} ${styles.animate_right} ${styles.timeline}`}>
              <Image priority src={mudah} width={250} height={150} alt="mudah" className={styles.item} />
              <Image priority src={tayara} width={250} height={150} alt="tayara" className={styles.item} />
              <Image priority src={kritzer} width={250} height={150} alt="kritzer" className={styles.item} />
              <Image priority src={westwing} width={250} height={150} alt="westwing" className={styles.item} />
              <Image priority src={mudah} width={250} height={150} alt="mudah" className={styles.item} />
              <Image priority src={portfolio} width={250} height={150} alt="portfolio" className={styles.item} />
              <Image priority src={slimming} width={250} height={150} alt="slimming" className={styles.item} />
              <Image priority src={tayara} width={250} height={150} alt="tayara" className={styles.item} />
              <Image priority src={kritzer} width={250} height={150} alt="kritzer" className={styles.item} />
              <Image priority src={slimming} width={250} height={150} alt="slimming" className={styles.item} />
              <Image priority src={westwing} width={250} height={150} alt="westwing" className={styles.item} />
            </div>
            <div className={`${styles.row} ${styles.row_one} ${styles.scale} ${styles.animate_left} ${styles.timeline}`}>
              <Image priority src={mudah} width={250} height={150} alt="mudah" className={styles.item} />
              <Image priority src={slimming} width={250} height={150} alt="slimming" className={styles.item} />
              <Image priority src={tayara} width={250} height={150} alt="tayara" className={styles.item} />
              <Image priority src={portfolio} width={250} height={150} alt="portfolio" className={styles.item} />
              <Image priority src={kritzer} width={250} height={150} alt="kritzer" className={styles.item} />
              <Image priority src={westwing} width={250} height={150} alt="westwing" className={styles.item} />
              <Image priority src={mudah} width={250} height={150} alt="mudah" className={styles.item} />
              <Image priority src={slimming} width={250} height={150} alt="slimming" className={styles.item} />
              <Image priority src={tayara} width={250} height={150} alt="tayara" className={styles.item} />
              <Image priority src={kritzer} width={250} height={150} alt="kritzer" className={styles.item} />
              <Image priority src={westwing} width={250} height={150} alt="westwing" className={styles.item} />
            </div>
          </div>
          <Image
            src={contents.image.src}
            alt={contents.image.alt}
            className={`w-full rounded-md object-contain block md:block lg:hidden xlg:hidden`}
            width={1000}
            height={1000}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export { Hero };
