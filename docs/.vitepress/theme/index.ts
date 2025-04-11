import DefaultTheme from "vitepress/theme";
import { Theme, useRoute } from "vitepress";
import "./tailwind.css";
import "./var.css";
import "./article.css";
import "./print.css";

import LinkCard from "../components/LinkCard.vue";
import HText from "../components/HText.vue";
import mediumZoom from "medium-zoom";
import { onMounted, watch, nextTick } from "vue";

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    ctx.app.component("LinkCard", LinkCard);
    ctx.app.component("HText", HText);
    
    // 在客户端环境下初始化 Vercel Analytics
    if (typeof window !== 'undefined') {
      // 使用动态导入避免服务端渲染问题
      import('@vercel/analytics').then(va => {
        va.inject();
      }).catch(() => {
        // 静默处理错误
      });
    }
  },

  setup() {
    const route = useRoute();
    const initZoom = () => {
      mediumZoom(".main img", { background: "var(--vp-c-bg)", margin: 24 });
    };
    onMounted(() => initZoom());
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  },
} satisfies Theme;