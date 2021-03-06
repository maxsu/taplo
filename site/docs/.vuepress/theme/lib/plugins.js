"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const pluginConfig = (themeConfig) => {
    // 设置作者
    if (themeConfig.comment && themeConfig.author)
        themeConfig.comment.author = themeConfig.author;
    return [
        /** 评论插件 */
        ["@mr-hope/comment", themeConfig.comment],
        /** 全屏插件 */
        ["@mr-hope/components"],
        /** 更新时间插件 */
        ["@mr-hope/last-update", themeConfig.lastUpdate === false ? false : {}],
        /** PWA 插件 */
        ["@mr-hope/pwa", themeConfig.pwa],
        /** SEO 增强 */
        ["@mr-hope/seo", themeConfig.seo],
        /** Sitemap 生成 */
        ["@mr-hope/sitemap", themeConfig.sitemap],
        /** 自动激活侧边栏标题 */
        ["@vuepress/active-header-links", themeConfig.activeHeaderLinks],
        /** 博客插件 */
        [
            "@vuepress/blog",
            themeConfig.blog === false
                ? false
                : {
                    frontmatters: [
                        {
                            id: "tag",
                            keys: ["tag", "tags"],
                            path: "/tag/",
                            layout: "Blog",
                            scopeLayout: "Blog",
                        },
                        {
                            id: "category",
                            keys: ["category", "categories"],
                            path: "/category/",
                            layout: "Blog",
                            scopeLayout: "Blog",
                        },
                    ],
                },
        ],
        ["@vuepress/last-updated", false],
        /** 进度条 */
        "@vuepress/nprogress",
        /** 搜索插件 */
        [
            "@vuepress/search",
            {
                /** 搜索展示数量 */
                searchMaxSuggestions: themeConfig.searchMaxSuggestions || 10,
            },
        ],
        /** add this 支持 */
        ["add-this", typeof themeConfig.addThis === "string"],
        /** 使 VuePress 站点支持简洁链接 */
        ["clean-urls", { normalSuffix: "/" }],
        /** 复制操作处理 */
        [
            "copyright",
            typeof themeConfig.copyright === "object"
                ? Object.assign({ minLength: 100, disable: themeConfig.copyright.status === "local", clipboardComponent: path_1.resolve(__dirname, "../components/Clipboard.vue") }, themeConfig.copyright) : false,
        ],
        /** Markdown 增强插件 */
        ["md-enhance", themeConfig.mdEnhance || false],
        /** Chunk命名 */
        [
            "named-chunks",
            {
                pageChunkName: (page) => {
                    const title = (page.title || "").replace(/[.&*?#\\/:"<>| ]/gu, "");
                    return title
                        ? `page-${title}-${page.key.slice(1)}`
                        : `page-${page.key.slice(1)}`;
                },
                layoutChunkName: (layout) => `layout-${layout.componentName}`,
            },
        ],
        /** 复制按钮插件 */
        ["@mr-hope/copy-code", themeConfig.copyCode],
        /** Photo-swipe 插件 */
        ["photo-swipe", themeConfig.photoSwipe],
        /** 平滑滚动 */
        ["smooth-scroll", themeConfig.smoothScroll],
        /** typescript 支持 */
        [
            "typescript",
            themeConfig.typescript
                ? {
                    tsLoaderOptions: typeof themeConfig.typescript === "object"
                        ? themeConfig.typescript
                        : {},
                }
                : false,
        ],
    ];
};
exports.default = pluginConfig;
