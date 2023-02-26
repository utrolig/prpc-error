export const getFetchInit = (headers: Headers): RequestInit => {
    console.log(headers);
    return {
        credentials: "omit",
    };
};
