import { useEditor, EditorContent, NodeViewWrapper, ReactNodeViewRenderer } from "@tiptap/react";
import type { NodeViewProps } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import { Image as TiptapImage } from "@tiptap/extension-image";
import { useEffect } from "react";
import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  Strikethrough,
  List,
  ListOrdered,
  Heading1,
  Heading2,
  Heading3,
  Quote,
  Link as LinkIcon,
  Unlink,
  Image as ImageIcon,
  Undo,
  Redo,
  Minus,
  RectangleHorizontal,
  AlignLeft,
  AlignCenter,
  AlignRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface RichTextEditorProps {
  content: string;
  onChange: (html: string) => void;
}

// ── Floating toolbar that appears when an image node is selected ──────────────
const ImageNodeView = ({ node, updateAttributes, selected }: NodeViewProps) => {
  const attrs = node.attrs as { src?: string; alt?: string; title?: string; width?: string; "data-align"?: string };
  const width = attrs.width || "100%";
  const align = attrs["data-align"] || "center";

  const sizeOptions = [
    { label: "S", title: "Small (33%)", value: "33%" },
    { label: "M", title: "Medium (50%)", value: "50%" },
    { label: "Full", title: "Full width (100%)", value: "100%" },
  ];

  const alignOptions = [
    { icon: AlignLeft, title: "Float left", value: "left" },
    { icon: AlignCenter, title: "Centre", value: "center" },
    { icon: AlignRight, title: "Float right", value: "right" },
  ];

  // Wrapper alignment classes
  const wrapperClass =
    align === "left"
      ? "float-left mr-4"
      : align === "right"
      ? "float-right ml-4"
      : "mx-auto block";

  return (
    <NodeViewWrapper
      as="span"
      style={{ display: "inline-block", width, maxWidth: "100%", position: "relative" }}
      className={cn("my-2", wrapperClass)}
    >
      {/* Floating toolbar — only visible when selected */}
      {selected && (
        <div
          contentEditable={false}
          className="absolute -top-10 left-1/2 -translate-x-1/2 z-50 flex items-center gap-0.5 bg-background border border-border rounded-lg shadow-md px-1.5 py-1 select-none"
        >
          {/* Size buttons */}
          {sizeOptions.map((opt) => (
            <button
              key={opt.value}
              title={opt.title}
              onMouseDown={(e) => {
                e.preventDefault();
                updateAttributes({ width: opt.value });
              }}
              className={cn(
                "text-xs px-2 py-0.5 rounded font-medium transition-colors",
                width === opt.value
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted text-muted-foreground"
              )}
            >
              {opt.label}
            </button>
          ))}

          <div className="w-px h-5 bg-border mx-1" />

          {/* Align buttons */}
          {alignOptions.map((opt) => {
            const Icon = opt.icon;
            return (
              <button
                key={opt.value}
                title={opt.title}
                onMouseDown={(e) => {
                  e.preventDefault();
                  updateAttributes({ "data-align": opt.value });
                }}
                className={cn(
                  "p-1 rounded transition-colors",
                  align === opt.value
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted text-muted-foreground"
                )}
              >
                <Icon className="w-3.5 h-3.5" />
              </button>
            );
          })}
        </div>
      )}

      {/* The image itself */}
      <img
        src={attrs.src || ""}
        alt={attrs.alt || ""}
        title={attrs.title || ""}
        style={{ width: "100%", display: "block" }}
        className={cn("rounded-lg", selected && "ring-2 ring-primary ring-offset-1")}
        draggable={false}
      />
    </NodeViewWrapper>
  );
};

// ── Custom Image extension with NodeView + extra attrs ────────────────────────
const ResizableImage = TiptapImage.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      width: {
        default: "100%",
        parseHTML: (el) => el.getAttribute("width") || el.style.width || "100%",
        renderHTML: (attrs) => ({ width: attrs.width, style: `width:${attrs.width}` }),
      },
      "data-align": {
        default: "center",
        parseHTML: (el) => el.getAttribute("data-align") || "center",
        renderHTML: (attrs) => ({ "data-align": attrs["data-align"] }),
      },
    };
  },
  addNodeView() {
    return ReactNodeViewRenderer(ImageNodeView);
  },
});

// ── Small toolbar button ───────────────────────────────────────────────────────
const MenuButton = ({
  onClick,
  active,
  children,
  title,
  label,
}: {
  onClick: () => void;
  active?: boolean;
  children: React.ReactNode;
  title: string;
  label?: string;
}) => (
  <Button
    type="button"
    variant="ghost"
    size={label ? "sm" : "icon"}
    className={cn(
      label ? "h-8 px-2 rounded-md text-xs gap-1" : "h-8 w-8 rounded-md",
      active && "bg-accent text-accent-foreground"
    )}
    onClick={onClick}
    title={title}
  >
    {children}
    {label && <span>{label}</span>}
  </Button>
);

