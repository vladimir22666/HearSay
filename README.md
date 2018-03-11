# Louie Bot

![Louie](docs/images/louie.jpg?raw=true "Louie")

> Louie loves you. He will fetch translations for you. 
> He is a Good Boy.

Translation bot built using `discord.js` and `Google Translate API`.

## Features
* Translate custom messages
* Translate messages by reacting with flag emoji
* Translate last message(s) in channel
* Translate to multiple languages at once
* Automatic translation of channels with option to forward translations to users or seperate channels.
* Supports 100+ languages

## Discord Usage
* Write `!translate help` or `!t help` for a list of commands.

## Quick Deploy to [Now](https://zeit.co/now)
To quickly deploy a working bot that you can add to your discord server follow these easy steps.

1. Create a [Now account](https://zeit.co/login), it is free
    * Obtain a [ZEIT token](https://zeit.co/account/tokens), you will need it later
2. Obtain your personal Discord id
    * Launch Discord
    * Click the **User Settings** icon
    * Click the **Appearance** tab
    * Scroll down to the **Advanced** section
    * Enable **Developer Mode**
    * Close **User Settings**
    * Right click your name in the user list
    * Select **Copy ID**, you will need it later
3. Create a new [Discord App](https://discordapp.com/developers/applications/me/create)
    * Give app a friendly name and click the **Create App** button
        * I suggest the name **Louie**
    * Take note of the **Client ID**, you will need it later
    * Scroll down to the **Bot** section
    * Click the **Create a Bot User** button
    * Click the **Yes, do it!** button
    * Click the **click to reveal** link next to **Token:**
    * Take note of the **Token**, you will need it later
4. Deploy to Now
  * Click [![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/NotMyself/Louie/tree/now-deployment&env=DISCORD_CLIENT_ID&env=DISCORD_TOKEN&env=DISCORD_BOT_OWNER_ID)
  * Fill out the form with the values you saved earlier
  * Click the **Deploy** button

## Commands
* [Translate Custom Text](https://github.com/NotMyself/Louie/wiki/Translate-Custom-Text)
* [Translate by Reaction](https://github.com/NotMyself/Louie/wiki/Translate-with-Emoji-Reaction)
* [Translate Last Message](https://github.com/NotMyself/Louie/wiki/Translate-Last-Message)
* [Translate Channel](https://github.com/NotMyself/Louie/wiki/Translate-Channel-(Automatic))
* [Settings](https://github.com/NotMyself/Louie/wiki/Settings)
* [Statistics](https://github.com/NotMyself/Louie/wiki/Get-Statistics)

## Info for Developers
* [Running bot](https://github.com/NotMyself/Louie/wiki/Running-Bot)
* [Code contribution](https://github.com/NotMyself/Louie/wiki/Contribute)

## Credits & License

This project was originally released by Aziz under the MIT license. He chose to take the project private/commercial at version 0.4.2 Beta. Bobby Johnson forked the project and renamed it Louie after his dog. Bobby would like to thank Aziz for his hard work and making these early versions OSS so that others may learn and build on his hard work to share with the community.


- [discord-translator](https://github.com/nvuio/discord-translator) created by [nvu.io](https://nvu.io) / Aziz Natour - [@aziznatour](http://www.twitter.com/aziznatour)
- [Louie](https://github.com/NotMyself/Louie) forked by [NotMyself](https://iamnotmyself.com/) / Bobby Johnson - [@NotMyself](https://twitter.com/NotMyself)

Released under MIT license.
