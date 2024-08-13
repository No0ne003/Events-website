import React from "react";

import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Tailwind,
  Text,
} from "@react-email/components";

interface EmailProps {
  name: string;
  email: string;
  mobielNumber: number;
  headOffice: string;
  message: string;
}

export const Email: React.FC<Readonly<EmailProps>> = ({
  name,
  email,
  mobielNumber,
  headOffice,
  message,
}) => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="mx-auto my-auto bg-white font-sans">
          <Container className="mx-auto my-[40px] w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]">
            <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
              You got a message!
            </Heading>
            <Text className="text-[14px] leading-[24px] text-black">
              Hello Urba Events International,
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              You got an email from <strong>{name}</strong> here is some
              information about it:
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              <strong>EMAIL</strong>:
              <span className="bg-gray-200 px-2 py-1 rounded-xl">{email}</span>,
              <br />
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              <strong>MOBILE NUMBER</strong>:{" "}
              <span className="bg-gray-200 px-2 py-1 rounded-xl">
                {mobielNumber}
              </span>
              ,
              <br />
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              <strong>HEAD OFFICE</strong>: {headOffice}
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              the message: <br />
              {message}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
