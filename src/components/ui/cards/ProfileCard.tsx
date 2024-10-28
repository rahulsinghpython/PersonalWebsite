import { Card, Divider, Image, Popover, Typography } from "antd";
import profilePic from "@/assets/profile.png";
import reactIcon from "@/assets/react.svg";
import githubIcon from "@/assets/social/github.svg";
import linkedinIcon from "@/assets/social/linkedin.svg";

import "../../../contexts/color-mode/index.css";
import { BackgroundGradient } from "../background-gradient";
import { LinkPreview } from "../link-preview";

type ProfileCardProps = {
  user?: User;
};

type User = {
  name: string;
  email: string;
  avatar: string;
};

export const ProfileCard: React.FC<
  ProfileCardProps
> = ({}: ProfileCardProps) => {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px]  bg-slate-950 dark:bg-zinc-900">
        <Card
          style={{
            width: "28rem",
            // letterSpacing:e",
            borderRadius: "22px",
            // color: "cyan",
          }}
          cover={
            <img
              alt="profile picture"
              src={profilePic}
              style={{
                // padding: "4rem",
                paddingLeft: "4rem",
                paddingRight: "4rem",
                paddingTop: "1rem",
                margin: "0 auto",
              }}
            ></img>
          }
          title={
            <div>
              <Typography.Title
                level={3}
                className="text-xl md:text-2xl font-medium bg-clip-text "
              >
                Rahul Singh
              </Typography.Title>

              <Typography.Text>
                Software Engineer / Data Engineer
              </Typography.Text>
            </div>
          }
        >
          <i>"Software takes years of mastery"</i>
          <Card.Meta
            style={{
              paddingTop: "0.5rem",
            }}
            title="About Me"
            description="Passionate software engineer with a knack for data engineering and a love for solving complex problems."
          ></Card.Meta>
          <div
            style={{
              paddingTop: "0.5rem",
            }}
          >
            <Typography.Text>Email me at: </Typography.Text>
            <Typography.Link href="mailto:rahulsinghpython@gmail.com">
              rahulsinghpython@gmail.com
            </Typography.Link>
            <Typography.Text
              copyable={{ text: "rahulsinghpython@gmail.com" }}
              style={{
                paddingLeft: "0.2rem",
              }}
            />
          </div>
          <Divider></Divider>
          <LinkPreview url="https://github.com/rahulsinghpython">
            <Image src={githubIcon} width={70} preview={false} />
          </LinkPreview>
          <Divider
            type="vertical"
            style={{
              margin: "1rem",
            }}
          ></Divider>
          <LinkPreview url="https://www.linkedin.com/in/rahulsinghcomputerengineer/">
            <Image src={linkedinIcon}></Image>
          </LinkPreview>
          {/* <Image width={60} src={reactIcon} alt="React Icon" /> */}
        </Card>
      </BackgroundGradient>
    </div>
  );
};
