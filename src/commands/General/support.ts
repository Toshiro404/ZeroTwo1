import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
  constructor(client: WAClient, handler: MessageHandler) {
    super(client, handler, {
      command: "support",
      aliases: ["support"],
      description: "Gets the support group links",
      category: "general",
      usage: `${client.config.prefix}Support`,
      baseXp: 10,
    });
  }

  run = async (M: ISimplifiedMessage): Promise<void> => {
    await this.client.sendMessage(
      M.sender.jid,
      ` π _*Well.........*\n\n
        _*βπ¦πππ₯π¦π_ππππ₯π¦*_: https://chat.whatsapp.com/EHnFXOU8jfYJcnS3JXcKgz\n\n
        
`,

      MessageType.text
    );

    return void M.reply("πππππ₯ ππ π¦ πππ πΎπ£π π¦π‘ ππππ ππ ππ π¦π£ π»π π»ππ£ππππ βππππ ππ₯π");
  };
}
