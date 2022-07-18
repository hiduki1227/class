// 表作成のために，table用のdiv要素を取得
const table = document.getElementById("table");
const table2 = document.getElementById("table2");

var Day // 曜日が入る変数Dayの定義

var dy, nd, t, resultCdtion, TimeCdtion
setInterval(() => {
    var H, M, now

    // 時間割表示関数の定義
    nd = new Date();
    
    // 時，分を取得
    H = nd.getHours();
    M = nd.getMinutes();
    now = H *60 + M; // 現在時刻を分形式で代入

    // 時刻同期の条件
    resultCdtion = [0, 1, 2, 3, 4, 5];
    TimeCdtion = [now >= 9*60+20 & now < 10*60+10, now >= 10*60+20 & now < 11*60+10, now >= 11*60+20 & now < 12*60+10, now >= 13*60+0 & now < 13*60+50, now >= 14*60+0 & now < 14*60+50, now >= 15*60+0 & now <= 15*60+50];

    for (var t=0; t < TimeCdtion.length; t++) {
        if (TimeCdtion[t]) {
            var color = resultCdtion[t]; // カラー設定
        }
        else {
            //
        }
    }
    
    function tTable(TimeTableFile, NextTimeTableFile) { // TimeTableFileはリスト型で入力
        // console.log("実行成功");

        var tr, td, tbody, tr2, td2, tbody2
        tbody = document.createElement("tbody");
        tbody.id = "tby";
        tbody2 = document.createElement("tbody");
        tbody2.id = "tby";

        // 表を作る
        for (var i=0; i < 6; i++) { // 行を生成
            tr = document.createElement("tr");

            for (var b=0; b < 2; b++) { // 列を生成
                td = document.createElement("td");

                if (b === 1) {
                    td.innerText = TimeTableFile[i]; // 各科目をセルに代入
                    if (i === color) {
                        td.style.backgroundColor = "#2e2e2e";
                        td.style.color = "white";
                    }
                    td.style.width = "600px";
                }
                
                else if (b === 0) {
                    td.innerText = i + 1;
                    if (i === color) {
                        td.style.backgroundColor = "#2e2e2e";
                        td.style.color = "white";
                    }
                    td.style.width = "30px";
                }

                tr.appendChild(td);
            }
            tbody.appendChild(tr);
            table.appendChild(tbody);
        }

        // 表を作る
        for (var i = 0; i < 6; i++) { // 行を生成
            tr2 = document.createElement("tr");

            for (var b = 0; b < 2; b++) { // 列を生成
                td2 = document.createElement("td");

                if (b === 1) {
                    td2.innerText = NextTimeTableFile[i]; // 各科目をセルに代入
                    td2.style.width = "600px";
                }

                else if (b === 0) {
                    td2.innerText = i + 1;
                    td2.style.width = "30px";
                }

                tr2.appendChild(td2);
            }
            tbody2.appendChild(tr2);
            table2.appendChild(tbody2);
        }
    }
    table.innerHTML = "<table id=\"table\"></table>"
    table2.innerHTML = "<table id=\"table\"></table>"
    dy = nd.getDay(); // 返り値はint型なのでSwitch文で条件分岐が必要
    // console.log(dy);


    // Switch文にようる曜日取得
    switch (dy) {
        case 0:
            Day = "日曜日";
            tTable(["No Classes", "No Classes", "No Classes", "No Classes", "No Classes", "No Classes"], ["電子回路", "情報数理", "数学I", "科学と人間生活", "保健", "ビジネス基礎"]);
            break

        case 1:
            Day = "月曜日";
            tTable(["電子回路", "情報数理", "数学I", "科学と人間生活", "保健", "ビジネス基礎"], ["工業技術基礎", "工業技術基礎", "工業技術基礎", "工業技術基礎", "C英語", "言語文化"]);
            break

        case 2:
            Day = "火曜日";
            tTable(["工業技術基礎", "工業技術基礎", "工業技術基礎", "工業技術基礎", "C英語", "言語文化"], ["LHR", "工業情報数理", "体育", "公共", "C英語", "数学I"]);
            break

        case 3:
            Day = "水曜日"; 
            tTable(["LHR", "工業情報数理", "体育", "公共", "C英語", "数学I"], ["電気回路", "C英語", "数学I", "実習", "実習", "実習"]);
            break

        case 4:
            Day = "木曜日";
            tTable(["電気回路", "C英語", "数学I", "実習", "実習", "実習"], ["ビジネス基礎", "電気回路", "公共", "科学と人間生活", "体育", "言語文化"]);
            break

        case 5:
            Day = "金曜日";
            tTable(["ビジネス基礎", "電気回路", "公共", "科学と人間生活", "体育", "言語文化"], ["No Classes", "No Classes", "No Classes", "No Classes", "No Classes", "No Classes"]);
            break

        case 6:
            Day = "土曜日";
            tTable(["No Classes", "No Classes", "No Classes", "No Classes", "No Classes", "No Classes"], ["電子回路", "情報数理", "数学I", "科学と人間生活", "保健", "ビジネス基礎"]);
            break
        
        default:
            break
    }
}, 1000);