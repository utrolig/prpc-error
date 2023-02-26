import server$ from "solid-start/server";
import { query$ } from "@prpc/solid";
import { getFetchInit } from "~/utils/getFetchInit";

export const userInfo = query$(
  async () => {
    const init = getFetchInit(server$.request.headers);
    const response = { data: { id: "hello", name: "world" } };

    return response.data;
  },
  () => ({ key: "userInfo" })
);
