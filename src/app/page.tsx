"use client";
import React, { useState } from "react";
import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import Image from "next/image";

interface Props {
  mbti: string[];
  setMbti: React.Dispatch<React.SetStateAction<string[]>>;
}
function MbtiToggle({ mbti, setMbti }: Props) {
  const handleMbti = (
    event: React.MouseEvent<HTMLElement>,
    newType: string
  ) => {
    let newMbti: string[] = [...mbti];
    if (newType === "I" || newType === "E") newMbti[0] = newType;
    else if (newType === "N" || newType === "S") newMbti[1] = newType;
    else if (newType === "T" || newType === "F") newMbti[2] = newType;
    else if (newType === "J" || newType === "P") newMbti[3] = newType;
    setMbti(newMbti);
  };

  return (
    <Box>
      <ToggleButtonGroup
        value={mbti[0]}
        orientation="vertical"
        exclusive
        onChange={handleMbti}
        aria-label="I_E"
      >
        <ToggleButton value="I" aria-label="introv">
          I
        </ToggleButton>
        <ToggleButton value="E" aria-label="extrav">
          E
        </ToggleButton>
      </ToggleButtonGroup>
      <ToggleButtonGroup
        value={mbti[1]}
        orientation="vertical"
        exclusive
        onChange={handleMbti}
        aria-label="N_S"
      >
        <ToggleButton value="N" aria-label="intuition">
          N
        </ToggleButton>
        <ToggleButton value="S" aria-label="sensing">
          S
        </ToggleButton>
      </ToggleButtonGroup>
      <ToggleButtonGroup
        value={mbti[2]}
        orientation="vertical"
        exclusive
        onChange={handleMbti}
        aria-label="T_F"
      >
        <ToggleButton value="T" aria-label="thinking">
          T
        </ToggleButton>
        <ToggleButton value="F" aria-label="feeling">
          F
        </ToggleButton>
      </ToggleButtonGroup>
      <ToggleButtonGroup
        value={mbti[3]}
        orientation="vertical"
        exclusive
        onChange={handleMbti}
        aria-label="J_P"
      >
        <ToggleButton value="J" aria-label="judging">
          J
        </ToggleButton>
        <ToggleButton value="P" aria-label="perceiving">
          P
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}

function MbtiImg({ mbti }: { mbti: string[] }) {
  let mbtiStr = mbti.join("");
  let src = "/" + mbtiStr + ".jpg";
  return <Image src={src} width={500} height={500} alt="" />;
}

export default function Home() {
  const [mbti, setMbti] = useState<string[]>(["I", "S", "T", "P"]);

  return (
    <>
      <MbtiToggle mbti={mbti} setMbti={setMbti} />
      <MbtiImg mbti={mbti} />
    </>
  );
}
