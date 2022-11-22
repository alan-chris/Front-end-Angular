enum Style {
  NONE = 0,
  BOLD = 1,
  ITALIC = 2,
  UNDERLINE = 4,
  EMPHASIS = Style.BOLD | Style.ITALIC,
  HYPERLINK = Style.BOLD | Style.UNDERLINE
}
 
if (value & Style.BOLD) {
  // cuidando de BOLD, EMPHASIS, e HYPERLINK
}

enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE"
}

