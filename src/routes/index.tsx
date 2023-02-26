import { For } from "solid-js";
import Counter from "~/components/Counter";
import { getFeet } from "~/server/feet";
import { getSoles } from "~/server/soles/solesQueries";

export default function Home() {
    const soles = getSoles();
    const feet = getFeet({ shoeSize: 15 });
    return (
        <main class="text-center mx-auto text-gray-700 p-4">
            <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16"></h1>
            <Counter />
            <For each={soles.data}>{(sole) => <p>{sole}</p>}</For>
            <For each={feet.data}>{(foot) => <p>{foot}</p>}</For>
            <p class="mt-8"></p>
        </main>
    );
}
