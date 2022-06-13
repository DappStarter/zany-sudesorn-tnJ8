require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney arena oxygen foot dance rate noise hospital include immense army gesture'; 
let testAccounts = [
"0x2e7f0861159cf1c57debc236c9ceec358923e2b2f56472af140c8438e9e0daf5",
"0x40e39cd0f7ae62c4e354e975c4c758e7dece949e8dbb8d65218dd3d6e95536af",
"0xfac76e4ffe11b107629c984d3f81411f7a6569ce957c7bb82dc822f8db32f6db",
"0xf461983f51807a1cc2a3a6ef8ff786268bea97ae5b1d2ae4e2b1c176debb9cdb",
"0x1922476b60207efca6830d6f4e756a538eb2460e16a9841de33c59d5b1eac49d",
"0x9db2f33fe56a4e9acff84f729d94145c7e3ff08ca57d023b6e8c6354b3b7682b",
"0xd9f28565377ebfe45fb5f99f460f1fbf14979db35b3c085f2aaab6cb9bc73a9a",
"0x11e91cf9862debcc64774cbcd4360648bfe788e4154b222574513eca5b91e95e",
"0x13d1da30390590f3de88ade86549896efdd637f334445eb6a52d82a30beb1f26",
"0x71926ff54bef08558bf67c6ce7d810581be901182b90ad5820c770ba188ac741"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

