import Image from "next/image";
import { IKpiCard } from "./interfaces";
import Link from "next/link";

export const KPI_Card = ({ item }: IKpiCard) => {
  return (
    <>
      {
        item.kpi.map((kpi, key) => (
          <article key={key} className={`text-center ${key === 0 ? `px-2` : ""} ${key < 2 && item.kpi.length > 1 ? `border-e-[1px]` : null} w-full text-sm lg:text-xl flex flex-col items-center`}>
            <div className="basis-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-2 gap-2 md:gap-0 lg:gap-0 2xl:gap-0 items-center">
              <div className="flex flex-col items-center">
                <Image src={kpi.icon} width={25} height={25} alt="icon" />
                <h2 className="font-semibold truncate w-20 lg:w-full">{kpi.title}</h2>
                <p className="font-extrabold uppercase">{kpi?.metric}</p>
              </div>
              <Link
                href={item.link}
                target="_blank"
                className="bg-sky-600 m-auto py-1 px-3 pt-1.5 h-9 rounded-md items-center justify-center text-center text-white text-base flex gap-2 flex-row w-45 pl-6 transition-bg duration-200 hover:bg-sm hover:bg-sky-500"
              >
                Visit Website
                <Image
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1tb3ZlLXVwLXJpZ2h0LWljb24gbHVjaWRlLW1vdmUtdXAtcmlnaHQiPjxwYXRoIGQ9Ik0xMyA1SDE5VjExIi8+PHBhdGggZD0iTTE5IDVMNSAxOSIvPjwvc3ZnPg=="
                  width={24}
                  height={24}
                  alt={`Visit website`} />
              </Link>
            </div>
          </article>
        ))
      }
    </>
  )
}