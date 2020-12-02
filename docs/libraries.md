---
title: Libraries
category: Resources
---

<Block>

# Libraries

To make your life easier, the top.gg community has official and unofficial libraries you can use to interact with our API with ease.

</Block>

<Block>

## Javascript <pill style="margin-left: 10px;">Official</pill>

[On NPM](https://npmjs.com/package/@top-gg/sdk)

### Installation

`npm install @top-gg/sdk` or `yarn add @top-gg/sdk`

We recommend keeping your configuration inside a separate config file like `config.json` (or the configuration storage of your choice) instead of harcoding it in your source code so you can keep it out of version control.

<Template>

```json
{
  "token": "{{token}}"
}
```

</Template>

### Posting bot stats

Posting your bot's statistics is a quick and easy way to show how many people use your bot. There's a simple library that uses our SDK to post statistics: [`topgg-autoposter`](https://npmjs.com/package/topgg-autoposter)

### Webhooks

The API can also be configured to receive events for when users vote for your bot through webhooks via `express`. You must first configure webhooks in your bot through the dashboard before using this.

<Example>

```js
const Topgg = require('@top-gg/sdk')
const express = require('express')

const app = express()

const webhook = new Topgg.Webhook('your webhook auth')

app.post('/dblwebhook', webhook.middleware(), (req, res) =>{
  req.vote // your vote object, e.g

  console.log(req.vote.user) // 395526710101278721 < user who voted
})

app.listen(80)
```

</Example>

</Block>
