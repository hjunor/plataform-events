import { gql, useQuery } from "@apollo/client";

interface ILesson {
  id: string;
  title: string;
}

const GET_LESSONS_QUERY = gql`
  query MyQuery {
    lessons {
      id
      title
    }
  }
`;

function App() {
  const { data } = useQuery<{ lessons: ILesson[] }>(GET_LESSONS_QUERY);
  console.log(data);
  return (
    <div>
      <ul>
        {data?.lessons.map((lesson: ILesson) => (
          <>
            <li>{lesson.title}</li>
            <li>{lesson.id}</li>
          </>
        ))}
      </ul>
    </div>
  );
}

export default App;
