import { useEffect, useState } from "react";
import { Card, Divider, Flex } from "antd";
import { ProfileCard } from "../ui/cards/ProfileCard";
import { FocusCards } from "../ui/focus-cards";
import { TechnologyCards } from "./TechnologyCards";
import { Timeline } from "../ui/timeline";
import { TimelineView } from "./TimelineView";
import { IntroView } from "./IntroView";
import { ProjectView } from "./ProjectView";

export const ProfileView: React.FC = () => {
  return (
    <div>
      <Flex justify={"space-evenly"} align="center" wrap gap={8}>
        <ProfileCard></ProfileCard>
        <IntroView></IntroView>
      </Flex>
      <Divider>
        <h1 className="text-4xl font-bold">Projects</h1>
      </Divider>
      <ProjectView></ProjectView>

      <Divider></Divider>
      <Flex justify={"space-evenly"} align="center">
        <TechnologyCards></TechnologyCards>
        <TimelineView></TimelineView>
      </Flex>
    </div>
  );
};
