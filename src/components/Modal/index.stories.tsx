import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from ".";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Modal>;

export const solid: Story = {
  args: {
    variant: "solid",
  },
};

export const outline: Story = {
  args: {
    variant: "outline",
  },
};

export const ghost: Story = {
  args: {
    variant: "ghost",
  },
};
