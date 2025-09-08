"use client";
import {
  useAuthSignature,
  useWallet,
} from "@buidlerlabs/hashgraph-react-wallets";
import { HashpackConnector } from "@buidlerlabs/hashgraph-react-wallets/connectors";

const messageToSign = "Hello, world!";

export default function Home() {
  const { signAuth } = useAuthSignature();
  const { connect, disconnect, isConnected } = useWallet(HashpackConnector);

  async function signAndVerify() {
    await connect();
    const result = await signAuth(messageToSign);
    const verified = result.publicKey.verify(
      Buffer.from(messageToSign),
      result.signature
    );
    alert(`The signature was ${verified ? "verified" : "not verified"}`);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Example Hedera Wallet Connect
          </h1>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => signAndVerify()}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 shadow-md"
          >
            Connect & Sign Message
          </button>

          {isConnected && (
            <button
              onClick={() => disconnect()}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 shadow-md"
            >
              Disconnect Wallet
            </button>
          )}
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Message to sign: &quot;{messageToSign}&quot;
          </p>
        </div>
      </div>
    </div>
  );
}
