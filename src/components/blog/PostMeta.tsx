import { formatDate } from "@/lib/resources";

export default function PostMeta({ published, updated, minutes, className = "" }: { published: string; updated?: string; minutes: number; className?: string }) {
  return (
    <p className={`text-sm text-muted ${className}`}>
      <time dateTime={published}>{formatDate(published)}</time>
      {updated && updated !== published && (<> <span aria-hidden="true">·</span> Updated <time dateTime={updated}>{formatDate(updated)}</time></>)}{" "}
      <span aria-hidden="true">·</span> {minutes} min read
    </p>
  );
}
