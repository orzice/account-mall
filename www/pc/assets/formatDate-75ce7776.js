function i(s,g){let t=new Date(s*1e3);/(y+)/.test(g)&&(g=g.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));let e={y:t.getFullYear(),m:t.getMonth()+1,d:t.getDate(),h:t.getHours(),i:t.getMinutes(),s:t.getSeconds(),a:t.getDay()};e.m<10&&(e.m="0"+e.m),e.i<10&&(e.i=e.i+"0"),e.s<10&&(e.s=e.s+"0"),e.d<10&&(e.d="0"+e.d);for(let a in e)if(new RegExp(`(${a})`).test(g)){let r=e[a]+"";g=g.replace(RegExp.$1,RegExp.$1.length===1?r:padLeftZero(r))}return g}export{i as f};
