import { Divider, Flex } from "antd";
import { ProfileCard } from "../ui/cards/ProfileCard";
import { IntroView } from "./IntroView";
import { ProjectView } from "./ProjectView";
import { TechnologyCards } from "./TechnologyCards";
import { TimelineView } from "./TimelineView";

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
