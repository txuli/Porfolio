import CmdInfo from "@/components/CmdInfo";
import Effect from "@/components/Effect";

export default function Home() {
  return (
    <div>
      <header>
        <Effect
          text="Portfolio"
          mLeftInicial={"-200"}
          transitionTime={2}
          tickCambioLetra={200}
          randCar={null}
          fontSize={30}
          marginLeftDiv={30}
        />
      </header>

      <CmdInfo />
    </div>
  );
}
