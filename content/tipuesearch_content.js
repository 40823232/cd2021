var tipuesearch = {"pages": [{'title': 'About', 'text': 'stage1-bg20 \n 組員:40823213,40823232 \n stage1組別網站: https://40823232.github.io/stage1-bg20/content/index.html \n stage1 gitter: https://gitter.im/2020bg5/stage1-bg20 \n stage2-bg2 \n 組員:40823213,40823232,40823234,40823235 \n stage2組別網站: https://40823232.github.io/stage2-bg2/content/index.html \n stage2 gitter: https://gitter.im/stage2-bg2/community \n', 'tags': '', 'url': 'About.html'}, {'title': 'stage1各週進度', 'text': '', 'tags': '', 'url': 'stage1各週進度.html'}, {'title': 'w1', 'text': '建立網站: https://40823232.github.io/cd2021/content/index.html \n 建立網站影片： \n \n \n stage1 gitter: \n \n', 'tags': '', 'url': 'w1.html'}, {'title': 'w2討論主題', 'text': '題目:遊樂設施 動機:了解設施的構造，和作動的方式 第二週:繪製零件圖，並使用coppeliasim進行模擬 第三週:模擬問題討論及修改 第四週:報告 \n', 'tags': '', 'url': 'w2討論主題.html'}, {'title': 'w3模擬', 'text': '桿子裝上馬達後無法控制升降的角度，因此嘗試使用連桿機構 \n 模擬.ttt \n \n 因為這次主題需要用到連桿機構，故模擬pyslvs \n \n 第一次模擬，雖然物體有升降，但路徑不是我們需要的 \n \n 第二次模擬，路徑接近但滑塊會延伸過長，升降的範圍也較小 \n \n 第三次模擬，前方在下降的時候，會微微向前傾斜 \n \n 第四次模擬，讓前方升降過程較為穩定 \n', 'tags': '', 'url': 'w3模擬.html'}, {'title': 'w4報告', 'text': '小組每週報告: stage1-bg20.pdf \n 小組reveal: https://40823232.github.io/stage1-bg20/reveal/index.html#/ \n 個人報告影片: \n 小組報告影片: \n \n', 'tags': '', 'url': 'w4報告.html'}, {'title': 'stage2各週進度', 'text': '我們的主題要沿用stage1，並加以改良 \n', 'tags': '', 'url': 'stage2各週進度.html'}, {'title': 'w6', 'text': '我們想利用三角函數的曲線驅動桿子沿著此路徑移動(繪圖者:40823213) \n \n 第一次模擬(模擬者:40823234) \n \n', 'tags': '', 'url': 'w6.html'}, {'title': 'w7', 'text': '第二次模擬 (模擬者:40823234) \n \n 第三次模擬 (模擬者:40823234) \n \n 零件檔: \n 支架.ipt \n 主體.ipt \n 底座.ipt \n 容器.ipt \n 組合.iam \n 3d凸輪.ipt \n', 'tags': '', 'url': 'w7.html'}, {'title': 'w8', 'text': 'heroku: https://s40823232.herokuapp.com/ \n', 'tags': '', 'url': 'w8.html'}, {'title': 'w9報告', 'text': '小組報告影片 \n \n reveal: https://40823232.github.io/stage2-bg2/reveal/index.html#/ \n pdf: https://drive.google.com/file/d/19qYz3ii_0UKM6-LDgllXJ0c9eKCVnI4A/view?usp=sharing \n', 'tags': '', 'url': 'w9報告.html'}, {'title': 'stage3各週進度', 'text': '', 'tags': '', 'url': 'stage3各週進度.html'}, {'title': 'w10', 'text': 'gitter: https://gitter.im/stage3-bg1/community \n 小組討論主題，想把目前各組所做的題目合成一起，讓中間有關聯。 \n \n', 'tags': '', 'url': 'w10.html'}, {'title': 'ipv4連線', 'text': '先到網路連線的ipv4更改成192.168.192.各自號碼 \n \n 確定後，到黑窗輸入python -m http.server 8000 --bind 192.168.192.各自號碼 \n 接著至網址輸入192.168.192.各自號碼：8000，成功後網頁會變這樣 \n \n', 'tags': '', 'url': 'ipv4連線.html'}, {'title': 'ｗ11', 'text': '測試obs串流 \n', 'tags': '', 'url': 'ｗ11.html'}, {'title': 'task1', 'text': 'stage3-2b.txt 文字檔 \n 下面程式碼另存一個py檔 \n def stu2b(account):\n    if account == "40823231":\n        return account + "-2"\n    elif account[0:3] == "407":\n        return "s" + account\n    else:\n        return account\n \nteamb = []\n \n# open file, default is read mode, since txt content no chinese char\n# no encoding = "UTF-8" is needed\nwith open("stage3_2b.txt") as fh:\n    # readlines will read into the whole line and put into list format\n    # has \\n at the end of each line\n    data = fh.readlines()\n#print(len(data))\nfor i in range(len(data)):\n    group = data[i].rstrip("\\n").split("\\t")\n    teamb.append(group)\n     \noutput = ""    \nseperator = "-"*10 + "<br />"\n \nfor i in teamb[0:]:\n    team = i[0]\n    leader = stu2b(i[1])\n    m1 = stu2b(i[3])\n    m2 = stu2b(i[5])\n    m3 = stu2b(i[7])\n    m4 = stu2b(i[9])\n    m5 = stu2b(i[11])\n    m6 = stu2b(i[13])\n     \n    try:\n        m7 = stu2b(i[15])\n    except:\n        m7 = ""\n    try:\n        m8 = stu2b(i[17])\n    except:\n        m8 = ""\n         \n    leaderrepo = "<a href=\'http://github.com/" + leader + "/cd2021\'>" + leader + " repo</a>"\n    leadersite = "<a href=\'http://" + leader + ".github.io/cd2021\'>" + leader +  " site</a>"\n    m1repo = "<a href=\'http://github.com/" + m1 + "/cd2021\'>" + m1 + " repo</a>"\n    m1site = "<a href=\'http://" + m1 + ".github.io/cd2021\'>" + m1 +  " site</a>"\n    m2repo = "<a href=\'http://github.com/" + m2 + "/cd2021\'>" + m2 + " repo</a>"\n    m2site = "<a href=\'http://" + m2 + ".github.io/cd2021\'>" + m2 +  " site</a>"\n    m3repo = "<a href=\'http://github.com/" + m3 + "/cd2021\'>" + m3 + " repo</a>"\n    m3site = "<a href=\'http://" + m3 + ".github.io/cd2021\'>" + m3 +  " site</a>"\n    m4repo = "<a href=\'http://github.com/" + m4 + "/cd2021\'>" + m4 + " repo</a>"\n    m4site = "<a href=\'http://" + m4 + ".github.io/cd2021\'>" + m4 +  " site</a>"\n    m5repo = "<a href=\'http://github.com/" + m5 + "/cd2021\'>" + m5 + " repo</a>"\n    m5site = "<a href=\'http://" + m5 + ".github.io/cd2021\'>" + m5 +  " site</a>"\n    m6repo = "<a href=\'http://github.com/" + m6 + "/cd2021\'>" + m6 + " repo</a>"\n    m6site = "<a href=\'http://" + m6 + ".github.io/cd2021\'>" + m6 +  " site</a>"\n  \n \n    teamrepo = "<a href=\'http://github.com/" + leader + "/" + team + "\'>" + team + " repo</a>"\n    teamsite =  "<a href=\'http://" + m1 + ".github.io/" + team + "\'>" + team +  " site</a>"\n \n    output += teamrepo + " | " + teamsite + " | " +leaderrepo + " | " + leadersite + " | " +m1repo + " | " + m1site + " | " +m2repo + " | " + m2site + " | " +m3repo + " | " + m3site + " | " +m4repo + " | " + m4site + " | " +m5repo + " | " + m5site + " | " +m6repo + " | " + m6site \n     \n    if m7 != "":\n       m7repo = "<a href=\'http://github.com/" + m7 + "/cd2021\'>" + m7 + " repo</a>"\n       m7site = "<a href=\'http://" + m7 + ".github.io/cd2021\'>" + m7 +  " site</a>"   \n       output += " |  " + m7repo + "| " + m7site\n    else:\n        output += "" \n     \n    if m8 != "":\n       m8repo = "<a href=\'http://github.com/" + m8 + "/cd2021\'>" + m8 + " repo</a>"\n       m8site = "<a href=\'http://" + m8 + ".github.io/cd2021\'>" + m8 +  " site</a>"   \n       output += " |  " + m8repo + "| " + m8site + "<br />" + seperator\n    else:\n        output += "<br />" + seperator\n \n \nprint(output)\n# the following will use group data to generate needed html \n 在白窗執行，將結果貼上 \n \n', 'tags': '', 'url': 'task1.html'}, {'title': 'note', 'text': '', 'tags': '', 'url': 'note.html'}, {'title': 'zoomit', 'text': 'CTRL+1 縮放螢幕(能夠調整縮放倍率) \n Zoom 模式的時候，按下 滑鼠左鍵 可以啟動「 Draw 模式」 \n 退出 Zoom 模式，可以按 滑鼠右鍵 ，或者是 ESC \n \n CTRL+2 進入 DRAW 模式(非縮放模式) \n CTRL+Z (退回上一步) \n 隨意形狀 \xa0 - 直接壓住 滑鼠左鍵 然後滑鼠移動想要的線條。 \n 直線 \xa0- 壓住 SHIFT 然後 滑鼠左鍵 然後話要的線條。 \n 方塊 \xa0- 壓住 CTRL 然後 滑鼠左鍵 畫出方塊。 \n 圓圈 \xa0- 壓住 TAB 然後 滑鼠左鍵 畫出圓圈。 \n 箭頭 \xa0 - 壓住 CTRL+SHIFT 然後 滑鼠左鍵 畫出有箭頭的線。 \n 按住 T 能夠打字(英文) \n \n', 'tags': '', 'url': 'zoomit.html'}, {'title': 'pelican.leo', 'text': 'ctrl+i新增一頁 \n ctrl+u往上移動 \n ctrl+d往下移動 \n ctrl+r往右移動 \n ctrl+l往左移動 \n 點兩下變更名稱 \n \n 編輯完成後，先save之後在local-blog按右鍵，再按goto script \n \n 在黑窗執行這段文字後，就能到8444查看 \n \n github-blog是直接推送到遠端(要在cd2021的倉儲提交) \n \n 執行完畢後，add,commit,push \n', 'tags': '', 'url': 'pelican.leo.html'}, {'title': 'coppeliasim', 'text': '\n 如果要讓零件碰撞要開啟respondable，上排表示同個基準的零件碰撞，下排是任何基準的零件碰撞 \n 要讓零件動就要開啟dynamic \n \n 如果要將物件隱藏要把camera visibility layers給取消 \n \n 這是將組合圖拆解，方便對各零件操作 \n \n \n 要將兩物體綁在一起時，要按apply to selection(旋轉和移動) \n', 'tags': '', 'url': 'coppeliasim.html'}, {'title': 'W5', 'text': '乙班影片表格 \n', 'tags': '', 'url': 'W5.html'}]};