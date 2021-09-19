require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid problem oppose venture stomach razor script assume guess another army gaze'; 
let testAccounts = [
"0x1adff47fe4e3c63ae557658c2eee0dc59a940b3619e9b79b69efd116b8c95e0d",
"0x665921b411fce9bf56f8483142586d2cacc92472fc03d538345fb5e84a3b6ae1",
"0xb3cee0a7599d57491bb5627306888014a2ef1ac213008c575fe71109a7cdecd1",
"0x83370d02b69db917fa78331fe0f068803fe0f21b871070df462e5fd3f12c9103",
"0x9d030e00db16e02140276027cc0e2c7c1219e341f3434ba8cd39690df5364db9",
"0xe4bf3fa18b4bc860498b3bb879eb3ef3bedbb49c3845803c7add619365326961",
"0x9daff8b694f0fe1cc8819e415022ed1a35b2e9872323ca76d6c28bd443e6eddd",
"0xcf180cdb75d67dae3da44a52a4341d983af7262c79a5d3258fb179bc53fdc6f4",
"0x457e0b35c631db67382c7ee477001737d57d300e72c5342002d95e0d5cd2c673",
"0xe0603332550bb0bc386c3510b5412a6d9ee19971e0c007977998b1dbb3322ac7"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

