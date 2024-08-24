import dotenv from "dotenv";
dotenv.config();

import { Client, Events, ActivityType, GatewayIntentBits } from "discord.js";
import { wordCommand } from "./commands/user/word.js";
import { stressCommand } from "./commands/user/stress.js";
import { toCyrillicCommand } from "./commands/user/to_cyrillic.js";
import { translateCommand } from "./commands/user/translate.js";
import { helpCommand } from "./commands/user/help.js";
import { resourcesCommand } from "./commands/user/resources.js";
import { booksCommand } from "./commands/user/books.js";
import { alphabetCommand } from "./commands/user/alphabet.js";

const client = new Client({
  intents: [],
});

const commands = [
  wordCommand.data,
  stressCommand.data,
  toCyrillicCommand.data,
  translateCommand.data,
  helpCommand.data,
  resourcesCommand.data,
  booksCommand.data,
  alphabetCommand.data,
];

client.once(Events.ClientReady, async (c) => {
  console.log("Bot with name " + client.user.username + " is running!");

  client.user.setPresence({
    activities: [
      {
        name: `bulgarian radio`,
        type: ActivityType.Listening,
      },
    ],
    status: "online",
  });

  try {
    await client.application.commands.set(commands);
    console.log("Successfully registered global commands!");
  } catch (error) {
    console.error("Error registering global commands:", error);
  }
});

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isCommand()) return;
  const { commandName } = interaction;

  /*
  User commands
  */
  switch (commandName) {
    case "word":
      await wordCommand.execute(interaction);
      return;
    case "stress":
      await stressCommand.execute(interaction);
      return;
    case "to-cyrillic":
      await toCyrillicCommand.execute(interaction);
      return;
    case "translate":
      await translateCommand.execute(interaction);
      return;
    case "help":
      await helpCommand.execute(interaction);
      return;
    case "resources":
      await resourcesCommand.execute(interaction);
      return;
    case "books":
      await booksCommand.execute(interaction);
      return;
    case "alphabet":
      await alphabetCommand.execute(interaction);
      return;
  }

  /*if (user check / role check) {
    interaction.reply({
      content: "Sorry but you dont have the permission to use this command!",
      ephemeral: true,
    });
    return;
  }*/

  /*
  Admin commands
  (Admin role required)
  */
  switch (commandName) {
    case "aaaaaaaaaa":
      return;
  }
});

client.login(process.env.TOKEN);
