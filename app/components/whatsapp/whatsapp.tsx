import Link from "next/link";
import Image from "next/image";
import styles from "./whatsapp.module.css";

const MESSAGE = "Hey Zafar! I need you to help me with my next project.";
const MOBILE_NUMBER = "+351920824211";

export const ContactWhatsApp = () => {
  return (
    <Link href={`https://wa.me/${MOBILE_NUMBER}?text=${MESSAGE}`} className={styles.whatsapp}>
      <Image 
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmYWZhZmEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1tZXNzYWdlLWNpcmNsZSI+PHBhdGggZD0iTTcuOSAyMEE5IDkgMCAxIDAgNCAxNi4xTDIgMjJaIi8+PC9zdmc+"
        width={24}
        height={24}
        alt="Whats App Contact | Freelance Zafar Saleem"
      />
      WhatsApp
    </Link>
  )
}
