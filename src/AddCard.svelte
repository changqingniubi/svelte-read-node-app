<script>
  // 引入状态
  import {cards} from './store';
  // 引入 file-saver
  import {saveAs} from 'file-saver';
  // 在 src 目录下新建 utils 工具类，编写获取当前日期的函数
  import {getNowDateFormat} from "./utils";

  // 定义变量
  let title = ''; // 标题
  let content = ''; // 内容

  // 添加卡片
  function doAdd() { 
    // 校验
    if (!title || !content) {
      alert('标题和内容必须都填！');
      return;
    }
    
    // 更新卡片状态，追加一个新卡片
    cards.update(item => {
      item = [...item, {
        title,
        content,
        creationTime: getNowDateFormat()
      }];
      return item;
    })
  }

  // 导出笔记
  // 导出为 read_note.md 文件
  function doExport() {
    const texts = [];
    // 读取 cards 状态数组
    for (const card of $cards) {
      let text = `### ${card.title}\n${card.content}\n${card.creationTime}\n`;
      texts.push(text);
    }
    // 写入文件
    const blob = new Blob(texts, {type: "text/plain;charset=utf-8"});
    saveAs(blob, "read_note.md");
  }
</script>
<div class="add-card">
  <div class="input-wrapper">
    <input class="input-title" type="text" placeholder="输入标题" bind:value={title} />
    <textarea class="input-content" placeholder="输入内容" bind:value={content}></textarea>
  </div>
  <div class="button-wrapper">
    <button class="add-btn" on:click={doAdd}>添加</button>
    <button class="export-btn" on:click={doExport}>导出</button>
  </div>
  
</div>
<style>
  /* 操作面板固定在页面底部 */
  .add-card {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    padding: 1rem;
    background-image: linear-gradient(135deg, #FEC163 10%, #DE4313 100%);
    display: flex;
  }

  .input-wrapper {
    flex: 1; /* 使用 Flex 布局 */
    display: flex;
    flex-direction: column;
    margin-right: 10px;
  }
  .button-wrapper{
    width: 10rem;
  }

  /* 省略... */
  
  .add-btn, .export-btn {
    color: #666;
    width: 10rem;
  }
</style>