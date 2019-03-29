import { IncomingMessage, ServerResponse } from "http";

const handler = (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, { "Content-Type": "application/json" });

    res.end(JSON.stringify({cow: "Moooo!"}));
};

export default handler;
