import { REST, Routes } from "discord.js";
import dotenv from "dotenv";
dotenv.config();
import { wordCommand } from "./commands/user/word.js";
import { stressCommand } from "./commands/user/stress.js";
import { toCyrillicCommand } from "./commands/user/to_cyrillic.js";
import { translateCommand } from "./commands/user/translate.js";
import { helpCommand } from "./commands/user/help.js";
import { resourcesCommand } from "./commands/user/resources.js";
import { booksCommand } from "./commands/user/books.js";
import { alphabetCommand } from "./commands/user/alphabet.js";
import { meaningCommand } from "./commands/user/meaning.js";

const rest = new REST().setToken(process.env.TOKEN);

/*rest.put(Routes.applicationCommands("1276797546018377728"), { body: [] })
    .then(() => console.log('Successfully deleted all application commands.'))
    .catch(console.error);*/

const commands = [
  wordCommand.data,
  stressCommand.data,
  toCyrillicCommand.data,
  translateCommand.data,
  helpCommand.data,
  resourcesCommand.data,
  booksCommand.data,
  alphabetCommand.data,
  meaningCommand.data
];

rest
  .put(Routes.applicationCommands("1276797546018377728"), { body: commands })
  .then(() => console.log("Successfully created all application commands."))
  .catch(console.error);
