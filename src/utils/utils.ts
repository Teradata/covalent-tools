import { Color } from 'colors';
import { emojify } from 'node-emoji';

export class Utils {
  static log(message: string, colors?: Color): void {
    if (colors) {
      /* tslint:disable-next-line */
      console.log(emojify(colors(message)));
    } else {
      /* tslint:disable-next-line */
      console.log(message);
    }
  }
}
