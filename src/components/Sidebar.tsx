import { gql, useQuery } from "@apollo/client";
import { Lesson } from "./Lesson";

interface ILesson {
  id: string;
  title: string;
  slug: string;
  availableAt: Date;
  lessonType: "live" | "class";
}

const GET_LESSONS_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      title
      slug
      availableAt
      lessonType
    }
  }
`;

export default function Sidebar() {
  const { data } = useQuery<{ lessons: ILesson[] }>(GET_LESSONS_QUERY);
  console.log(data);
  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map(({ id, title, slug, availableAt, lessonType }) => (
          <Lesson
            key={id}
            title={title}
            slug={slug}
            availableAt={availableAt}
            type={lessonType}
          />
        ))}
      </div>
    </aside>
  );
}
