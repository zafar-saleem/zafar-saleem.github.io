import Image from "next/image";
import { IKpiCard } from "./interfaces";

export const KPI_Card = ({ item }: IKpiCard) => {
  return (
    <>
      {
        item.kpi.map((kpi, key) => (
          <article key={key} className={`text-center ${key === 0 ? `px-2` : ""} ${key < 2 && item.kpi.length > 1 ? `border-e-[1px]` : null} w-full text-sm lg:text-xl flex flex-col items-center`}>
            <Image src={kpi.icon} width={25} height={25} alt="icon" />
            <h2 className="font-semibold truncate w-20 lg:w-full">{kpi.title}</h2>
            <p className="font-extrabold uppercase">{kpi?.metric}</p>
          </article>
        ))
      }
    </>
  )
}