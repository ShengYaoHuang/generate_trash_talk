function sample(array) {
  const randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}

function generaterashTalk(options) {
  const target = {
    engineer: '工程師',
    designer: '設計師',
    entrepreneur: '創業家'
  }
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }
  const phrase = ['很簡單', '很容易', '很快', '很正常']

  let result = ''
  if (options === 'engineer') {
    result += `身為一個${target.engineer}，${sample(task.engineer)}，${sample(phrase)}吧！`
    checked = true
  } else if (options === 'designer') {
    result += `身為一個${target.designer}，${sample(task.designer)}，${sample(phrase)}吧！`
    checked = true
  } else if (options === 'entrepreneur') {
    checked = true
    result += `身為一個${target.entrepreneur}，${sample(task.entrepreneur)}，${sample(phrase)}吧！`
  } else {
    result += '請選擇一個職業來產生幹話吧！'
  }
  return result
}

module.exports = generaterashTalk