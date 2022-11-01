import styled, { css } from 'styled-components';

const h1Medium = styled.h1`
  ${({ theme, color }) => css`
    font-size: ${theme.typography.h1.fontSize};
    font-weight: ${theme.typography.fontWeightMedium};
    color: ${color || theme.palettes.black};
    font-family: ${theme.body.fontFamily};
  `}
`;
const h1Regular = styled.h1`
  ${({ theme, color }) => css`
    font-family: ${theme.body.fontFamily};
    font-size: ${theme.typography.h1.fontSize};
    font-weight: ${theme.typography.fontWeightRegular};
    color: ${color || theme.palettes.black};
  `}
`;
const h2Medium = styled.p`
  ${({ theme, color }) => css`
    font-family: ${theme.body.fontFamily};
    font-size: ${theme.typography.h2.fontSize};
    font-weight: ${theme.typography.fontWeightMedium};
    color: ${color || theme.palettes.black};
  `};
`;

const h2Regular = styled.p`
  ${({ theme, color }) => css`
    font-family: ${theme.body.fontFamily};
    font-size: ${theme.typography.h2.fontSize};
    font-weight: ${theme.typography.fontWeightLight};
    color: ${color || theme.palettes.black};
  `}
`;

const h3Regular = styled.h2`
  ${({ theme, color }) => css`
    font-family: ${theme.body.fontFamily};
    font-size: ${theme.typography.h3.fontSize};
    font-weight: ${theme.typography.fontWeightRegular};
    color: ${color || theme.palettes.black};
  `};
`;

const h4Medium = styled.p`
  ${({ theme, color }) => css`
    font-family: ${theme.body.fontFamily};
    font-size: ${theme.typography.h4.fontSize};
    font-weight: ${theme.typography.fontWeightMedium};
    color: ${color || theme.palettes.black};
  `};
`;

const h4Regular = styled.p`
  ${({ theme, color }) => css`
    font-family: ${theme.body.fontFamily};
    font-size: ${theme.typography.h4.fontSize};
    font-weight: ${theme.typography.fontWeightRegular};
    color: ${color || theme.palettes.black};
  `}
`;

const h4Light = styled.p`
  ${({ theme, color }) => css`
    font-family: ${theme.body.fontFamily};
    font-size: ${theme.typography.h4.fontSize};
    font-weight: ${theme.typography.fontWeightLight};
    color: ${color || theme.palettes.black};
  `}
`;

const h4LightSublinhado = styled.p`
  ${({ theme, color }) => css`
    font-family: ${theme.body.fontFamily};
    font-size: ${theme.typography.h4.fontSize};
    font-weight: ${theme.typography.fontWeightLight};
    color: ${color || theme.palettes.black};
  `}
  text-decoration: underline;
`;

const h4LightSublinadoWeb = styled.p`
  ${({ theme, color }) => css`
    font-family: ${theme.body.fontFamily};
    font-size: ${theme.typography.h2.fontSize};
    font-weight: ${theme.typography.fontWeightLight};
    color: ${color || theme.palettes.black};
  `}
  text-decoration: underline;
`;
const h5Medium = styled.p`
  ${({ theme, color }) => css`
    font-family: ${theme.body.fontFamily};
    font-size: ${theme.typography.h5.fontSize};
    font-weight: ${theme.typography.fontWeightLight};
    color: ${color || theme.palettes.black};
  `}
`;

const Typographies = {
  h1Medium,
  h1Regular,
  h2Medium,
  h2Regular,
  h3Regular,
  h4Light,
  h4LightSublinadoWeb,
  h4LightSublinhado,
  h4Medium,
  h4Regular,
  h5Medium,
};

export { Typographies };
