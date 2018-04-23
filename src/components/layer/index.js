import './index.less'
import tpl from './index.ejs'

const layer = function () {
  return {
    name: 'layer',
    tpl: tpl,
  }
}

export default layer
