import React from 'react';
import * as HoverCard from '@radix-ui/react-hover-card';


const HoverCardDemo = () => (
  <HoverCard.Root>
    <HoverCard.Trigger asChild>
      <a
        className=""
        href="https://www.linkedin.com/in/eramoss/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img
          className="rounded-full inline-block focus:shadow w-12 border-2  border-black"
          src="/linkedin-icon.jpeg"
          alt="Radix UI"
        />
      </a>
    </HoverCard.Trigger>
    <HoverCard.Portal>
      <HoverCard.Content className="left-3 absolute rounded-md p-5 w-96 bg-gray-100 shadow transform duration-300" sideOffset={5}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
          <img
            className="w-16 h-16 rounded-full border border-black"
            src="/profile-pic.png"
            alt="Radix UI"
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
            <div>
              <div className=" m-0 font-bold">Eduardo Ramos</div>
              <div className="m-0 faded">@eramoss</div>
            </div>
            <div className="m-0">
              Desenvolvedor Front-end com React, TypeScript e muito mais! <br />
              && estusiasta UX e Linux
            </div>
          </div>
        </div>

        
      </HoverCard.Content>
    </HoverCard.Portal>
  </HoverCard.Root>
);

export default HoverCardDemo;
