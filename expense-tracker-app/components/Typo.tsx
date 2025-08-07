import { TextStyle, Text } from "react-native";
import { TypoProps } from "@/types";
import { colors } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";

export default function Typo({
  children,
  color = colors.text,
  fontWeight = "400",
  size,
  style,
  textProps = {},
}: TypoProps) {
  const textStyle: TextStyle = {
    fontSize: size ? verticalScale(size) : verticalScale(18),
    color,
    fontWeight,
  };
  return (
    <Text style={[textStyle, style]} {...textProps}>
      {children}
    </Text>
  );
}
