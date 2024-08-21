import { Server } from "http";
import app from "./app";
const PORT = 3000;

let server: Server;

async function bootstrap() {
  server = app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
  });
}

bootstrap();
