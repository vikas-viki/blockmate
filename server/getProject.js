require("dotenv").config();
const { FleekSdk, PersonalAccessTokenService } = require('@fleekxyz/sdk');
const patService = new PersonalAccessTokenService({
    personalAccessToken: process.env.PAT,
    projectId: process.env.P_ID
});
 
const fleekSdk = new FleekSdk({ accessTokenService: patService })

async function getProjectId() {
    const projectId = await fleekSdk.projects().create({ name: 'blockmate' });
    const id = await  fleekSdk.ipns().createRecord();
    
    console.log(projectId, id);
}
getProjectId();

/*
{
  id: 'cllhsupbi0002mr08bzi3yykh',
  name: 'blockmate',
  createdAt: '2023-08-19T09:11:01.806Z'
}
*/ 