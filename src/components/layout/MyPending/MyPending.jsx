import { useTypewriter } from 'react-simple-typewriter';

const MyPending = () => {
    const [text] = useTypewriter({
        words: ['My Pending Services'],
        loop: 0
    });

    return (
        <div className="h-[30vh] flex justify-center">
            <h2 className="text-4xl font-semibold text-center py-14">
                {text}
            </h2>
        </div>
    );
};

export default MyPending;
