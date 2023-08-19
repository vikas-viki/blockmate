const express = require('express');
const router = express.Router();
require("dotenv").config();
const { FleekSdk, PersonalAccessTokenService } = require('@fleekxyz/sdk');

const patService = new PersonalAccessTokenService({
    personalAccessToken: process.env.PAT,
    projectId: process.env.P_ID
});

const fleekSdk = new FleekSdk({ accessTokenService: patService });

// Route handler
const uploadIpfsHandler = async function (req, res) {
    if(req.body.msgs){
        const result = await fleekSdk.ipfs().add({
            path: "blockmate.txt",
            content: Buffer.from(req.body.msgs, 'utf-8'),
        })
        res.send(result);
    }
};

const pinIpns = async function (req, res) {

}

// Route configuration
router.post('/upload-ipfs-pin', uploadIpfsHandler);
router.post('/resolve-pin', async function (req, res) {
    const data = await getNfts(req.body.address);
    res.json(data);
});

module.exports = router;
