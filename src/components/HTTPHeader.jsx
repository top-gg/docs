import React from "react";
import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useColorMode } from "@docusaurus/theme-common";

const HeaderWrapper = styled.div`
  border: 1px solid var(--http-header-${(props) => props.method.toLowerCase()}-border);
  background: var(--http-header-${(props) => props.method.toLowerCase()}-background);
  border-radius: 4px;
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  justify-content: space-between;
  height: 100%;
  margin-bottom: 24px;
`;

const MethodName = styled.h2`
  color: var(--http-header-${(props) => props.method.toLowerCase()}-color);
  font-weight: 700;
  font-size: 14px;
  margin: 0 10px 0 0;
`;

const CopyButton = styled.button`
  color: var(--http-header-${(props) => props.method.toLowerCase()}-color);
  background: inherit;
  font-size: 14px;
  border: none;
  cursor: pointer;
  height: 45px;
  align-items: center;
  font-weight: 500;
  padding: 0 10px;
  &:hover {
    filter: brightness(0.8);
  }
`;

const Header = styled.span`
  padding: 10px 15px;
  display: flex;
  align-items: center;
`;

const EndpointUrl = styled.span``;

const BASE_URL = "https://top.gg/api";

export default function HTTPHeader({ type, path }) {
  const [copied, setCopy] = React.useState(false);
  const { colorMode } = useColorMode();

  React.useEffect(() => {
    if (copied) {
      setTimeout(() => setCopy(false), 3000);
    }
  }, [copied]);
  
  const fullUrl = BASE_URL + path
  
  return (
    <HeaderWrapper method={type} mode={colorMode}>
      <Header>
        <MethodName method={type} mode={colorMode}>{type}</MethodName>
        <EndpointUrl
          dangerouslySetInnerHTML={{
            __html: path.replace(/:[a-z_]+/g, "<b>$&</b>"),
          }}
        />
      </Header>
      <CopyToClipboard text={fullUrl} onCopy={() => setCopy(true)} mode={colorMode}>
        <CopyButton method={type} mode={colorMode}>{copied ? "Copied!" : "Copy URL"}</CopyButton>
      </CopyToClipboard>
    </HeaderWrapper>
  );
}
