export const getFetchInit = (clientHeaders: Headers): RequestInit => {
  const headers = new Headers();
  const credentials = "include";

  const cookie = clientHeaders.get("cookie");

  if (cookie) {
    headers.set("cookie", cookie);
  }

  return {
    credentials,
    headers,
  };
};
