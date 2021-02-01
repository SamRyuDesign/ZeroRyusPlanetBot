import { GuildMember, PartialGuildMember, TextChannel } from "discord.js";
import { getChannelById } from "../Utils/discordUtils";
import Dispatcher from "./dispatcher";

class BotDispatcher extends Dispatcher { 
    welcome(member: GuildMember | PartialGuildMember) {
      try {
        const channel = getChannelById(member, this.channels.welcome)

        if (!channel) return

        const Message = `Hola <@${member}>, bienvenido`

        channel instanceof TextChannel && channel.send(Message)
      } catch (error) {
        console.log(error)
      }
      }
    }


export default BotDispatcher