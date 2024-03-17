import http, { Server, IncomingMessage, ServerResponse } from "http";

const hostName: string = "127.0.0.1";
const port: number = 3000;

const server: Server = http.createServer((request: IncomingMessage, response: ServerResponse) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");
    response.end(`<h3 style="font-family:Lato, San-serif; color: green">Welcome to Node.js my guy</h3>`);
});

server.listen(port, hostName, () => {
    console.log(`Server starting at http://${hostName}:${port}`);
});
