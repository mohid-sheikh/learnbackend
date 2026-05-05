console.log("chai aur code");
require('dotenv').config();
const express = require('express')
const app = express()
const port = 3000
const msgithubdata={
  "login": "mohid-sheikh",
  "id": 230835417,
  "node_id": "U_kgDODcJE2Q",
  "avatar_url": "https://avatars.githubusercontent.com/u/230835417?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/mohid-sheikh",
  "html_url": "https://github.com/mohid-sheikh",
  "followers_url": "https://api.github.com/users/mohid-sheikh/followers",
  "following_url": "https://api.github.com/users/mohid-sheikh/following{/other_user}",
  "gists_url": "https://api.github.com/users/mohid-sheikh/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/mohid-sheikh/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/mohid-sheikh/subscriptions",
  "organizations_url": "https://api.github.com/users/mohid-sheikh/orgs",
  "repos_url": "https://api.github.com/users/mohid-sheikh/repos",
  "events_url": "https://api.github.com/users/mohid-sheikh/events{/privacy}",
  "received_events_url": "https://api.github.com/users/mohid-sheikh/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 1,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2025-09-07T10:11:29Z",
  "updated_at": "2026-05-05T08:52:09Z"
}
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/youtube',(req,res)=>{
    res.send('<h2>justdoartwork</h2>')
})
app.get('/instagram', (req, res) => {
  res.send('sheikh.mohid_')
})

app.get('/login',(req,res)=>{
    res.send('<h1>please subscribe to my  intragram</h1>')
})
app.get('/github',(req,res)=>{
  res.json(msgithubdata)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
