import { usePublicKey, Swap } from "@strata-foundation/react";
import { CSSReset, Text, Image } from "@chakra-ui/react";
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { Lbc } from "@strata-foundation/marketplace-ui";



export function SwapComponent() {
  const { id: idRaw } = useVariables();
  const { publicKey } = useWallet();
  const { setVisible } = useWalletModal();


  const id = usePublicKey(idRaw);

  return <div>
      { publicKey ?
        <Lbc id={id} />

        : <Image 
        src='https://i.imgur.com/kKSMt4I.png'
        alt='Reef Token'>
          </Image>
          
      }
          
  </div>
}

function useVariables(): { id: any; } {
  return { id: "59fW48efXXEJvfY7fvi1U2pERNwRAz56p71W8TqHm9Fv"}
} 

//AYN9arYQx9eXPcWEUeFDtqQu9Yfjnh4FBqGZyFb7JZvt testing 
//59fW48efXXEJvfY7fvi1U2pERNwRAz56p71W8TqHm9Fv reef

