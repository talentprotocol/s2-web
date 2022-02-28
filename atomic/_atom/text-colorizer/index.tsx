import { useMemo } from "react";
import { COLORS, AvailableColors } from "../../_static/color-palette";
import { Colorized } from "./styled";

interface Props {
  content: string;
}

const TextColorizer = ({ content }: Props) => {
  const memoizedText = useMemo(() => {
    const parsedContent = content.split(/(#[a-z]*#)/);
    return parsedContent.reduce((label, element, index) => {
      if (
        element.charAt(0) === "#" &&
        element.charAt(element.length - 1) === "#"
      ) {
        label.push(
          <Colorized
            key={`${element}-${index}`}
            color={
              COLORS[
                element
                  .replace(/#/g, "")
                  .toUpperCase() as AvailableColors
              ]
            }
          >
            {parsedContent[index + 1]}
          </Colorized>
        );
      }
      return label;
    }, [] as JSX.Element[]);
  }, [content]);
  return <>{memoizedText}</>;
};

export default TextColorizer;
