import Express from 'express';
import ExpressWinston from 'express-winston';
import Winston from 'winston';
import * as Env from 'dotenv';
import RouterHome from './assets/home/index.js';
import RouterTimestamp from './assets/timestamp/index.js';

Env.config();
const App = Express();

// Winston normal logging config goes before routers
App.use(ExpressWinston.logger({
    transports: [
      new Winston.transports.Console()
    ],
    format: Winston.format.combine(
      Winston.format.colorize(),
      Winston.format.json()
    )
  }));

App.use(RouterHome);
App.use(RouterTimestamp);

// Winston error logging config goes after routers
App.use(ExpressWinston.errorLogger({
    transports: [
      new Winston.transports.Console()
    ],
    format: Winston.format.combine(
      Winston.format.colorize(),
      Winston.format.json()
    )
  }));

App.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});
