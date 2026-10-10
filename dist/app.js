const copyButton=document.getElementById('copy-wechat');
copyButton.addEventListener('click',async()=>{const status=document.getElementById('copy-status');try{await navigator.clipboard.writeText('evachiang83');status.textContent='已复制微信号：evachiang83';}catch{status.textContent='请长按或选取微信号复制：evachiang83';}});
