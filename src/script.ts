import * as fs from 'fs';
import { Lootbuckets } from './loot-bucket.entity';
import { Loottable } from './loot-table.entity';

export interface LootTableEntry {
  LootTableID: string;
  'AND/OR'?: string;
  Conditions?: string[];
  GSBonus?: number;
  HWMMult?: number;
  ConditionOverridesRoll?: boolean;
  Name: string; //LootTableID.replace(/([a-z])([A-Z])/g, '$1 $2').replaceAll(/[_-]/g, ' ')
  RollBonusSetting?: string;
  MaxRoll: number;
  UseLevelGS?: boolean;
  Items: LootTableRow[];
}

export interface LootTableRow {
  index: number;
  ItemID?: string;
  LootBucketID?: string;
  LootTableID?: string;
  // Qty?: null | [number] | [number, number];
  // Prob?: number;
  // GearScoreRange?: null | [number] | [number, number];
}

const importFile = async (path: string) => {
  const data = await fs.promises.readFile(path, { encoding: 'utf-8' });
  return JSON.parse(data);
};

const normalizeLootTables = (lootTables: Loottable[]): LootTableEntry[] => {
  return [];
};

interface LootBucketEntry {
  //todo
}
const normalizeLootBuckets = (lootBuckets: Lootbuckets[]): LootBucketEntry[] => {
  return [];
};

const buildGraph = (
  lootTables: LootTableEntry[],
  lootBuckets: LootBucketEntry[],
  lootTableId: string,
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

  const normalizedLootTables = normalizeLootTables(lootTables);
  const normalizedLootBuckets = normalizeLootBuckets(lootBuckets);

  //examples:
  const creatureLootMasterGraph = buildGraph(
    normalizedLootTables,
    normalizedLootBuckets,
    'CreatureLootMaster',
  );
  console.log(creatureLootMasterGraph);
})();

// const example = {
//   LootBucketID: 'test',
//   Items: [
//     {
//       LootBucketID: 'test2',
//       Items: [
//         {
//           ItemId: 'item-testid'
//         },
//         {
//           ItemId: 'item-testid2'
//         },
//         {
//           LootBucketID: 'test3',
//           Items: [
//             {
//               ItemId: 'item-testid3'
//             }
//           ]
//         }
//       ]
//     }
//   ]
// }
