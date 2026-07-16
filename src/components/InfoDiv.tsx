interface InfoDivProps {
  Text: string;
  Text2: string;
}

const InfoDiv = ({ Text, Text2 }: InfoDivProps) => {
  return (
    <div className="w-auto flex items-center pl-2">
      <div className="text-gray-600 ibm-plex-mono-regular mr-2 text-center mb-">{Text}</div>
      <div className="w-96 text-left">{Text2}</div>
    </div>
  );
};

export default InfoDiv;
