import http, { Server, IncomingMessage, ServerResponse } from "http";
import os from 'os';
import path from "path";
import fs from "fs";
import { StringUtil } from "./util/StringUtil";
import { MathUtil } from "./util/MathUtil";
import { ApiRoutes } from "./routes/ApiRoutes";

const hostName: string = "127.0.0.1";
const port: number = 3000;

const server: Server = http.createServer((request: IncomingMessage, response: ServerResponse) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");

    let osData = {
        totalMemory: os.totalmem(),
        freeMemory: os.freemem(),
        homeDir : os.homedir(),
        computerName: os.hostname()
    }

    fs.readFile(path.join(__dirname, "data", "notes.txt"), "utf-8", ( error, result) =>{
        if (error) {
            console.log(error.message)
        } else {
            // response.end(`<pre>${result}</pre>`)
        }

        fs.writeFile(path.join(__dirname, "data", "data.txt"), result, "utf-8", (error) => {
            if (error) {
                console.log("Error writing the file")
            }
            // response.end(`<pre>Successfully wrote a new file to a new file</pre>`)
        })
    })

    let customerName: string = "Christopher Maritim";
    let length: number = StringUtil.printStringLength(customerName);
    let result: string = StringUtil.printTriangleString(customerName);

    let value: number = 5;
    result = MathUtil.printMathTable(value);

    // node js routing
    ApiRoutes.mapRoutes(request, response)

    let osDataStr = ``;
    for (let key in osData) {
        osDataStr += `<strong>${key}</strong> ${osData[key as keyof typeof osData]} </br>`
    }
    // response.end(`<pre style="font-family:Lato, San-serif; color: green">${result}</pre>`);
    // response.end(`<pre>${osDataStr}</pre>`)
});

server.listen(port, hostName, () => {
    console.log(`Server starting at http://${hostName}:${port}`);
});
