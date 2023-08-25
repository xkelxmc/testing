import * as fs from 'fs';
import { Lootbuckets } from './loot-bucket.entity';
import { Loottable } from './loot-table.entity';

const importFile = async (path: string) => {
  const data = await fs.promises.readFile(path, { encoding: 'utf-8' });
  return JSON.parse(data);
};

const buildGraph = (
  lootTables: Loottable[],
  lootBuckets: Lootbuckets[],
) => {
  return null;
};

(async () => {
  const lootBuckets = (await importFile(
    './src/javelindata_lootbuckets.json',
  )) as unknown as Lootbuckets[];
  const lootTables = (await importFile(
    './src/javelindata_loottables.json',
  )) as unknown as Loottable[];
  console.log('hello world!');

  //examples:
  const exampleGraph = buildGraph(
    lootTables,
    lootBuckets,
  );
  console.log(exampleGraph);
})();
