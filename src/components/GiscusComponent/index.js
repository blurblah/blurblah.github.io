import React from 'react';
import Giscus from "@giscus/react";
import { useColorMode } from "@docusaurus/theme-common";

export default function GiscusComponent() {
    const { colorMode } = useColorMode();
  
    return (
      <Giscus
        repo="blurblah/blurblah.github.io"
        repoId="R_kgDOLigxhw"
        category="General"
        categoryId="DIC_kwDOLigxh84CeG-U"
        mapping="url"   // Important! To map comments to URL
        term="Welcome to @giscus/react component!"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="1"
        inputPosition="top"
        theme={colorMode}   // data-theme="light_high_contrast"
        lang="ko"
        loading="lazy"
        crossorigin="anonymous"
        async
      />
    );
  }