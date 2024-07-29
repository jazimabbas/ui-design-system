"use client";
import styled, { css } from "@xstyled/styled-components";
import { BadgeColor, BadgeSize } from "./types";

const badgeSizes = {
  sm: css`
    padding: 2px 6px;
    font-size: 0.75rem;
  `,
  md: css`
    padding: 2px 8px;
    font-size: 0.875rem;
  `,
  lg: css`
    padding: 4px 10px;
    font-size: 0.875rem;
  `,
};

const badgeColors = {
  neutral: css`
    border: 1px solid #e6e6e6;
    background-color: #f9fafb;
    color: #525252;
  `,
  error: css`
    border: 1px solid #fecaca;
    background-color: #fef2f2;
    color: #dc2626;
  `,
  warning: css`
    border: 1px solid #fde68a;
    background-color: #fffbeb;
    color: #b45309;
  `,
  success: css`
    border: 1px solid #bbf7d0;
    background-color: #f0fdf4;
    color: #15803d;
  `,
  primary: css`
    border: 1px solid #c7d2fe;
    background-color: #eef2ff;
    color: #4338ca;
  `,
};

export const Badge = styled.span<{ $size: BadgeSize; $color: BadgeColor }>`
  border-radius: 9999px;

  ${(p) => badgeSizes[p.$size]};
  ${(p) => badgeColors[p.$color]};
`;
