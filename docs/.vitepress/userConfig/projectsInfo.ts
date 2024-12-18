interface Project {
  banner: string; // 图片链接
  title: string; // 项目标题
  description: string; // 项目简介
  link: string; // 项目链接
  tag?: string; // 项目标签
}

/**
 * TODO: 缺项处理
 * 在此处填写你的项目介绍
 */
export const projectsInfo: Project[] = [
  {
    banner: "/project-img/analyze-tool.png",
    title: "Blog",
    description:
      "个人博客",
    link: "https://github.com/BlowsBreeze/my-vitepress-blog",
    tag: "vue",
  }
];
