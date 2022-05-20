import { createGlobalStyle } from 'styled-components';

export const Globalstyle2 = createGlobalStyle`
  @font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1618230964032'); /* IE9 */
  src: url('iconfont.eot?t=1618230964032#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAZIAAsAAAAAC1gAAAX8AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDMgqJbIgtATYCJAMUCwwABCAFhG0HUhvDCciO1FYzjSR50fW42e97CS1NKgqlZ6moUKFmgVSMYkcNhqYnSs9VU7gvrvA8tnufmy5KmWRSkC5JhCJEihCSKf7nmOny+cDy22wukWXRCTga8MAi0i4oCjSATpRP5YaxCxM4DhAAylgx0KKoYkGMpAgQjNmMBjWIQ0pkDg4RS5xSlhZAF4iIm4X4CQAst38e/ZAUMQAmakGZWldLtFDw+X5ZT1gdVmgzEcBqTw8A1CoAAkAMABKgPdXYh3D5MbaQSvs9UgEAihiGP9/P0z6f8WW9w4HPnZGYUv/gAWAEEgKoA0XoirAFAnLlWDoFYPB5GgUQ4PMZdMEEX9ZD9r4IRWg0BUAK0A2AR4Ad/fAYRvLovSSuYrEfzTh7ePu7u2TRriJnT/foiezVERAEFrFKZLdzwzaVKhhiHannrtnYZJhcr9uRzaZK6Tkyolxsz9etXXx4eEoyHdMT7sRm86BUrizVSze3rBtLbfFvUl+mFwNQoW5Qi56hYY4btp8kR3nmAFgP0otvIzTIXhFSBGqRJCxgm33ccXs+t/Wk3zrbuNd2JQ0jAmu22aVrhFwu4wZ7EXuDPSKMkXHJJYvCwtjQvfRi7rw9mztQW8q1ob9f+ZiiD4dZ997YC0LKnpDD0Y37w8/bo1VSX6GO5wyvObROQtkEdo3vGpA863x9iStitghjIrbZpdJ1kkW+vms2+AuB7Jq1tJRbr/HXdiO83KTMbDNkRfkZ9IIedrs9X+rua2M3yny3sWWG67U3cpS+gkBR0eul+VX0+8PZkJBjkqJ9rwiaYfQiFiThXnPS9b0ahDq2uWTp1qN+aO16CZq46jlHzvznSnPze/GDcjz/zJn5uGCm8qWCq+S//5JXW4t2/jMr1OwoNRWyV2d39/YIUz5effv2akKlmXRj21W376zG+ebIEXf3jQHJAakf/U7MOX58DuAR0IDnYJ9u0eC/GG7oS19GFL/UuTu6i2w9ebVKXNhtzLOT/+QN8ncz4pFIHmeKVBnd2unKgqxPOzj+sczvn4DQn0LHwr3shsbA+uQPFLIqz59+joulW752TW7wOnu2Wo8IqrLn542p9TghHncojhYWNXUEqEImy1Mpa4TwdS3d9Z+06GB7+0VJsRvVVetTERHyi6Qhsb0jUS6pUvgvq4illcqvFBFtCtk0nx5WqlWJGk3exidPCuT1e+kW3PDnVSrpithlhqE1E5NT0toUEV9FPlj2hTyU9Zd1j37zVvGHD+PF1vgGvC1NnuyNY91Foj1FTw4cCEppdP/atTlGeZlq8sFSMxno7f1ek6f8/dbW4l4R0z3K08u95YV7TZnsw8aUoIMHi0sUJyunQ81Q7l/Cez3aUi8wdrXPv0m1SH6Ro1+5tsRUV0PNXOVxcBOLLSv+/fe9esmT+H1QPi1JrHA5BPDeC4/qMtnb1xz3SvwrXKprmu391osSz9qkUf+DW5Wj0qZYDx5UhhYuC9vY8EVhmA49AaqRlckUmkPqMSGgeJ2RRFyseF4uq5LV4LBQ3Fp0EDIAADhuEjcIOYDDYTNk7yfESYL5SobBdw8LlnR65Pwmpn+cjnc3dZ7GaQ4rCcQJ8KiLoDTrm2CVbCBFjsIXSS1BZ5YgiTIGPMwYPP4FX4LV2/vtaPy0qUfEIRYFmLMxQBALQZLYGBChpYATsXygRCtdTfNhQUDFBQCizAWAeDoOmLvrQPD0FEli3wMRie/AiWcIoKjisyUtLEaqyKJT8zot0z2ZMWpMA3pNw1NObIPOMNSntgQ5Nl6lswwabUxiXELUV6ob0FnamDE4wZDE83pGbzH1Mwpwmq6vz8SYLaYenYaPG8/z5qz4eH3aI8VpTP1AKWKho8bT0WJ0m4xhpGEyQG+251Gx72+gYzCkj5olp6RAraJjMcjYPSNRnIQSyFLhQKmSY0keNIFBEh459Rh6KtqkH0OB9Dp9qtuEYU4f1ENHgxdnfA2nWZZ41EpfVhjXv7j/GLN+yLLKFaJgRCASiZATkIfZOEDp1QMGrbrHaCZjudpjklE9MMlPnTzUrzZ1GwEA') format('woff2'),
  url('iconfont.woff?t=1618230964032') format('woff'),
  url('iconfont.ttf?t=1618230964032') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('iconfont.svg?t=1618230964032#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
`;


