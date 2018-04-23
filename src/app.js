import './css/common.css'
import Layer from './components/layer/index.js'

const App = function () {
  const dom = document.getElementById('root')
  const layer = new Layer()
  dom.innerHTML = layer.tpl({
    name: '这里是模板的name',
    arr: ['1', '2', '3', '4', '\n5'],
  })
}


new App()