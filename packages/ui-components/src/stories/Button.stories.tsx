import { RiStarLine } from "@remixicon/react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/Button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (story) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          padding: "20px",
        }}
      >
        {story()}
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const General: Story = {
  args: {
    variant: "primary",
    size: "lg",
    children: "Button CTA",
  },
};

export const LeftIcon: Story = {
  args: {
    variant: "primary",
    size: "lg",
    children: "Button CTA",
    leftIcon: RiStarLine,
  },
};

export const RightIcon: Story = {
  args: {
    variant: "primary",
    size: "lg",
    children: "Button CTA",
    rightIcon: RiStarLine,
  },
};

export const LeftRightIcon: Story = {
  args: {
    variant: "primary",
    size: "lg",
    children: "Button CTA",
    leftIcon: RiStarLine,
    rightIcon: RiStarLine,
  },
};

export const IconOnly: Story = {
  args: {
    variant: "primary",
    size: "lg",
    children: "Button CTA",
    iconOnly: true,
    icon: RiStarLine,
  },
};
