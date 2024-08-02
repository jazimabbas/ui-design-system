"use client";
import styled, { css } from "@xstyled/styled-components";
import { Size } from "./types";

type StyleProp = { iconOnly: boolean };

const styles: Record<Size, any> = {
  sm: css<StyleProp>`
    padding: ${(p) => (p.iconOnly ? "10px" : "8px 12px")};
    font-size: 0.875rem;
    gap: 4px;
  `,
  md: css<StyleProp>`
    padding: ${(p) => (p.iconOnly ? "10px" : "10px 14px")};
    font-size: 0.875rem;
    gap: 4px;
  `,
  lg: css<StyleProp>`
    padding: ${(p) => (p.iconOnly ? "12px" : "10px 16px")};
    font-size: 1rem;
    gap: 6px;
  `,
  xl: css<StyleProp>`
    padding: ${(p) => (p.iconOnly ? "14px" : "12px 20px")};
    font-size: 1rem;
    gap: 6px;
  `,
  "2xl": css<StyleProp>`
    padding: ${(p) => (p.iconOnly ? "16px" : "16px 24px")};
    font-size: 1.125rem;
    gap: 10px;
  `,
};

export const GeneralButton = styled.button<{ size: Size; iconOnly: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  box-shadow:
    0px 1px 3px 0px rgba(0, 0, 0, 0.1),
    0px 1px 2px 0px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  border: 1px solid transparent;
  transition:
    background-color 0.3s,
    box-shadow 0.3s,
    color 0.3s;

  font-weight: 500;
  text-decoration: none;

  &:hover {
    box-shadow:
      0px 1px 3px 0px rgba(0, 0, 0, 0.1),
      0px 1px 2px 0px rgba(0, 0, 0, 0.06);
  }

  &:focus {
    box-shadow: 0px 0px 0px 4px rgba(68, 76, 231, 0.12);
  }

  &:disabled,
  &:disabled:hover {
    background-color: #f5f5f5;
    color: #a3a3a3;
    cursor: not-allowed;
  }

  ${(p) => styles[p.size]};
`;
