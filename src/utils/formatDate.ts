import ptBR from "date-fns/locale/pt-BR";
import format from "date-fns/format";
import { parseISO } from "date-fns";

export const formatDate = (date: Date, type: string) => {
  const parsedDate = parseISO(date.toString());

  return format(parsedDate, type, {
    locale: ptBR,
  });
};
