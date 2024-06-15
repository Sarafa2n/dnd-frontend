'use client'

import React from "react";
import {AdaptivityProvider, AppRoot, ConfigProvider, SizeType} from "@vkontakte/vkui";

import './globals.css';
import '@vkontakte/vkui/dist/components.css';
import '@vkontakte/vkui-tokens/themes/paradigmBase/cssVars/declarations/onlyVariables.css';
import '@vkontakte/vkui-tokens/themes/paradigmBaseDark/cssVars/declarations/onlyVariablesLocal.css';

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)  => {
    return (
        <html className='vkui'>
          <body>
              <ConfigProvider
                  platform={undefined}
                  tokensClassNames={{
                      light: 'vkui--paradigmBase--light',
                      dark: 'vkui--paradigmBase--dark',
                  }}
                  appearance={undefined}
              >
                  <AdaptivityProvider sizeY={SizeType.COMPACT} sizeX={SizeType.REGULAR}>
                      <AppRoot>
                          {children}
                      </AppRoot>
                  </AdaptivityProvider>
              </ConfigProvider>
          </body>
      </html>
    );
}

export default RootLayout;