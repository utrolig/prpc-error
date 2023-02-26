import { For } from "solid-js";
import Counter from "~/components/Counter";
import { getFeet } from "~/server/feet";
import { getSoles } from "~/server/soles/solesQueries";
import { createServerData$ } from "solid-start/server";
import { getFetchInit } from "~/utils/getFetchInit";
import { useRouteData } from "solid-start";
import { userInfo } from "~/server/authInfo/authInfo";

export function routeData() {
  return createServerData$(async (_, { request }) => {
    const init = getFetchInit(request.headers);
    const placeholderData = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      init
    ).then((res) => res.json());

    return placeholderData as { id: number; title: string }[];
  });
}

export default function Home() {
  const soles = getSoles();
  const user = userInfo();
  const feet = getFeet({ shoeSize: 15 });
  const data = useRouteData<typeof routeData>();
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16"></h1>
      {JSON.stringify(user.data, null, 2)}
      <Counter />
      <For each={soles.data}>{(sole) => <p>{sole}</p>}</For>
      <For each={feet.data}>{(foot) => <p>{foot}</p>}</For>
      <For each={data()}>{(todo) => <p>{todo.title}</p>}</For>
      <p class="mt-8"></p>
    </main>
  );
}
