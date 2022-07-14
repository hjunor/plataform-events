import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";
import bg from "../assets/code-mockup.png";
import useLessons from "../hook/useLessons";

export function Home() {
  const { setTypeLessons, GetTypeLessons } = useLessons();

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault(); // Previne que direcione para alguma página após o Submit dos dados o formulário
    await createSubscriber({
      variables: {
        name,
        email,
      },
    });

    navigate("/event");
  }

  function handleTech(tech: string) {
    setTypeLessons(tech);
    navigate("/event");
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Logo />

          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Plataforma de videos selecionados{" "}
            <strong className="text-blue-500">
              para aprender construir aplicações
            </strong>
            , usando as melhores tecnologias e
            <strong className="text-blue-500"> frameworks</strong>
          </h1>

          <p className="mt-4 text-gray-200 leading-relaxed">
            Criado com intuito de ajudar pessoas a aprender a construir
            aplicações usando as melhores tecnologias e frameworks.
          </p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">
            Selecione a Tech abaixo
          </strong>

          <button
            onClick={() => handleTech("go")}
            className="mt-4 w-full bg-orange-500 uppercase py-4 rounded font-bold text-sm flex justify-center items-center hover:bg-green-700 transition-colors disabled:opacity-50"
            type="submit"
          >
            Go Lang
          </button>
          <button
            onClick={() => handleTech("react")}
            className="mt-4 w-full bg-blue-700 uppercase py-4 rounded font-bold text-sm flex justify-center items-center hover:bg-green-700 transition-colors disabled:opacity-50"
            type="submit"
          >
            ReactJS
          </button>
        </div>
      </div>

      <img src={bg} className="mt-10" alt="code mockup image" />
    </div>
  );
}
