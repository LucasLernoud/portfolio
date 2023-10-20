import { Environment, OrbitControls, Sky } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { useControls } from "leva";
import { Desk } from "./Desk";
import { Macbook } from "./Macbook";

export const Experience = () => {
  const { animation } = useControls({
    animation: {
      value: "Typing",
      options: ["Typing", "Falling", "Standing"],
    },
  });
  return (
    <>
      {/* <OrbitControls /> */}
      {/* <Sky /> */}

      <Environment preset="sunset" />
      <group position-y={-1}>
        <Avatar animation={animation} />
        <Desk />
        <Macbook />
      </group>
    </>
  );
};
