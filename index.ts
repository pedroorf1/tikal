import server from "./src/server/server";

const PORT = process.env.PORT || 4500;
const AppName = process.env.APP_NAME || "Api professor";

server.listen(PORT, () => {
  console.clear();
  console.info(`${AppName} started on http://localhost:${PORT}`);
});
