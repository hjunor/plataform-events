import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import {
  useGetLessonsQuery,
  useGetLessonByTypeQuery,
} from "../graphql/generated";
interface UserContextData {
  isLessons: any | null;
  //GetLessons: () => void;
  typeLessons: any | null;
  setIsLessons: (isLessons: any) => void;
  setTypeLessons: (type: string) => void;
  // GetTypeLessons: (type: string) => void;
}

export const UserContext = createContext<UserContextData>(
  {} as UserContextData
);
interface UserContextProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserContextProps) => {
  const [isLessons, setIsLessons] = useState<any>(null);
  const [typeLessons, setTypeLessons] = useState<any>(null);

  return (
    <UserContext.Provider
      value={{
        isLessons,
        typeLessons,
        setTypeLessons,
        setIsLessons,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
