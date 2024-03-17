import http from "http";

export class ApiRoutes {
  public static mapRoutes(request: http.IncomingMessage, response: http.ServerResponse) {
    let url: string | undefined = request.url;
    let method: string | undefined = request.method;
    let result: string = "";

    if (url === "/" && method === "GET") {
      result = `<pre style="font-family:Lato, San-serif; color: green">Welcome to home page</pre>`;
    } else if (url === "/abouts" && method === "GET") {
      result = `<pre style="font-family:Lato, San-serif; color: green">About us page</pre>`;
    } else if (url === "/contact" && method === "GET") {
      result = `<pre style="font-family:Lato, San-serif; color: green">Contact us page</pre>`;
    } else {
      result = `<pre style="font-family:Lato, San-serif; color: darkred">Page not found</pre>`;
    }
    response.end(result);
  }
}
