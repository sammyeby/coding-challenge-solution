import { GET_REPO_ISSUES } from "graphql/queries";
import { IssuesStatesType } from "../models";

const mockResponseResult = [
    {
        request: {
            query: GET_REPO_ISSUES,
            variables: {repoOwner: 'facebook', repoName: 'react', issueState: IssuesStatesType.OPEN}
        },
        result: {
            "data": {
                "repository": {
                    "issues": {
                        "edges": [
                            {
                                "node": {
                                    "title": "Bug: defaultValue property missing on select element ref ",
                                    "url": "https://github.com/facebook/react/issues/25294",
                                    "closedAt": null,
                                    "id": "I_kwDOAJy2Ks5SFN1V",
                                    "number": 25294,
                                    "createdAt": "2022-09-18T15:43:51Z",
                                    "bodyText": "React version: 18.2.0\nSteps To Reproduce\n\nSet a  defaultValue on a <select /> element.\nAfter the element mounts, try to access that defaultValue through a ref of the element.\n\nTypeScript is also missing the definition for defaultValue on HTMLSelectElement type\nLink to code example: https://codesandbox.io/s/elated-orla-0p3dw7?file=/src/App.js\nThe current behavior\ndefaultValue always returns undefined\nThe expected behavior\ndefaultValueshould return the defined value",
                                    "bodyHTML": "<p dir=\"auto\">React version: 18.2.0</p>\n<h2 dir=\"auto\">Steps To Reproduce</h2>\n<ol dir=\"auto\">\n<li>Set a  <code class=\"notranslate\">defaultValue</code> on a <code class=\"notranslate\">&lt;select /&gt;</code> element.</li>\n<li>After the element mounts, try to access that <code class=\"notranslate\">defaultValue</code> through a ref of the element.</li>\n</ol>\n<p dir=\"auto\">TypeScript is also missing the definition for <code class=\"notranslate\">defaultValue</code> on <code class=\"notranslate\">HTMLSelectElement</code> type</p>\n<p dir=\"auto\">Link to code example: <a href=\"https://codesandbox.io/s/elated-orla-0p3dw7?file=/src/App.js\" rel=\"nofollow\">https://codesandbox.io/s/elated-orla-0p3dw7?file=/src/App.js</a></p>\n<h2 dir=\"auto\">The current behavior</h2>\n<p dir=\"auto\"><code class=\"notranslate\">defaultValue</code> always returns undefined</p>\n<h2 dir=\"auto\">The expected behavior</h2>\n<p dir=\"auto\"><code class=\"notranslate\">defaultValue</code>should return the defined value</p>",
                                    "author": {
                                        "login": "antonio-costa",
                                        "avatarUrl": "https://avatars.githubusercontent.com/u/14340661?v=4",
                                        "__typename": "User"
                                    },
                                    "comments": {
                                        "edges": [
                                            {
                                                "node": {
                                                    "id": "IC_kwDOAJy2Ks5Kj2ZW",
                                                    "url": "https://github.com/facebook/react/issues/25294#issuecomment-1250911830",
                                                    "createdAt": "2022-09-19T11:46:06Z",
                                                    "bodyText": "This does not have a lot to do with React.\nHTMLInputElement has defaultValue property: https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement#properties\nHTMLSelectElement does not: https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement#properties",
                                                    "bodyHTML": "<p dir=\"auto\">This does not have a lot to do with React.</p>\n<p dir=\"auto\"><code class=\"notranslate\">HTMLInputElement</code> has <code class=\"notranslate\">defaultValue</code> property: <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement#properties\" rel=\"nofollow\">https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement#properties</a></p>\n<p dir=\"auto\"><code class=\"notranslate\">HTMLSelectElement</code> does not: <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement#properties\" rel=\"nofollow\">https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement#properties</a></p>",
                                                    "author": {
                                                        "login": "vkurchatkin",
                                                        "avatarUrl": "https://avatars.githubusercontent.com/u/2993861?v=4",
                                                        "__typename": "User"
                                                    },
                                                    "__typename": "IssueComment"
                                                },
                                                "__typename": "IssueCommentEdge"
                                            },
                                            {
                                                "node": {
                                                    "id": "IC_kwDOAJy2Ks5KkSu4",
                                                    "url": "https://github.com/facebook/react/issues/25294#issuecomment-1251027896",
                                                    "createdAt": "2022-09-19T13:32:52Z",
                                                    "bodyText": "I understand that, but React prompts and console error if I use the \"HTML-way\" of using selected in <option />.\n\nI believe this is was a decision to provide consistency across form elements (which I agree), but if the prop is not returned when I try to access it in a ref, then there's an inconsistency on this implementation, no?\nHow can I know what is the default value of a select element if React doesn't allow me use the selected prop but also doesn't provide the defaultValue property on the ref?",
                                                    "bodyHTML": "<p dir=\"auto\">I understand that, but React prompts and console error if I use the \"HTML-way\" of using <code class=\"notranslate\">selected</code> in <code class=\"notranslate\">&lt;option /&gt;</code>.</p>\n<p dir=\"auto\"><a target=\"_blank\" rel=\"noopener noreferrer nofollow\" href=\"https://user-images.githubusercontent.com/14340661/191028470-897f07b3-538f-48a5-9c19-e47df4c9023b.png\"><img src=\"https://user-images.githubusercontent.com/14340661/191028470-897f07b3-538f-48a5-9c19-e47df4c9023b.png\" alt=\"image\" style=\"max-width: 100%;\"></a></p>\n<p dir=\"auto\">I believe this is was a decision to provide consistency across form elements (which I agree), but if the prop is not returned when I try to access it in a ref, then there's an inconsistency on this implementation, no?</p>\n<p dir=\"auto\">How can I know what is the default value of a select element if React doesn't allow me use the <code class=\"notranslate\">selected</code> prop but also doesn't provide the <code class=\"notranslate\">defaultValue</code> property on the ref?</p>",
                                                    "author": {
                                                        "login": "antonio-costa",
                                                        "avatarUrl": "https://avatars.githubusercontent.com/u/14340661?v=4",
                                                        "__typename": "User"
                                                    },
                                                    "__typename": "IssueComment"
                                                },
                                                "__typename": "IssueCommentEdge"
                                            },
                                            {
                                                "node": {
                                                    "id": "IC_kwDOAJy2Ks5Kkn05",
                                                    "url": "https://github.com/facebook/react/issues/25294#issuecomment-1251114297",
                                                    "createdAt": "2022-09-19T14:37:46Z",
                                                    "bodyText": "if the prop is not returned when I try to access it in a ref, then there's an inconsistency on this implementation, no?\n\nReact does indeed provide consistency, but only on the React side of things. It doesn't do anything to unify DOM APIs, because it is not it's job.\n\nHow can I know what is the default value of a select element if React doesn't allow me use the selected prop but also doesn't provide the defaultValue property on the ref?\n\nYou can definitely read selected when using ref:\nuseEffect(() => {\n    console.log(\"select default value\", selectRef.current.querySelector('option[selected]')?.value);\n    console.log(\"input default value\", inputRef.current.defaultValue);\n  }, []);\nBut the most important question is: why do you even want to read defaultValue from DOM? You are the one who provides it, you already know it.",
                                                    "bodyHTML": "<blockquote>\n<p dir=\"auto\">if the prop is not returned when I try to access it in a ref, then there's an inconsistency on this implementation, no?</p>\n</blockquote>\n<p dir=\"auto\">React does indeed provide consistency, but only on the React side of things. It doesn't do anything to unify DOM APIs, because it is not it's job.</p>\n<blockquote>\n<p dir=\"auto\">How can I know what is the default value of a select element if React doesn't allow me use the selected prop but also doesn't provide the defaultValue property on the ref?</p>\n</blockquote>\n<p dir=\"auto\">You can definitely read <code class=\"notranslate\">selected</code> when using ref:</p>\n<div class=\"highlight highlight-source-js notranslate position-relative overflow-auto\" dir=\"auto\" data-snippet-clipboard-copy-content=\"useEffect(() =&gt; {\n    console.log(&quot;select default value&quot;, selectRef.current.querySelector('option[selected]')?.value);\n    console.log(&quot;input default value&quot;, inputRef.current.defaultValue);\n  }, []);\"><pre><span class=\"pl-en\">useEffect</span><span class=\"pl-kos\">(</span><span class=\"pl-kos\">(</span><span class=\"pl-kos\">)</span> <span class=\"pl-c1\">=&gt;</span> <span class=\"pl-kos\">{</span>\n    <span class=\"pl-smi\">console</span><span class=\"pl-kos\">.</span><span class=\"pl-en\">log</span><span class=\"pl-kos\">(</span><span class=\"pl-s\">\"select default value\"</span><span class=\"pl-kos\">,</span> <span class=\"pl-s1\">selectRef</span><span class=\"pl-kos\">.</span><span class=\"pl-c1\">current</span><span class=\"pl-kos\">.</span><span class=\"pl-en\">querySelector</span><span class=\"pl-kos\">(</span><span class=\"pl-s\">'option[selected]'</span><span class=\"pl-kos\">)</span><span class=\"pl-kos\">?.</span><span class=\"pl-c1\">value</span><span class=\"pl-kos\">)</span><span class=\"pl-kos\">;</span>\n    <span class=\"pl-smi\">console</span><span class=\"pl-kos\">.</span><span class=\"pl-en\">log</span><span class=\"pl-kos\">(</span><span class=\"pl-s\">\"input default value\"</span><span class=\"pl-kos\">,</span> <span class=\"pl-s1\">inputRef</span><span class=\"pl-kos\">.</span><span class=\"pl-c1\">current</span><span class=\"pl-kos\">.</span><span class=\"pl-c1\">defaultValue</span><span class=\"pl-kos\">)</span><span class=\"pl-kos\">;</span>\n  <span class=\"pl-kos\">}</span><span class=\"pl-kos\">,</span> <span class=\"pl-kos\">[</span><span class=\"pl-kos\">]</span><span class=\"pl-kos\">)</span><span class=\"pl-kos\">;</span></pre></div>\n<p dir=\"auto\">But the most important question is: why do you even want to read <code class=\"notranslate\">defaultValue</code> from DOM? You are the one who provides it, you already know it.</p>",
                                                    "author": {
                                                        "login": "vkurchatkin",
                                                        "avatarUrl": "https://avatars.githubusercontent.com/u/2993861?v=4",
                                                        "__typename": "User"
                                                    },
                                                    "__typename": "IssueComment"
                                                },
                                                "__typename": "IssueCommentEdge"
                                            },
                                            {
                                                "node": {
                                                    "id": "IC_kwDOAJy2Ks5KlHVu",
                                                    "url": "https://github.com/facebook/react/issues/25294#issuecomment-1251243374",
                                                    "createdAt": "2022-09-19T16:19:22Z",
                                                    "bodyText": "I know I can read selected property, but React strongly advises against using it in the first place.\nI'm trying to create a reusable hook for uncontrolled forms (similar to React Hook Form) and I'm comparing the current value with the default value in order to check whether an input has been changed.\nThis comparison can be done anywhere inside the form context, which may have several components nested and diverging trees.\nMy solution is to simply keep a reference to the fields registered in the form and access the DOM when I need information. That way I can freely change inputs without any unnecessary re-renders.\nI can try to find a way around this, sure, but it just seems inconsistent that I'm advised against the selected property in favor of  defaultValue property, but that one is not provided anywhere in the DOM just as selected property is.",
                                                    "bodyHTML": "<p dir=\"auto\">I know I can read <code class=\"notranslate\">selected</code> property, but React strongly advises against using it in the first place.</p>\n<p dir=\"auto\">I'm trying to create a reusable hook for uncontrolled forms (similar to React Hook Form) and I'm comparing the current value with the default value in order to check whether an input has been changed.<br>\nThis comparison can be done anywhere inside the form context, which may have several components nested and diverging trees.</p>\n<p dir=\"auto\">My solution is to simply keep a reference to the fields registered in the form and access the DOM when I need information. That way I can freely change inputs without any unnecessary re-renders.</p>\n<p dir=\"auto\">I can try to find a way around this, sure, but it just seems inconsistent that I'm advised against the <code class=\"notranslate\">selected</code> property in favor of  <code class=\"notranslate\">defaultValue</code> property, but that one is not provided anywhere in the DOM just as <code class=\"notranslate\">selected</code> property is.</p>",
                                                    "author": {
                                                        "login": "antonio-costa",
                                                        "avatarUrl": "https://avatars.githubusercontent.com/u/14340661?v=4",
                                                        "__typename": "User"
                                                    },
                                                    "__typename": "IssueComment"
                                                },
                                                "__typename": "IssueCommentEdge"
                                            },
                                            {
                                                "node": {
                                                    "id": "IC_kwDOAJy2Ks5KlcXo",
                                                    "url": "https://github.com/facebook/react/issues/25294#issuecomment-1251329512",
                                                    "createdAt": "2022-09-19T17:32:57Z",
                                                    "bodyText": "I know I can read selected property, but React strongly advises against using it in the first place.\n\nReact advises you agains using selected as React prop, nothing more. It is unreasonable to expect it to actually add a nonexistent property to a DOM node. If you want to work with DOM directly it is up to you to handle differences like this",
                                                    "bodyHTML": "<blockquote>\n<p dir=\"auto\">I know I can read selected property, but React strongly advises against using it in the first place.</p>\n</blockquote>\n<p dir=\"auto\">React advises you agains using <code class=\"notranslate\">selected</code> as React prop, nothing more. It is unreasonable to expect it to actually add a nonexistent property to a DOM node. If you want to work with DOM directly it is up to you to handle differences like this</p>",
                                                    "author": {
                                                        "login": "vkurchatkin",
                                                        "avatarUrl": "https://avatars.githubusercontent.com/u/2993861?v=4",
                                                        "__typename": "User"
                                                    },
                                                    "__typename": "IssueComment"
                                                },
                                                "__typename": "IssueCommentEdge"
                                            }
                                        ],
                                        "totalCount": 5,
                                        "__typename": "IssueCommentConnection"
                                    },
                                    "labels": {
                                        "edges": [
                                            {
                                                "node": {
                                                    "name": "Status: Unconfirmed",
                                                    "__typename": "Label"
                                                },
                                                "__typename": "LabelEdge"
                                            }
                                        ],
                                        "__typename": "LabelConnection"
                                    },
                                    "__typename": "Issue"
                                },
                                "__typename": "IssueEdge"
                            },
                            {
                                "node": {
                                    "title": "react-server-dom-webpack node loader does not support newest ESM loader API",
                                    "url": "https://github.com/facebook/react/issues/25303",
                                    "closedAt": null,
                                    "id": "I_kwDOAJy2Ks5SQyPk",
                                    "number": 25303,
                                    "createdAt": "2022-09-21T00:12:40Z",
                                    "bodyText": "Currently the webpack node loader included react-server-dom-webpack only implements the deprecated transformSource/getSource/resolve ESM loader API, but not the newer (but still unstable) load/resolve API. This makes the loader impossible to use with newer versions of Node (16+... I think?).\nOpened a draft PR to fix this here\nReact version: 0.0.0-experimental-3d615fc14-20220919\nSteps To Reproduce\n\nInstall Node 16+\nTry using the node loader from react-server-dom-webpack",
                                    "bodyHTML": "<p dir=\"auto\">Currently the webpack node loader included <a href=\"https://github.com/facebook/react/tree/main/packages/react-server-dom-webpack\"><code class=\"notranslate\">react-server-dom-webpack</code></a> only implements the deprecated <code class=\"notranslate\">transformSource</code>/<code class=\"notranslate\">getSource</code>/<code class=\"notranslate\">resolve</code> ESM loader API, but not the newer (but still unstable) <code class=\"notranslate\">load</code>/<code class=\"notranslate\">resolve</code> API. This makes the loader impossible to use with newer versions of Node (16+... I think?).</p>\n<p dir=\"auto\">Opened a draft PR to fix this <a href=\"https://github.com/facebook/react/pull/25304\" data-hovercard-type=\"pull_request\" data-hovercard-url=\"/facebook/react/pull/25304/hovercard\">here</a></p>\n<p dir=\"auto\">React version: 0.0.0-experimental-3d615fc14-20220919</p>\n<h2 dir=\"auto\">Steps To Reproduce</h2>\n<ol dir=\"auto\">\n<li>Install Node 16+</li>\n<li>Try using the node loader from react-server-dom-webpack</li>\n</ol>",
                                    "author": {
                                        "login": "mattvague",
                                        "avatarUrl": "https://avatars.githubusercontent.com/u/64985?u=613b340b11b5c56985c42d93735441f4efe9e0e0&v=4",
                                        "__typename": "User"
                                    },
                                    "comments": {
                                        "edges": [],
                                        "totalCount": 0,
                                        "__typename": "IssueCommentConnection"
                                    },
                                    "labels": {
                                        "edges": [
                                            {
                                                "node": {
                                                    "name": "Status: Unconfirmed",
                                                    "__typename": "Label"
                                                },
                                                "__typename": "LabelEdge"
                                            }
                                        ],
                                        "__typename": "LabelConnection"
                                    },
                                    "__typename": "Issue"
                                },
                                "__typename": "IssueEdge"
                            }
                        ],
                        "totalCount": 808,
                        "__typename": "IssueConnection"
                    },
                    "__typename": "Repository"
                }
            }
        }
    }
];

export default mockResponseResult;