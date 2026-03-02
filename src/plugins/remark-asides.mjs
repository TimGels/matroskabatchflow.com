import { visit } from "unist-util-visit";

const ASIDE_TYPES = new Set(["note", "tip", "caution", "danger"]);

const ASIDE_LABELS = {
  note: "Note",
  tip: "Tip",
  caution: "Caution",
  danger: "Danger",
};

const ASIDE_ICONS = {
  note: "ℹ️",
  tip: "💡",
  caution: "⚠️",
  danger: "🚨",
};

/**
 * Remark plugin that transforms container directives (:::note, :::tip, etc.)
 * into styled aside elements.
 *
 * Usage in Markdown:
 *   :::tip
 *   Some helpful tip text.
 *   :::
 *
 *   :::note[Custom Title]
 *   A note with a custom title.
 *   :::
 */
export function remarkAsides() {
  return (tree) => {
    visit(tree, (node) => {
      if (node.type !== "containerDirective") return;

      const type = node.name;
      if (!ASIDE_TYPES.has(type)) return;

      const label =
        node.children[0]?.data?.directiveLabel
          ? node.children[0].children[0]?.value || ASIDE_LABELS[type]
          : ASIDE_LABELS[type];

      // Remove the label paragraph if it was a directive label
      if (node.children[0]?.data?.directiveLabel) {
        node.children.shift();
      }

      const data = node.data || (node.data = {});
      data.hName = "aside";
      data.hProperties = {
        class: `aside aside-${type}`,
        "aria-label": label,
      };

      // Prepend a title element
      node.children.unshift({
        type: "paragraph",
        data: {
          hName: "p",
          hProperties: { class: "aside-title" },
        },
        children: [
          { type: "text", value: `${ASIDE_ICONS[type]} ${label}` },
        ],
      });
    });
  };
}
