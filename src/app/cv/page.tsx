import Effect from "@/components/Effect";

export default function Cv() {
  return (
    <div>
      <Effect
        text="Curriculum"
        mLeftInicial={"-200"}
        transitionTime={2}
        tickCambioLetra={200}
        randCar={null}
        fontSize={30}
        marginLeftDiv={30}
      />
    </div>
  );
}
