import React, { useState } from "react";

const ContractLinks = () => {

  const [updateCopy, setUpdateCopy] = useState(false)

  const copyToClipboard = (e) => {

    setUpdateCopy(false)

    let aux = document.createElement("input");
    aux.setAttribute("value", "0x6d76f8a9f1500add43a3991f17820d6788a12f23");
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux)
    setUpdateCopy(true)


  }

  return (
    <div className="absolute -left-28 md:-left-32 top-56 md:top-72 flex flex-row divide-x-2 divide-bordergray space-x-8 transform -rotate-90 h-6 md:h-8 z-50">
      <div className="text-md md:text-lg font-bold text-center">
        <a href="https://docs.darlingwaifu.com/tokenomics/token-information/token-audit-and-kyc" rel="noreferrer" target="_blank">
          Contract audit
        </a>
      </div>
      <div className="text-md md:text-lg font-bold text-center pl-8">

        <a onClick={copyToClipboard} className="cursor-pointer">
          Contract address

        </a>
        {updateCopy && <div className="text-green-300 absolute right-10  text-md md:text-lg font-bold text-center pl-8">Copied!</div>}
      </div>

    </div>
  );
};

export default ContractLinks;
