import { useTypewriter } from "react-simple-typewriter";

const MyPending = ({ hasPendingServices }) => {
  const [text] = useTypewriter({
    words: ["My Pending Services"],
    loop: 0,
  });

  return (
    <div>
      <div className="h-[30vh] flex justify-center">
        <h2 className="text-4xl font-semibold text-center pt-14">{text}</h2>
      </div>
      <div>
        {!hasPendingServices && (
          <p className="text-xl text-center pb-10 text-gray-500">
            No Pending Services Yet
          </p>
        )}
      </div>
    </div>
  );
};

export default MyPending;
