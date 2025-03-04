/**
 * Copyright (c) 2025 Cleboost
 * External contributor can be found on the GitHub
 * Licence: on the GitHub
 */

import { SubCommand } from "djs-core";

export default new SubCommand()
  .setName("autocomplete")
  .setParent("handler")
  .setDescription("Create autocomplete")
  .addStringOption((option) =>
    option.setName("input").setDescription("Input").setRequired(true),
  )
  .run((client, interaction) => {
    const input = interaction.options.getString("input");
    return interaction.reply({
      content: `You have selected: ${input}`,
    });
  })
  .autoComplete((client, interaction) => {
    return interaction.respond([
      {
        name: "I am a fucking ping button",
        value: "I am a fucking ping button",
      },
    ]);
  });
