import styled from 'styled-components';

export const Icon = styled.div`
  svg .svg-elem-1 {
    fill: transparent;
    transition: fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.8s;
  }

  svg.active .svg-elem-1 {
    fill: rgb(131, 139, 47);
  }

  svg .svg-elem-2 {
    fill: transparent;
    transition: fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.9s;
  }

  svg.active .svg-elem-2 {
    fill: rgb(131, 139, 47);
  }

  svg .svg-elem-3 {
    fill: transparent;
    transition: fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1s;
  }

  svg.active .svg-elem-3 {
    fill: rgb(139, 195, 74);
  }

  svg .svg-elem-4 {
    fill: transparent;
    transition: fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.1s;
  }

  svg.active .svg-elem-4 {
    fill: rgb(131, 139, 47);
  }

  svg .svg-elem-5 {
    fill: transparent;
    transition: fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.2000000000000002s;
  }

  svg.active .svg-elem-5 {
    fill: rgb(131, 139, 47);
  }
`;
