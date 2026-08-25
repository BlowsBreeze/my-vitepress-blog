<template>
    <VPTeamPage>
      <VPTeamPageTitle>
        <template #title>🎯 Projects ✨</template>
      </VPTeamPageTitle>
      <section class="resume-projects">
        <h2>Project Experience</h2>
        <article class="resume-project">
          <div class="project-heading">
            <h3>智能热泵式烟草烤房控制系统小程序</h3>
            <p><strong>uni-app · uView · ECharts</strong><time>2023.03–2023.04</time></p>
          </div>
          <h4>项目描述</h4>
          <p>基于温湿度信息智能判断烟草烘烤过程节点并输出控制参数，实现热泵烤房的全过程智能控制。支持精准远程控制和后台实时监控，帮助技术人员指导烟农烘烤、降低损失率。</p>
          <h4>项目角色</h4>
          <p>负责小程序端项目搭建、界面设计与功能实现，并制作配套的可视化图表。</p>
          <h4>核心功能实现</h4>
          <ol>
            <li>利用 uni-app 与 ECharts 展示烤烟装置运行情况，解决横屏图表重新渲染过慢的问题。</li>
            <li>完成用户权限、设备范围、设备状态三层查询的设计与实现。</li>
          </ol>
        </article>

        <article class="resume-project">
          <div class="project-heading">
            <h3>紧急呼叫管理系统 APP + Web</h3>
            <time>2023.05–2023.09</time>
          </div>
          <h4>项目描述</h4>
          <p>面向杭州某养老院近 3000 套紧急呼叫系统，院内 37 台平板全天候运行 APP。系统覆盖账号鉴权、大数据展示、呼叫实时监控、远程接警，以及呼叫终端、网关、LED 屏幕、4G 工牌和接警手表的状态检测与查询；支持低电量和离线巡检、远程版本升级，并与院内 OA 系统联动。</p>
          <p>系统还集成 AI 功能，用户可通过自然语言获取信息并执行系统操作。</p>
          <h4>项目角色</h4>
          <p>项目及现场负责人，负责协调硬件和后端、与甲方沟通并推进验收；软件侧负责项目搭建、界面设计与功能实现。</p>
          <h4>核心功能实现</h4>
          <h5>APP 端 · uni-app · uCharts</h5>
          <ol>
            <li>实施虚拟滚动并优化渲染策略，提升选择界面响应速度与用户体验。</li>
            <li>通过接口轮询和 WebSocket 保证呼叫的实时监控。</li>
            <li>通过 Tomcat 实现远程程序升级，提高系统更新的便捷性。</li>
            <li>使用业务数据微调 BERT、训练 CRF 实现意图分析和实体识别；结合 Rasa 多轮对话与 Prompt 驱动的大模型响应，构建维保对话机器人。</li>
          </ol>
          <h5>Web 端（Vue 2） · Vue 2 · Element UI</h5>
          <ol>
            <li>结合 Vuex、localStorage、路由守卫及请求拦截器，实现全局 Token 校验。</li>
            <li>通过响应拦截器统一处理错误信息，并在登录失效时重定向至登录页。</li>
          </ol>
          <h5>Web 端（React） · React 18 · Ant Design · TypeScript · 2024.07–2024.08</h5>
          <ol>
            <li>基于 Ant Design Pro 快速搭建并精简模板，抽象为可复用的公共模板，提升后续开发效率与 Lighthouse 评分。</li>
            <li>增加埋点功能，便于观测网页使用情况。</li>
          </ol>
        </article>

        <article class="resume-project">
          <div class="project-heading">
            <h3>阳光长跑运动管理平台小程序</h3>
            <p><strong>WePY · Vant / uni-app · uView · Tuniao UI</strong><time>2023.11–2024.01</time></p>
          </div>
          <h4>项目描述</h4>
          <p>基于无线传输网络和云端管理的课外体育训练系统，专注于学生每日跑步数据的统计和高效管理。两个版本已推广至杭电、金职院等十余所高校，覆盖用户超过 10 万，小程序日活超过 2 万。</p>
          <h4>项目角色</h4>
          <p>负责项目微信小程序部分，并重构旧版小程序。</p>
          <h4>核心功能实现</h4>
          <ol>
            <li>使用 uni-app 重构原 WePY 项目，重新设计 UI，并结合 Vuex 进行全局状态管理。</li>
            <li>加入 JWT 校验与 RBAC 权限，采用双 Token 机制实现自动登录，提升安全性。</li>
            <li>通过定位自动选择登录学校，新增问卷和对话系统反馈功能。</li>
          </ol>
        </article>
      </section>
      <section class="resume-projects">
        <h2>My Open Source Projects</h2>
        <div class="ProjectsContent">
          <ProjectCard v-for="(item, index) in projectsInfo" :key="index" v-bind="item" />
        </div>
      </section>
    </VPTeamPage>
  </template>
  
  <script setup>
  import { VPTeamPage, VPTeamPageTitle } from "vitepress/theme";
  import ProjectCard from "./ProjectCard.vue";
  import { projectsInfo } from "../../userConfig/projectsInfo";
  </script>
  
  <style scoped>
  .ProjectsContent {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
    max-width: 1152px;
    gap: 24px;
    margin: 0 auto;
  }

  .resume-projects {
    max-width: 1152px;
    margin: 0 auto 3rem;
    padding: 0 1.5rem;
  }

  .resume-projects > h2 {
    margin: 0 0 1.5rem;
    font-size: 1.75rem;
  }

  .resume-project {
    margin-bottom: 1.5rem;
    padding: 1.5rem;
    border: 1px solid var(--vp-c-divider);
    border-radius: 12px;
    background: var(--vp-c-bg-soft);
  }

  .resume-project :is(h3, h4, h5, p, ol) {
    margin-top: 0;
  }

  .project-heading {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .project-heading h3 {
    margin-bottom: 0;
    font-size: 1.2rem;
  }

  .project-heading p {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: .5rem 1rem;
    margin-bottom: 0;
    color: var(--vp-c-text-2);
  }

  .project-heading time {
    flex: none;
    color: var(--vp-c-text-2);
    white-space: nowrap;
  }

  .resume-project h4 {
    margin: 1rem 0 .35rem;
    color: var(--vp-c-text-1);
    font-size: 1rem;
  }

  .resume-project h5 {
    margin: 1rem 0 .35rem;
    color: var(--vp-c-text-2);
    font-size: .95rem;
  }

  .resume-project p,
  .resume-project li {
    color: var(--vp-c-text-2);
    line-height: 1.75;
  }

  .resume-project ol {
    padding-left: 1.25rem;
  }

  @media (max-width: 640px) {
    .resume-projects {
      padding: 0 1rem;
    }

    .resume-project {
      padding: 1.25rem;
    }

    .project-heading {
      flex-direction: column;
    }

    .project-heading p {
      justify-content: flex-start;
    }
  }
  </style>
  
