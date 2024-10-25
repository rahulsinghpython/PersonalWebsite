import { useEffect, useState } from "react";
import { Card, Divider, Flex } from "antd";
import { ProfileCard } from "../ui/cards/ProfileCard";
import { FocusCards } from "../ui/focus-cards";
import { TechnologyCards } from "./TechnologyCards";
import { Timeline } from "../ui/timeline";
import { TimelineView } from "./TimelineView";
import { IntroView } from "./IntroView";

export const ProfileView: React.FC = () => {
  return (
    <div style={{}}>
      <Flex justify={"space-evenly"} align="space-around" wrap gap={8}>
        <ProfileCard></ProfileCard>
        <IntroView></IntroView>
      </Flex>
      <Divider></Divider>
      <Flex justify={"space-evenly"}>
        <TimelineView></TimelineView>
        <TechnologyCards></TechnologyCards>
      </Flex>
    </div>
  );
};
