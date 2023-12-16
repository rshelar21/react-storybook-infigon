import type { Meta, StoryObj } from "@storybook/react";
import { Form } from ".";

const meta: Meta<typeof Form> = {
  title: "Components/Form",
  component: Form,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    type: "text",
    placeholder: "Insert text here",
  },
};

export const disabled: Story = {
  args: {
    type: "text",
    placeholder: "disabled",
    disabled: true,
  },
};
