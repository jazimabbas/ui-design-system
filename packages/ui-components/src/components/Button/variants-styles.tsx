"use client";

import styled, { css } from "@xstyled/styled-components";
import { GeneralButton } from "./general-styles";

const disabledStyles = css`
  &:disabled,
  &:disabled:hover {
    background-color: transparent;
    box-shadow: none;
  }
`;

export const PrimaryButton = styled(GeneralButton)`
  background-color: #4338ca;
  color: #fff;

  &:hover,
  &:focus {
    background-color: #3730a3;
  }
`;

export const SecondaryButton = styled(GeneralButton)`
  background-color: #fff;
  color: #171717;
  border-width: 0.5px;
  border-color: #e6e6e6;

  &:hover,
  &:focus {
    border-width: 1px;
    border-color: #e6e6e6;
    background-color: #fafafa;
    color: #0a0a0a;
  }
`;

export const TertiaryButton = styled(GeneralButton)`
  background-color: transparent;
  color: #4338ca;
  box-shadow: none;

  &:hover,
  &:focus {
    background-color: #fafafa;
  }

  &:focus,
  &:focus:hover {
    box-shadow: 0px 0px 0px 4px rgba(68, 76, 231, 0.12);
  }

  ${disabledStyles};
`;

export const LinkButton = styled(TertiaryButton)`
  &:hover,
  &:focus {
    color: #3730a3;
  }
`;

export const LinkGrayButton = styled(LinkButton)`
  color: #525252;

  &:hover,
  &:focus {
    color: #171717;
  }
`;

export const DestructiveButton = styled(PrimaryButton)`
  background-color: #dc2626;

  &:hover,
  &:focus {
    background-color: #b91c1c;
  }

  &:focus {
    box-shadow:
      0px 0px 0px 1px #d92d20,
      0px 0px 0px 4px rgba(217, 45, 32, 0.12);
  }

  ${disabledStyles};
`;
