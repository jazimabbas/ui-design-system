import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../components/Badge";

const meta: Meta<typeof Badge> = {
  title: "Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (story) => (
      <div style={{ display: "flex", justifyContent: "center", margin: "20px" }}>{story()}</div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const General: Story = {
  args: {
    children: "Badge",
  },
};
