require("dotenv").config();
const { FleekSdk, PersonalAccessTokenService } = require('@fleekxyz/sdk');

const patService = new PersonalAccessTokenService({
    personalAccessToken: process.env.PAT,
    projectId: process.env.P_ID
});

const fleekSdk = new FleekSdk({ accessTokenService: patService });

const uploadToIPFS = async (msgs) => {
    const result = await fleekSdk.ipfs().add({
        path: "example.txt",
        content: Buffer.from(msgs, 'utf-8'),
    });
    console.log(result);
    return result.cid;
}

const createRecord = async () => {
    const record = await fleekSdk.ipns().createRecord();
    return record.id;
}

const pinToIpns = async (_id, _hash) => {
    const ipnsRecord = await fleekSdk.ipns().publishRecord({ id: _id.toString(), hash: _hash.toString() });
    console.log(ipnsRecord);
    return ipnsRecord.name;
}

const resolveIPNS = async (_name) => {
    const result = await fleekSdk.ipns().resolveName({ name: _name.toString() });
    console.log("resolve res: ", result);
    return result;
}

module.exports = { uploadToIPFS, createRecord, pinToIpns, resolveIPNS };