import { Modal } from "djs-core";

export default new Modal().setCustomId("test").run((client, interaction) => {
  const input = interaction.fields.getTextInputValue("input");
  interaction.reply({ content: `You said ${input}` });
});
