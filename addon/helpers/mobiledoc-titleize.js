import { helper as buildHelper } from '@ember/component/helper';
import titleize from '../utils/titleize';

export function mobiledocTitleize([string]) {
  return titleize(string);
}

export default buildHelper(mobiledocTitleize);
