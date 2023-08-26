const express = require('express');
const router = express.Router();
require("dotenv").config();
const { uploadToIPFS, pinToIpns, resolveIPNS, createRecord } = require("./uploadTest.js");
 
// Route handler
const uploadAndPin = async function (req, res) {
    if (req.body.msgs) {
        const hash = await uploadToIPFS(req.body.msgs);
        const record_id = await createRecord();
        const pinName = await pinToIpns(record_id, hash);
        res.json({pinName, record_id});
    }else{
        res.json("Error occured!");
    }
};

const repinIPNS = async (req, res)=>{
    if(req.body.messages && req.body.ipnsID){
        const hash = await uploadToIPFS(req.body.messages);
        const repinnedData = await pinToIpns(req.body.ipnsID.toString(), hash.toString());
        res.json({repinnedData});
    }
}

// Route configuration
router.post('/initial-pin', uploadAndPin);
router.post('/repin', repinIPNS);
router.post('/resolve-pin', async function (req, res) {
    if(req.body.name){
        const data = await resolveIPNS(req.body.name);
        res.json({data});
    }else{
        res.json({error: "error occured"});
    }
});

module.exports = router;
