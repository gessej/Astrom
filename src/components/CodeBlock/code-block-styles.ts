import { css } from "lit";

export const codeBlockStyles = css`
  #code-block__container {
    position: relative;
  }
  button {
    z-index: 2;
    margin: 0;
    padding: 0.5rem;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    background: #e2e8f022;
    border: none;
    border-radius: 0.25rem;
    color: var(--color-white, #ffffff);
    font-weight: 600;
    line-height: 1;
    cursor: pointer;
  }
  pre {
    display: flex;
    position: relative;
    padding: 1rem;
    border-radius: 0.25rem;
    box-shadow: 0 0 1rem rgb(0 0 0 / 28%);
    padding-top: 2.5rem;
  }
  #language-tag {
    position: absolute;
    top: 0;
    left: 1rem;
    background-color: #f8f8f2;
    color: #212121;
    text-shadow: none;
    padding: 0.25rem 0.5rem;
    border-radius: 0 0 0.25rem 0.25rem;
    font-size: 0.75rem;
  }
  /* PrismJS 1.23.0
https://prismjs.com/download.html#themes=prism-okaidia&languages=markup+css+clike+javascript+bash+dart+json+markdown+python */
  /**
 * okaidia theme for JavaScript, CSS and HTML
 * Loosely based on Monokai textmate theme by http://www.monokai.nl/
 * @author ocodia
 */
  code[class*="language-"],
  pre[class*="language-"] {
    color: #f8f8f2;
    background: none;
    text-shadow: 0 1px rgba(0, 0, 0, 0.3);
    font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
    font-size: 1rem;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }
  /* Code blocks */
  pre[class*="language-"] {
    /* padding: 1em; */
    margin: 0.5em 0;
    overflow: auto;
    border-radius: 0.3em;
  }
  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    background: #212121;
  }
  /* Inline code */
  :not(pre) > code[class*="language-"] {
    padding: 0.1em;
    border-radius: 0.3em;
    white-space: normal;
  }
  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #8292a2;
  }
  .token.punctuation {
    color: #f8f8f2;
  }
  .token.namespace {
    opacity: 0.7;
  }
  .token.property,
  .token.tag,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #f92672;
  }
  .token.boolean,
  .token.number {
    color: #ae81ff;
  }
  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #a6e22e;
  }
  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string,
  .token.variable {
    color: #f8f8f2;
  }
  .token.atrule,
  .token.attr-value,
  .token.function,
  .token.class-name {
    color: #e6db74;
  }
  .token.keyword {
    color: #66d9ef;
  }
  .token.regex,
  .token.important {
    color: #fd971f;
  }
  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }
  .token.entity {
    cursor: help;
  }
`;