export function toTableauEmbedSrc(url: string) {
  const hasQuery = url.includes("?");
  const separator = hasQuery ? "&" : "?";
  const extras = [":embed=y", ":showVizHome=no"]
    .filter((param) => !url.includes(param.split("=")[0]))
    .join("&");
  return extras ? `${url}${separator}${extras}` : url;
}
