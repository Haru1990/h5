/*
 * @Author: 董方旭
 * @Date: 2021-08-10 17:57:17
 * @LastEditors: 董方旭
 * @LastEditTime: 2021-08-10 19:03:18
 * @Description: rem 动态计算
 */
(function () {
  function setRootFontSize() {
    const baseSize = 100; // 基准值
    let rootHtml = document.documentElement;
    //限制展现页面的最小宽度
    let rootWidth = rootHtml.clientWidth < 1280 ? 1280 : rootHtml.clientWidth;
    // 相对于1280像素的缩放比
    let scale = rootWidth / 1280;
    const realFont = baseSize * scale;
    document.documentElement.style.fontSize = realFont + 'px';
  }
  setRootFontSize();
  window.addEventListener("resize", setRootFontSize, false);
})();


