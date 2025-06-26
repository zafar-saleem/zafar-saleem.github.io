"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import styles from "./styles.module.css";

type Props = {
  url: string;
  text: string;
}

export const CTAButton = ({ url, text }: Props) => {
  const ctaRef = React.useRef(null);
  const [boxPerspective, setBoxPerspective] = React.useState({
    rotateX: 0,
    rotateY: 0,
  });

  React.useLayoutEffect(() => {
    window.addEventListener("mousemove", (event) => {
      // @ts-expect-error: it does exist here.
      const box = ctaRef?.current?.getBoundingClientRect();

      const constraint = 30;
      const rotateX = (event.clientX - box.x - box.width / 2) / constraint;
      const rotateY = (event.clientY - box.y - box.height / 2) / constraint;
      
      setBoxPerspective({ rotateX, rotateY });
    })
  }, []);
  
  return (
    <Button
      asChild
      size="lg"
      className={`bg-slate-700 hover:bg-slate-700 shadow-lg ${styles.btn_cta}`}
      ref={ctaRef}
      style={{
        // @ts-expect-error: It is a known prop
        "--rotateX": `${boxPerspective.rotateX}deg`,
        "--rotateY": `${boxPerspective.rotateY}deg`,
      }}
    >
      <div>
        <a href={url}>
          <span className={styles.btn_cta_me}></span>  
          <span className={styles.btn_cta_label}>{text}</span>
          <span className={styles.btn_add}>+</span>
          <span className={styles.btn_cta_client}>You</span>  
        </a>
      </div>
    </Button>
  )
}
