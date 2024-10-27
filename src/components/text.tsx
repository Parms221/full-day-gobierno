import colors from '@/constants/colors'
import { ReactNode, useMemo } from 'react'

const fontWeight = {
    bold: 700,
    medium: 500,
    regular: 400
}

const getTextStyles = {
    XLTitle1: { fontSize: 48, fontWeight: fontWeight.bold },
    XLTitle2: { fontSize: 38, fontWeight: fontWeight.bold },
    LargeTitle: { fontSize: 29, fontWeight: fontWeight.bold },
    Title1: { fontSize: 24, fontWeight: fontWeight.bold },
    Title2: { fontSize: 22, fontWeight: fontWeight.bold },
    Title3: { fontSize: 19, fontWeight: fontWeight.bold },
    Headline: { fontSize: 17, fontWeight: fontWeight.bold },
    Body: { fontSize: 17, fontWeight: fontWeight.medium },
    Callout: { fontSize: 15, fontWeight: fontWeight.medium },
    Subheadline: { fontSize: 15, fontWeight: fontWeight.bold },
    Footnote: { fontSize: 13, fontWeight: fontWeight.regular },
    Caption1: { fontSize: 12, fontWeight: fontWeight.medium },
    Caption2: { fontSize: 12, fontWeight: fontWeight.medium }
    // Label: { fontSize: 19, fontWeight: fontWeight.medium }
} as const 

const getColorStyles = {
    Black: colors.black,
    Blue: colors.gray,
    Orange: colors.orange,
    Gray: colors.gray,
    White: colors.white
}

type TextStyle = keyof typeof getTextStyles
type ColorStyle = keyof typeof getColorStyles

interface TextProps {
    textStyle: TextStyle
    colorStyle: ColorStyle
    children: ReactNode
}

export function Text({ textStyle, colorStyle, children }: TextProps) {
    const textStyles = useMemo(() => getTextStyles, [])
    const colorStyles = useMemo(() => getColorStyles, [])

    const { fontSize, fontWeight } = textStyles[textStyle]
    const color = colorStyles[colorStyle]

    return <span style={{ fontSize, fontWeight, color, fontFamily: 'SFPro' }}>{children}</span>
}