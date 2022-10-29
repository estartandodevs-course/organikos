import styled from 'styled-components';
import theme from '../../styles/theme';

const h1Medium = styled.h1`
  font-family: ${({ theme }) => theme.body.fontFamily};
  font-size: ${({ theme }) => theme.typography.h1.fontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  color: ${({ color }) => color || theme.palettes.black};
`;
const h1Regular = styled.h1`
  font-family: ${({ theme }) => theme.body.fontFamily};
  font-size: ${({ theme }) => theme.typography.h1.fontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  color: ${({ color }) => color || theme.palettes.black};
`;
const h2Medium = styled.p`
  font-family: ${({ theme }) => theme.body.fontFamily};
  font-size: ${({ theme }) => theme.typography.h2.fontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  color: ${({ color }) => color || theme.palettes.black};
`;
const h2Regular = styled.p`
  font-family: ${({ theme }) => theme.body.fontFamily};
  font-size: ${({ theme }) => theme.typography.h2.fontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeightLight};
  color: ${({ color }) => color || theme.palettes.black};
`;
const h3Regular = styled.h2`
  font-family: ${({ theme }) => theme.body.fontFamily};
  font-size: ${({ theme }) => theme.typography.h3.fontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  color: ${({ color }) => color || theme.palettes.black};
`;
const h4Medium = styled.p`
  font-family: ${({ theme }) => theme.body.fontFamily};
  font-size: ${({ theme }) => theme.typography.h4.fontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  color: ${({ color }) => color || theme.palettes.black};
`;
const h4Regular = styled.p`
  font-family: ${({ theme }) => theme.body.fontFamily};
  font-size: ${({ theme }) => theme.typography.h4.fontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  color: ${({ color }) => color || theme.palettes.black};
`;
const h4Light = styled.p`
  font-family: ${({ theme }) => theme.body.fontFamily};
  font-size: ${({ theme }) => theme.typography.h4.fontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeightLight};
  color: ${({ color }) => color || theme.palettes.black};
`;

const h4LightSublinhado = styled.p`
  font-family: ${({ theme }) => theme.body.fontFamily};
  font-size: ${({ theme }) => theme.typography.h4.fontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeightLight};
  color: ${({ color }) => color || theme.palettes.black};
  text-decoration: underline;
`;

const h4LightSublinadoWeb = styled.p`
  font-family: ${({ theme }) => theme.body.fontFamily};
  font-size: ${({ theme }) => theme.typography.h2.fontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeightLight};
  color: ${({ color }) => color || theme.palettes.black};
  text-decoration: underline;
`;
const h5Medium = styled.p`
  font-family: ${({ theme }) => theme.body.fontFamily};
  font-size: ${({ theme }) => theme.typography.h5.fontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeightLight};
  color: ${({ color }) => color || theme.palettes.black};
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
