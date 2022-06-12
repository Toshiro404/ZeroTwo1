import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'help',
            description: 'Displays the help menu or shows the info of the command provided',
            category: 'general',
            usage: `${client.config.prefix}help (command_name)`,
            dm: true,
            aliases: ['h']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            'https://telegra.ph/file/ff95de880cf258150fe84.mp4','https://telegra.ph/file/3bb24cecc8094ff80e928.mp4','https://telegra.ph/file/c90a9df1b1e5e43ee340b.mp4'
        ]
        let well = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: well }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `

❤️(> ਊ <)❤️ Kon'nichiwa watashi wa *${M.sender.username}* I'm ZeroTwo-desu!

🔰 If you facing any problem with bot then type ${this.client.config.prefix}owner to contact owner!

🧧 Prefix: ${this.client.config.prefix}
🎐 Developer: Toshiro
⚡ Owner: wa.me/+919609900020

〘 𝑪𝑶𝑴𝑴𝑨𝑵𝑫 𝑳𝑰𝑺𝑻 〙
────────────────
🧧${this.client.config.prefix}h1 or ${this.client.config.prefix}Help1🧧
🧧${this.client.config.prefix}h2 or ${this.client.config.prefix}Help2🧧
🧧${this.client.config.prefix}h3 or ${this.client.config.prefix}Help3🧧
🧧${this.client.config.prefix}h4 or ${this.client.config.prefix}Help4🧧
🧧${this.client.config.prefix}h5 or ${this.client.config.prefix}Help5🧧
🧧${this.client.config.prefix}h6 or ${this.client.config.prefix}Help6🧧
🧧${this.client.config.prefix}h7 or ${this.client.config.prefix}Help7🧧
🧧${this.client.config.prefix}h8 or ${this.client.config.prefix}Help8🧧
🧧${this.client.config.prefix}h9 or ${this.client.config.prefix}Help9🧧
───────────────
🎐-𝐙 𝐞 𝐫 𝐨 𝐓 𝐰 𝐨-🎐
┌────────────┈❀
│  ゼロツー❤️
└────────────┈❀
📒 *Note: Use ${this.client.config.prefix}help <command_name> to view the command info*` }
        )
    }
}
