import { CheckCircle, Lock } from "phosphor-react";
import { formatDate } from "../utils/formatDate";
import { dateCompare } from "../utils/dateCompare";
import { Link } from "react-router-dom";
interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

export function Lesson({ title, slug, availableAt, type }: LessonProps) {
  const isDate = new Date().getTime();
  const isAvailable = new Date(availableAt).getTime();
  const isLessonAvailable = isDate > isAvailable ? true : false;
  const isDateNow = dateCompare(availableAt);

  const Styles = {
    formatDate: "EEEE '•' dd MMMM 'de' yyyy '•' k'h'mm",
    group: isDateNow ? "" : "group",
    date: "text-gray-300 capitalize ",
    pulse:
      "w-2 h-2 animate-ping absolute inline-flex  rounded-full bg-green-300 ",
    box: isDateNow
      ? " bg-green-500  relative rounded border border-gray-100 p-4 m-2 duration-300  hover:bg-green-300  ease-in"
      : "  rounded border border-gray-500 p-4 m-2 duration-300  group-hover:bg-gray-500 group-hover:border-green-500 ease-in",
    header: "flex items-center justify-between",
    Lesson: isLessonAvailable
      ? isDateNow
        ? "text-sm text-gray-100 font-medium flex items-center gap-2"
        : "text-sm text-blue-500 font-medium flex items-center gap-2"
      : isDateNow
      ? "text-sm text-gray-100 font-medium flex items-center gap-2"
      : "text-sm text-orange-500 font-medium flex items-center gap-2",
    type: isDateNow
      ? "text-xs rounded py-[0.125rem] px-2 text-white border border-gray-100 font-bold"
      : "text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold",
    title: isDateNow ? "text-gray-100 mt-5 block " : "text-gray-200 mt-5 block",
  };

  return (
    <Link to={`/event/lesson/${slug}`} className={Styles.group}>
      <span className={Styles.date}>
        {formatDate(availableAt, Styles.formatDate)}
      </span>
      {isDateNow && <span className={Styles.pulse}></span>}
      <div className={Styles.box}>
        <header className={Styles.header}>
          {isLessonAvailable ? (
            <span className={Styles.Lesson}>
              <CheckCircle size={20} />
              Conteúdo Liberado
            </span>
          ) : (
            <span className={Styles.Lesson}>
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span className={Styles.type}>
            {type === "live" ? "AO VIVO" : "AULA PRATICA"}
          </span>
        </header>
        <strong className={Styles.title}>{title}</strong>
      </div>
    </Link>
  );
}
