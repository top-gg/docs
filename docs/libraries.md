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

### Installation

`npm install dblapi.js` or `yarn add dblapi.js`

We recommend keeping your configuration inside a separate config file like `config.json` (or the configuration storage of your choice) instead of harcoding it in your source code so you can keep it out of version control.

<Template>

```json
{
  "token": "{{token}}"
}
```

</Template>

### Webhooks

The API can also be configured to receive events for when users vote for your bot through webhooks. You must first configure webhooks in your bot through the dashboard before using this.

<Example>

```js
const Discord = require('discord.js')
const DBL = require('dblapi.js')
const { token } = require('./config.json')

const client = new Discord.Client()
const dbl = new DBL(token, client)

// Optional events
dbl.on('posted', () => {
  console.log('Server count posted!')
})

dbl.on('error', (e) => {
  console.log(`Oops! ${e}`)
})
```

```js
const DBL = require('dblapi.js')
const { token } = require('./config.json')
const dbl = new DBL(token, { webhookPort: 5000, webhookAuth: 'password' })
dbl.webhook.on('ready', (hook) => {
  console.log(
    `Webhook running at http://${hook.hostname}:${hook.port}${hook.path}`
  )
})
dbl.webhook.on('vote', (vote) => {
  console.log(`User with ID ${vote.user} just voted!`)
})
```

</Example>

</Block>
