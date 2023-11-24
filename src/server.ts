import app from './app';
import mongoose from 'mongoose';
import config from './config';

async function main() {
  await mongoose.connect(`${config.database_url}`);
  console.log('mongodb local is successfully connected');
  app.listen(config.port, () => {
    console.log(`Example app is running ${config.port}`);
  });
}

main().catch((err) => console.log(err));
