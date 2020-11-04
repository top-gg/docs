---
title: Introduction
---

# Introduction

top.gg uses a REST API for general operations such as sending POST requests and receiving GET requests.

### Base url

`https://top.gg/api`

## Authentication

To access the API you must first authorize yourself. This can be done by using your top.gg token which can be obtained from your bot's webhook page in the dashboard `https://top.gg/bots/:id/webhooks`.

::: warning ⚠️ Warning
Your top.gg token, much like your discord bot token, is equivalent to a password. Do <strong>NOT</strong> share it or put it in version control.
:::

### Token

You can paste your token here to pre-populate the examples in the docs with a valid token.

<TokenInput />

_The token you paste here is stored locally on your browser and not sent anywhere._
