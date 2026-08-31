/**
 * The project write-ups were authored as plain strings that still use Markdown's backtick
 * convention for identifiers (`remark-gfm`, `1. 2. 3.`). Rendered raw, the backticks show
 * up as literal characters, so split each string into text and code runs instead.
 *
 * This is not a Markdown parser: backticks only, no nesting, and an unclosed backtick is
 * treated as literal text rather than swallowing the rest of the paragraph.
 */

export interface InlineToken {
  code: boolean;
  text: string;
}

export function tokenizeInline(input: string): InlineToken[] {
  const tokens: InlineToken[] = [];
  let index = 0;

  while (index < input.length) {
    const open = input.indexOf('`', index);
    if (open === -1) break;

    const close = input.indexOf('`', open + 1);
    // Unclosed backtick: keep the remainder as plain text.
    if (close === -1) break;

    if (open > index) tokens.push({ code: false, text: input.slice(index, open) });
    tokens.push({ code: true, text: input.slice(open + 1, close) });
    index = close + 1;
  }

  if (index < input.length) tokens.push({ code: false, text: input.slice(index) });
  return tokens;
}
