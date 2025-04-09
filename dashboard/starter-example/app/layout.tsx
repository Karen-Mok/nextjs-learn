import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';  //导入字体

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );  // 通过将 Inter 添加到 <body> 元素，字体将应用于整个应用程序。
  //添加了 Tailwind antialiased 类，它可以平滑字体。这不是必须使用的类，但它增加了一个不错的润色。
}

/* import { inter } from '@/app/ui/fonts'中的
@ 符号通常用作路径别名，它是 Webpack 或其他构建工具（如 Vite）中的一个特性，用于简化模块导入的路径。
在 TypeScript 或 JavaScript 项目中，当你看到 @/app/ui/fonts 这样的路径时，
它实际上指向的是项目根目录下的 app/ui/fonts 文件夹。即：...../dashboard/starter-example/app/ui/fonts
*/