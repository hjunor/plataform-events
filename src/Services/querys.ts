import { gql } from "@apollo/client";

export interface ILesson {
  id: string;
  title: string;
  slug: string;
  availableAt: Date;
  lessonType: "live" | "class";
}

export interface GetLessonBySlugResponse {
  lesson: {
    title: string;
    videoId: string;
    description: string;
    teacher: {
      bio: string;
      avatarURL: string;
      name: string;
    };
  };
}
export const GET_LESSONS_QUERY = gql`
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

export const GET_SLUG_QUERY = gql`
  query GetSlugBy($slug: String) {
    lesson(where: { slug: $slug }, orderBy: availableAt_ASC, stage: PUBLISHED) {
      title
      videoId
      description
      teacher {
        bio
        avatarURL
        name
      }
    }
  }
`;
