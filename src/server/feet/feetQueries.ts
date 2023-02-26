import server$ from "solid-start/server";
import { query$ } from "@prpc/solid";
import { z } from "zod";
import { getFetchInit } from "../../utils/getFetchInit";

export const getFeet = query$(
    async (input) => {
        console.log("$server", server$.request);
        const init = getFetchInit(server$.request.headers);
        const placeholderData = await server$
            .fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then((res) => res.json());
        const data = ["1", input.shoeSize, "three", placeholderData.title];
        return data;
    },
    z.object({
        shoeSize: z.number(),
    }),
    () => ({ key: "getFeet" })
);
