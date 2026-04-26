/**
 * Converts markdown text to HTML.
 * Handles: headings, paragraphs, bold, italic, links,
 * unordered lists, ordered lists, blockquotes, hr.
 */

function inlineHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/`(.+?)`/g, "<code>$1</code>")
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>');
}

export function markdownToHtml(markdown: string): string {
  // Split into blocks (separated by blank lines)
  const rawBlocks = markdown.split(/\n{2,}/);
  const html: string[] = [];

  for (const block of rawBlocks) {
    const trimmed = block.trim();
    if (!trimmed) continue;

    const lines = trimmed.split("\n");
    const first = lines[0];

    // H2
    if (first.startsWith("## ")) {
      html.push(`<h2>${inlineHtml(first.slice(3).trim())}</h2>`);
      continue;
    }

    // H3
    if (first.startsWith("### ")) {
      html.push(`<h3>${inlineHtml(first.slice(4).trim())}</h3>`);
      continue;
    }

    // HR
    if (/^-{3,}$/.test(trimmed) || /^\*{3,}$/.test(trimmed)) {
      html.push("<hr />");
      continue;
    }

    // Blockquote
    if (lines.every((l) => l.startsWith("> "))) {
      const inner = lines.map((l) => inlineHtml(l.slice(2))).join(" ");
      html.push(`<blockquote><p>${inner}</p></blockquote>`);
      continue;
    }

    // Unordered list
    if (lines.every((l) => /^[-*] /.test(l))) {
      const items = lines
        .map((l) => `<li>${inlineHtml(l.replace(/^[-*] /, ""))}</li>`)
        .join("");
      html.push(`<ul>${items}</ul>`);
      continue;
    }

    // Ordered list
    if (lines.every((l) => /^\d+\. /.test(l))) {
      const items = lines
        .map((l) => `<li>${inlineHtml(l.replace(/^\d+\. /, ""))}</li>`)
        .join("");
      html.push(`<ol>${items}</ol>`);
      continue;
    }

    // Mixed block (list items mixed with text) — treat as paragraph
    const paraText = lines.join(" ");
    html.push(`<p>${inlineHtml(paraText)}</p>`);
  }

  return html.join("\n");
}
