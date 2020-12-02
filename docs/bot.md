---
title: Bot
category: API
---

<Block>
## Search Bots

Gets a list of bots that match a specific query.

`GET` /bots

### Query String Parameters

| Field  | Type   | Description                                                    | Default    |
| ------ | ------ | -------------------------------------------------------------- | ---------- |
| limit  | Number | The amount of bots to return. Max. 500                         | 50         |
| offset | Number | Amount of bots to skip                                         | 0          |
| search | String | A search string in the format of `field: value field2: value2` |            |
| sort   | String | The field to sort by. Prefix with - to reverse the order       |            |
| fields | String | A comma separated list of fields to show                       | All fields |

### Response Fields

| Field   | Type                      | Description                                   |
| ------- | ------------------------- | --------------------------------------------- |
| results | [`Bot[]`](#bot-structure) | The matching bots                             |
| limit   | Number                    | The limit used                                |
| offset  | Number                    | The offset used                               |
| count   | Number                    | The length of the results array               |
| total   | Number                    | The total number of bots matching your search |

<Example>

<CURL>
<Template>
```sh
curl -X GET https://top.gg/api/bots?limit=20 \
-H 'Content-Type: application/json' \
-H 'Authorization: {{token}}'
```
</Template>
</CURL>

  Example return value

  ```json
  {
    "results": [
      {
        "defAvatar": "6debd47ed13483642cf09e832ed0bc1b",
        "invite": "",
        "website": "https://discordbots.org",
        "support": "KYZsaFb",
        "github": "https://github.com/DiscordBotList/Luca",
        "longdesc": "Luca only works in the **Discord Bot List** server.    \r\nPrepend commands 
        with the prefix `-` or `@Luca#1375`.    \r\n**Please refrain from using these commands in 
        non testing channels.**\r\n- `botinfo @bot` Shows bot info, title redirects to site 
        listing.\r\n- `bots @user`* Shows all bots of that user, includes bots in the queue.\r\n- 
        `owner / -owners @bot`* Shows all owners of that bot.\r\n- `prefix @bot`* Shows the prefix 
        of that bot.\r\n* Mobile friendly version exists. Just add `noembed` to the end of the 
        command.\r\n",
        "shortdesc": "Luca is a bot for managing and informing members of the server",
        "prefix": "- or @Luca#1375",
        "lib": "discord.js",
        "clientid": "264811613708746752",
        "avatar": "7edcc4c6fbb0b23762455ca139f0e1c9",
        "id": "264811613708746752",
        "discriminator": "1375",
        "username": "Luca",
        "date": "2017-04-26T18:08:17.125Z",
        "server_count": 2,
        "guilds": ["417723229721853963", "264445053596991498"],
        "shards": [],
        "monthlyPoints": 19,
        "points": 397,
        "certifiedBot": false,
        "owners": ["129908908096487424"],
        "tags": ["Moderation", "Role Management", "Logging"],
        "donatebotguildid": ""
      }
    ],
    "limit": 1,
    "offset": 0,
    "count": 1,
    "total": 7
  }
  ```
</Example>
</Block>

<Block>
## Find One Bot

Gets a list of bots that match a specific query.

``GET` /bot/:id

<Example>
<CURL>
<Template>
```sh
curl -X GET https://top.gg/api/bots/264811613708746752 \
-H 'Content-Type: application/json' \
-H 'Authorization: {{token}}'
```
</Template>
</CURL>
</Example>
</Block>

<Block>
## Last 1000 Votes

Gets the last 1000 voters for your bot.

`GET` /bots/:id/votes

::: warning ⚠️ Warning
If your bot receives more than 1000 votes monthly you cannot use this endpoint and must use 
`webhooks` and implement your own caching instead.
:::

<HTable
  :columns="[['Returns', 'User[]']]"
/>

<Example>

This example uses Luca but users are restricted to only receiving their own bots' votes. Replace the id with your own bot.

_cURL blocks are editable_

<CURL>
<Template>

```sh
curl -X GET https://top.gg/api/bots/264811613708746752/votes \
 -H 'Content-Type: application/json' \
 -H 'Authorization: {{token}}'
```

</Template>
</CURL>

Example return value

```json
[
  {
    "username": "Xetera",
    "discriminator": "0001",
    "id": "140862798832861184",
    "avatar": "a_1241439d430def25c100dd28add2d42f"
  }
]
```

</Example>
</Block>

<Block>
## Bot Structure

| Field            | Type     | Description                                                                   |
| ---------------- | -------- | ----------------------------------------------------------------------------- |
| id               | String   | The id of the bot                                                             |
| username         | String   | The username of the bot                                                       |
| discriminator    | String   | The discriminator of the bot                                                  |
| avatar?          | String   | The avatar hash of the bot's avatar                                           |
| defAvatar        | String   | The cdn hash of the bot's avatar if the bot has none                          |
| lib              | String   | The library of the bot                                                        |
| prefix           | String   | The prefix of the bot                                                         |
| shortdesc        | String   | The short description of the bot                                              |
| longdesc?        | String   | The long description of the bot. Can contain HTML and/or Markdown             |
| tags             | String[] | The tags of the bot                                                           |
| website?         | String   | The website url of the bot                                                    |
| support?         | String   | The support server invite code of the bot                                     |
| github?          | String   | The link to the github repo of the bot                                        |
| owners           | Array    | of Snowflakes The owners of the bot. First one in the array is the main owner |
| guilds           | Array    | of Snowflakes The guilds featured on the bot page                             |
| invite?          | String   | The custom bot invite url of the bot                                          |
| date             | Date     | The date when the bot was approved                                            |
| certifiedBot     | Boolean  | The certified status of the bot                                               |
| vanity?          | String   | The vanity url of the bot                                                     |
| points           | Number   | The amount of upvotes the bot has                                             |
| monthlyPoints    | Number   | The amount of upvotes the bot has this month                                  |
| donatebotguildid | String   | The guild id for the donatebot setup                                          |

<Example>

```json
{
  "defAvatar": "6debd47ed13483642cf09e832ed0bc1b",
  "invite": "",
  "website": "https://discordbots.org",
  "support": "KYZsaFb",
  "github": "https://github.com/DiscordBotList/Luca",
  "longdesc": "Luca only works in the **Discord Bot List** server.    \r\nPrepend commands with the prefix `-` or `@Luca#1375`.    \r\n**Please refrain from using these commands in non testing channels.**\r\n- `botinfo @bot` Shows bot info, title redirects to site listing.\r\n- `bots @user`* Shows all bots of that user, includes bots in the queue.\r\n- `owner / -owners @bot`* Shows all owners of that bot.\r\n- `prefix @bot`* Shows the prefix of that bot.\r\n* Mobile friendly version exists. Just add `noembed` to the end of the command.\r\n",
  "shortdesc": "Luca is a bot for managing and informing members of the server",
  "prefix": "- or @Luca#1375",
  "lib": "discord.js",
  "clientid": "264811613708746752",
  "avatar": "7edcc4c6fbb0b23762455ca139f0e1c9",
  "id": "264811613708746752",
  "discriminator": "1375",
  "username": "Luca",
  "date": "2017-04-26T18:08:17.125Z",
  "server_count": 2,
  "guilds": ["417723229721853963", "264445053596991498"],
  "shards": [],
  "monthlyPoints": 19,
  "points": 397,
  "certifiedBot": false,
  "owners": ["129908908096487424"],
  "tags": ["Moderation", "Role Management", "Logging"],
  "donatebotguildid": ""
}
```

</Example>

</Block>
