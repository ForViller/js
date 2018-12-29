function copy(select)
    {
        var temp=document.getElementById("select").innerText;
        var oInput = document.createElement('input');
        oInput.value = temp;
        document.body.appendChild(oInput);
        oInput.select(); // 选择对象
        document.execCommand("Copy"); // 执行浏览器复制命令
        oInput.className = 'oInput';
        oInput.style.display='none';
        alert('复制成功');
    }