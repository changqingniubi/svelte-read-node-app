<script>
  import {cards} from "./store";
	// 定义变量
  export let title; // 标题
  export let content; // 内容
  export let creationTime; // 创建日期
  export let index = 0; // 卡片序号
  
  // 删除卡片
  function doDelete(index) { 
    cards.update(item => {
      item.splice(index, 1);
      return item;
    })
  }
</script>

<div class={`card bg-color-${index % 5}`}>
  <div class="title">
    {title} <span class="del-btn" on:click={doDelete(index)}>x</span>
  </div>
  <div class="content">{content}</div>
  <div class="creationTime">{creationTime}</div>
</div>

<style>
	 .card {
    padding: 1rem;
    margin: 1rem;
    color: #fff;
    border-radius: 0.5rem;
    position: relative;
  }
  .bg-color-0{
    background-color: rgb(164, 232, 232);
  }
  .bg-color-1{
    background-color: rgb(116, 13, 13);
  }
  .bg-color-2{
    background-color: rgb(112, 105, 170);
  }
  .bg-color-3{
    background-color: rgb(208, 102, 172);
  }
  .bg-color-4{
    background-color: rgb(168, 216, 78);
  }
  
  /* 省略... */
  
  /* 当鼠标移到卡片上，展示删除按钮 */
  .card .del-btn {
    position: absolute;
    opacity: 0;
    cursor: pointer;

  }
  .card:hover .del-btn {
    opacity: 1;
    top: 1rem;
    right: 1rem;
  }
</style>