import type { Meta, StoryObj } from "@storybook/react";
import { Card } from ".";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    variant: "solid",
    // children: "Button",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    // children: "Button",
  },
};
export const Shadow: Story = {
  args: {
    variant: "ghost",
    // children: "Button",
  },
};
