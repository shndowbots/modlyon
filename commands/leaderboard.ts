import { Command, CommandContext } from "./Command";
import config from '../config.json';
import { ModuleString } from "../modules/module";

export default class LeaderboardCommand implements Command {
    name = 'leaderboard';
    summary = `Get a link to the server's leaderboard`;
    cooldown = 3;
    module: ModuleString = 'XP';
    
    execute = async(ctx: CommandContext) => {
        ctx.channel.send(`${config.webappURL}/servers/${ctx.guild.id}/leaderboard`);
    }
}