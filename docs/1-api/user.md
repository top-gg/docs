---
title: User
order: 1
---

<Block>
# User

A user represents a User account in top.gg. It is not associated with any other platform like Discord.

</Block>

<Block>
## Find One User

<code style="color: green">GET</code> `User`

Retrieves information about a particular user by Discord user id.

<HTable
    :columns="[['URL', 'https://top.gg/api/users/:id'],
      ['Returns', 'User']]"
/>

<Example>
<CURL>
<Template>

```sh
curl -X GET https://top.gg/api/users/140862798832861184 \
 -H 'Content-Type: application/json' \
 -H 'Authorization: {{token}}'
```

</Template>
</CURL>
</Example>

</Block>

<Block>
## Structure

| Field             | Type      | Description                                                       |
| ----------------- | --------- | ----------------------------------------------------------------- |
| id                | Snowflake | The id of the user                                                |
| username          | String    | The username of the user                                          |
| discriminator     | String    | The discriminator of the user                                     |
| avatar?           | String    | The avatar hash of the user's avatar                              |
| defAvatar         | String    | The cdn hash of the user's avatar if the user has none            |
| bio?              | String    | The bio of the user                                               |
| banner?           | String    | The banner image url of the user                                  |
| social            | Object    | The social usernames of the user                                  |
| social.youtube?   | String    | The youtube channel id of the user                                |
| social.reddit?    | String    | The reddit username of the user                                   |
| social.twitter?   | String    | The twitter username of the user                                  |
| social.instagram? | String    | The instagram username of the user                                |
| social.github?    | String    | The github username of the user                                   |
| color?            | String    | The custom hex color of the user (not guaranteed to be valid hex) |
| supporter         | Boolean   | The supporter status of the user                                  |
| certifiedDev      | Boolean   | The certified status of the user                                  |
| mod               | Boolean   | The mod status of the user                                        |
| webMod            | Boolean   | The website moderator status of the user                          |
| admin             | Boolean   | The admin status of the user                                      |

<Example>

```json
{
  "discriminator": "0001",
  "avatar": "a_1241439d430def25c100dd28add2d42f",
  "id": "140862798832861184",
  "username": "Xetera",
  "defAvatar": "322c936a8c8be1b803cd94861bdfa868",
  "admin": true,
  "webMod": true,
  "mod": true,
  "certifiedDev": false,
  "supporter": false,
  "social": {}
}
```

</Example>

</Block>
