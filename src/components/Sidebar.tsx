import useLessons from "../hook/useLessons";
import { Lesson } from "./Lesson";

export default function Sidebar() {
  const { GetTypeLessons, GetLessons } = useLessons();

  const data: any = GetTypeLessons();

  return (
    <aside className="w-[380px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map(
          ({ id, title, slug, availableAt, lessonType }: any) => (
            <Lesson
              key={id}
              title={title}
              slug={slug}
              availableAt={availableAt}
              type={lessonType}
            />
          )
        )}
      </div>
    </aside>
  );
}
