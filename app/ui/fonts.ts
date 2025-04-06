
import exp from 'constants';
import {Inter} from 'next/font/google';
import { Lusitana } from 'next/font/google';

export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lusitana',
  display: 'swap',
});

export const inter = Inter({subsets: ['latin']});