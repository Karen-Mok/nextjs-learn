import { Inter,Lusitana } from 'next/font/google';
//从 next/font/google 模块导入 Inter 字体 - 这将是您的主要字体。
//然后，指定您想要加载的 子集 (subset)。在本例中，是 'latin'
 
export const inter = Inter({ subsets: ['latin'] }); //导出字体

//import { Lusitana } from 'next/font/google';
 
export const lusitana = Lusitana({
    subsets: ['latin'],
    weight: ['400','700']
    //除了像之前一样指定子集之外，您还应该指定不同的字体粗细 (weights)。例如，400（正常）和 700（粗体）
    //字体模块API: https://nextjs.net.cn/docs/app/api-reference/components/font#font-function-arguments
 });