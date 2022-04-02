import React from "react";
import Button from "../elements/button";
import lock from "../../assets/vector/lock.svg";
import paper from "../../assets/vector/paper.svg";
import isologo from "../../assets/vector/isologo.svg";

const CTA = () => {
  return (
    <div className="absolute lg:relative top-0 left-0 w-full lg:w-1/2 flex flex-col items-center mx-auto my-auto h-full pt-third md:pt-32 lg:pt-32 md:px-8 lg:px-6">
      <div className="w-full md:w-3/4 px-20 md:px-0 lg:w-full flex flex-center content-center">
        <img
          className="lg:transform lg:scale-110 w-auto h-auto"
          alt="Darling Waifu NFT Game"
          src={isologo}
        />
      </div>
      <div className="w-full mt-action lg:mt-6 mb-8 text-center font-bold text-xl bright-text">
        Play to Business NFT
      </div>
      <div className="w-full flex flex-col space-y-4 content-center items-center justify-center">
        <div className="-px-4 flex flex-row space-x-4 content-center items-center justify-center">
          <Button
            link="https://beta.darlingwaifu.com"
            title="Try the Darling Waifu beta"
          >
            <div className="flex flex-row">
              <img src={lock} alt="Beta test" className="mr-4" />
              <div>Beta test</div>
            </div>
          </Button>
          <Button
            link="https://docs.darlingwaifu.com/"
            title="Read our whitepaper"
          >
            <div className="flex flex-row">
              <img src={paper} alt="Whitepaper" className="mr-4" />
              <div>Whitepaper</div>
            </div>
          </Button>
        </div>
        <div className="-px-4 flex flex-row space-x-4 content-center items-center justify-center">
          {/*<Button
            link="https://ido.darlingwaifu.com"
            title="Get your tokens before the ido"
          >
            <div className="flex flex-row">
              <img src={lock} alt="IDO sale" className="mr-4" />
              <div>IDO Sale</div>
            </div>
          </Button>*/}
          <Button
            link="https://calculator.darlingwaifu.com"
            title="Calculate your commissions"
          >
            <div className="flex flex-row">
              <img src={lock} alt="Calculator" className="mr-4" />
              <div>Calculator</div>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
