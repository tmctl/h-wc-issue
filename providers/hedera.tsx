"use client";

import { HWBridgeProvider } from "@buidlerlabs/hashgraph-react-wallets";
import { HederaMainnet } from "@buidlerlabs/hashgraph-react-wallets/chains";
import {
  HashpackConnector,
  KabilaConnector,
} from "@buidlerlabs/hashgraph-react-wallets/connectors";

const metadata = {
  name: "My awesome dApp",
  description: "Created using Hashgraph React Wallets",
  icons: [],
  url: window.location.href,
};

export const ReactWalletsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <HWBridgeProvider
      metadata={metadata}
      projectId={"181110c2737fe63b43b2edf323c8f201"}
      connectors={[HashpackConnector, KabilaConnector]}
      chains={[HederaMainnet]}
    >
      {children}
    </HWBridgeProvider>
  );
};