// ── Main editor component ─────────────────────────────────────────────────────
const RichTextEditor = ({ content, onChange }: RichTextEditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3] },
      }),
      Underline,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: { class: "text-primary underline cursor-pointer" },
      }),
      ResizableImage.configure({
        inline: true,
        HTMLAttributes: { class: "rounded-lg max-w-full" },
      }),
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          "prose prose-sm dark:prose-invert max-w-none min-h-[300px] p-4 focus:outline-none",
      },
    },
  });

  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content);
    }
  }, [content]);

  if (!editor) return null;

  const addLink = () => {
    const url = prompt("Enter URL:");
    if (url) {
      editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
    }
  };

  const addButton = () => {
    const label = prompt("Button label:", "Click here");
    if (!label) return;
    const url = prompt("Button URL:", "https://");
    if (!url) return;
    const html = `<a href="${url}" class="blog-btn" target="_blank" rel="noopener noreferrer">${label}</a>`;
    editor.chain().focus().insertContent(html).run();
  };

  const addImage = () => {
    const url = prompt("Enter image URL:");
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  return (
    <div className="border border-border rounded-xl overflow-hidden bg-background">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-0.5 p-2 border-b border-border bg-muted/30">
        <MenuButton
          onClick={() => editor.chain().focus().toggleBold().run()}
          active={editor.isActive("bold")}
          title="Bold"
        >
          <Bold className="w-4 h-4" />
        </MenuButton>
        <MenuButton
          onClick={() => editor.chain().focus().toggleItalic().run()}
          active={editor.isActive("italic")}
          title="Italic"
        >
          <Italic className="w-4 h-4" />
        </MenuButton>
        <MenuButton
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          active={editor.isActive("underline")}
          title="Underline"
        >
          <UnderlineIcon className="w-4 h-4" />
        </MenuButton>
        <MenuButton
          onClick={() => editor.chain().focus().toggleStrike().run()}
          active={editor.isActive("strike")}
          title="Strikethrough"
        >
          <Strikethrough className="w-4 h-4" />
        </MenuButton>

        <div className="w-px h-8 bg-border mx-1" />

        <MenuButton
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          active={editor.isActive("heading", { level: 1 })}
          title="Heading 1"
        >
          <Heading1 className="w-4 h-4" />
        </MenuButton>
        <MenuButton
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          active={editor.isActive("heading", { level: 2 })}
          title="Heading 2"
        >
          <Heading2 className="w-4 h-4" />
        </MenuButton>
        <MenuButton
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          active={editor.isActive("heading", { level: 3 })}
          title="Heading 3"
        >
          <Heading3 className="w-4 h-4" />
        </MenuButton>

        <div className="w-px h-8 bg-border mx-1" />

        <MenuButton
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          active={editor.isActive("bulletList")}
          title="Bullet List"
        >
          <List className="w-4 h-4" />
        </MenuButton>
        <MenuButton
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          active={editor.isActive("orderedList")}
          title="Numbered List"
        >
          <ListOrdered className="w-4 h-4" />
        </MenuButton>
        <MenuButton
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          active={editor.isActive("blockquote")}
          title="Quote"
        >
          <Quote className="w-4 h-4" />
        </MenuButton>
        <MenuButton
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          title="Divider"
        >
          <Minus className="w-4 h-4" />
        </MenuButton>

        <div className="w-px h-8 bg-border mx-1" />

        <MenuButton onClick={addLink} active={editor.isActive("link")} title="Add Hyperlink" label="Link">
          <LinkIcon className="w-4 h-4" />
        </MenuButton>
        <MenuButton
          onClick={() => editor.chain().focus().unsetLink().run()}
          title="Remove Link"
        >
          <Unlink className="w-4 h-4" />
        </MenuButton>
        <MenuButton onClick={addButton} title="Insert Button" label="Button">
          <RectangleHorizontal className="w-4 h-4" />
        </MenuButton>
        <MenuButton onClick={addImage} title="Add Image">
          <ImageIcon className="w-4 h-4" />
        </MenuButton>

        <div className="w-px h-8 bg-border mx-1" />

        <MenuButton
          onClick={() => editor.chain().focus().undo().run()}
          title="Undo"
        >
          <Undo className="w-4 h-4" />
        </MenuButton>
        <MenuButton
          onClick={() => editor.chain().focus().redo().run()}
          title="Redo"
        >
          <Redo className="w-4 h-4" />
        </MenuButton>
      </div>

      {/* Editor */}
      <EditorContent editor={editor} />
    </div>
  );
};

export default RichTextEditor;
