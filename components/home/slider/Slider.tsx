import { FunctionComponent, useState } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Slider: FunctionComponent = (): JSX.Element => {
  const [blur, setBlur] = useState<boolean>(true);
  const images: string[] = [
    "slider1",
    "slider2",
    "slider3",
    "slider4",
    "slider5",
    "slider6",
    "slider7",
    "slider8",
    "slider9",
    "slider10",
    "slider11",
    "slider12",
    "slider13",
    "slider14",
    "slider15",
    "slider16",
    "slider17",
    "slider18",
    "slider19",
    "slider20",
    "slider21",
    "slider22",
    "slider23",
    "slider24",
    "slider25",
    "slider26",
    "slider27",
    "slider28",
    "slider29",
    "slider30",
    "slider31",
  ];

  return (
    <div className="min-h-80 h-80 flex relative w-full bg-midWhite overflow-hidden pb-10 pt-10">
      <Marquee
        className="flex"
        pauseOnHover
        gradient={false}
        pauseOnClick
        direction="right"
      >
        {images.map((image, key) => {
          return (
            <div
              key={key}
              className={`min-h-60 min-w-60 h-60 w-60 relative mr-4 ${
                blur && "blur-sm animate-unblur"
              }`}
            >
              <Image
                src={`/images/slider/${image}.png`}
                objectFit="cover"
                layout="fill"
                priority
                placeholder="blur"
                blurDataURL={`/images/blurred/${image}.png`}
                onLoadingComplete={() => setBlur(false)}
              />
            </div>
          );
        })}
      </Marquee>
    </div>
  );
};

export default Slider;
