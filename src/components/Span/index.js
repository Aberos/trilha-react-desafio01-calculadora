import { SpanContainer } from "./styles";

const Span = ({text}) => {
    return (
        <SpanContainer>
            <span>{text}</span>
        </SpanContainer>
    );
}

export default Span;