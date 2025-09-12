import React from "react";
import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useColorMode } from "@docusaurus/theme-common";

const darkModeMappings = {
  POST: {
    color: "#78b993",
    background: "#0e1712",
    border: "#193123",
  },
  GET: {
    color: "#7979d4",
    background: "#212133",
    border: "#47476b",
  },
};

const lightModeMappings = {
  POST: {
    color: "#317854",
    background: "#e4f5ea",
    border: "#c1e3d0",
  },
  GET: {
    color: "#4a4aa5",
    background: "#e8e8fb",
    border: "#c9c9ee",
  },
};

const getStyle = (method, colorMode) => (colorMode === "dark" ? darkModeMappings : lightModeMappings)[method];

const HeaderWrapper = styled.div`
  border: 1px solid ${(props) => getStyle(props.method, props.mode).border};
  background: ${(props) => getStyle(props.method, props.mode).background};
  border-radius: 4px;
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  justify-content: space-between;
  height: 100%;
  margin-bottom: 24px;
`;

const MethodName = styled.h2`
  color: ${(props) => getStyle(props.method, props.mode).color};
  font-weight: 700;
  font-size: 14px;
  margin: 0 10px 0 0;
`;

const CopyButton = styled.button`
  color: ${(props) => getStyle(props.method, props.mode).color};
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
