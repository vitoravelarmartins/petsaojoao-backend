import express from "express";

import routes from "./routes";

const app = express();

app.use("/api", routes);

export default app.listen(process.env.PORT || 3000);
