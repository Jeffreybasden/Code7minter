import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import { ethereumTestnet, ethereumMainnet } from '../lib/Networks';
import { openSea } from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: ethereumTestnet,
  mainnet: ethereumMainnet,
  
  contractName: 'Code7NFTs',
  tokenName: 'Code7NFTs',
  tokenSymbol: 'CD7',
  hiddenMetadataUri:'ipfs://__CID__/hidden.json',
  maxSupply: 777,
  whitelistSale: {
    price: 77,
    maxMintAmountPerTx: 7,
  },
  preSale: {
    price: 50,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 1,
    maxMintAmountPerTx: 10,
  },
  contractAddress:'0x5de092E5f5070056D3283FcF6bC02C7D9d7754fa',
  marketplaceIdentifier: '19263&network=250',
  marketplaceConfig: openSea,
  whitelistAddresses: whitelistAddresses,
};

export default CollectionConfig;
