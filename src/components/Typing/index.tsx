import { TypeAnimation } from "react-type-animation"

export const Typing = () => {
    return <>
            <TypeAnimation
                className="type text-gray_gradient text-center text-md font-generalSans font-semibold"
                sequence={[
                    'Vinícius Henrique da Silva',2000
                ]}
                wrapper="span"
                cursor={false}
                repeat={Infinity}
            />
            <style >{`
                .type::after {
                    content: '|';
                    animation: cursor 1.1s infinite step-start;
                }
                @keyframes cursor {
                    50% {
                        visibility: hidden;
                    }
                }
            `}</style>
        </>
}