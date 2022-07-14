import { useContext, useEffect } from "react";

import { UserContext } from "../context";
import {
  GetLessonsQuery,
  useGetLessonByTypeQuery,
  useGetLessonsQuery,
} from "../graphql/generated";
export default function useLessons() {
  const { isLessons, typeLessons, setTypeLessons, setIsLessons } =
    useContext(UserContext);

  function GetLessons(): any {
    try {
      const { data, loading, error } = useGetLessonsQuery();
      if (data) {
        return data;
      }
    } catch (error) {
      return [];
    }
  }

  function GetTypeLessons() {
    try {
      const { data } = useGetLessonByTypeQuery({
        variables: { type: typeLessons },
      });
      if (data) {
        return data;
      }
    } catch (error) {
      return [];
    }
  }

  return { isLessons, typeLessons, setTypeLessons, GetLessons, GetTypeLessons };
}
