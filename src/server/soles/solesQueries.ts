import server$ from "solid-start/server";
import { query$ } from "@prpc/solid";

export const getSoles = query$(
    async () => {
        const data = ["1", "2", "three", server$.clientAddress];
        return data;
    },
    () => ({ key: "getSoles" })
);
