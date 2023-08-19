require("dotenv").config();
const { FleekSdk, PersonalAccessTokenService } = require('@fleekxyz/sdk');

const patService = new PersonalAccessTokenService({
    personalAccessToken: process.env.PAT,
    projectId: process.env.P_ID
});

const fleekSdk = new FleekSdk({ accessTokenService: patService });


const uploadToIPFS = async () => {
    const result = await fleekSdk.ipfs().add({
        path: "example.txt",
        content: Buffer.from('Hello World 123!', 'utf-8'),
    });
    console.log(result);
    return result;
}


const pinToIpns = async (_hash) => {
    const ipnsRecord = await fleekSdk.ipns().publishRecord({ id: 'cllhtt4p10000l708gg07xgz0', hash: _hash });
    console.log(ipnsRecord);
}


async function main() {
    const IPFS_hash = await uploadToIPFS();
    await pinToIpns(IPFS_hash);
}

main();