import {StyledDescription} from "./styled"

interface Props {
    content: string;
}

const Description = ({content}: Props) => (
    <StyledDescription>{content}</StyledDescription>
)

export default Description;